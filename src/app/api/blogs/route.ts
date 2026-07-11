import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const localFilePath = path.join(process.cwd(), "src/data/blogs.json");
const tempFilePath = path.join("/tmp", "blogs.json");

// Environment variables for Cloud Database (Supabase)
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const isSupabaseEnabled = !!(supabaseUrl && supabaseKey);

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
  },
  {
    id: "3",
    slug: "ai-agents-in-enterprise-workflows",
    title: "AI Agents in Enterprise Workflows",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    desc: "Analyzing how autonomous LLM agents are redefining data pipelines, CRM entries, and accelerating software developer speeds.",
    content: "<h2>The Rise of Autonomous AI Workforces</h2><p>Autonomous AI agents are transitioning from simple chat interfaces to proactive execution engines. In enterprise environments, agents are now integrated directly into databases, codebases, and customer communication channels.</p><strong>1. Tool Use & Function Calling</strong><p>Modern LLMs can invoke specific APIs and run system actions based on context. This allows them to autonomously retrieve, format, and push data across isolated software blocks.</p><h2>Accelerating Software Engineering</h2><p>Engineering teams using autonomous AI agents report significant speedups in boilerplate generation, test coverage writing, and system migrations. As LLM latency decreases, real-time collaboration with agents will become the industry norm.</p>",
    date: "May 28, 2026",
    readTime: "5 min read",
    bgClass: "from-purple-600/10 to-pink-600/10 border-purple-500/10",
    images: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"]
  },
  {
    id: "4",
    slug: "paid-targeting-meta-ads-vs-google-ppc",
    title: "Paid Retargeting: Meta Ads vs Google PPC",
    category: "marketing",
    categoryLabel: "Growth Marketing",
    desc: "Optimizing audience exclusion rules and campaign bidding strategies to reduce acquisition costs by 30%.",
    "content": "<h2>Choosing the Right Growth Engine</h2><p>Meta Ads and Google PPC target audiences at different stages of the marketing funnel. Understanding where your prospects are is key to maximizing return on ad spend (ROAS).</p><strong>1. Intent vs. Interest Bidding</strong><p>Google Ads captures high-intent searches (users looking specifically to buy), while Meta Ads targets interest profiles, making it perfect for brand discovery and visual products.</p><h2>Advanced Exclusion Lists</h2><p>To keep customer acquisition cost (CAC) low, always build robust exclusion lists. Stop showing ads to existing customers or unqualified clicks that bounce within seconds.</p>",
    "date": "May 22, 2026",
    "readTime": "7 min read",
    "bgClass": "from-pink-600/10 to-orange-600/10 border-pink-500/10",
    "images": ["https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80"]
  }
];

function getActiveFilePath() {
  try {
    const dir = path.dirname(localFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const testFile = path.join(dir, ".write-test");
    fs.writeFileSync(testFile, "test");
    fs.unlinkSync(testFile);
    return localFilePath;
  } catch (err) {
    return tempFilePath;
  }
}

function readBlogsLocal() {
  const filePath = getActiveFilePath();
  try {
    if (!fs.existsSync(filePath)) {
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      // If using /tmp fallback, seed from project source JSON first if present
      if (filePath === tempFilePath && fs.existsSync(localFilePath)) {
        const seedData = fs.readFileSync(localFilePath, "utf-8");
        fs.writeFileSync(tempFilePath, seedData, "utf-8");
        return JSON.parse(seedData);
      }
      
      fs.writeFileSync(filePath, JSON.stringify(defaultArticles, null, 2), "utf-8");
      return defaultArticles;
    }
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading local blogs database:", error);
    return defaultArticles;
  }
}

function writeBlogsLocal(blogs: any) {
  const filePath = getActiveFilePath();
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Error writing to local blogs database:", error);
    return false;
  }
}

// REST call helpers for Supabase (if configured)
async function getSupabaseBlogs() {
  const res = await fetch(`${supabaseUrl}/rest/v1/blogs?select=*&order=id.desc`, {
    headers: {
      "apikey": supabaseKey!,
      "Authorization": `Bearer ${supabaseKey}`
    }
  });
  if (!res.ok) throw new Error("Supabase read failed");
  const data = await res.json();
  return data.map((b: any) => ({
    id: b.id,
    slug: b.slug,
    title: b.title,
    category: b.category,
    categoryLabel: b.category_label,
    desc: b.desc,
    content: b.content,
    date: b.date,
    readTime: b.read_time,
    bgClass: b.bg_class,
    images: b.images || []
  }));
}

// GET all blogs
export async function GET() {
  try {
    if (isSupabaseEnabled) {
      const dbBlogs = await getSupabaseBlogs();
      return NextResponse.json(dbBlogs);
    }
  } catch (err) {
    console.error("Supabase GET error, falling back to local file system:", err);
  }
  
  // Local File Fallback
  const blogs = readBlogsLocal();
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

    const validImages = images && images.length > 0 && images[0] !== "" ? images : ["https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=800&q=80"];
    const id = Date.now().toString();
    const date = new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
    const formattedReadTime = readTime || "5 min read";

    if (isSupabaseEnabled) {
      try {
        const blogs = await getSupabaseBlogs();
        if (blogs.find((b: any) => b.slug === slug)) {
          return NextResponse.json({ error: "A blog post with this URL slug already exists!" }, { status: 400 });
        }
        
        const res = await fetch(`${supabaseUrl}/rest/v1/blogs`, {
          method: "POST",
          headers: {
            "apikey": supabaseKey!,
            "Authorization": `Bearer ${supabaseKey}`,
            "Content-Type": "application/json",
            "Prefer": "return=representation"
          },
          body: JSON.stringify({
            id,
            slug,
            title,
            category,
            category_label: categoriesLabels[category] || "General",
            desc,
            content,
            date,
            read_time: formattedReadTime,
            bg_class: bgClasses[blogs.length % bgClasses.length],
            images: validImages
          })
        });
        
        if (res.ok) {
          const json = await res.json();
          const created = json[0];
          return NextResponse.json({
            success: true,
            post: {
              id: created.id,
              slug: created.slug,
              title: created.title,
              category: created.category,
              categoryLabel: created.category_label,
              desc: created.desc,
              content: created.content,
              date: created.date,
              readTime: created.read_time,
              bgClass: created.bg_class,
              images: created.images
            }
          });
        }
      } catch (err) {
        console.error("Supabase POST error, falling back to local file system:", err);
      }
    }

    // Local File fallback
    const blogs = readBlogsLocal();
    if (blogs.find((b: any) => b.slug === slug)) {
      return NextResponse.json({ error: "A blog post with this URL slug already exists!" }, { status: 400 });
    }

    const newPost = {
      id,
      slug,
      title,
      category,
      categoryLabel: categoriesLabels[category] || "General",
      desc,
      content,
      date,
      readTime: formattedReadTime,
      bgClass: bgClasses[blogs.length % bgClasses.length],
      images: validImages
    };

    const updated = [newPost, ...blogs];
    writeBlogsLocal(updated);

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

    const categoriesLabels: Record<string, string> = {
      web: "Web Engineering",
      seo: "SEO & Search",
      marketing: "Growth Marketing",
      ai: "Artificial Intelligence",
    };

    const validImages = images && images.length > 0 && images[0] !== "" ? images : ["https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=800&q=80"];
    const formattedReadTime = readTime || "5 min read";

    if (isSupabaseEnabled) {
      try {
        const blogs = await getSupabaseBlogs();
        if (blogs.find((b: any) => b.slug === slug && b.id !== id)) {
          return NextResponse.json({ error: "A blog post with this URL slug already exists!" }, { status: 400 });
        }
        
        const res = await fetch(`${supabaseUrl}/rest/v1/blogs?id=eq.${id}`, {
          method: "PATCH",
          headers: {
            "apikey": supabaseKey!,
            "Authorization": `Bearer ${supabaseKey}`,
            "Content-Type": "application/json",
            "Prefer": "return=representation"
          },
          body: JSON.stringify({
            title,
            slug,
            category,
            category_label: categoriesLabels[category] || "General",
            desc,
            content,
            read_time: formattedReadTime,
            images: validImages
          })
        });

        if (res.ok) {
          const json = await res.json();
          const updated = json[0];
          return NextResponse.json({
            success: true,
            post: {
              id: updated.id,
              slug: updated.slug,
              title: updated.title,
              category: updated.category,
              categoryLabel: updated.category_label,
              desc: updated.desc,
              content: updated.content,
              date: updated.date,
              readTime: updated.read_time,
              bgClass: updated.bg_class,
              images: updated.images
            }
          });
        }
      } catch (err) {
        console.error("Supabase PUT error, falling back to local file system:", err);
      }
    }

    // Local File fallback
    const blogs = readBlogsLocal();
    const index = blogs.findIndex((b: any) => b.id === id);

    if (index === -1) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    if (blogs.find((b: any) => b.slug === slug && b.id !== id)) {
      return NextResponse.json({ error: "A blog post with this URL slug already exists!" }, { status: 400 });
    }

    blogs[index] = {
      ...blogs[index],
      title,
      slug,
      category,
      categoryLabel: categoriesLabels[category] || "General",
      desc,
      content,
      readTime: formattedReadTime,
      images: validImages
    };

    writeBlogsLocal(blogs);

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

    if (isSupabaseEnabled) {
      try {
        const res = await fetch(`${supabaseUrl}/rest/v1/blogs?id=eq.${id}`, {
          method: "DELETE",
          headers: {
            "apikey": supabaseKey!,
            "Authorization": `Bearer ${supabaseKey}`
          }
        });
        if (res.ok) {
          return NextResponse.json({ success: true });
        }
      } catch (err) {
        console.error("Supabase DELETE error, falling back to local file system:", err);
      }
    }

    // Local File fallback
    const blogs = readBlogsLocal();
    const filtered = blogs.filter((b: any) => b.id !== id);

    if (blogs.length === filtered.length) {
      return NextResponse.json({ error: "Blog post not found in local system" }, { status: 404 });
    }

    writeBlogsLocal(filtered);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
