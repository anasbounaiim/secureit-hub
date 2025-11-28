import {
  ShieldCheck,
  Server,
  Network,
  GlobeLock,
  Activity,
  Award,
  Languages,
  Terminal,
} from "lucide-react";

export default function AboutPage() {
  return (
    <section className="space-y-10 md:space-y-12">
      {/* PATH + TITLE */}
      <header className="space-y-3">
        <div className="relative inline-block">
          <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-400/80">
            /about
          </p>
          <div className="absolute -bottom-1 left-0 w-16 h-[1px] bg-gradient-to-r from-emerald-400/70 to-transparent" />
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          About Mohammed
        </h1>

        <p className="text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed">
          Network &amp; Security Engineer focused on{" "}
          <span className="text-emerald-300">
            secure connectivity, stable infrastructures and real-world
            production operations
          </span>{" "}
          across hybrid environments.
        </p>
      </header>

      {/* MAIN GRID */}
      <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.7fr,1.3fr] items-start">
        {/* LEFT COLUMN – "CARDS" IN TERMINAL STYLE */}
        <div className="space-y-6">
          {/* PROFILE CARD */}
          <div className="relative rounded-2xl border border-emerald-500/30 bg-black/80 shadow-[0_0_28px_-16px_rgba(16,185,129,0.9)] overflow-hidden">
            {/* top bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-emerald-500/20 bg-gradient-to-r from-emerald-500/15 via-black to-emerald-500/15">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-300/80">
                whoami
              </span>
            </div>

            <div className="p-4 sm:p-5 space-y-4 text-sm md:text-base text-gray-200 leading-relaxed">
              <div className="flex items-center gap-2 text-emerald-400 text-[11px] uppercase tracking-[0.25em]">
                <ShieldCheck size={16} />
                <span>Profile</span>
              </div>

              <p>
                I&apos;m a Systems &amp; Network Engineer with a strong
                operational background in{" "}
                <span className="text-emerald-300">
                  security, connectivity and uptime
                </span>
                . I work daily with Cisco, Fortinet, Zscaler and Linux to keep
                infrastructures stable, secure and predictable.
              </p>

              <p>
                Years of experience in{" "}
                <span className="text-emerald-300">
                  monitoring, incident response and infrastructure support
                </span>{" "}
                shaped the way I execute: production first, clear impact
                awareness, and disciplined troubleshooting.
              </p>

              <p>
                I&apos;m{" "}
                <span className="text-emerald-300">
                  CompTIA Linux+ and Cisco CCNA certified
                </span>
                , with{" "}
                <span className="text-emerald-300">
                  Fortinet Certified Fundamentals in Cybersecurity
                </span>{" "}
                and <span className="text-emerald-300">CCNP Security</span> in
                progress. Ubuntu is my daily OS; Kali runs in a VM for labs and
                controlled security testing.
              </p>
            </div>
          </div>

          {/* EXPERIENCE + TOOLING ROW */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* EXPERIENCE SUMMARY */}
            <div className="relative rounded-2xl border border-white/10 bg-black/70 overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-black/80">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                  <Activity size={14} />
                  <span>Experience</span>
                </div>
                <span className="text-[10px] text-gray-400">2009 → now</span>
              </div>

              <div className="p-4 space-y-2 text-[12px] md:text-[13px] text-gray-200">
                <p className="font-semibold text-emerald-200">
                  Systems / Network Engineer – Ahold Delhaize
                </p>
                <p className="text-gray-400">
                  Hybrid infrastructure, secure connectivity, VPN, firewalls and
                  remote access across multiple sites.
                </p>

                <p className="font-semibold text-emerald-200 pt-2">
                  Previous roles
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  <li>IT Consultant at Econocom (systems &amp; network support)</li>
                  <li>Security support at BNP Paribas Securities Services</li>
                  <li>
                    Application support &amp; monitoring (Verisure, Johnson
                    Controls, UZ Brussel, SERIS, Securitas)
                  </li>
                </ul>
              </div>
            </div>

            {/* TOOLING & ECOSYSTEM */}
            <div className="relative rounded-2xl border border-white/10 bg-black/70 overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-black/80">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                  <Server size={14} />
                  <span>Tooling &amp; ecosystem</span>
                </div>
              </div>

              <div className="p-4 space-y-3 text-[12px] md:text-[13px] text-gray-200">
                <p>
                  I work with a broad ecosystem to keep infrastructures{" "}
                  <span className="text-emerald-300">
                    observable, debuggable and maintainable
                  </span>
                  .
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Cisco routing & switching",
                    "Fortinet FortiGate",
                    "Zscaler ZIA / ZPA",
                    "IPSec & SSL VPN",
                    "Linux (Ubuntu)",
                    "VMware / virtualization",
                    "Infoblox · F5 · Citrix",
                    "AlgoSec policy analysis",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-[11px] text-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* LANGUAGES + CERTS ROW */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* LANGUAGES / WORK STYLE */}
            <div className="relative rounded-2xl border border-white/10 bg-black/70 overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-black/80">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                  <Languages size={14} />
                  <span>Languages &amp; work style</span>
                </div>
              </div>

              <div className="p-4 space-y-3 text-[12px] md:text-[13px] text-gray-200">
                <p>
                  Comfortable in{" "}
                  <span className="text-emerald-300">
                    fully remote, distributed teams
                  </span>{" "}
                  with clear documentation and async-friendly communication.
                </p>
                <p className="text-gray-300">
                  Languages:{" "}
                  <span className="text-emerald-300">
                    French · Dutch · Arabic · English
                  </span>
                </p>
              </div>
            </div>

            {/* CERTIFICATIONS */}
            <div className="relative rounded-2xl border border-white/10 bg-black/70 overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-black/80">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                  <Award size={14} />
                  <span>Certifications</span>
                </div>
              </div>

              <div className="p-4 space-y-2 text-[12px] md:text-[13px] text-gray-200">
                <p>
                  <span className="font-semibold text-emerald-200">
                    Cisco CCNA
                  </span>{" "}
                  – issued 2022
                </p>
                <p>
                  <span className="font-semibold text-emerald-200">
                    CompTIA Linux+
                  </span>{" "}
                  – issued 2024
                </p>
                <p>
                  <span className="font-semibold text-emerald-200">
                    Fortinet Certified Fundamentals in Cybersecurity
                  </span>{" "}
                  – issued 2025
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
              secureit-hub :: about
            </span>
          </div>

          {/* Console body */}
          <div className="p-4 space-y-4">
            {/* Snapshot */}
            <div className="space-y-1.5">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> snapshot
              </p>
              <ul className="space-y-0.5 text-[11px] md:text-[12px] text-emerald-100/90">
                <li>• role: Network_&_Security_Engineer</li>
                <li>• stack: Cisco · Fortinet · Zscaler · VPN · Linux</li>
                <li>• mode: full_remote</li>
                <li>• current_mission: Ahold_Delhaize (BE)</li>
                <li>• focus: connectivity · stability · incident_response</li>
              </ul>
            </div>

            {/* Focus areas */}
            <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> focus_areas
              </p>
              <ul className="space-y-0.5 text-[11px] md:text-[12px] text-emerald-100/90">
                <li>- vpn_design &amp; secure_remote_access</li>
                <li>- firewall_policy &amp; segmentation_reviews</li>
                <li>- network_automation (Python / Ansible basics)</li>
                <li>- security_posture &amp; incident_analysis</li>
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
