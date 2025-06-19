"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const floatingVariant = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const staggerItems = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const articles = [
  { title: "Building a basic Trading application on AWS with Redis Cache", link: "https://medium.com/devops-dev/building-a-basic-trading-application-on-aws-with-redis-cache-f70648bc3779" },
  { title: "Building a basic Tracker with Python FastAPI, PostgreSQL and Vite + React", link: "https://medium.com/@mukesh.vast/building-a-basic-tracker-with-python-fastapi-postgresql-and-vitejs-react-1154728b32e0" },
  { title: "The Journey of Building a Tracker with OpenAI ChatGPT — A Developer’s Experience", link: "https://medium.com/@mukesh.vast/the-journey-of-building-a-tracker-with-openai-chatgpt-a-developers-experience-ead87ba55679" }

];


export default function Home() {

 const [currentArticle, setCurrentArticle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArticle((prev) => (prev + 1) % articles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    /* <div className="bg-gradient-to-b from-blue-100 to-indigo-50 font-[family-name:var(--font-geist-sans)]"> */
    <div className="min-h-fit flex flex-col items-center justify-center px-6
      bg-gradient-to-b from-blue-100 to-indigo-50 dark:from-gray-900 dark:to-gray-800
      text-gray-900 dark:text-gray-200 font-[family-name:var(--font-geist-sans)] transition-all duration-300"
    >
      <main className="container mx-auto px-2 py-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerItems}
          className="flex flex-col lg:flex-row items-center gap-12 mb-10"
        >
          {/* Animated Profile Section */}
          <motion.div
            variants={itemAnimation}
            className="relative w-full max-w-2xl"
          >
            <motion.div
              variants={floatingVariant}
              animate="animate"
              className="relative"
            >
              <Image
                src="/icons/mukizone-com.svg"
                alt="Mukesh Vast Portfolio Logo - Cloud and Microservices Architecture"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl hover:shadow-blue-200 transition-shadow"
                priority
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
              >
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  22 Years Expertise
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={itemAnimation}
            className="flex-1 space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Explore, Build, Innovate
            </motion.h1>

            <motion.p
              variants={itemAnimation}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Passionate about real-time systems, cloud-native applications, and cutting-edge technology? Dive into the world of high-performance apps and scalable architectures.
              <span className="block mt-2 text-blue-600 font-medium">
                Cloud Architecture • Microservices • DevOps • Digital Transformation
              </span>
            </motion.p>

            {/* Animated CTA Buttons */}
            <motion.div
              variants={staggerItems}
              className="flex flex-wrap gap-4"
            >
              {['Profile', 'TradeDemo', 'Blogs', 'Contacts'].map((btn, index) => (
                <motion.a
                  key={index}
                  variants={itemAnimation}
                  whileHover={{
                    scale: 1.05,
                    ...(btn === 'TradeDemo' && {
                      boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
                      border: "1px solid rgba(99, 102, 241, 0.8)"
                    })
                  }}
                  whileTap={{ scale: 0.95 }}
                  href={btn.toLowerCase()}
                  className={`px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all font-medium
                    ${btn === 'TradeDemo'
                      ? "text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 border border-indigo-200"
                      : "bg-white text-blue-600 hover:text-white hover:bg-gradient-to-r from-blue-500 to-purple-500"}`}
                >
                  {btn}
                  {btn === 'TradeDemo' && (
                    <span className="ml-2 animate-pulse">🚀</span>
                  )}
                </motion.a>
              ))}
            </motion.div>


          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-4 gap-8 mb-10"
        >
                   <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                     <div className="flex items-center gap-3 mb-4">
                       <div className="p-2 rounded-lg bg-blue-100">☁️</div>
                       <h3 className="text-xl font-bold text-blue-600">Cloud Architecture</h3>
                     </div>
                     <p className="text-gray-600">Multi-cloud strategist with certified expertise in AWS.</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {['AWS', 'Docker'].map((tech) => (
                          <span key={tech} className="px-3 py-1 text-sm rounded-full bg-purple-50 text-purple-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                   </div>

                   <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                     <div className="flex items-center gap-3 mb-4">
                       <div className="p-2 rounded-lg bg-blue-100">🧩</div>
                       <h3 className="text-xl font-bold text-blue-600">Microservices</h3>
                     </div>
                     <p className="text-gray-600">Event-driven architecture specialist for high-throughput systems.</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {['Java', 'Spring', 'Kafka'].map((tech) => (
                          <span key={tech} className="px-3 py-1 text-sm rounded-full bg-purple-50 text-purple-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                   </div>
                   <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                     <div className="flex items-center gap-3 mb-4">
                       <div className="p-2 rounded-lg bg-purple-100">🔍</div>
                       <h3 className="text-xl font-bold text-blue-600">Tech Exploration</h3>
                     </div>
                     <p className="text-gray-600">Include hands-on demos, code snippets, or live previews of applications.</p>
                     <div className="mt-4 flex flex-wrap gap-2">
                       {['Python', 'Kafka', 'Redis', 'Next.js'].map((tech) => (
                         <span key={tech} className="px-3 py-1 text-sm rounded-full bg-purple-50 text-purple-700">
                           {tech}
                         </span>
                       ))}
                     </div>
                   </div>

                   {/* Articles Published Section */}
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                     <div className="flex items-center gap-3 mb-4">
                       <div className="p-2 rounded-lg bg-purple-100">📊</div>
                       <h3 className="text-xl font-bold text-blue-600">Data Engineering</h3>
                     </div>
                     <p className="text-gray-600">Latest trends and architecture patterns for building future-ready Data Lakes.</p>
                     <div className="mt-4 flex flex-wrap gap-2">
                       {['Debezium', 'Kafka Connect', 'Spark Streaming', 'Apache Hive', 'Trino', 'Streamlit'].map((tech) => (
                         <span key={tech} className="px-3 py-1 text-sm rounded-full bg-purple-50 text-purple-700">
                           {tech}
                         </span>
                       ))}
                     </div>
                  </div>

        </motion.div>

      </main>
    </div>
  );
}