"use server";
import weaviate, { Filters, WeaviateClient } from "weaviate-client";

let client: WeaviateClient | null = null;
async function connectToWeaviate() {
    if (!client) {
        client = await weaviate.connectToWeaviateCloud(process.env.WEAVIATE_URL!, {
            authCredentials: new weaviate.ApiKey(process.env.WEAVIATE_API_KEY!),
            headers: {
                "X-OpenAI-Api-Key": process.env.OPENAI_API_KEY!,
                "X-VoyageAI-Api-Key": process.env.VOYAGEAI_API_KEY!,
            },
            timeout: {
                init: 10000,
            },
            skipInitChecks: true,
        });
    }
    return client;
}

export type Document = {
    uuid: string;
    source_type: string;
    source_title: string;
    source_platform: string;
    authors: string;
    link_to_original_source: string;
    date_of_publication: string;
    sub_theme: string;
    summary: string;
    keywords: string;
    location: string;
    date_of_summary: string;
    submitted_by: string;
    reviewed_by: string;
    approved_by: string;
    uploaded_to_website: string;
    date_of_upload: string;
    comments: string;
    theme: string;
    approved_by_project_lead: string;
    reviewed_by_fellow_name: string;
    submitted_by_intern_fellow_name: string;
};

type DocumentsResponse = Document[] | { objects: never[]; error: string };

// Use a loose "raw" type that matches what the client actually returns
type WeaviateRawObject = {
    uuid: string;
    properties?: Record<string, unknown>;
};

export async function getDocuments(
): Promise<DocumentsResponse> {
    try {
        const client = await connectToWeaviate();
        const myCollection = client.collections.get(
            "IPP"
        );

        const response = await myCollection.query.fetchObjects({
            limit: 10, // first 10 after sorting
        });

        console.log("response", response);

        if (!response.objects || response.objects.length === 0) {
            return {
                objects: [],
                error: "No objects found",
            };
        }

        // helper to coerce unknown values to readable strings, with fallback
        const toStr = (val: unknown, fallback = "N/A") => {
            if (val == null) return fallback;
            if (typeof val === "string") return val;
            // if it's a primitive convert to string, else JSON stringify (safe fallback)
            if (typeof val === "number" || typeof val === "boolean") return String(val);
            try {
                return JSON.stringify(val);
            } catch {
                return fallback;
            }
        };

        const results: Document[] = (response.objects as WeaviateRawObject[]).map(
            (obj) => {
                const p = obj.properties ?? {};

                return {
                    uuid: obj.uuid ?? "",
                    source_type: toStr(p["source_type"]),
                    source_title: toStr(p["source_title"]),
                    source_platform: toStr(p["source_platform"]),
                    authors: toStr(p["authors"]),
                    link_to_original_source: toStr(p["link_to_original_source"]),
                    date_of_publication: toStr(p["date_of_publication"]),
                    sub_theme: toStr(p["sub_theme"]),
                    summary: toStr(p["summary"]),
                    keywords: toStr(p["keywords"]),
                    location: toStr(p["location"]),
                    date_of_summary: toStr(p["date_of_summary"]),
                    submitted_by: toStr(p["submitted_by"]),
                    reviewed_by: toStr(p["reviewed_by"]),
                    approved_by: toStr(p["approved_by"]),
                    uploaded_to_website: toStr(p["uploaded_to_website"]),
                    date_of_upload: toStr(p["date_of_upload"]),
                    comments: toStr(p["comments"]),
                    theme: toStr(p["theme"]),
                    approved_by_project_lead: toStr(p["approved_by_project_lead"]),
                    reviewed_by_fellow_name: toStr(p["reviewed_by_fellow_name"]),
                    submitted_by_intern_fellow_name: toStr(
                        p["submitted_by_intern_fellow_name"]
                    ),
                };
            }
        );

        return results;
    } catch (error) {
        console.error("Error fetching documents:", error);
        return {
            objects: [],
            error: "Error fetching documents",
        };
    }
}


interface filterProps {
    query: string              // The text search input (mandatory)
    stateValue?: string        // Optional filter: location/state
    topicValue?: string        // Optional filter: topic/theme
    typeValues?: string[]      // Optional filter: multiple types
    tags?: string[]            // Optional filter: multiple keywords
    limit?: string             // Optional: max number of results (default = 10)
}

export async function filterDocuments(params: filterProps) {
    try {
        //connects to the client and generates the data that is with the field IPP
        const client = await connectToWeaviate();
        const myCollection = client.collections.get(
            "IPP"
        );


        // Build dynamic filters array
        const filterConditions = [];

        // State filter (single value)
        if (params.stateValue) {
            filterConditions.push(
                myCollection.filter.byProperty("location").equal(params.stateValue)
            );
        }

        // Topic filter (single value) - using theme property based on Document type
        if (params.topicValue) {
            filterConditions.push(
                myCollection.filter.byProperty("theme").equal(params.topicValue)
            );
        }

        // Type filter (multiple values) - using source_type property
        if (params.typeValues && params.typeValues.length > 0) {
            const typeFilters = params.typeValues.map(type =>
                myCollection.filter.byProperty("source_type").equal(type)
            );
            filterConditions.push(Filters.or(...typeFilters));
        }

        // Tags filter (multiple values) - using keywords property
        if (params.tags && params.tags.length > 0) {
            const tagFilters = params.tags.map(tag =>
                myCollection.filter.byProperty("keywords").containsAny([tag])
            );
            filterConditions.push(Filters.or(...tagFilters));
        }
        //runs a BM25 result search to  the given string
        const response = await myCollection.query.bm25(params.query, {
            limit: params.limit ? parseInt(params.limit) : 10,
            filters: filterConditions.length > 0 ? Filters.and(...filterConditions) : undefined
        });

        console.log("response", response);

        if (!response.objects || response.objects.length === 0) {
            return {
                objects: [],
                error: "No objects found",
            };
        }

        // helper to coerce unknown values to readable strings, with fallback
        const toStr = (val: unknown, fallback = "N/A") => {
            if (val == null) return fallback;
            if (typeof val === "string") return val;
            // if it's a primitive convert to string, else JSON stringify (safe fallback)
            if (typeof val === "number" || typeof val === "boolean") return String(val);
            try {
                return JSON.stringify(val);
            } catch {
                return fallback;
            }
        };

        const results: Document[] = (response.objects as WeaviateRawObject[]).map(
            (obj) => {
                const p = obj.properties ?? {};

                return {
                    uuid: obj.uuid ?? "",
                    source_type: toStr(p["source_type"]),
                    source_title: toStr(p["source_title"]),
                    source_platform: toStr(p["source_platform"]),
                    authors: toStr(p["authors"]),
                    link_to_original_source: toStr(p["link_to_original_source"]),
                    date_of_publication: toStr(p["date_of_publication"]),
                    sub_theme: toStr(p["sub_theme"]),
                    summary: toStr(p["summary"]),
                    keywords: toStr(p["keywords"]),
                    location: toStr(p["location"]),
                    date_of_summary: toStr(p["date_of_summary"]),
                    submitted_by: toStr(p["submitted_by"]),
                    reviewed_by: toStr(p["reviewed_by"]),
                    approved_by: toStr(p["approved_by"]),
                    uploaded_to_website: toStr(p["uploaded_to_website"]),
                    date_of_upload: toStr(p["date_of_upload"]),
                    comments: toStr(p["comments"]),
                    theme: toStr(p["theme"]),
                    approved_by_project_lead: toStr(p["approved_by_project_lead"]),
                    reviewed_by_fellow_name: toStr(p["reviewed_by_fellow_name"]),
                    submitted_by_intern_fellow_name: toStr(
                        p["submitted_by_intern_fellow_name"]
                    ),
                };
            }
        );

        return results;
    } catch (error) {
        console.error("Error fetching documents:", error);
        return {
            objects: [],
            error: "Error fetching documents",
        };
    }
}
