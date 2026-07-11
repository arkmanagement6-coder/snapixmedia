"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Plus, Edit2, Trash2, Layout, Heading1, Heading2, Bold, Italic, Link2, List, FileText, Image as ImageIcon, Sparkles, CheckCircle, Save, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollower from "@/components/MouseFollower";
import WhatsAppChat from "@/components/WhatsAppChat";
import GlassCard from "@/components/GlassCard";
import Link from "next/link";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  desc: string;
  content: string;
  date: string;
  readTime: string;
  bgClass: string;
  images: string[];
}

const defaultArticles = [
  {
    id: "1",
    slug: "maximizing-nextjs-core-web-vitals",
    title: "Maximizing Next.js Core Web Vitals",
    category: "web",
    categoryLabel: "Web Engineering",
    desc: "A technical guide to achieving perfect Lighthouse scores using Edge components, dynamic loading, and bundle audit structures.",
    content: `<h2>Mastering Core Web Vitals in Next.js</h2><p>In modern web architectures, performance is directly linked to conversion rates and search rankings. Next.js offers elite, out-of-the-box optimization primitives, but building a fully optimized storefront requires custom configurations.</p><strong>1. Next-Gen Image Loading</strong><p>Always utilize the Next.js Image component to enable automatic WebP generation, size constraints, and priority loading for Above-the-Fold banners.</p><blockquote>Using placeholder blur effects reduces perceived load times significantly, satisfying Cumulative Layout Shift (CLS) scores.</blockquote><h2>Bundle Audits & Code Splitting</h2><p>Large JS bundles are the primary culprit behind poor Interaction to Next Paint (INP) scores. We recommend implementing dynamic imports (using React lazy or Next dynamic) for heavy third-party components like widgets and chat portals.</p>`,
    date: "Jun 08, 2026",
    readTime: "6 min read",
    bgClass: "from-blue-600/10 to-indigo-600/10 border-blue-500/10",
    images: ["https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"],
  },
  {
    id: "2",
    slug: "saas-seo-blueprint-zero-to-100k-clicks",
    title: "SaaS SEO Blueprint: Zero to 100k Clicks",
    category: "seo",
    categoryLabel: "SEO & Search",
    desc: "How to deploy high-intent organic directories, audit duplicate content issues, and rank #1 for transactional keywords.",
    content: `<h2>Structuring a Scalable SEO Engine</h2><p>Organic visibility requires a hybrid mix of technical speed, authoritative backlinks, and structured semantic site maps. For SaaS startups, capturing high-intent search terms is the most cost-efficient route.</p><strong>1. Keyword Clustering</strong><p>Focus on clustering long-tail keywords that solve specific problems. Avoid targeting generic high-volume words early on.</p><h2>On-Page Schema Formatting</h2><p>Implement rich Schema markup (FAQ, Product, and Article schemas) to help search crawlers parse details instantly. This increases your chances of ranking in AI-generated search snapshots (AEO).</p>`,
    date: "Jun 04, 2026",
    readTime: "8 min read",
    bgClass: "from-cyan-600/10 to-blue-600/10 border-cyan-500/10",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"],
  },
];

export default function BlogAdmin() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  
  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState("");

  // Form states
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("web");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [readTime, setReadTime] = useState("5 min read");
  const [images, setImages] = useState<string[]>([""]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Load from database API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (res.ok) {
          const data = await res.json();
          setBlogs(data);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "snapixadmin123";
    if (passwordInput === correctPassword) {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid password. Please try again.");
    }
  };

  // Sync slug with title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    if (!editingPost) {
      setSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
    }
  };

  // Add tag helper inside textarea selection
  const insertText = (before: string, after: string = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selected = text.substring(start, end);
    const replacement = before + selected + after;
    
    const newContent = text.substring(0, start) + replacement + text.substring(end);
    setContent(newContent);

    // Reset cursor focus
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, start + before.length + selected.length);
    }, 10);
  };

  // Multiple images managers
  const handleImageChange = (index: number, value: string) => {
    const updated = [...images];
    updated[index] = value;
    setImages(updated);
  };

  const addImageField = () => {
    setImages([...images, ""]);
  };

  const removeImageField = (index: number) => {
    if (images.length === 1) return;
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
  };

  // Save / Update Blog
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !slug || !desc || !content) {
      alert("Please fill all required fields!");
      return;
    }

    const validImages = images.filter(img => img.trim() !== "");
    if (validImages.length === 0) {
      validImages.push("https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=800&q=80");
    }

    try {
      if (editingPost) {
        // Edit mode (PUT)
        const res = await fetch("/api/blogs", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: editingPost.id,
            title,
            slug,
            category,
            desc,
            content,
            readTime,
            images: validImages
          })
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || "Failed to update blog post");
        
        // Refresh local list
        setBlogs(blogs.map((b) => b.id === editingPost.id ? json.post : b));
        setNotificationMsg("Blog post updated successfully!");
      } else {
        // Create mode (POST)
        const res = await fetch("/api/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            slug,
            category,
            desc,
            content,
            readTime,
            images: validImages
          })
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || "Failed to create blog post");

        setBlogs([json.post, ...blogs]);
        setNotificationMsg("New blog post created successfully!");
      }

      handleReset();
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } catch (err: any) {
      console.error(err);
      alert(err.message || "An error occurred while saving the blog.");
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setSlug(post.slug);
    setCategory(post.category);
    setDesc(post.desc);
    setContent(post.content);
    setReadTime(post.readTime);
    setImages(post.images && post.images.length > 0 ? post.images : [""]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    try {
      const res = await fetch(`/api/blogs?id=${id}`, {
        method: "DELETE"
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to delete blog post");

      setBlogs(blogs.filter((b) => b.id !== id));
      if (editingPost?.id === id) {
        handleReset();
      }
      setNotificationMsg("Blog post deleted successfully!");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } catch (err: any) {
      console.error(err);
      alert(err.message || "An error occurred while deleting the blog.");
    }
  };

  const handleReset = () => {
    setEditingPost(null);
    setTitle("");
    setSlug("");
    setCategory("web");
    setDesc("");
    setContent("");
    setReadTime("5 min read");
    setImages([""]);
  };

  // If not logged in, show Password Portal overlay
  if (!isLoggedIn) {
    return (
      <div className="relative min-h-screen bg-slate-950 text-slate-200 flex flex-col items-center justify-center font-sans p-6">
        <MouseFollower />
        <Navbar isDarkHero />
        <GlassCard className="p-8 max-w-sm w-full border-slate-800 bg-slate-900/50 shadow-2xl relative z-10 text-center rounded-3xl mt-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 text-[10px] font-bold tracking-widest uppercase mb-4">
            <span>Access Restrict</span>
          </div>
          <h2 className="text-xl font-bold text-white mb-2 font-display">Console Verification</h2>
          <p className="text-slate-400 text-xs font-semibold mb-6">
            Enter administrative authorization credentials below to manage insights data.
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="password"
              placeholder="Authorization Password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="w-full px-4 py-3 bg-slate-950 border border-slate-850 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple/30 text-center"
              required
            />
            {loginError && <p className="text-[10px] text-red-500 font-bold">{loginError}</p>}
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl bg-neon-purple hover:bg-neon-purple/85 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg shadow-purple-500/20 mt-2"
            >
              Verify Console
            </button>
          </form>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-transparent text-slate-700 overflow-x-hidden flex flex-col font-sans">
      <MouseFollower />
      <Navbar isDarkHero />

      {/* Hero Banner */}
      <section className="relative w-full min-h-[220px] flex items-center justify-center bg-slate-950 overflow-hidden pt-28 page-hero-banner">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:35px_35px]" />
        <div className="absolute inset-0 bg-radial from-neon-purple/15 via-transparent to-transparent blur-[100px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 w-full text-center relative z-10 py-8 flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-purple/20 bg-neon-purple/5 text-neon-purple text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admin Console</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display" style={{ color: "#ffffff" }}>
            Blog <span className="text-gradient-purple-cyan">Admin Dashboard</span>
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 py-12 px-6 max-w-6xl mx-auto w-full">
        {/* Navigation back to blog */}
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights Page
          </Link>
        </div>

        {/* Floating Notification */}
        {showNotification && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-500 text-white font-bold text-xs shadow-xl animate-bounce">
            <CheckCircle className="w-4.5 h-4.5" />
            <span>{notificationMsg}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Column: Create / Edit Blog */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <GlassCard className="p-6 md:p-8 border-slate-200/80 bg-white/90 shadow-xl shadow-slate-200/30 rounded-3xl relative">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-3">
                <FileText className="w-5 h-5 text-neon-purple" />
                {editingPost ? "Edit Existing Blog Post" : "Compose New Blog Post"}
              </h2>

              <form onSubmit={handleSave} className="flex flex-col gap-5">
                {/* Title */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Article Title *</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="e.g. Master React Server Actions"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-neon-purple text-xs text-slate-800"
                  />
                </div>

                {/* Slug */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">URL Slug (Auto) *</label>
                  <input
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"))}
                    placeholder="e.g. master-react-server-actions"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-neon-purple text-xs text-slate-800 font-mono bg-slate-50"
                  />
                </div>

                {/* Grid Category / ReadTime */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Category *</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-neon-purple text-xs text-slate-800 bg-white"
                    >
                      <option value="web">Web Engineering</option>
                      <option value="seo">SEO & Search</option>
                      <option value="marketing">Growth Marketing</option>
                      <option value="ai">Artificial Intelligence</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Read Time</label>
                    <input
                      type="text"
                      value={readTime}
                      onChange={(e) => setReadTime(e.target.value)}
                      placeholder="e.g. 5 min read"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-neon-purple text-xs text-slate-800"
                    />
                  </div>
                </div>

                {/* Summary / Summary description */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Short Summary *</label>
                  <textarea
                    required
                    rows={2}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="A brief snippet showing up on search card view limits (max 150 characters)..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-neon-purple text-xs text-slate-800 resize-y"
                  />
                </div>

                {/* Rich Content Editor with Helper Toolbar */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Blog Content (HTML Layout) *</label>
                  </div>
                  
                  {/* Rich Formatting Toolbar */}
                  <div className="flex flex-wrap items-center gap-1 p-2 border border-b-0 border-slate-200 bg-slate-50/80 rounded-t-xl">
                    <button
                      type="button"
                      onClick={() => insertText("<h2>", "</h2>")}
                      className="p-2 rounded hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer"
                      title="Heading 2"
                    >
                      <Heading1 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertText("<h3>", "</h3>")}
                      className="p-2 rounded hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer"
                      title="Heading 3"
                    >
                      <Heading2 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertText("<strong>", "</strong>")}
                      className="p-2 rounded hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer"
                      title="Bold Text"
                    >
                      <Bold className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertText("<em>", "</em>")}
                      className="p-2 rounded hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer"
                      title="Italic Text"
                    >
                      <Italic className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertText('<a href="https://example.com" target="_blank" class="text-neon-purple hover:underline">', "</a>")}
                      className="p-2 rounded hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer"
                      title="Add Link"
                    >
                      <Link2 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertText("<ul>\n  <li>", "</li>\n</ul>")}
                      className="p-2 rounded hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer"
                      title="Bullet List"
                    >
                      <List className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => insertText("<blockquote>", "</blockquote>")}
                      className="p-2 rounded hover:bg-slate-200 text-slate-700 flex items-center justify-center font-serif font-black cursor-pointer text-xs"
                      title="Quote Block"
                    >
                      “ ”
                    </button>
                    <button
                      type="button"
                      onClick={() => insertText("<p>", "</p>")}
                      className="p-2 rounded hover:bg-slate-200 text-slate-700 flex items-center justify-center cursor-pointer text-xs font-extrabold"
                      title="Paragraph Block"
                    >
                      P
                    </button>
                  </div>

                  <textarea
                    ref={textareaRef}
                    required
                    rows={12}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your article using the tags from toolbar above..."
                    className="w-full px-4 py-3 rounded-b-xl border border-slate-200 focus:outline-none focus:border-neon-purple text-xs text-slate-800 font-mono leading-relaxed"
                  />
                </div>

                {/* Multiple Images Array */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Add Banner / Image URLs *</label>
                    <button
                      type="button"
                      onClick={addImageField}
                      className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-neon-purple hover:underline cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Image
                    </button>
                  </div>

                  <div className="flex flex-col gap-2">
                    {images.map((imgUrl, i) => (
                      <div key={i} className="flex gap-2 items-center">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                          <ImageIcon className="w-4 h-4 text-slate-400" />
                        </div>
                        <input
                          type="text"
                          required
                          value={imgUrl}
                          onChange={(e) => handleImageChange(i, e.target.value)}
                          placeholder="Paste Unsplash image URL here..."
                          className="flex-1 px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-neon-purple text-xs text-slate-800"
                        />
                        <button
                          type="button"
                          onClick={() => removeImageField(i)}
                          disabled={images.length === 1}
                          className="p-2 rounded-xl hover:bg-rose-50 text-rose-500 disabled:opacity-30 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Actions */}
                <div className="flex gap-3 mt-4 border-t border-slate-100 pt-6">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    {editingPost ? "Update Insights Post" : "Publish Insights Post"}
                  </button>
                  {editingPost && (
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3.5 rounded-2xl border border-slate-200 bg-white text-slate-650 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider cursor-pointer"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </GlassCard>
          </div>

          {/* List Column: Existing Blogs */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Live previews */}
            {content && (
              <GlassCard className="p-6 border-slate-200/80 bg-white/90 rounded-3xl flex flex-col gap-4 shadow-md">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 border-b border-slate-100 pb-2">
                  <Eye className="w-4 h-4 text-neon-cyan" />
                  Live Preview Layout
                </h3>
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-extrabold text-slate-900 leading-tight">{title || "Untitled Blog Post"}</h1>
                  <span className="text-[10px] font-bold text-neon-purple uppercase tracking-wider bg-purple-50 px-2 py-0.5 rounded border border-purple-100 w-fit">
                    {category === "web" ? "Web Engineering" : category === "seo" ? "SEO & Search" : category === "marketing" ? "Growth Marketing" : "Artificial Intelligence"}
                  </span>
                  <p className="text-xs text-slate-400 font-semibold italic mt-1 mb-2">{desc || "Article summary snippet..."}</p>
                  
                  {/* Dynamic HTML preview */}
                  <div 
                    className="text-xs text-slate-600 leading-relaxed font-semibold flex flex-col gap-3 max-h-[220px] overflow-y-auto border border-slate-100 p-3 rounded-xl bg-slate-50/50 blog-html-preview"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>
              </GlassCard>
            )}

            {/* List */}
            <GlassCard className="p-6 border-slate-200/80 bg-white/90 shadow-xl shadow-slate-200/30 rounded-3xl flex flex-col gap-5">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                <Layout className="w-5 h-5 text-neon-cyan" />
                Active Insights Posts ({blogs.length})
              </h2>

              <div className="flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-1">
                {blogs.map((post) => (
                  <div
                    key={post.id}
                    className="p-4 rounded-2xl border border-slate-100 hover:border-slate-200 bg-slate-50/50 flex flex-col gap-3 group/item transition-all"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex flex-col gap-1">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{post.categoryLabel}</span>
                        <h4 className="text-sm font-bold text-slate-800 line-clamp-1 group-hover/item:text-neon-purple transition-colors leading-snug">{post.title}</h4>
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => handleEdit(post)}
                          className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors cursor-pointer"
                          title="Edit Post"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="p-1.5 rounded-lg hover:bg-rose-50 text-rose-500 transition-colors cursor-pointer"
                          title="Delete Post"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed font-semibold">{post.desc}</p>
                    <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold border-t border-slate-200/40 pt-2 mt-1">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
