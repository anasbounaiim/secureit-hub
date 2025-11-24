import { BookOpenText, CalendarDays, Tag } from "lucide-react";

const posts = [
  {
    title: "Designing My Secure Homelab",
    date: "2025-01-10",
    tags: ["Homelab", "Security", "Cisco", "Fortinet"],
    summary:
      "How I structured a multi-site homelab to practice VPNs, firewall rules, segmentation and monitoring in a realistic environment.",
  },
  {
    title: "From Troubleshooting to Automation",
    date: "2025-01-03",
    tags: ["Automation", "Python", "Networking"],
    summary:
      "Turning repeated troubleshooting steps into small scripts to save time, reduce errors and document network behavior.",
  },
  {
    title: "Preparing a Network/Security Portfolio for Remote Work",
    date: "2024-12-15",
    tags: ["Portfolio", "Career", "Remote"],
    summary:
      "How I chose which projects to highlight (homelab, Fortinet, Zscaler, CCNP labs) and how I present them in a simple online portfolio.",
  },
];

export default function BlogPage() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
          /blog
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold text-white flex items-center gap-2">
          <BookOpenText className="text-emerald-400" size={24} />
          <span>Notes, Labs &amp; Portfolio Insights</span>
        </h1>

        <p className="text-sm md:text-base text-gray-400 max-w-2xl">
          Short, focused entries on networking, security, homelabs, automation
          and how they all tie back into my work as a remote Systems &amp;
          Network Engineer.
        </p>
      </header>

      {/* Posts list */}
      <div className="space-y-4">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-2xl bg-[#111]/70 p-6 ring-1 ring-green-500/20 backdrop-blur-sm hover:ring-emerald-400/40 hover:bg-[#151515]/80 transition"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
              <h2 className="text-lg md:text-xl font-semibold text-white">
                {post.title}
              </h2>
              <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-gray-500">
                <CalendarDays size={14} />
                {post.date}
              </span>
            </div>

            <p className="mt-3 text-sm md:text-base text-gray-300 leading-normal">
              {post.summary}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Tag className="text-emerald-400" size={14} />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-wide rounded-full bg-black/60 px-3 py-1 text-gray-200 ring-1 ring-green-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Later, each card can link to a full article (Markdown file, static
              content, or posts fetched from your own API).
            </p>
          </article>
        ))}
      </div>

      {/* Note about future API integration */}
      <div className="rounded-2xl bg-[#111]/70 p-6 ring-1 ring-green-500/20 backdrop-blur-sm space-y-3">
        <h2 className="text-sm uppercase tracking-[0.25em] text-emerald-400">
          Future: open-source content integration
        </h2>
        <p className="text-sm md:text-base text-gray-300 max-w-2xl">
          This blog currently uses a static <code>posts</code> array. In the
          future, you can replace it with content coming from your own backend
          or an open-source LLM/blog engine that generates or stores posts
          related to your homelab, labs and portfolio activity.
        </p>
      </div>
    </section>
  );
}
