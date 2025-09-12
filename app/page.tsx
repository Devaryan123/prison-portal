import React from "react";
import SearchBar from "@/components/SearchBar";
import { Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Flame } from "lucide-react";
import MiddlePage from "../components/MiddlePage";
import NextMiddle from "@/components/NextMiddle";

const page = () => {
  return (
    <div>
      <div className="flex items-center gap-1 mt-20 ">
        <p className="text-3xl font-medium ml-8 text-blue-800 font-serif w-85 ">
          Your platform for prison reform & research
        </p>
        <Lightbulb size={40} color="#c4c615" />
      </div>
      <SearchBar />
      <div className="flex flex-wrap gap-2 mt-5 justify-between px-10">
        <Badge
          variant="outline"
          className="rounded-2xl p-2 px-4 font-sans text-gray-500"
        >
          <Flame size={40} color="#fc1d1d" />
          Trending:
        </Badge>
        <div className="flex flex-wrap gap-3">
          <Badge
            variant="outline"
            className="rounded-2xl p-2 px-4 font-sans text-gray-500"
          >
            Standards
          </Badge>
          <Badge
            variant="outline"
            className="rounded-2xl p-2 px-4 font-sans text-gray-500"
          >
            Economy
          </Badge>
          <Badge
            variant="outline"
            className="rounded-2xl p-2 px-4 font-sans text-gray-500"
          >
            Overcrowding
          </Badge>
          <Badge
            variant="outline"
            className="rounded-2xl p-2 px-4 font-sans text-gray-500"
          >
            Health
          </Badge>
        </div>
      </div>
      <div>
        <MiddlePage></MiddlePage>
      </div>
      <div>
        <NextMiddle></NextMiddle>
      </div>
    </div>
  );
};

export default page;
