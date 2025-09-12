import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Bookmark, Edit3, FileText, Send } from "lucide-react";

const NextMiddle = () => {
  return (
    <div>
      <h1 className="ml-10 font-sans text-gray-500 w-80">
        Rules, Standards, and International Frameworks
      </h1>
      <div className="flex justify-center flex-col mt-10 md:mt-10 md:gap-30 md:flex-row  gap-10 items-center  ">
        <div>
          <Card className="overflow-hidden w-100 shadow-sm p-0 rounded-lg">
            {/* make this wrapper the hover group */}
            <div className="relative aspect-video group">
              <img
                src="/Rules1.webp"
                alt="Prison corridor"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Article label - appears on hover */}
              <div className="absolute top-4 left-4 z-20">
                <div
                  className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm
                      opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-200"
                >
                  <FileText className="w-4 h-4 text-gray-700" />
                  <span className="text-sm font-medium text-gray-700">
                    Article
                  </span>
                </div>
              </div>

              {/* Action buttons - appear on hover */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                <button
                  aria-label="Share"
                  className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm
                   opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                   transition-all duration-200"
                >
                  <Send className="w-4 h-4 text-gray-700" />
                </button>

                <button
                  aria-label="Bookmark"
                  className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm
                   opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                   transition-all duration-200"
                >
                  <Bookmark className="w-4 h-4 text-gray-700" />
                </button>

                <button
                  aria-label="Edit"
                  className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm
                   opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                   transition-all duration-200"
                >
                  <Edit3 className="w-4 h-4 text-gray-700" />
                </button>
              </div>
            </div>
          </Card>
          <div className="flex flex-col font-sans justify-baseline">
            <div className="inline-block pt-4 text-gray-500 text-sm font-medium rounded-full mb-4">
              OVERCROWDING
            </div>
            <h1 className="text-2xl font-medium text-gray-900 mb-4 leading-tight font-sans w-90">
              Prison Conditions in Maharashtra: A Comprehensive Study
            </h1>
            <div className="flex items-center gap-3 text-gray-600">
              <Avatar className="w-8 h-8 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 font-medium text-sm ">H</span>
              </Avatar>
              <span className="text-sm text-black">Human Rights Comission</span>
              <span className="text-sm">+</span>
              <span className="text-sm">23 Aug 2025</span>
            </div>
          </div>
        </div>
        <div>
          <Card className="overflow-hidden w-100 shadow-sm p-0 rounded-lg">
            {/* make this wrapper the hover group */}
            <div className="relative aspect-video group">
              <img
                src="/Rules2.webp"
                alt="Prison corridor"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Article label - appears on hover */}
              <div className="absolute top-4 left-4 z-20">
                <div
                  className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm
                      opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-200"
                >
                  <FileText className="w-4 h-4 text-gray-700" />
                  <span className="text-sm font-medium text-gray-700">
                    Article
                  </span>
                </div>
              </div>

              {/* Action buttons - appear on hover */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                <button
                  aria-label="Share"
                  className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm
                   opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                   transition-all duration-200"
                >
                  <Send className="w-4 h-4 text-gray-700" />
                </button>

                <button
                  aria-label="Bookmark"
                  className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm
                   opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                   transition-all duration-200"
                >
                  <Bookmark className="w-4 h-4 text-gray-700" />
                </button>

                <button
                  aria-label="Edit"
                  className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm
                   opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                   transition-all duration-200"
                >
                  <Edit3 className="w-4 h-4 text-gray-700" />
                </button>
              </div>
            </div>
          </Card>
          <div className="flex flex-col justify-baseline font-sans">
            <div className="inline-block  pt-4 text-gray-500 text-sm font-medium rounded-full mb-4">
              OVERCROWDING
            </div>
            <h1 className="text-2xl font-medium text-gray-900 mb-4 leading-tight font-sans w-90">
              Prison Conditions in Maharashtra: A Comprehensive Study
            </h1>
            <div className="flex items-center gap-3 text-gray-600">
              <Avatar className="w-8 h-8 bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 font-medium text-sm ">H</span>
              </Avatar>
              <span className="text-sm text-black">Human Rights Comission</span>
              <span className="text-sm">+</span>
              <span className="text-sm">23 Aug 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextMiddle;
