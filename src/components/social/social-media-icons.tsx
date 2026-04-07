"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiInstagram, SiLinkedin, SiZalo } from "react-icons/si";
import { Linkedin } from "lucide-react";
import { config } from "@/data/config";
import Link from "next/link";

const BUTTONS = [
  {
    name: "Github",
    href: config.social.github,
    icon: <SiGithub size={24} className="text-slate-800 dark:text-white" />,
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin size={24} className="text-slate-800 dark:text-white" />,
  },
  {
    name: "Instagram",
    href: config.social.instagram,
    icon: <SiInstagram size={24} className="text-slate-800 dark:text-white" />,
  },
  {
    name: "Zalo",
    href: config.social.zalo,
    icon: (
      <SiZalo size={20} className="text-slate-800 dark:text-white" />
    ),
    className:
      "bg-slate-100 border border-slate-200 hover:bg-slate-200/90 shadow-sm rounded-lg h-8 w-8 dark:bg-white/5 dark:border-transparent dark:hover:bg-white/10",
  },
];

const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  const show = useInView(ref, { once: true });
  return (
    <div ref={ref} className="z-10">
      {show && (
        <div className="flex gap-4">
          {BUTTONS.map((button) => (
            <Link href={button.href} key={button.name} target="_blank">
              <Button
                variant={"ghost"}
                size="icon"
                className={`${
                  button.className ??
                  "rounded-full bg-slate-100/90 hover:bg-slate-200/90 dark:bg-white/5 dark:hover:bg-white/10"
                } h-8 w-8`}
              >
                {button.icon}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialMediaButtons;
