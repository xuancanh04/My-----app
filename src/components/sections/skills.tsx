import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import { SKILLS } from "@/data/constants";

const SkillsSection = () => {
  const skills = Object.values(SKILLS).sort((a, b) => a.id - b.id);

  return (
    <section id="skills" className="w-full py-16">
      <div className="top-[70px] sticky mb-8 md:mb-12 z-10">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 "
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 px-4 pb-16">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center gap-2 rounded-3xl border border-slate-200/90 bg-white/80 p-4 text-center shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:shadow-none"
          >
            <img
              src={skill.icon}
              alt={skill.label}
              className="h-12 w-12 object-contain"
              loading="lazy"
            />
            <span className="text-sm font-medium text-slate-800 dark:text-neutral-200">
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
