import {
  ShieldCheck,
  Server,
  Network,
  GlobeLock,
  Activity,
  Award,
  User,
  Languages,
  Terminal,
} from "lucide-react";

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto space-y-10 md:space-y-12 lg:space-y-16">
      {/* PATH + TITLE */}
      <header className="space-y-4">
        <div className="relative inline-block">
          <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-400/80">
            /about
          </p>
          <div className="absolute -bottom-1 left-0 w-16 h-[1px] bg-gradient-to-r from-emerald-400/70 to-transparent" />
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-white flex items-center gap-3">
            <User className="h-5 w-5 md:h-6 md:w-6 text-emerald-400" />
          About Me
        </h1>

        <p className="text-sm md:text-base text-gray-400 max-w-2xl leading-[1.7]">
          Network Engineer focused on secure connectivity, stable infrastructures
          and clean remote operations. Experience across Belgium and remote
          environments, with daily work on enterprise production systems.
        </p>
      </header>

      {/* MAIN GRID */}
      <div className="grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-[1.7fr,1.3fr] items-start">
        {/* LEFT COLUMN – TERMINAL-LIKE CARDS */}
        <div className="space-y-6 md:space-y-7">
          {/* PROFILE CARD */}
          <div className="relative rounded-2xl border border-emerald-500/35 bg-black/80 shadow-[0_0_30px_rgba(16,185,129,0.35)] overflow-hidden">
            {/* top bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-emerald-500/25 bg-gradient-to-r from-emerald-500/18 via-black to-emerald-500/18">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-300/80">
                whoami
              </span>
            </div>

            {/* subtle inner glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_60%)]" />

            <div className="relative p-4 sm:p-5 space-y-4 text-sm md:text-[15px] text-gray-200 leading-relaxed">
              <div className="flex items-center gap-2 text-emerald-400 text-[11px] uppercase tracking-[0.25em]">
                <ShieldCheck size={16} />
                <span>Profile</span>
              </div>

              <div className="space-y-2">
                <p>
                  Network Engineer working on hybrid infrastructures, secure VPN
                  connectivity, firewall operations and reliable network paths.
                </p>
                <p>
                  Background built around clarity, troubleshooting discipline and
                  service continuity.
                </p>
                <p>
                  Certified <span className="text-emerald-300">CCNA</span> and{" "}
                  <span className="text-emerald-300">Linux+</span>.
                </p>
                <p>
                  Currently advancing toward{" "}
                  <span className="text-emerald-300">CCNP Security</span>.
                </p>
                <p>
                  Ubuntu as main OS, Kali in VM for structured learning and
                  protocol testing.
                </p>
                <p>Communication and stable design guide my daily work.</p>
              </div>
            </div>
          </div>

          {/* TOOLING ROW */}
          <div className="grid gap-4">
            {/* TOOLING & ECOSYSTEM */}
            <div className="relative rounded-2xl border border-white/10 bg-black/75 overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-gradient-to-r from-black via-black to-emerald-500/10">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                  <Server size={14} />
                  <span>Tooling &amp; ecosystem</span>
                </div>
              </div>

              <div className="p-4 space-y-3 text-[12px] md:text-[13px] text-gray-200 leading-relaxed">
                <p>
                  Hands-on experience with Cisco, Fortinet, VPN technologies,
                  Infoblox, F5 and Zscaler.
                </p>
                <p>
                  Used for connectivity, visibility, segmentation and secure
                  access with an operational mindset.
                </p>
              </div>
            </div>
          </div>

          {/* LANGUAGES + CERTS ROW */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* LANGUAGES / WORK STYLE */}
            <div className="relative rounded-2xl border border-white/10 bg-black/75 overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-gradient-to-r from-black via-black to-emerald-500/10">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                  <Languages size={14} />
                  <span>Languages &amp; work style</span>
                </div>
              </div>

              <div className="p-4 space-y-3 text-[12px] md:text-[13px] text-gray-200 leading-relaxed">
                <p>Remote ready, structured and reliability focused.</p>
                <p>
                  I document the essentials, simplify where it adds value and
                  automate when it strengthens consistency.
                </p>
                <p>
                  Multilingual:{" "}
                  <span className="text-emerald-300">
                    French, Dutch, Arabic, English
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* CERTIFICATIONS */}
            <div className="relative rounded-2xl border border-white/10 bg-black/75 overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-gradient-to-r from-black via-black to-emerald-500/10">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                  <Award size={14} />
                  <span>Certifications</span>
                </div>
              </div>

              <div className="p-4 space-y-2.5 text-[12px] md:text-[13px] text-gray-200">
                <p>
                  <span className="font-semibold text-emerald-200">
                    Cisco CCNA
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-emerald-200">
                    CompTIA Linux+
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-emerald-200">
                    Fortinet Certified Fundamentals in Cybersecurity
                  </span>
                </p>
                <p className="text-gray-400 pt-1">
                  Currently advancing toward{" "}
                  <span className="text-emerald-300">CCNP Security</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN – TERMINAL SNAPSHOT */}
        <aside
          className="
            relative rounded-2xl border border-emerald-500/40 
            bg-black/85 
            overflow-hidden font-mono text-[12px] text-emerald-100
          "
        >
          {/* Terminal top bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-emerald-500/25 bg-gradient-to-r from-emerald-500/18 via-black to-emerald-500/18">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-300/80">
              secureit-hub :: about
            </span>
          </div>

          {/* Console body */}
          <div className="p-4 sm:p-5 space-y-4">
            {/* Snapshot */}
            <div className="space-y-1.5">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> snapshot
              </p>
              <p className="text-[11px] md:text-[12px] text-emerald-100/90 whitespace-pre-line leading-relaxed">
                {`role Network Engineer
stack Cisco Fortinet VPN Zscaler Linux
mode full remote
focus secure connectivity troubleshooting stability hardening
current mission Ahold Delhaize (Belgium & Luxembourg)
quick links github.com/SecureIT-Hub
quick links linkedin.com/in/mohammed-a-780b47195`}
              </p>
            </div>

            {/* Focus areas */}
            <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> focus_areas
              </p>
              <ul className="space-y-0.5 text-[11px] md:text-[12px] text-emerald-100/90">
                {/* still intentionally empty */}
              </ul>
            </div>

            {/* Quick links */}
            <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> quick_links
              </p>
              <ul className="space-y-0.5 text-[11px] md:text-[12px]">
                <li>
                  <span className="text-emerald-300">github:</span>{" "}
                  <a
                    href="https://github.com/SecureIT-Hub"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:underline"
                  >
                    github.com/SecureIT-Hub
                  </a>
                </li>
                <li>
                  <span className="text-emerald-300">linkedin:</span>{" "}
                  <a
                    href="https://www.linkedin.com/in/mohammed-a-780b47195"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:underline"
                  >
                    linkedin.com/in/mohammed-a-780b47195
                  </a>
                </li>
              </ul>
            </div>

            {/* System status */}
            <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> system_status
              </p>
              <div className="flex items-center gap-2 text-[11px] md:text-[12px] text-emerald-200">
                <Terminal size={13} className="text-emerald-400" />
                <span>ready_for_remote_projects := true;</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
