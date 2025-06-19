// footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-950/50">
      <div className="container mx-auto px-3 sm:px-2 lg:px-4client py-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


          <div className="space-y-0">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Mukesh Vast. All rights reserved.
          </p>
          </div>

          <div className="space-y-0">
            <div className="flex items-center gap-6">
            <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
              Powered By
            </h2>

              {[
                { src: 'https://www.svgrepo.com/download/354112/nextjs.svg', alt: 'Next.js', href: 'https://nextjs.org' },
                { src: 'https://www.svgrepo.com/download/353661/docker.svg', alt: 'Docker', href: 'https://docker.com' },
                { src: 'https://www.svgrepo.com/download/329901/amazonaws.svg', alt: 'AWS', href: 'https://aws.amazon.com' }
              ].map((tech, index) => (
                <a
                  key={index}
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Image
                    src={tech.src}
                    alt={tech.alt}
                    width={40}
                    height={40}
                    className="dark:invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
}

export { Footer }