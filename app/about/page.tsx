import {
  ShieldCheck,
  Server,
  User,
  Languages,
  Award,
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
          A security-driven Network Security stack focused on secure connectivity,
          proxy environments, VPN reliability and production-grade stability
          across distributed infrastructures (600+ stores).
        </p>

      </header>

      {/* MAIN GRID */}

      <div className="grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-[1.7fr,1.3fr] items-start">
        {/* LEFT COLUMN – PROFILE + CONTENT CARDS */}
        <div className="space-y-6 md:space-y-7">
          <div className="relative rounded-2xl border border-emerald-500/35 bg-black/80 shadow-[0_0_30px_rgba(16,185,129,0.35)] overflow-hidden">
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

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_60%)]" />

            <div className="relative p-4 sm:p-5 space-y-4 text-sm md:text-[15px] text-gray-200 leading-relaxed">
              <div className="flex items-center gap-2 text-emerald-400 text-[11px] uppercase tracking-[0.25em]">
                <ShieldCheck size={16} />
                <span>Profile</span>
              </div>

              <div className="space-y-2">
                <p>
                  Network Engineer operating hybrid infrastructures with focus on VPN connectivity, firewall operations and reliable network paths.
                </p>
                <p>
                  Background built around clear troubleshooting, structured analysis and service continuity.
                </p>
                <p>
                  Certified <span className="text-emerald-300">CCNP Security – SVPN</span>, <span className="text-emerald-300">CCNA</span> and <span className="text-emerald-300">Linux+</span>.
                </p>
                <p>
                  Ubuntu used as primary operating system, with Kali Linux in a virtual environment for protocol testing and structured security learning.
                </p>
                <p>
                  Clarity in communication and stable network design guide my daily work.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-black/75 overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-gradient-to-r from-black via-black to-emerald-500/10">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                <Server size={14} />
                <span>Tooling & ecosystem</span>
              </div>
            </div>

            <div className="p-4 space-y-3 text-[12px] md:text-[13px] text-gray-200 leading-relaxed">
              <p>
                Hands-on work with Cisco, Fortinet, Zscaler (ZIA / ZPA), VPN technologies, Infoblox and F5.
              </p>
              <p>
                These platforms are used to maintain connectivity, visibility, segmentation and secure access across distributed infrastructures.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative rounded-2xl border border-white/10 bg-black/75 overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-gradient-to-r from-black via-black to-emerald-500/10">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                  <Languages size={14} />
                  <span>Languages & work style</span>
                </div>
              </div>

              <div className="p-4 space-y-3 text-[12px] md:text-[13px] text-gray-200 leading-relaxed">
                <p>Remote-ready and reliability focused.</p>
                <p>
                  I document what matters, simplify where it improves stability and automate when it increases operational consistency.
                </p>
                <p>
                  Multilingual: <span className="text-emerald-300">French · Dutch · Arabic · English</span>
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl border border-white/10 bg-black/75 overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-gradient-to-r from-black via-black to-emerald-500/10">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                  <Award size={14} />
                  <span>Certifications</span>
                </div>
              </div>

              <div className="p-4 space-y-2.5 text-[12px] md:text-[13px] text-gray-200">
                <p className="font-semibold text-emerald-200">Cisco CCNP Security – SVPN</p>
                <p className="font-semibold text-emerald-200">Cisco CCNA</p>
                <p className="font-semibold text-emerald-200">CompTIA Linux+</p>
                <p className="font-semibold text-emerald-200">Fortinet Certified Fundamentals in Cybersecurity</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN – TERMINAL SNAPSHOT */}
        <aside className="relative rounded-2xl border border-emerald-500/40 bg-black/85 overflow-hidden font-mono text-[12px] text-emerald-100">
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

          <div className="p-4 sm:p-5 space-y-4">
            <div className="space-y-1.5">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> snapshot
              </p>
              <p className="text-[11px] md:text-[12px] text-emerald-100/90 whitespace-pre-line leading-relaxed">
                {`role Network Security Engineer
stack Cisco Fortinet VPN Zscaler Linux
mode full remote
focus secure_connectivity · proxy_environments · vpn_operations · firewall_enforcement · p2_incident_resolution
current mission Ahold Delhaize (Belgium & Luxembourg)
quick links github.com/SecureIT-Hub
quick links linkedin.com/in/mohammed-a-780b47195`}
              </p>
            </div>

            <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> focus_areas
              </p>
              <ul className="space-y-0.5 text-[11px] md:text-[12px] text-emerald-100/90">
                <li>secure_connectivity_operations</li>
                <li>firewall_policy_control</li>
                <li>vpn_reliability</li>
                <li>incident_resolution</li>
                <li>service_continuity</li>
              </ul>
            </div>

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