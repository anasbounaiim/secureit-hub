import { FolderGit2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Enterprise-grade homelab architecture",
    period: "Ongoing",
    stack: ["Cisco", "Fortinet", "VPN", "Linux", "Monitoring"],
    description: [
      "Multi-site homelab built like an enterprise environment: segmented networks, IPSec tunnels, centralized logging, SNMP monitoring and policy-driven firewalling.A full playground to test real production behavior.",
      "Cisco · Fortinet · VPN · Linux · Monitoring ~/labs/enterprise_homelab",
    ],
  },
  {
    title: "Network automation toolkit",
    period: "Ongoing",
    stack: ["Python", "Automation", "CLI", "Scripting"],
    description: [
      "Python tools for daily network operations: backups, compliance checks, inventory parsing and CLI-based bulk tasks. Focused on clarity, repeatability and speed.",
      "Python · Automation · CLI · Scripting ~/labs/automation_toolkit",
    ],
  },
  {
    title: "Secure remote access hardening lab",
    period: "Lab",
    stack: ["Zscaler", "VPN", "Firewall", "Access control"],
    description: [
      "Testing and comparing remote-access paths: Zscaler ZPA / ZIA, IPSec, SSL VPN.Focus on policy behavior, user experience and security posture.",
      "Zscaler · VPN · Firewall · Access control ~/labs/remote_access_hardening",
    ],
  },
  {
    title: "Incident response and log analysis playground",
    period: "Lab",
    stack: ["Linux", "Syslog", "Traffic capture", "Automation"],
    description: [
      "Environment for log analysis, packet replay and incident simulation.",
      "Objective: visibility, forensic discipline and structured troubleshooting.",
      "Objective: visibility, forensic discipline, structured troubleshooting. Linux · Syslog · Traffic capture · Automation ~/labs/incident_response_playground",
    ],
  },
  {
    title: "Firewall policy optimization study",
    period: "Lab",
    stack: ["Fortinet", "AlgoSec", "Segmentation"],
    description: [
      "Review and optimization of firewall rulebases: cleanup, segmentation and NAT improvements.Fortinet · AlgoSec · Segmentation",
      "Fortinet · AlgoSec · Segmentation ~/labs/firewall_policy_optimization",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto space-y-10 md:space-y-12 lg:space-y-16">
      {/* PATH + TITLE */}
      <header className="space-y-4">
        <div className="relative inline-block">
          <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-400/80">
            /projects
          </p>
          <div className="absolute -bottom-1 left-0 w-24 h-[1px] bg-gradient-to-r from-emerald-400/70 to-transparent" />
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-white flex items-center gap-2">
          <FolderGit2 className="text-emerald-400" size={24} />
          <span>Security Labs & Projects</span>
        </h1>

        <p className="text-sm md:text-base leading-relaxed text-gray-300 max-w-2xl space-y-1">
  <span className="block">
    <span className="text-emerald-300/90 font-medium">Projects, labs and real-world engineering</span>
  </span>

  <span className="block mt-1">
    Hands-on labs, automation tools and network designs focused on{" "}
    <span className="text-emerald-300">security</span>,{" "}
    <span className="text-emerald-300">remote access</span> and{" "}
    <span className="text-emerald-300">reliable connectivity</span>.
  </span>

  <span className="block mt-1">
    Each project reflects{" "}
    <span className="text-emerald-400 font-medium">real production behavior</span>,
    not theoretical exercises.
  </span>
</p>

      </header>

      {/* MAIN GRID: PROJECTS + TERMINAL SIDEBAR */}
      <div className="grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-[1.8fr,1.2fr] items-start">
        {/* LEFT – PROJECT FEED */}
        <div className="space-y-4 md:space-y-5">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="relative rounded-2xl border border-emerald-500/25 bg-black/80 shadow-[0_0_28px_-18px_rgba(16,185,129,0.9)] overflow-hidden group"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-emerald-500/20 bg-gradient-to-r from-emerald-500/15 via-black to-emerald-500/15">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>

                <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-300/80">
                  project-{String(index + 1).padStart(2, "0")}.log
                </span>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-5 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h2 className="text-lg md:text-xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {project.period}
                  </span>
                </div>

                {/* DESCRIPTION AS TERMINAL BLOCK */}
                <div className="font-mono text-[11px] md:text-[12px] text-emerald-100/90 bg-black/70 border border-emerald-500/20 rounded-lg px-3 py-2 leading-relaxed whitespace-pre-line">
                  {project.description.join("\n")}
                </div>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] uppercase tracking-wide rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer path */}
                <p className="text-[11px] text-gray-500 font-mono pt-1">
                  ~/labs/{project.title.toLowerCase().replace(/\s+/g, "_")}
                </p>
              </div>

              {/* Subtle hover outline */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-emerald-400/0 group-hover:border-emerald-400/60 group-hover:shadow-[0_0_40px_-18px_rgba(16,185,129,1)] transition" />
            </article>
          ))}

          {/* GitHub CTA */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://github.com/SecureIT-Hub"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs md:text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 transition"
            >
              <ExternalLink size={14} />
              <span>View all repositories on GitHub</span>
            </a>

            <span className="text-[11px] text-gray-500 font-mono">
              github.com/SecureIT-Hub
            </span>
          </div>
        </div>

        {/* RIGHT – TERMINAL SNAPSHOT */}
        <aside
          className="
            relative rounded-2xl border border-emerald-500/40 
            bg-black/85 
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
              secureit-hub :: projects
            </span>
          </div>

          {/* Console body */}
          <div className="p-4 sm:p-5 space-y-4">
            {/* Summary */}
            <div className="space-y-1.5">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> summary
              </p>
              <ul className="space-y-0.5 text-[11px] md:text-[12px] text-emerald-100/90">
                <li>• homelab_mode: enterprise_grade</li>
                <li>• focus: security · automation · observability</li>
                <li>• env: multi-site_vpn + segmented_networks</li>
                <li>• repo: github.com/SecureIT-Hub</li>
              </ul>
            </div>

            {/* Project types */}
            <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> project_types
              </p>
              <ul className="space-y-0.5 text-[11px] md:text-[12px] text-emerald-100/90">
                <li>- homelab_architecture_design</li>
                <li>- network_automation_tooling</li>
                <li>- secure_remote_access_labs</li>
                <li>- incident_response_playgrounds</li>
                <li>- firewall_policy_optimization</li>
              </ul>
            </div>

            {/* Stack matrix */}
            <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> stack_matrix
              </p>
              <pre className="text-[11px] md:text-[12px] text-emerald-100/90 leading-relaxed whitespace-pre">
{`stack = {
  network:   [ "Cisco", "Fortinet", "VPN" ],
  security:  [ "Zscaler", "Firewall", "Segmentation" ],
  systems:   [ "Linux", "Syslog", "Monitoring" ],
  automation:[ "Python", "CLI", "Scripting" ]
}`}
              </pre>
            </div>

            {/* Status */}
            <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> lab_status
              </p>
              <ul className="space-y-0.5 text-[11px] md:text-[12px] text-emerald-100/90">
                <li>• enterprise_homelab: online</li>
                <li>• automation_toolkit: iterating</li>
                <li>• incident_playground: ready_for_scenarios</li>
                <li>• firewall_study: in_progress</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
