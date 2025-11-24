import { Mail, Linkedin, ShieldCheck, SendHorizonal } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
          /contact
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold text-white flex items-center gap-2">
          <ShieldCheck className="text-emerald-400" size={26} />
          Get in touch
        </h1>

        <p className="text-sm md:text-base text-gray-400 max-w-2xl">
          Whether it's network architecture, security hardening, automation, or
          remote collaboration — feel free to reach out. I reply quickly and
          professionally.
        </p>
      </header>

      {/* Contact Boxes */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Email */}
        <div className="rounded-2xl bg-[#111]/70 p-6 ring-1 ring-green-500/20 backdrop-blur-sm space-y-3">
          <div className="flex items-center gap-2">
            <Mail className="text-emerald-400" size={20} />
            <h2 className="text-sm uppercase tracking-[0.25em] text-emerald-400">
              Email
            </h2>
          </div>

          <p className="text-sm md:text-base text-gray-300">
            <a
              href="mailto:contact@secureit-hub.com"
              className="text-emerald-400 hover:underline"
            >
              contact@secureit-hub.com
            </a>
          </p>

          <p className="text-xs text-gray-500">
            Preferred for technical discussions & project inquiries.
          </p>
        </div>

        {/* LinkedIn */}
        <div className="rounded-2xl bg-[#111]/70 p-6 ring-1 ring-green-500/20 backdrop-blur-sm space-y-3">
          <div className="flex items-center gap-2">
            <Linkedin className="text-emerald-400" size={20} />
            <h2 className="text-sm uppercase tracking-[0.25em] text-emerald-400">
              LinkedIn
            </h2>
          </div>

          <p className="text-sm md:text-base text-gray-300">
            <a
              href="https://www.linkedin.com/in/mohammed-arbaoui"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:underline"
            >
              linkedin.com/in/mohammed-arbaoui
            </a>
          </p>

          <p className="text-xs text-gray-500">
            For networking, recruiting, or remote work opportunities.
          </p>
        </div>
      </div>

      {/* Message Box */}
      <div className="rounded-2xl bg-[#111]/70 p-6 ring-1 ring-green-500/20 backdrop-blur-sm space-y-6">
        <div className="flex items-center gap-2">
          <SendHorizonal className="text-emerald-400" size={18} />
          <h2 className="text-sm uppercase tracking-[0.25em] text-emerald-400">
            Send a message
          </h2>
        </div>

        <form className="grid gap-6 md:grid-cols-2">
          {/* Name */}
          <div className="flex flex-col gap-1 md:col-span-1">
            <label className="text-xs text-gray-500 uppercase tracking-widest">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="rounded-md bg-black/60 px-3 py-2 text-sm ring-1 ring-green-500/20 placeholder-gray-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1 md:col-span-1">
            <label className="text-xs text-gray-500 uppercase tracking-widest">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="rounded-md bg-black/60 px-3 py-2 text-sm ring-1 ring-green-500/20 placeholder-gray-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-xs text-gray-500 uppercase tracking-widest">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Your message..."
              className="rounded-md bg-black/60 px-3 py-2 text-sm ring-1 ring-green-500/20 placeholder-gray-500"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="md:col-span-2 mt-2 flex justify-center rounded-md border border-green-500/50 bg-transparent px-4 py-2 text-xs uppercase tracking-widest text-emerald-400 hover:bg-green-500/10"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
