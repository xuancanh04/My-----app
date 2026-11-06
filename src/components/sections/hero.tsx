import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="hero" className={cn("relative w-full min-h-[100dvh] flex flex-col justify-center items-center")}>
      <div className="grid md:grid-cols-2 w-full max-w-7xl mx-auto">
        <div
          className={cn(
            "min-h-[calc(100dvh-4rem)] z-[2] w-full",
            "col-span-1",
            "flex flex-col justify-center items-center md:items-start text-center md:text-left",
            "px-6 pt-24 pb-16 sm:px-8 sm:py-16 md:p-16 lg:p-24"
          )}
        >
          {!isLoading && (
            <>
              <div className="w-full flex flex-col items-center md:items-start">
                <BlurIn delay={0.7} className="w-full flex justify-center md:justify-start">
                  <p
                    className={cn(
                      "font-thin text-sm sm:text-base md:text-lg text-slate-500 dark:text-zinc-400 mb-1",
                      "cursor-default font-display bg-clip-text text-center md:text-left"
                    )}
                  >
                    Hi, I am
                  </p>
                </BlurIn>
                <BlurIn delay={1} className="w-full flex justify-center md:justify-start">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "font-thin text-4xl sm:text-6xl md:text-7xl text-transparent text-slate-800",
                          "cursor-default text-edge-outline font-display tracking-tight text-center md:text-left"
                        )}
                      >
                        {config.author}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                <BlurIn delay={1.2} className="w-full flex justify-center md:justify-start">
                  <p
                    className={cn(
                      "mt-4 font-thin text-sm sm:text-base md:text-lg text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display leading-relaxed bg-clip-text max-w-md text-center md:text-left"
                    )}
                  >
                    <span className="block">
                      I am a Front-end and Mobile Developer building responsive web and mobile applications with React.js, Next.js, and React Native.
                    </span>
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 flex flex-col items-center md:items-start gap-4 w-full">
                <div className="w-full max-w-xs flex justify-center md:justify-start">
                  <Link
                    href="https://drive.google.com/file/d/1R4bZiUZ6z-WdWSEEDQsOnrNjT3nzpv58/view?usp=sharing"
                    target="_blank"
                    className="w-full"
                  >
                    <BoxReveal delay={2} width="100%">
                      <Button className="flex items-center justify-center gap-2 w-full py-5 text-base">
                        <File size={20} />
                        <p>Resume</p>
                      </Button>
                    </BoxReveal>
                  </Link>
                </div>
                <div className="flex gap-4 justify-center md:justify-start">
                  <Link
                    href={config.social.github}
                    target="_blank"
                  >
                    <Button variant={"outline"} size="icon" className="h-11 w-11">
                      <SiGithub size={22} />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.linkedin}
                    target="_blank"
                  >
                    <Button variant={"outline"} size="icon" className="h-11 w-11">
                      <SiLinkedin size={22} />
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="hidden md:grid col-span-1"></div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;
