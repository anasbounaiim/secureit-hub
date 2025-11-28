import { Mail, Linkedin, ShieldCheck, SendHorizonal, Terminal } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="space-y-10 md:space-y-12">
      {/* PATH + TITLE */}
      <header className="space-y-3">
        <div className="relative inline-block">
          <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-400/80">
            /contact
          </p>
          <div className="absolute -bottom-1 left-0 w-20 h-[1px] bg-gradient-to-r from-emerald-400/70 to-transparent" />
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-white flex items-center gap-2">
          <ShieldCheck className="text-emerald-400" size={26} />
          <span>Get in touch</span>
        </h1>

        <p className="text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed">
          Whether it&apos;s{" "}
          <span className="text-emerald-300">
            network architecture, security hardening, automation or remote collaboration
          </span>
          — feel free to reach out. I reply quickly and professionally.
        </p>
      </header>

      {/* MAIN GRID: CONTACT METHODS + TERMINAL SNAPSHOT */}
      <div className="grid gap-8 lg:grid-cols-[1.5fr,1.1fr] items-start">
        {/* LEFT – CONTACT METHODS & FORM */}
        <div className="space-y-6">
          {/* CONTACT METHODS */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Email */}
            <div className="relative rounded-2xl border border-emerald-500/30 bg-black/80 shadow-[0_0_24px_-18px_rgba(16,185,129,0.9)] overflow-hidden group">
              {/* Top bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-emerald-500/20 bg-gradient-to-r from-emerald-500/15 via-black to-emerald-500/15">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-300/80">
                  contact@secureit-hub.com
                </span>
              </div>

              <div className="p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="text-emerald-400" size={20} />
                  <h2 className="text-sm uppercase tracking-[0.25em] text-emerald-400">
                    Email
                  </h2>
                </div>

                <p className="text-sm md:text-base text-gray-300">
                  <a
                    href="mailto:contact@secureit-hub.com"
                    className="text-emerald-300 hover:text-emerald-200 hover:underline"
                  >
                    contact@secureit-hub.com
                  </a>
                </p>

                <p className="text-xs text-gray-500">
                  Preferred for{" "}
                  <span className="text-emerald-300">
                    technical discussions, project briefs &amp; proposals
                  </span>
                  .
                </p>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-emerald-400/0 group-hover:border-emerald-400/50 group-hover:shadow-[0_0_40px_-18px_rgba(16,185,129,1)] transition" />
            </div>

            {/* LinkedIn */}
            <div className="relative rounded-2xl border border-emerald-500/30 bg-black/80 shadow-[0_0_24px_-18px_rgba(16,185,129,0.9)] overflow-hidden group">
              {/* Top bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-emerald-500/20 bg-gradient-to-r from-emerald-500/15 via-black to-emerald-500/15">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-300/80">
                  linkedin.com/in/mohammed-a-780b47195
                </span>
              </div>

              <div className="p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Linkedin className="text-emerald-400" size={20} />
                  <h2 className="text-sm uppercase tracking-[0.25em] text-emerald-400">
                    LinkedIn
                  </h2>
                </div>

                <p className="text-sm md:text-base text-gray-300">
                  <a
                    href="https://www.linkedin.com/in/mohammed-a-780b47195"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-300 hover:text-emerald-200 hover:underline"
                  >
                    linkedin.com/in/mohammed-a-780b47195
                  </a>
                </p>

                <p className="text-xs text-gray-500">
                  Ideal for{" "}
                  <span className="text-emerald-300">
                    networking, recruiting &amp; remote work opportunities
                  </span>
                  .
                </p>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-emerald-400/0 group-hover:border-emerald-400/50 group-hover:shadow-[0_0_40px_-18px_rgba(16,185,129,1)] transition" />
            </div>
          </div>

          {/* MESSAGE FORM – TERMINAL WINDOW STYLE */}
          <div className="relative rounded-2xl border border-emerald-500/30 bg-black/80 shadow-[0_0_30px_-18px_rgba(16,185,129,0.9)] overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-emerald-500/20 bg-gradient-to-r from-emerald-500/15 via-black to-emerald-500/15">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-300/80">
                secureit-hub :: message
              </span>
            </div>

            <div className="p-4 sm:p-5 space-y-6">
              <div className="flex items-center gap-2">
                <SendHorizonal className="text-emerald-400" size={18} />
                <h2 className="text-sm uppercase tracking-[0.25em] text-emerald-400">
                  Send a message
                </h2>
              </div>

              <form className="grid gap-6 md:grid-cols-2">
                {/* Name */}
                <div className="flex flex-col gap-1 md:col-span-1">
                  <label className="text-[11px] text-gray-500 uppercase tracking-[0.2em]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="rounded-md bg-black/60 px-3 py-2 text-sm text-gray-100 ring-1 ring-emerald-500/25 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/70"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1 md:col-span-1">
                  <label className="text-[11px] text-gray-500 uppercase tracking-[0.2em]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-md bg-black/60 px-3 py-2 text-sm text-gray-100 ring-1 ring-emerald-500/25 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/70"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="text-[11px] text-gray-500 uppercase tracking-[0.2em]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share some context: current environment, goals, timelines..."
                    className="rounded-md bg-black/60 px-3 py-2 text-sm text-gray-100 ring-1 ring-emerald-500/25 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 resize-none"
                  />
                  <p className="mt-1 text-[11px] text-gray-500 font-mono">
                    // I typically reply within{" "}
                    <span className="text-emerald-300">24 hours</span> on
                    business days.
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="md:col-span-2 mt-1 inline-flex items-center justify-center gap-2 rounded-md border border-emerald-500/60 bg-emerald-500/10 px-4 py-2.5 text-[11px] uppercase tracking-[0.25em] text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 transition"
                >
                  <SendHorizonal size={14} />
                  <span>Send message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* RIGHT – TERMINAL SNAPSHOT / CONTACT META */}
        <aside
          className="
            relative rounded-2xl border border-emerald-500/40 
            bg-black/80 shadow-[0_0_30px_-15px_rgba(16,185,129,0.9)]
            overflow-hidden font-mono text-[12px] text-emerald-100
          "
        >
          {/* Terminal top bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-emerald-500/20 bg-gradient-to-r from-emerald-500/15 via-black to-emerald-500/15">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-300/80">
              secureit-hub :: contact
            </span>
          </div>

          {/* Console body */}
          <div className="p-4 space-y-4">
            {/* Contact endpoints */}
            <div className="space-y-1.5">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> endpoints
              </p>
              <ul className="space-y-0.5 text-[11px] md:text-[12px] text-emerald-100/90">
                <li>• email: contact@secureit-hub.com</li>
                <li>• linkedin: /in/mohammed-a-780b47195</li>
                <li>• mode: remote_friendly</li>
                <li>• timezone: CET / CEST (EU)</li>
              </ul>
            </div>

            {/* Preferred topics */}
            <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> preferred_topics
              </p>
              <ul className="space-y-0.5 text-[11px] md:text-[12px] text-emerald-100/90">
                <li>- network_architecture &amp; redesigns</li>
                <li>- firewall_policies &amp; segmentation</li>
                <li>- secure_remote_access (VPN / Zscaler)</li>
                <li>- automation_for_operations (Python / CLI)</li>
              </ul>
            </div>

            {/* Collaboration style */}
            <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> collaboration
              </p>
              <ul className="space-y-0.5 text-[11px] md:text-[12px] text-emerald-100/90">
                <li>• style: async_friendly + clear_docs</li>
                <li>• calls: scheduled &amp; timeboxed</li>
                <li>• language: FR · EN · AR</li>
                <li>• status: ready_for_remote_engagements := true;</li>
              </ul>
            </div>

            {/* Status line */}
            <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> system_status
              </p>
              <div className="flex items-center gap-2 text-[11px] md:text-[12px] text-emerald-200">
                <Terminal size={13} className="text-emerald-400" />
                <span>awaiting_next_packet_from_you()</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
