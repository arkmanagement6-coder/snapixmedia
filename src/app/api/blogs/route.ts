import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/data/blogs.json");

// Default seed data in case file is deleted
const defaultArticles = [
  {
    id: "1",
    slug: "maximizing-nextjs-core-web-vitals",
    title: "Maximizing Next.js Core Web Vitals",
    category: "web",
    categoryLabel: "Web Engineering",
    desc: "A technical guide to achieving perfect Lighthouse scores using Edge components, dynamic loading, and bundle audit structures.",
    content: "<h2>Mastering Core Web Vitals in Next.js</h2><p>In modern web architectures, performance is directly linked to conversion rates and search rankings. Next.js offers elite, out-of-the-box optimization primitives, but building a fully optimized storefront requires custom configurations.</p><strong>1. Next-Gen Image Loading</strong><p>Always utilize the Next.js Image component to enable automatic WebP generation, size constraints, and priority loading for Above-the-Fold banners.</p><blockquote>Using placeholder blur effects reduces perceived load times significantly, satisfying Cumulative Layout Shift (CLS) scores.</blockquote><h2>Bundle Audits & Code Splitting</h2><p>Large JS bundles are the primary culprit behind poor Interaction to Next Paint (INP) scores. We recommend implementing dynamic imports (using React lazy or Next dynamic) for heavy third-party components like widgets and chat portals.</p>",
    date: "Jun 08, 2026",
    readTime: "6 min read",
    bgClass: "from-blue-600/10 to-indigo-600/10 border-blue-500/10",
    images: ["https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"]
  },
  {
    id: "2",
    slug: "saas-seo-blueprint-zero-to-100k-clicks",
    title: "SaaS SEO Blueprint: Zero to 100k Clicks",
    category: "seo",
    categoryLabel: "SEO & Search",
    desc: "How to deploy high-intent organic directories, audit duplicate content issues, and rank #1 for transactional keywords.",
    content: "<h2>Structuring a Scalable SEO Engine</h2><p>Organic visibility requires a hybrid mix of technical speed, authoritative backlinks, and structured semantic site maps. For SaaS startups, capturing high-intent search terms is the most cost-efficient route.</p><strong>1. Keyword Clustering</strong><p>Focus on clustering long-tail keywords that solve specific problems. Avoid targeting generic high-volume words early on.</p><h2>On-Page Schema Formatting</h2><p>Implement rich Schema markup (FAQ, Product, and Article schemas) to help search crawlers parse details instantly. This increases your chances of ranking in AI-generated search snapshots (AEO).</p>",
    date: "Jun 04, 2026",
    readTime: "8 min read",
    bgClass: "from-cyan-600/10 to-blue-600/10 border-cyan-500/10",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"]
  }
];

function readBlogs() {
  try {
    if (!fs.existsSync(filePath)) {
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(filePath, JSON.stringify(defaultArticles, null, 2), "utf-8");
      return defaultArticles;
    }
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading blogs database:", error);
    return [];
  }
}

function writeBlogs(blogs: any) {
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Error writing to blogs database:", error);
    return false;
  }
}

// GET all blogs
export async function GET() {
  const blogs = readBlogs();
  return NextResponse.json(blogs);
}

// POST new blog
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, slug, category, desc, content, readTime, images } = body;

    if (!title || !slug || !desc || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const blogs = readBlogs();
    
    // Check if slug is unique
    const duplicate = blogs.find((b: any) => b.slug === slug);
    if (duplicate) {
      return NextResponse.json({ error: "A blog post with this URL slug already exists!" }, { status: 400 });
    }

    const categoriesLabels: Record<string, string> = {
      web: "Web Engineering",
      seo: "SEO & Search",
      marketing: "Growth Marketing",
      ai: "Artificial Intelligence",
    };

    const bgClasses = [
      "from-blue-600/10 to-indigo-600/10 border-blue-500/10",
      "from-cyan-600/10 to-blue-600/10 border-cyan-500/10",
      "from-purple-600/10 to-pink-600/10 border-purple-500/10",
      "from-pink-600/10 to-orange-600/10 border-pink-500/10",
    ];

    const newPost = {
      id: Date.now().toString(),
      slug,
      title,
      category,
      categoryLabel: categoriesLabels[category] || "General",
      desc,
      content,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      readTime: readTime || "5 min read",
      bgClass: bgClasses[blogs.length % bgClasses.length],
      images: images && images.length > 0 && images[0] !== "" ? images : ["https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=800&q=80"]
    };

    const updated = [newPost, ...blogs];
    writeBlogs(updated);

    return NextResponse.json({ success: true, post: newPost });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT edit blog
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, title, slug, category, desc, content, readTime, images } = body;

    if (!id || !title || !slug || !desc || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const blogs = readBlogs();
    const index = blogs.findIndex((b: any) => b.id === id);

    if (index === -1) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    // Check slug duplication against other posts
    const duplicate = blogs.find((b: any) => b.slug === slug && b.id !== id);
    if (duplicate) {
      return NextResponse.json({ error: "A blog post with this URL slug already exists!" }, { status: 400 });
    }

    const categoriesLabels: Record<string, string> = {
      web: "Web Engineering",
      seo: "SEO & Search",
      marketing: "Growth Marketing",
      ai: "Artificial Intelligence",
    };

    blogs[index] = {
      ...blogs[index],
      title,
      slug,
      category,
      categoryLabel: categoriesLabels[category] || "General",
      desc,
      content,
      readTime: readTime || "5 min read",
      images: images && images.length > 0 && images[0] !== "" ? images : blogs[index].images
    };

    writeBlogs(blogs);

    return NextResponse.json({ success: true, post: blogs[index] });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE blog
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing post ID parameter" }, { status: 400 });
    }

    const blogs = readBlogs();
    const filtered = blogs.filter((b: any) => b.id !== id);

    if (blogs.length === filtered.length) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    writeBlogs(filtered);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
