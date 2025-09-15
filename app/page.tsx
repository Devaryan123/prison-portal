"use client";

import React, { useState } from "react";
import { Lightbulb, Search, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import MiddlePage from "@/components/MiddlePage";
import NextMiddle from "@/components/NextMiddle";
import MiddleLast from "@/components/MiddleLast";
import ShareCard from "@/components/ShareCard";
import OverCrowding from "@/components/OverCrowding";
import MoreTopics from "@/components/MoreTopics";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

// ✅ PascalCase for components (Next.js expects this convention)
const Page: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast("Please enter a query"); // ✅ sonner uses toast(), not toast.error()
      return;
    }
    router.push(`/Search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div>
      <div className="flex items-center mt-20 md:ml-20">
        <p className="text-4xl flex font-medium ml-8 md:ml-15 text-blue-800 font-serif w-80 h-35">
          Your platform for prison reform & research
          <Lightbulb size={100} color="#c4c615" />
        </p>
      </div>

      <div className="border flex items-center justify-between p-1 md:p-2 rounded-full mt-10 m-10 md:ml-20">
        <Input
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.target.value)
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            e.key === "Enter" && handleSearch()
          }
          className="border-none shadow-none focus-visible:ring-0 text-sm md:text-xl"
          placeholder="Search by topics"
        />
        <button
          type="button" // ✅ prevent accidental form submission
          onClick={handleSearch}
          className="p-2 bg-brand-secondary-600 rounded-full hover:bg-brand-secondary-600/90 transition-colors"
        >
          <Search color="#a2b512" />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-5  px-10 md:ml-20">
        <Badge
          variant="outline"
          className="rounded-2xl p-2 px-4 font-sans text-gray-500"
        >
          <Flame size={40} color="#fc1d1d" />
          Trending:
        </Badge>

        <div className="flex flex-wrap gap-3">
          {["Standards", "Economy", "Overcrowding", "Health"].map((topic) => (
            <Badge
              key={topic}
              variant="outline"
              className="rounded-2xl p-2 px-4 font-sans text-gray-500"
            >
              {topic}
            </Badge>
          ))}
        </div>
      </div>

      {/* ✅ Shortened self-closing syntax */}
      <MiddlePage />
      <NextMiddle />
      <MiddleLast />
      <ShareCard />
      <OverCrowding />
      <MiddleLast />
      <MoreTopics />
      <Footer />
    </div>
  );
};

export default Page;
