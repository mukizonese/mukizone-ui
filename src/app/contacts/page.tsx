"use client";

import { Contacts } from "@/components/ui/contacts";
//import { Contacts } from "../../components/ui/contacts";
import { Back } from "../../components/ui/back"
import { Footer } from "../../components/ui/footer"

export default function ContactsHome() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

            <Contacts/>
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              <li>Feel free to write.</li>
            </ol>
            <Back/>

          </main>
          <Footer/>
        </div>

  );
}
