// footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-950/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              MukiZone
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Cloud Architecture & Technical Innovation
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
              Explore
            </h4>
            <div className="space-y-2">
              {['Projects', 'Blog', 'Tools', 'Research'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 block"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
              Connect
            </h4>
            <div className="space-y-2">
              {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 block"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
              Powered By
            </h4>
            <div className="flex items-center gap-4">
              {[
                { src: 'https://nextjs.org/icons/next.svg', alt: 'Next.js', href: 'https://nextjs.org' },
                { src: 'https://www.svgrepo.com/download/376365/docker.svg', alt: 'Docker', href: 'https://docker.com' },
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

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Mukesh Vast. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer }