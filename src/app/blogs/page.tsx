"use client";
import Link from "next/link";
import Image from "next/image";
const articles = [

  {
    id: 1,
    title: "🤖 Building a Trading AI Chatbot that thinks like a Trader",
    link: "https://medium.com/gitconnected/building-a-trading-ai-chatbot-that-thinks-like-a-trader-d223649090eb",
    description: "How I built a RAG-powered assistant that transforms historical trades into actionable insights — all running 100% locally with LangChain, ChromaDB, Ollama and Streamlit.",
    date: "2025-05-20",
    image: "/blogs-images/TradeBotDesgn.gif"
  },
  {
    id: 2,
    title: "⚡ Automate Your Docker App Deployment on AWS EC2 with Packer, Terraform and S3",
    link: "https://medium.com/devops-dev/from-zero-to-live-in-minutes-automate-your-docker-app-deployment-on-aws-ec2-with-packer-1a67294882cd",
    description: "Turn tedious AWS provisioning into a one-command magic trick using Packer, Terraform, S3 and Docker.",
    date: "2025-05-05",
    image: "/blogs-images/Create_AMI.png"
  },
  {
    id: 3,
    title: "🌊 Building a Scalable and Open-Source Data Lake End to End Architecture",
    link: "https://levelup.gitconnected.com/building-a-scalable-and-open-source-data-lake-end-to-end-architecture-235ba920084e",
    description: "Learn how to build an enterprise-grade Data Lake using open-source tools like Apache Kafka, Spark, and MinIO.",
    date: "2025-03-06",
    image: "/blogs-images/End-to-End Data Lake Architecture Flow.gif"
  },
  {
    id: 4,
    title: "📊 Data Lake Architectures 2025",
    link: "https://medium.com/@mukesh.vast/data-lake-architectures-2025-a735f6c6cdae",
    description: "Explore the latest trends, best practices, and architecture patterns for building future-ready Data Lakes.",
    date: "2025-03-06",
    image: "/blogs-images/Modern Data Lake Architecture.png"
  },
  {
    id: 5,
    title: "📈 Building a Trading App on AWS with Redis Cache",
    link: "https://medium.com/devops-dev/building-a-basic-trading-application-on-aws-with-redis-cache-f70648bc3779",
    description: "A scalable and efficient trading app built on AWS with Redis.",
    date: "2025-01-18",
    image: "/blogs-images/demotrade.gif"
  },
  {
    id: 6,
    title: "⚡ FastAPI + React: Build a High-Performance Tracker",
    link: "https://medium.com/@mukesh.vast/building-a-basic-tracker-with-python-fastapi-postgresql-and-vitejs-react-1154728b32e0",
    description: "A step-by-step guide to building a powerful tracker app.",
    date: "2025-02-18",
    image: "/blogs-images/FastAPI.gif"
  },
  {
    id: 7,
    title: "🤖 AI-Powered Tracker with OpenAI ChatGPT",
    link: "https://medium.com/@mukesh.vast/the-journey-of-building-a-tracker-with-openai-chatgpt-a-developers-experience-ead87ba55679",
    description: "A Developer’s Experience exploring AI-powered automation with OpenAI and ChatGPT.",
    date: "2025-02-18",
    image: "/blogs-images/ChatgptCode.png"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6
      bg-gradient-to-b from-blue-100 to-indigo-50 dark:from-gray-900 dark:to-gray-800
      font-[family-name:var(--font-geist-sans)] transition-all duration-300"
    >

      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg mt-10">
        Professional Articles published on &nbsp;
        <Link href="https://medium.com/@mukesh.vast" target="_blank">
             Medium.com
        </Link>

      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
        Hand-picked tech insights & projects.
      </p>

      {/* Blog List */}
      <ul className="mt-10 w-full max-w-3xl space-y-8">
        {articles.map((article) => (
          <li key={article.id} className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-40
            backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300
            border border-blue-300 dark:border-gray-700 hover:border-blue-500 flex items-center space-x-4"
          >
            {/* Blog Image */}
            <div className="w-60 h-60 flex-shrink-0 relative">
              <Image src={article.image} alt={article.title} fill className="rounded-lg object-cover" />
            </div>

            {/* Blog Content */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
                <Link href={article.link} target="_blank">
                  {article.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{article.description}</p>
              <small className="block mt-3 text-xs text-gray-500 dark:text-gray-400">
                {new Date(article.date).toDateString()}
              </small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
