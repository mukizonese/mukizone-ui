"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const expertiseCategories = [
    {
        category: "Cloud Infrastructure & Orchestration",
        items: [
            {
                card_title: "Cloud Architecture",
                card_contents: [
                    "AWS Certified Solutions Architect",
                    "AWS EC2, ECS, Lambda, S3, RDS",
                    "Terraform Infrastructure as Code",
                    "Docker Containerization",
                ],
                card_footer: "This website is hosted on AWS(ap-south-1). Webcontainer is a Docker Container pulled from AWS ECR."
            },
        ]
    },
    {
        category: "Full Stack Development",
        items: [
            {
                card_title: "Frontend Engineering",
                card_contents: [
                    "Next.js 14 App Router",
                    "React 18 with TypeScript",
                    "Vaadin",
                    "Micro Frontend Architecture"
                ],
                card_footer: "This website is a Next.js stand-alone app over Nginx reverse proxy."
            },
            {
                card_title: "Backend Systems",
                card_contents: [
                    "Distributed Systems Design",
                    "Microservices",
                    "Hibernate, JPA",
                    "Event-Driven Architecture (Kafka)",
                    "REST & GraphQL APIs",
                    "High-Performance Caching (Redis)"
                ]
            },
                {
                    id: 4,
                    card_title: "Spring Framework" ,
                    card_description: "",
                    card_contents: ["Spring Boot", "Spring Config Server","Spring Data/JPA", "Spring Integration / Camel", "Spring Batch"],
                    card_footer: ""
                },
                {
                    id: 5,
                    card_title: "Caching" ,
                    card_description: "",
                    card_contents: ["Gemfire", "Redis"],
                    card_footer: (
                                        <>Trading demo is fully REDIS. <a href="https://medium.com/devops-dev/building-a-basic-trading-application-on-aws-with-redis-cache-f70648bc3779"
                                                   target="_blank"
                                                   rel="noopener noreferrer"
                                                   className="text-blue-600 hover:underline dark:text-blue-400">
                                                Check my medium article
                                             </a></>
                                    )
                },

        ]
    },
    {
        category: "Data Engineering & Analytics",
        items: [
            {
                card_title: "Big Data Processing",
                card_contents: [
                    "Apache Spark Structured Streaming",
                    "Data Lake Architecture (MinIO)",
                    "Real-time Analytics (Apache Flink)",
                    "Columnar Storage (Parquet, Arrow)"
                ]
            },
            {
                card_title: "Data Pipeline Orchestration",
                card_contents: [
                    "Airflow DAG Design",
                    "Kafka Connect Pipelines",
                    "CDC Implementation (Debezium)"
                ]
            }
        ]
    },
    {
        category: "DevOps & CI/CD",
                items: [
                    { card_title: "CI/CD", card_contents: ["Maven", "Jules", "Jenkins", "Pipelines", "Liquibase"] },
                    { card_title: "DevOps & Monitoring", card_contents: ["Grafana", "Splunk", "ELK Stack", "Kubernetes"] }
                ]
    },
    {
        category: "Software Architecture",
        items: [
            {
                card_title: "System Design",
                card_contents: [
                    "Domain-Driven Design (DDD)",
                    "Event Sourcing & CQRS",
                    "Microservices Patterns",
                    "Cloud-Native Architecture"
                ]
            }
        ]
    }
];

const certifications = [
    {
        id: 1,
        card_title: "AWS Certified Cloud Practitioner",
        card_description: "Entry Level",
        card_contents: ["Services: 70+ AWS Services"],
        card_footer: "Valid Until: April 2026"
    },
    {
        id: 2,
        card_title: "AWS Certified Solutions Architect",
        card_description: "Associate Level",
        card_contents: ["Services: AWS Well-Architected Framework"],
        card_footer: "Valid Until: July 2027"
    }
];

export default function ProfilePage() {
    return (
        /* <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8"> */
            <div className="min-h-screen flex flex-col items-center justify-center px-6
              bg-gradient-to-b from-blue-100 to-indigo-50 dark:from-gray-900 dark:to-gray-800
              font-[family-name:var(--font-geist-sans)] transition-all duration-300"
            >
            <header className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                    Senior Full Stack Engineer & Cloud Architect
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                    Specializing in Cloud-Native Solutions and Distributed Systems
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <section className="lg:col-span-3">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 border-b-2 border-blue-500 pb-2">
                        Technical Expertise
                    </h2>
                    <div className="space-y-12">
                        {expertiseCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
                                    {category.category}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {category.items.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.02 }}
                                            className="h-full"
                                        >
                                            <Card className="p-6 shadow-lg rounded-xl bg-white dark:bg-gray-800 h-full transition-all hover:border-blue-200 dark:hover:border-blue-600 border-2 border-transparent">
                                                <h4 className="text-lg font-bold mb-3 text-gray-800 dark:text-white">
                                                    {item.card_title}
                                                </h4>
                                                <CardContent className="p-0">
                                                    <ul className="space-y-2">
                                                        {item.card_contents.map((content, index) => (
                                                            <li
                                                                key={index}
                                                                className="flex items-center text-gray-700 dark:text-gray-300"
                                                            >
                                                                <svg className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/>
                                                                </svg>
                                                                {content}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                                {/* Added Footer Section */}
                                                {item.card_footer && (
                                                    <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                                                        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                                                            {item.card_footer}
                                                        </p>
                                                    </div>
                                                )}
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="lg:col-span-1">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 border-b-2 border-green-500 pb-2">
                        Certifications
                    </h2>
                    <div className="space-y-6">
                        {certifications.map((item) => (
                            <motion.div
                                key={item.id}
                                whileHover={{ scale: 1.01 }}
                            >
                                <Card className="p-6 shadow-lg rounded-xl bg-white dark:bg-gray-800 border-2 border-transparent hover:border-green-200 dark:hover:border-green-600">
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                                        {item.card_title}
                                    </h3>
                                    <Badge className="mb-3 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100">
                                        {item.card_description}
                                    </Badge>
                                    <CardContent className="p-0 space-y-2">
                                        {item.card_contents.map((content, index) => (
                                            <p
                                                key={index}
                                                className="text-sm text-gray-600 dark:text-gray-400"
                                            >
                                                {content}
                                            </p>
                                        ))}
                                    </CardContent>
                                    <footer className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                                        {item.card_footer}
                                    </footer>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}