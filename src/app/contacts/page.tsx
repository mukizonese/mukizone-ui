"use client";
import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";
import { FaMedium } from "react-icons/fa"; // Medium Icon

const socials = [
  {
    id: 1,
    icon: <FiLinkedin size={24} />,
    href: "https://www.linkedin.com/in/mukeshvast/",
    label: "LinkedIn",
    handle: "@mukeshvast",
  },
  {
    id: 2,
    icon: <FiMail size={24} />,
    href: "mailto:mukesh.vast.se@gmail.com",
    label: "Email",
    handle: "mukesh.vast.se@gmail.com",
  },
  {
    id: 3,
    icon: <FiGithub size={24} />,
    href: "https://github.com/mukizonese",
    label: "GitHub",
    handle: "mukizonese",
  },
  {
    id: 4,
    icon: <FaMedium size={24} />,
    href: "https://medium.com/@mukesh.vast",
    label: "Medium",
    handle: "@mukesh.vast",
  }
];

export default function ProfessionalPage() {
  return (
    <div className="min-h-fit flex flex-col items-center justify-center px-6
      bg-gradient-to-b from-blue-100 to-indigo-50 dark:from-gray-900 dark:to-gray-800
      text-gray-900 dark:text-gray-200 font-[family-name:var(--font-geist-sans)] transition-all duration-300"
    >

      <div className="text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg">
          Mukesh Vast
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
          Full Stack Developer | Building Scalable Enterprise Solutions
        </p>
      </div>

      <section className="px-6 py-10">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          Get in Touch
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
              border border-blue-300 dark:border-gray-700 hover:border-blue-500 flex items-center space-x-4"
            >
              <div className="text-blue-600 dark:text-gray-300">{social.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {social.label}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{social.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
