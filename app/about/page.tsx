import {
    ShieldCheck,
    Server,
    Network,
    Terminal,
    GlobeLock,
  } from "lucide-react";
  
  export default function AboutPage() {
    return (
      <section className="space-y-8">
        {/* Header */}
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
            /about
          </p>
  
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            About Mohammed
          </h1>
  
          <p className="text-sm md:text-base text-gray-400 max-w-2xl">
            Systems &amp; Network Engineer specializing in secure architectures,
            remote operations, and high-impact infrastructure.
          </p>
        </header>
  
        {/* Main content */}
        <div className="grid gap-8 md:grid-cols-[2fr,1.3fr] items-start">
          {/* Bio text */}
          <div className="space-y-6 text-sm md:text-base leading-normal text-gray-200 max-w-none">
            {/* Who I am */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs uppercase tracking-[0.25em]">
                <ShieldCheck size={16} />
                <span>Profile</span>
              </div>
  
              <p>
                Systems &amp; Network Engineer with a sharp eye for security,
                architecture, and uptime. Cisco, Fortinet, Zscaler &amp; Linux
                form the core. Enterprise-grade VPNs, firewalls, and automation
                are my daily business.
              </p>
  
              <p>
                Linux+ certified. CCNA certified. CCNP Security in progress.
                Ubuntu as the main OS, with a Kali VM tuned for audits and
                offensive security testing. Stable by default. Reactive by design.
              </p>
            </div>
  
            {/* What I work with */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs uppercase tracking-[0.25em]">
                <Server size={16} />
                <span>Tooling &amp; Ecosystem</span>
              </div>
  
              <p>
                Zscaler, AlgoSec, Infoblox, Citrix — not buzzwords. I work with
                them. I fix with them. I improve with them. From VPN design to
                firewall policy audits and network automation, I focus on keeping
                things secure, observable, and maintainable.
              </p>
            </div>
  
            {/* Current mission */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs uppercase tracking-[0.25em]">
                <Network size={16} />
                <span>Current mission</span>
              </div>
  
              <p>
                Ahold Delhaize — large-scale hybrid infrastructure, high
                availability, and full-remote delivery. Every issue is a puzzle
                solved with clean logic, operational discipline, and a constant
                focus on uptime.
              </p>
            </div>
  
            {/* How I work */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs uppercase tracking-[0.25em]">
                <GlobeLock size={16} />
                <span>How I operate</span>
              </div>
  
              <p>
                Comfortable in fully remote, distributed teams. I document,
                automate, and simplify wherever possible — so systems are stable,
                handovers are clean, and incidents are rare.
              </p>
  
              <p>
                Multilingual: French, Dutch, Arabic, English. Coffee black. Focus
                sharp. Discipline non-negotiable.
              </p>
            </div>
          </div>
  
          {/* Side box */}
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
        <li>• role: Systems &amp; Network Security Engineer</li>
        <li>• stack: Cisco, Fortinet, Zscaler, VPN, Linux</li>
        <li>• mode: Fully remote</li>
        <li>• strengths: Automation, hardening, incident response</li>
        <li>• current_mission: Ahold Delhaize</li>
      </ul>
    </div>

    {/* Focus areas */}
    <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
      <p className="text-[11px] text-emerald-400">
        <span className="text-emerald-500">➜</span> focus_areas
      </p>
      <ul className="space-y-0.5 text-[11px] md:text-[12px] text-emerald-100/90">
        <li>- vpn_design &amp; secure_remote_access</li>
        <li>- firewall_architecture &amp; policy_reviews</li>
        <li>- network_automation (Python / Ansible)</li>
        <li>- security_posture_assessments</li>
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
            href="https://linkedin.com/in/mohammed-arbaoui"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-400 hover:underline"
          >
            linkedin.com/in/mohammed-arbaoui
          </a>
        </li>
      </ul>
    </div>
  </div>
</aside>

        </div>
      </section>
    );
  }
  