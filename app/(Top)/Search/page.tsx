"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn as classNameMerge } from "@/lib/utils"
import { Bookmark, FileText, Funnel, Gavel, Mic2, Newspaper, Pencil, Send, Sparkle, Video } from 'lucide-react'
import { Instrument_Serif } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useMemo, useState } from 'react'


const instrument_serif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"]
})
// Mock data for the UI
const initialResults = [
    {
        id: "1",
        category: "OVERCROWDING",
        title: "Access to Bail: Challenges for the Undertrial Prisoners",
        org: "Prison Reform Initiative",
        orgInitial: "P",
        date: "2025-08-23",
        imageUrl: "/Trending1.webp",
        tags: ["Policy", "Bail"],
        type: "Article" as const,
    },
    {
        id: "2",
        category: "OVERCROWDING",
        title: "Overcrowding in Indian Prisons: A National Concern",
        org: "Human Rights Commission",
        orgInitial: "H",
        date: "2025-08-23",
        imageUrl: "/Trending2.webp",
        tags: ["Report", "National"],
        type: "Report" as const,
    },
    {
        id: "3",
        category: "OVERCROWDING",
        title: "Legal Aid Behind Bars: Bridging the Persistent Justice Gap",
        org: "Prison Reform Initiative",
        orgInitial: "P",
        date: "2025-08-23",
        imageUrl: "/Trending3.webp",
        tags: ["Justice", "Legal Aid"],
        type: "Podcast" as const,
    },
    {
        id: "4",
        category: "OVERCROWDING",
        title: "Nutrition and Health: Daily Realities of Inmates Worldwide",
        org: "Supreme court of India",
        orgInitial: "S",
        date: "2025-08-23",
        imageUrl: "/Rules1.webp",
        tags: ["Health", "Nutrition"],
        type: "Judgement" as const,
    },
]

type TypeKey = "Report" | "Article" | "Judgement" | "Video" | "Podcast"

const SearchContent = () => {
    const [selectedState, setSelectedState] = useState<string | null>("All state")
    const [selectedTopic, setSelectedTopic] = useState<string | null>("Prison Economy")
    const [selectedTypes, setSelectedTypes] = useState<Set<TypeKey>>(new Set())
    const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())
    const searchParams = useSearchParams()
    const query = searchParams.get("query")

    const results = useMemo(() => {
        let out = [...initialResults]
        if (selectedTypes.size) out = out.filter((r) => selectedTypes.has(r.type))
        if (selectedTags.size) out = out.filter((r) => r.tags.some((t) => selectedTags.has(t)))
        return out
    }, [selectedTags, selectedTypes])

    const states = ["All state", "Delhi", "Karnataka", "Maharashtra", "Tamil Nadu"]
    const topics = ["Prison Economy", "Overcrowding", "Legal Aid", "Healthcare"]
    const tags = ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6", "Tag 7", "Tag 8", "Tag 9", "Tag 10"]

    const onToggleType = (t: TypeKey) => {
        const next = new Set(selectedTypes)
        if (next.has(t)) {
            next.delete(t)
        } else {
            next.add(t)
        }
        setSelectedTypes(next)
    }

    const onToggleTag = (t: string) => {
        const next = new Set(selectedTags)
        if (next.has(t)) {
            next.delete(t)
        } else {
            next.add(t)
        }
        setSelectedTags(next)
    }

    return (
        <div className='flex items-center justify-center min-h-screen pt-14 pb-24'>
            <main className="w-11/12 md:w-10/12 space-y-10">
                {/* Breadcrumb */}
                <div className='space-y-6'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Search</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    {/* Heading */}
                    <div className="">
                        <h1 className={`text-3xl md:text-4xl font-medium text-balance text-brand-primary-700 ${instrument_serif.className}`}>
                            Results for <span className="text-brand-primary-900 font-bold">{query}</span>
                        </h1>
                    </div>
                </div>

                {/* Mobile Filters */}
                <div className="mt-4 md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="sm" className="gap-2 bg-transparent font-normal">
                                <Funnel className="size-4" strokeWidth={1.5} />
                                Filters
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[320px] p-0">
                            <SheetHeader className="p-4">
                                <SheetTitle>Filters</SheetTitle>
                            </SheetHeader>
                            <Separator />
                            <div className="p-4">
                                <div className="space-y-6">
                                    {/* State */}
                                    <section className="space-y-2">
                                        <h3 className="text-sm font-medium text-muted-foreground">State</h3>
                                        <Select value={selectedState ?? "All state"} onValueChange={(v) => setSelectedState(v)}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="All state" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {states.map((s) => (
                                                    <SelectItem key={s} value={s}>
                                                        {s}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </section>

                                    {/* Topics */}
                                    <section className="space-y-2">
                                        <h3 className="text-sm font-medium text-muted-foreground">Topics</h3>
                                        <Select value={selectedTopic ?? undefined} onValueChange={(v) => setSelectedTopic(v)}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select topic" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {topics.map((t) => (
                                                    <SelectItem key={t} value={t}>
                                                        {t}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </section>

                                    {/* Types */}
                                    <section className="space-y-3">
                                        <h3 className="text-sm font-medium text-muted-foreground">Types</h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            <TypeButton
                                                active={selectedTypes.has("Report")}
                                                onClick={() => onToggleType("Report")}
                                                label="Reports"
                                                icon={<FileText className="size-4" strokeWidth={1.5} />}
                                            />
                                            <TypeButton
                                                active={selectedTypes.has("Article")}
                                                onClick={() => onToggleType("Article")}
                                                label="Article"
                                                icon={<Newspaper className="size-4" strokeWidth={1.5} />}
                                            />
                                            <TypeButton
                                                active={selectedTypes.has("Judgement")}
                                                onClick={() => onToggleType("Judgement")}
                                                label="Judgement"
                                                icon={<Gavel className="size-4" strokeWidth={1.5} />}
                                            />
                                            <TypeButton
                                                active={selectedTypes.has("Video")}
                                                onClick={() => onToggleType("Video")}
                                                label="Video"
                                                icon={<Video className="size-4" strokeWidth={1.5} />}
                                            />
                                            <TypeButton
                                                active={selectedTypes.has("Podcast")}
                                                onClick={() => onToggleType("Podcast")}
                                                label="Podcast"
                                                icon={<Mic2 className="size-4" strokeWidth={1.5} />}
                                            />
                                        </div>
                                    </section>

                                    {/* Tags */}
                                    <section className="space-y-3">
                                        <h3 className="text-sm font-medium text-muted-foreground">Tags</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {tags.map((t) => {
                                                const active = selectedTags.has(t)
                                                return (
                                                    <Button
                                                        key={t}
                                                        variant={active ? "default" : "outline"}
                                                        size="sm"
                                                        className={classNameMerge("rounded-full px-3 font-normal shadow-none text-xs h-auto py-1", active ? "" : "bg-background")}
                                                        onClick={() => onToggleTag(t)}
                                                    >
                                                        {t}
                                                    </Button>
                                                )
                                            })}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Content */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-10 gap-6">
                    {/* Sidebar */}
                    <div className="hidden md:block md:col-span-5 lg:col-span-3">
                        <Card className='shadow-sm shadow-muted'>
                            <CardContent className="p-4">
                                <div className="space-y-6">
                                    {/* State */}
                                    <section className="space-y-2">
                                        <h3 className="text-sm font-medium text-muted-foreground">State</h3>
                                        <Select value={selectedState ?? "All state"} onValueChange={(v) => setSelectedState(v)}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="All state" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {states.map((s) => (
                                                    <SelectItem key={s} value={s}>
                                                        {s}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </section>

                                    {/* Topics */}
                                    <section className="space-y-2">
                                        <h3 className="text-sm font-medium text-muted-foreground">Topics</h3>
                                        <Select value={selectedTopic ?? undefined} onValueChange={(v) => setSelectedTopic(v)}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select topic" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {topics.map((t) => (
                                                    <SelectItem key={t} value={t}>
                                                        {t}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </section>

                                    {/* Types */}
                                    <section className="space-y-3">
                                        <h3 className="text-sm font-medium text-muted-foreground">Types</h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            <TypeButton
                                                active={selectedTypes.has("Report")}
                                                onClick={() => onToggleType("Report")}
                                                label="Reports"
                                                icon={<FileText className="size-4" strokeWidth={1.5} />}
                                            />
                                            <TypeButton
                                                active={selectedTypes.has("Article")}
                                                onClick={() => onToggleType("Article")}
                                                label="Article"
                                                icon={<Newspaper className="size-4" strokeWidth={1.5} />}
                                            />
                                            <TypeButton
                                                active={selectedTypes.has("Judgement")}
                                                onClick={() => onToggleType("Judgement")}
                                                label="Judgement"
                                                icon={<Gavel className="size-4" strokeWidth={1.5} />}
                                            />
                                            <TypeButton
                                                active={selectedTypes.has("Video")}
                                                onClick={() => onToggleType("Video")}
                                                label="Video"
                                                icon={<Video className="size-4" strokeWidth={1.5} />}
                                            />
                                            <TypeButton
                                                active={selectedTypes.has("Podcast")}
                                                onClick={() => onToggleType("Podcast")}
                                                label="Podcast"
                                                icon={<Mic2 className="size-4" strokeWidth={1.5} />}
                                            />
                                        </div>
                                    </section>

                                    {/* Tags */}
                                    <section className="space-y-3">
                                        <h3 className="text-sm font-medium text-muted-foreground">Tags</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {tags.map((t) => {
                                                const active = selectedTags.has(t)
                                                return (
                                                    <Button
                                                        key={t}
                                                        variant={active ? "default" : "outline"}
                                                        size="sm"
                                                        className={classNameMerge("rounded-full px-3 h-auto py-1 shadow-none text-xs font-normal", active ? "" : "bg-background")}
                                                        onClick={() => onToggleTag(t)}
                                                    >
                                                        {t}
                                                    </Button>
                                                )
                                            })}
                                        </div>
                                    </section>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Results */}
                    <section className="md:col-span-7 lg:col-span-7">
                        <div className="space-y-6">
                            {results.map((r, i) => (
                                <div key={r.id}>
                                    <div className="flex flex-col md:flex-row gap-3.5 h-fit md:h-36">
                                        {/* Thumbnail */}
                                        <div className="relative h-28 w-36 shrink-0 overflow-hidden rounded-md bg-muted md:h-full md:w-44">
                                            <Image
                                                src={r.imageUrl || "/placeholder.svg"}
                                                alt="Result thumbnail"
                                                fill
                                                sizes="128px"
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col justify-center gap-1.5 md:gap-1 h-full">
                                            <div className='flex items-center justify-between w-full'>
                                                <Label className="text-muted-foreground uppercase text-sm">Overcrowding</Label>
                                                <div className="flex items-center md:hidden">
                                                    <Button className="rounded-full border-none shadow-none hover:bg-background p-0" variant="outline" size="sm" >
                                                        <Send className="size-4" strokeWidth={1.5} />
                                                    </Button>
                                                    <Button className="rounded-full border-none shadow-none hover:bg-background p-0" variant="outline" size="sm" >
                                                        <Bookmark className="size-4" strokeWidth={1.5} />
                                                    </Button>
                                                    <Button className="rounded-full border-none shadow-none hover:bg-background p-0" variant="outline" size="sm" >
                                                        <Pencil className="size-4" strokeWidth={1.5} />
                                                    </Button>
                                                </div>
                                            </div>
                                            <h2 className="text-lg md:text-2xl font-semibold text-brand-primary-900">Prison Conditions in Maharashtra: A Comprehensive Study</h2>
                                            <div className='flex flex-col md:flex-row gap-2 md:items-center justify-between mt-2'>
                                                <div className="flex items-center gap-2">
                                                    <Avatar className="rounded-full size-6">
                                                        <AvatarImage
                                                            src="https://github.com/evilrabbit.jpg"
                                                            alt="@evilrabbit"
                                                        />
                                                        <AvatarFallback className="text-xs">H</AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                        <h4>Human Rights Comission</h4>
                                                        <Sparkle className="size-3 text-muted" strokeWidth={1.5} fill="" />
                                                        <p>23 Aug 2025</p>
                                                    </div>
                                                </div>
                                                <div className="hidden md:flex items-center">
                                                    <Button className="rounded-full border-none shadow-none hover:bg-background p-0" variant="outline" size="sm" >
                                                        <Send className="size-4" strokeWidth={1.5} />
                                                    </Button>
                                                    <Button className="rounded-full border-none shadow-none hover:bg-background p-0" variant="outline" size="sm" >
                                                        <Bookmark className="size-4" strokeWidth={1.5} />
                                                    </Button>
                                                    <Button className="rounded-full border-none shadow-none hover:bg-background p-0" variant="outline" size="sm" >
                                                        <Pencil className="size-4" strokeWidth={1.5} />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {i < results.length - 1 && <Separator className="mt-6" />}
                                </div>
                            ))}
                            {results.length === 0 && (
                                <Card>
                                    <CardContent className="p-6 text-center text-muted-foreground">
                                        No results match your filters.
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

const SearchPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchContent />
        </Suspense>
    )
}

export default SearchPage

function TypeButton({
    active,
    onClick,
    label,
    icon,
}: {
    active: boolean
    onClick: () => void
    label: string
    icon: React.ReactNode
}) {
    return (
        <Button
            type="button"
            variant={active ? "default" : "outline"}
            className={classNameMerge("w-full justify-start gap-2 font-normal shadow-none", active ? "" : "bg-background")}
            onClick={onClick}
        >
            {icon}
            <span>{label}</span>
        </Button>
    )
}