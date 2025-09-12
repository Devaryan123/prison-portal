import Image from "next/image"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export default function Home() {
  const reportData = {
    category: "OVERCROWDING",
    title: "Prison Conditions in Maharashtra: A Comprehensive Study",
    author: "Human Rights Comission",
    date: "23 Aug 2025",
  }

  const cardImages = [
    "/Rules1.webp",
    "/Rules1.webp",
    "/Rules1.webp",
  ]

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardImages.map((image, index) => (
            <div
              key={index}
              className="relative bg-black rounded-2xl overflow-hidden aspect-[4/5] group cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={image || "/placeholder.svg"}
                alt="Prison conditions imagery"
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 text-white">
                {/* Category Tag */}
                <div className="self-start">
                  <span className="text-sm font-medium tracking-wider uppercase">{reportData.category}</span>
                </div>

                {/* Bottom Content */}
                <div className="space-y-4">
                  {/* Title */}
                  <h2 className="text-xl font-bold leading-tight">{reportData.title}</h2>

                  {/* Author and Date */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-black/60 text-white text-sm font-medium">H</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{reportData.author}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-white" />
                      <span className="text-sm">{reportData.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
