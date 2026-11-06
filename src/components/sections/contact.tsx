"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <Link href={"#contact"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-8 pb-4",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          LET&apos;S WORK <br />
          TOGETHER
        </h2>
      </Link>
      <div className="w-full flex justify-center z-[2] relative">
        <Card className="w-full max-w-2xl border border-slate-200/90 bg-white/90 shadow-sm backdrop-blur-sm dark:border-border dark:bg-black/70 dark:shadow-none rounded-xl mt-8 md:mt-16">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-4xl text-foreground">Contact Form</CardTitle>
            <CardDescription className="text-sm sm:text-base break-words">
              Please contact me directly at{" "}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="font-medium text-slate-800 underline-offset-2 hover:underline dark:text-gray-200 cursor-can-hover rounded-lg break-all"
              >
                {config.email.replace(/@/g, "(at)")}
              </a>{" "}
              or drop your info here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
export default ContactSection;
