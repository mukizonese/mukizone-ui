"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
}

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>Medium Articles Backup</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {articles.map((article) => (
          <li key={article.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
            <h2>
              <Link href={`/article/${article.id}`} style={{ textDecoration: "none", color: "#0070f3" }}>
                {article.title}
              </Link>
            </h2>
            <p>{article.description}</p>
            <small>{new Date(article.date).toDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
