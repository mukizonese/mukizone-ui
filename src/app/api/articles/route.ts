import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const FILE_PATH = path.join(process.cwd(), "public/articles.json");

export async function GET() {
  try {
    if (!fs.existsSync(FILE_PATH)) {
      return NextResponse.json([]); // ✅ Return an empty array instead of an error
    }

    const articles = JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));
    return NextResponse.json(articles);
  } catch (error) {
    console.error("❌ Error reading articles.json:", error);
    return NextResponse.json({ error: "Failed to fetch articles" }, { status: 500 });
  }
}
