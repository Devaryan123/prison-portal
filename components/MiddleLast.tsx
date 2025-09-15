import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Bookmark, FileText, Pencil, Send, Sparkle } from "lucide-react";
import Image from "next/image";

const MiddleLast = () => {
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 md:w-10/12 gap-8">
        <Card className="border-0 shadow-none p-0">
          <CardContent className="p-0 relative group overflow-hidden">
            <Image src={"/Featured.webp"} alt="Featured" width={400} height={400} className="w-full h-96 object-cover rounded-xl" />
            <div className="absolute w-full h-full bg-gradient-to-b from-zinc-700/10 to-zinc-900/60 left-0 top-0 justify-between py-4 items-center flex flex-col transition-all duration-200 rounded-xl">
              <div className="w-11/12 flex justify-between h-fit md:group-hover:opacity-100 md:opacity-0 transition-opacity">
                <Badge variant="secondary" className="px-2.5 py-1.5 space-x-px h-fit">
                  <FileText className="size-3.5" strokeWidth={1.5} />
                  <span>Report</span>
                </Badge>
                <div className="flex flex-col items-center gap-3">
                  <Button className="rounded-full bg-primary/50 backdrop-blur-xs text-white border-none" variant="outline" size="icon" >
                    <Send className="size-4" strokeWidth={1.5} />
                  </Button>
                  <Button className="rounded-full bg-primary/50 backdrop-blur-xs text-white border-none" variant="outline" size="icon" >
                    <Bookmark className="size-4" strokeWidth={1.5} />
                  </Button>
                  <Button className="rounded-full bg-primary/50 backdrop-blur-xs text-white border-none" variant="outline" size="icon" >
                    <Pencil className="size-4" strokeWidth={1.5} />
                  </Button>
                </div>
              </div>
              <div className="w-11/12 flex flex-col justify-between h-fit space-y-3">
                <Label className="text-muted uppercase text-sm">Overcrowding</Label>
                <h2 className="text-base font-semibold text-white">Prison Conditions in Maharashtra: A Comprehensive Study</h2>
                <div className="flex items-center gap-2">
                  <Avatar className="rounded-full size-5">
                    <AvatarImage
                      src="https://github.com/evilrabbit.jpg"
                      alt="@evilrabbit"
                    />
                    <AvatarFallback className="text-xs">H</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-2 text-xs text-white">
                    <h4>Human Rights Comission</h4>
                    <Sparkle className="size-3 text-muted" strokeWidth={1.5} fill="" />
                    <p>23 Aug 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start p-0 space-y-3">

          </CardFooter>
        </Card>
        <Card className="border-0 shadow-none p-0 ">
          <CardContent className="p-0 relative group overflow-hidden">
            <Image src={"/Rules1.webp"} alt="Featured" width={400} height={400} className="w-full h-96 object-cover rounded-xl" />
            <div className="absolute w-full h-full bg-gradient-to-b from-zinc-700/10 to-zinc-900/60 left-0 top-0 justify-between py-4 items-center flex flex-col transition-all duration-200 rounded-xl">
              <div className="w-11/12 flex justify-between h-fit md:group-hover:opacity-100 md:opacity-0 transition-opacity">
                <Badge variant="secondary" className="px-2.5 py-1.5 space-x-px h-fit">
                  <FileText className="size-3.5" strokeWidth={1.5} />
                  <span>Report</span>
                </Badge>
                <div className="flex flex-col items-center gap-3">
                  <Button className="rounded-full bg-primary/50 backdrop-blur-xs text-white border-none" variant="outline" size="icon" >
                    <Send className="size-4" strokeWidth={1.5} />
                  </Button>
                  <Button className="rounded-full bg-primary/50 backdrop-blur-xs text-white border-none" variant="outline" size="icon" >
                    <Bookmark className="size-4" strokeWidth={1.5} />
                  </Button>
                  <Button className="rounded-full bg-primary/50 backdrop-blur-xs text-white border-none" variant="outline" size="icon" >
                    <Pencil className="size-4" strokeWidth={1.5} />
                  </Button>
                </div>
              </div>
              <div className="w-11/12 flex flex-col justify-between h-fit space-y-3">
                <Label className="text-muted uppercase text-sm">Overcrowding</Label>
                <h2 className="text-base font-semibold text-white">Prison Conditions in Maharashtra: A Comprehensive Study</h2>
                <div className="flex items-center gap-2">
                  <Avatar className="rounded-full size-5">
                    <AvatarImage
                      src="https://github.com/evilrabbit.jpg"
                      alt="@evilrabbit"
                    />
                    <AvatarFallback className="text-xs">H</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-2 text-xs text-white">
                    <h4>Human Rights Comission</h4>
                    <Sparkle className="size-3 text-muted" strokeWidth={1.5} fill="" />
                    <p>23 Aug 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start p-0 space-y-3">

          </CardFooter>
        </Card>
        <Card className="border-0 shadow-none p-0">
          <CardContent className="p-0 relative group overflow-hidden">
            <Image src={"/Trending1.webp"} alt="Featured" width={400} height={400} className="w-full h-96 object-cover rounded-xl" />
            <div className="absolute w-full h-full bg-gradient-to-b from-zinc-700/10 to-zinc-900/60 left-0 top-0 justify-between py-4 items-center flex flex-col transition-all duration-200 rounded-xl">
              <div className="w-11/12 flex justify-between h-fit md:group-hover:opacity-100 md:opacity-0 transition-opacity">
                <Badge variant="secondary" className="px-2.5 py-1.5 space-x-px h-fit">
                  <FileText className="size-3.5" strokeWidth={1.5} />
                  <span>Report</span>
                </Badge>
                <div className="flex flex-col items-center gap-3">
                  <Button className="rounded-full bg-primary/50 backdrop-blur-xs text-white border-none" variant="outline" size="icon" >
                    <Send className="size-4" strokeWidth={1.5} />
                  </Button>
                  <Button className="rounded-full bg-primary/50 backdrop-blur-xs text-white border-none" variant="outline" size="icon" >
                    <Bookmark className="size-4" strokeWidth={1.5} />
                  </Button>
                  <Button className="rounded-full bg-primary/50 backdrop-blur-xs text-white border-none" variant="outline" size="icon" >
                    <Pencil className="size-4" strokeWidth={1.5} />
                  </Button>
                </div>
              </div>
              <div className="w-11/12 flex flex-col justify-between h-fit space-y-3">
                <Label className="text-muted uppercase text-sm">Overcrowding</Label>
                <h2 className="text-base font-semibold text-white">Prison Conditions in Maharashtra: A Comprehensive Study</h2>
                <div className="flex items-center gap-2">
                  <Avatar className="rounded-full size-5">
                    <AvatarImage
                      src="https://github.com/evilrabbit.jpg"
                      alt="@evilrabbit"
                    />
                    <AvatarFallback className="text-xs">H</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-2 text-xs text-white">
                    <h4>Human Rights Comission</h4>
                    <Sparkle className="size-3 text-muted" strokeWidth={1.5} fill="" />
                    <p>23 Aug 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start p-0 space-y-3">

          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default MiddleLast