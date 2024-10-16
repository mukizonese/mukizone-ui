"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function Framer() {
  return (
    <motion.div
          animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 70, 70, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
         <Image
             className="dark:invert"
             src="/icons/mukizone-com.svg"
             alt="MukiZone"
             width={500}
             height={200}
             priority
           />
        </motion.div>
  );
}

export default function Home() {
  return (
    <div className="grid grid-flow-row auto-rows-max items-center justify-items-center font-[family-name:var(--font-geist-sans)] bg-blue-100">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        {Framer()}

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>This page is created for learning purposes.</li>
          <li>Created Oct 1, 2024.</li>
          <li>Work In Progress.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="profile"
            target="_self"
            rel="noopener noreferrer"
          >
            Profile
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href=""
            target="_self"
            rel="noopener noreferrer"
          >
            Demo Projects
          </a>

          <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="contacts"
              target="_self"
              rel="noopener noreferrer"
            >
              Contacts
            </a>

        </div>
      </main>

    </div>
  );
}
