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
          For network architecture, security, VPN or remote collaboration.
        </p>
      </header>

      {/* CONTACT INFO GRID */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Email */}
        <div className="relative rounded-2xl border border-emerald-500/30 bg-black/80 shadow-[0_0_24px_-18px_rgba(16,185,129,0.9)] overflow-hidden font-mono text-sm text-emerald-100">
          <div className="flex items-center justify-between px-3 py-2 border-b border-emerald-500/20 bg-gradient-to-r from-emerald-500/15 via-black to-emerald-500/15">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.25em] text-emerald-300/80">
              email
            </span>
          </div>

          <div className="p-4 space-y-2">
            <div className="flex items-center gap-2 text-emerald-300">
              <Mail size={16} />
              <span className="text-[11px] uppercase tracking-[0.2em]">
                Email
              </span>
            </div>
            <a
              href="mailto:contact@secureit-hub.com"
              className="text-emerald-200 hover:text-emerald-100 hover:underline break-all"
            >
              contact@secureit-hub.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="relative rounded-2xl border border-emerald-500/30 bg-black/80 shadow-[0_0_24px_-18px_rgba(16,185,129,0.9)] overflow-hidden font-mono text-sm text-emerald-100">
          <div className="flex items-center justify-between px-3 py-2 border-b border-emerald-500/20 bg-gradient-to-r from-emerald-500/15 via-black to-emerald-500/15">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.25em] text-emerald-300/80">
              phone
            </span>
          </div>

          <div className="p-4 space-y-2">
            <div className="flex items-center gap-2 text-emerald-300">
              <Terminal size={16} />
              <span className="text-[11px] uppercase tracking-[0.2em]">
                Phone
              </span>
            </div>
            <p className="text-emerald-200">+32 479 13 01 45</p>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="relative rounded-2xl border border-emerald-500/30 bg-black/80 shadow-[0_0_24px_-18px_rgba(16,185,129,0.9)] overflow-hidden font-mono text-sm text-emerald-100">
          <div className="flex items-center justify-between px-3 py-2 border-b border-emerald-500/20 bg-gradient-to-r from-emerald-500/15 via-black to-emerald-500/15">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.25em] text-emerald-300/80">
              linkedin
            </span>
          </div>

          <div className="p-4 space-y-2">
            <div className="flex items-center gap-2 text-emerald-300">
              <Linkedin size={16} />
              <span className="text-[11px] uppercase tracking-[0.2em]">
                LinkedIn
              </span>
            </div>
            <a
              href="https://www.linkedin.com/in/mohammed-a-780b47195"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-200 hover:text-emerald-100 hover:underline break-all"
            >
              linkedin.com/in/mohammed-a-780b47195
            </a>
          </div>
        </div>
      </div>

      {/* MESSAGE FORM – FULL WIDTH */}
      <div className="relative rounded-2xl border border-emerald-500/30 bg-black/80 shadow-[0_0_30px_-18px_rgba(16,185,129,0.9)] overflow-hidden">
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
                placeholder="Your message..."
                className="rounded-md bg-black/60 px-3 py-2 text-sm text-gray-100 ring-1 ring-emerald-500/25 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 resize-none"
              />
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

      {/* CLI FOOTER BLOCK */}
      <div className="mt-2 rounded-2xl border border-emerald-500/40 bg-black/80 shadow-[0_0_30px_-18px_rgba(16,185,129,0.9)] overflow-hidden font-mono text-[12px] text-emerald-100">
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

        <div className="p-4 space-y-1.5">
          <p>secureit-hub :: contact</p>
          <p>➜ email: contact@secureit-hub.com</p>
          <p>➜ phone: +32 479 13 01 45</p>
          <p>➜ https://www.linkedin.com/in/mohammed-a-780b47195/</p>
          <p>➜ languages: FR · NL · EN · AR</p>
          <p>➜ mode: full_remote</p>
        </div>
      </div>
    </section>
  );
}
