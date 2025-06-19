import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

interface Article {
  id: number;
  title: string;
  link: string;
  description: string;
  date: string;
  content: string;
}

export default async function ArticlePage({ params }: { params: { id: string } }) {
  // Read the articles.json file
  const FILE_PATH = path.join(process.cwd(), "public/articles.json");
  const articles: Article[] = JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));

  // Find the article with matching ID
  const article = articles.find((a) => a.id.toString() === params.id);

  // If not found, show 404 page
  if (!article) {
    return notFound();
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>{article.title}</h1>
      <p><strong>Published on:</strong> {new Date(article.date).toDateString()}</p>

      {/* Render HTML content */}
      <div dangerouslySetInnerHTML={{ __html: article.content }} style={{ lineHeight: "1.6" }} />

      {/* Continue Reading Link */}
      <p>
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 15px",
            backgroundColor: "#0070f3",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Continue reading on Medium »
        </a>
      </p>
    </div>
  );
}
