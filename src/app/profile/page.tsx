"use client";

import { Github, Mail, Twitter, Linkedin } from "lucide-react";
import { Expertise } from "./expertise"
import { Certifications } from "./certifications"
import Image from "next/image";

export default function Profile() {

  return (
    <div className="bg-blue-100">
           {/*
            <div className="flex gap-4 items-center flex-col sm:flex-row">
                 <p className="lg:text-lg font-medium text-black-500 bg-orange-200">
                     Software Engineer with proven track record in delivering scalable, reliable, and secure
                     software products that meet business objectives.
                 </p>
           </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-8 px-2 sm:px-2"
            href="resume"
            target="_self"
            rel="noopener noreferrer"
          >
            Professional Resume
          </a>
        </div>
        */}

        <div className="grid grid-cols-12 gap-4">
              <div className="col-span-10">
                <Expertise/>
              </div>
              <div className="col-span-2 bg-amber-200">
                <Certifications/>
              </div>

        </div>

    </div>
  );
}
