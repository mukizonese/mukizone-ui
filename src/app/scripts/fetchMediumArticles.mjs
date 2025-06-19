import puppeteer from "puppeteer";
import RSSParser from "rss-parser";
import AWS from "aws-sdk";
import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
// Fix `__dirname` in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//import dotenv from "dotenv";

//dotenv.config();
//const parser = require("rss-parser");

const parser = new RSSParser();
//const S3_BUCKET = process.env.S3_BUCKET_NAME!;
const MEDIUM_RSS_FEED = "https://medium.com/feed/@mukesh.vast"; // Replace with your Medium username
//const FILE_PATH = path.join(__dirname, "../public/articles.json"); // Save in `public/`
const FILE_PATH = path.join(process.cwd(), "public/articles.json"); // Save inside `public/

/* const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
}); */

// Utility function: Add delay between requests
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


// Scrape full article content
async function scrapeArticle(url) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  console.log(`Navigating to ${url}`);
  await page.goto(url, { waitUntil: "domcontentloaded" });

  // Wait for the article tag to be available
  await page.waitForSelector("article", { timeout: 10000 }).catch(() => {
    console.warn(`⚠️ Article not found for ${url}`);
  });

  // Extract full article content
  const content = await page.evaluate(() => {
    const articleElement = document.querySelector("article");
    return articleElement ? articleElement.innerHTML : "Full article not found.";
  });

  await browser.close();
  return content;
}

// Fetch RSS and scrape full articles
async function fetchArticles() {
  try {
    console.log("Fetching Medium RSS feed...");
    const feed = await parser.parseURL(MEDIUM_RSS_FEED);
    const articles = [];

    for (const item of feed.items) {
      console.log(`Scraping article: ${item.link}`);

    // Add delay before making the request
      await delay(10000); // Wait 10 seconds to prevent rate-limiting

      const fullContent = await scrapeArticle(item.link);

      articles.push({
        id: articles.length + 1,
        title: item.title,
        link: item.link,
        description: item.contentSnippet,
        date: item.pubDate,
        content: fullContent,
      });

      console.log(`✅ Article ${articles.length} scraped successfully.`);

      // Wait before next request (prevent 429 errors)
      await delay(5000); // 5-second delay
    }

    fs.writeFileSync(FILE_PATH, JSON.stringify(articles, null, 2));
    console.log(`✅ Articles saved with full content at ${FILE_PATH}`);
  } catch (error) {
    console.error("❌ Error fetching articles:", error);
  }
}

async function fetchArticlesMetadData() {
  const feed = await parser.parseURL(MEDIUM_RSS_FEED);
  const articles = feed.items.map((item, index) => ({
    id: index + 1,
    title: item.title,
    link: item.link,
    description: item.contentSnippet,
    date: item.pubDate,
    content: item.content, // Full HTML content
  }));

  //const jsonData = JSON.stringify(articles, null, 2);
  //fs.writeFileSync("articles.json", jsonData);

  fs.writeFileSync(FILE_PATH, JSON.stringify(articles, null, 2));
  console.log(`✅ Articles saved locally at ${FILE_PATH}`);

  /* const params = {
    Bucket: S3_BUCKET,
    Key: "articles.json",
    Body: jsonData,
    ContentType: "application/json",
  }; */

  //await s3.upload(params).promise();
  //console.log("✅ Articles uploaded to S3!");
}

fetchArticles().catch(console.error);
