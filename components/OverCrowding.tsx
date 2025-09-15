import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Bookmark, FileText, Mic, Pencil, Send, Sparkle } from "lucide-react";
import Image from "next/image";

const OverCrowding = () => {
    return (
        <div className="w-11/12 md:w-10/12 flex flex-col items-center justify-center space-y-6 md:ml-25 ml-5 md:mt-10 mb-5 md:mb-10">
            <div className="flex items-center gap-1 text-muted-foreground w-full">
                <h3 className="font-medium text-lg">Overcrowding, Recidivism and Alternatives to Imprisonment</h3>
            </div>
            <section className="flex flex-col gap-6 md:gap-0 md:flex-row w-full justify-between h-fit">
                <div className="w-full md:w-[45%] space-y-6">

                    <Card className="border-0 shadow-none p-0">
                        <CardContent className="p-0 relative group">
                            <Image src="/Trending2.webp" alt="Featured" width={400} height={400} className="w-full h-80 object-cover rounded-xl" />
                            <div className="absolute w-full h-full left-0 top-0  justify-center py-6 group-hover:opacity-100 opacity-0 flex  transition-all duration-200">
                                <div className="w-11/12 flex justify-between h-fit">
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
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col items-start p-0 space-y-3">
                            <Label className="text-muted-foreground uppercase">Overcrowding</Label>
                            <h2 className="text-2xl font-semibold text-brand-primary-900">Overcrowding in Indian Prisons: A National Concern</h2>
                            <div className="flex items-center gap-2">
                                <Avatar className="rounded-full size-6">
                                    <AvatarImage
                                        src="https://github.com/evilrabbit.jpg"
                                        alt="@evilrabbit"
                                    />
                                    <AvatarFallback className="text-xs">H</AvatarFallback>
                                </Avatar>
                                <div className="flex items-center gap-2 text-sm">
                                    <h4>Human Rights Comission</h4>
                                    <Sparkle className="size-3 text-muted" strokeWidth={1.5} fill="" />
                                    <p>23 Aug 2025</p>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
                <div className="h-px md:h-[500px] w-full md:w-px bg-border" />

                <div className="w-full md:w-[45%] space-y-6">
                    <Card className="border-0 shadow-none p-0">
                        <CardContent className="p-0 relative group">
                            <Image src={"/Trending1.webp"} alt="Featured" width={400} height={400} className="w-full h-80 object-cover rounded-xl" />
                            <div className="absolute w-full h-full left-0 top-0  justify-center py-6 group-hover:opacity-100 opacity-0 flex  transition-all duration-200">
                                <div className="w-11/12 flex justify-between h-fit">
                                    <Badge variant="secondary" className="px-2.5 py-1.5 space-x-px h-fit">
                                        <Mic className="size-3.5" strokeWidth={1.5} />
                                        <span>Podcast</span>
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
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col items-start p-0 space-y-3">
                            <Label className="text-muted-foreground uppercase">Overcrowding</Label>
                            <h2 className="text-2xl font-semibold text-brand-primary-900">Nutrition and Health: Daily Realities of Inmates Worldwide</h2>
                            <div className="flex items-center gap-2">
                                <Avatar className="rounded-full size-6">
                                    <AvatarImage
                                        src="https://github.com/evilrabbit.jpg"
                                        alt="@evilrabbit"
                                    />
                                    <AvatarFallback className="text-xs">H</AvatarFallback>
                                </Avatar>
                                <div className="flex items-center gap-2 text-sm">
                                    <h4>Prison Reform Initiative</h4>
                                    <Sparkle className="size-3 text-muted" strokeWidth={1.5} fill="" />
                                    <p>23 Aug 2025</p>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </div>
    )
}

export default OverCrowding