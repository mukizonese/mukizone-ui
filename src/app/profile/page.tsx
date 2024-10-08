"use client";

import { Github, Mail, Twitter, Linkedin } from "lucide-react";
import { Expertise } from "./expertise"
import { Certifications } from "./certifications"
import Image from "next/image";
import { Footer } from "@/components/ui/footer"
import { Back } from "@/components/ui/back"

export default function Profile() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-blue-100">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

    <div className="flex gap-4 items-center flex-col sm:flex-row">
             <p className="lg:text-lg font-medium text-black-500 bg-orange-200">
                Results-driven Executive Director of Software Engineering with over 22 years of
                 experience leading high-performing engineering teams, managing complex
                 software development projects, and driving innovative solutions. Expertise in
                 strategic planning, process optimization, and fostering a collaborative team
                 environment. Proven track record in delivering scalable, reliable, and secure
                 software products that meet business objectives.
                  Extensive experience  within Capital Markets in Banking and Financial Services
                 Industry and have exposure to various Asset Classes in Markets.
             </p>
       </div>

       <div className="flex gap-4 items-center flex-col sm:flex-row">
             <a
               className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
               href="https://www.linkedin.com/in/mukeshvast/"
               target="_new"
               rel="noopener noreferrer"
             >
             Check LinkedIn profile for professional summary.

             <Linkedin />

             </a>
       </div>
        <Expertise/>
        <Certifications/>
       <Back/>
       <Footer/>
    </main>
    </div>
  );
}
