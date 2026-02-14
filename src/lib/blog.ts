import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: "case-study" | "summary";
  content: string;
};

const contentPaths = {
  "case-study": path.join(process.cwd(), "content", "blog"),
  summary: path.join(process.cwd(), "content", "summaries"),
} as const;

function getPostsFromDir(dir: string, category: BlogPost["category"]): BlogPost[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const fullPath = path.join(dir, file);
      const source = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(source);
      return {
        slug: String(data.slug ?? file.replace(/\.mdx$/, "")),
        title: String(data.title ?? "Untitled"),
        excerpt: String(data.excerpt ?? ""),
        date: String(data.date ?? ""),
        category,
        content,
      };
    });
}

export function getAllPosts(): BlogPost[] {
  const caseStudies = getPostsFromDir(contentPaths["case-study"], "case-study");
  const summaries = getPostsFromDir(contentPaths.summary, "summary");

  return [...caseStudies, ...summaries].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostsByCategory(category: BlogPost["category"]): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
