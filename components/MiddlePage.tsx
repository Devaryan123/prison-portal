import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Bookmark, Edit3, FileText, Send, Sparkles, Zap } from "lucide-react";

export default function NewsLayout() {
  return (
    <div className="min-h-screen  p-4">
      <div className="max-w-5xl mx-auto md:mx-25  justify-between gap-8">
        {/* Featured Section */}
        <div className="flex items center flex-col md:flex-row gap-8  ">
          <div>
            <div className="flex items-center  flex-1 gap-2 mb-6 ">
              <Sparkles className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-medium text-gray-600">Featured</h2>
            </div>
            <div className="flex items-baseline flex-col gap-4 border-gray-200">
              {/* <div className="flex items-center  flex-1 gap-2 mb-6"> */}
              <Card className="overflow-hidden w-90 shadow-sm p-0 rounded-lg">
                {/* make this wrapper the hover group */}
                <div className="relative aspect-video group">
                  <img
                    src="/Featured.webp"
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

              <div>
                <div className="inline-block px-3 py-1 text-gray-500 text-sm font-medium rounded-full mb-4">
                  OVERCROWDING
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight font-sans w-90">
                  Prison Conditions in Maharashtra: A Comprehensive Study
                </h1>
                <div className="flex items-center gap-3 text-gray-600">
                  <Avatar className="w-8 h-8 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400 font-medium text-sm ">
                      H
                    </span>
                  </Avatar>
                  <span className="text-sm text-black">
                    Human Rights Comission
                  </span>
                  <span className="text-sm">+</span>
                  <span className="text-sm">23 Aug 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trending Section */}
          <div className="flex flex-col md:mx-20">
            <div>
              <Zap className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-medium text-gray-600">Trending</h2>
            </div>

            <div className="flex gap-4 flex-col">
              {/* Article 1 */}

              <div className="p-4 border-b">
                <div className="flex flex-row md:flex-row items-center gap-8">
                  {/* image card */}
                  <Card className="overflow-hidden bg-white w-40 h-40 p-0 rounded-lg shadow-sm">
                    <div className="relative aspect-square">
                      <img
                        src="/Trending1.webp"
                        alt="Prison corridor"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </Card>

                  {/* text/content */}
                  <div className="flex-2">
                    <h3 className="text-lg font-bold text-blue-900 mb-3 leading-tight">
                      Voices from Inside: Stories of Rehabilitation, Courage,
                      and Transformation
                    </h3>

                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6 bg-pink-100">
                        <span className="text-pink-600 font-medium text-xs flex items-center justify-center pl-2">
                          H
                        </span>
                      </Avatar>
                      <span className="text-sm text-gray-600">
                        Prison Reform Initiative
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="p-4 border-b">
              <div className="flex flex-row md:flex-row items-center gap-8">
                {/* image card */}
                <Card className="overflow-hidden bg-white w-40 p-0 rounded-lg shadow-sm">
                  <div className="relative aspect-square">
                    <img
                      src="/Trending3.webp"
                      alt="Prison corridor"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </Card>

                {/* text/content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-900 mb-3 leading-tight">
                    Mental Health Behind the Bars: Understanding the Hidden
                    Crisis
                  </h3>

                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6 bg-yellow-100">
                      <span className="text-yellow-600 font-medium text-xs flex items-center justify-center pl-2">
                        H
                      </span>
                    </Avatar>
                    <span className="text-sm text-gray-600">
                      Human Rights Comission
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Article 3 */}
            <div className="p-4 ">
              <div className="flex flex-row md:flex-row items-center gap-8 ">
                {/* image card */}
                <Card className="overflow-hidden bg-white w-40 p-0 rounded-lg shadow-sm">
                  <div className="relative aspect-square">
                    <img
                      src="/Trending2.webp"
                      alt="Prison corridor"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </Card>

                {/* text/content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-900 mb-3 leading-tight">
                    Women in Prison: Hidden Struggles, Rights, and Powerful
                    Resilience
                  </h3>

                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6 bg-orange-100">
                      <span className="text-orange-600 font-medium text-xs flex items-center justify-center pl-2">
                        H
                      </span>
                    </Avatar>
                    <span className="text-sm text-gray-600">
                      Supreme Court of India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
