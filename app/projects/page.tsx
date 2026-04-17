import { FolderGit2, ExternalLink } from "lucide-react";

type ExtraSection = {
  title: string;
  items: string | string[];
};

type Project = {
  title: string;
  period: string;
  stack: string[];
  intro: string;
  scope: string[];
  scopeLabel?: string;
  purpose: string;
  extraSections?: ExtraSection[];
  path: string;
};

const projects: Project[] = [
  {
    title: "Multi-Site Infrastructure Lab",
    period: "Operational",
    stack: ["Cisco", "Fortinet", "VPN", "Linux", "Monitoring"],
    intro:
      "Multi-site environment replicating segmented networks, routed domains and secure inter-site connectivity.",
    scope: [
      "IPSec site-to-site tunnels",
      "Policy-driven firewall enforcement",
      "Centralized logging & visibility",
      "SNMP monitoring",
      "Segmentation and traffic boundary validation",
    ],
    scopeLabel: "Scope includes:",
    purpose:
      "Purpose: simulate real production behavior under controlled conditions and validate secure connectivity patterns at scale.",
    extraSections: [
      {
        title: "Stack",
        items: "Cisco · Fortinet · VPN · Linux · Monitoring",
      },
    ],
    path: "~/labs/multi_site_infrastructure_lab",
  },
  {
    title: "Network Automation Toolkit",
    period: "Ongoing",
    stack: ["Python", "Automation", "CLI", "Structured Configs"],
    intro:
      "Operational Python toolkit designed to improve reliability, consistency and speed in network operations.",
    scope: [],
    purpose:
      "Focus: repeatability, execution control and reduction of human error in operational tasks.",
    extraSections: [
      {
        title: "Includes",
        items: [
          "Automated configuration backups",
          "Compliance & drift detection",
          "Inventory parsing",
          "CLI-driven bulk operations",
          "Structured validation workflows",
        ],
      },
      {
        title: "Extended use",
        items: [
          "Store-level connectivity diagnostics",
          "Multi-node validation (routers, nodes, endpoints)",
          "Rapid P2 troubleshooting support",
        ],
      },
      {
        title: "Stack",
        items: "Python · Automation · CLI · Structured Configs",
      },
    ],
    path: "~/labs/network_automation_toolkit",
  },
  {
    title: "Secure Remote Access Validation Lab",
    period: "Operational",
    stack: ["Zscaler", "VPN", "Firewall", "Access Control"],
    intro: "Comparative testing of secure remote access architectures:",
    scope: ["Zscaler ZIA / ZPA", "IPSec VPN", "SSL VPN"],
    purpose:
      "Designed to analyze real-world remote connectivity patterns, proxy behavior and secure access strategies.",
    extraSections: [
      {
        title: "Validation focus",
        items: [
          "Policy behavior",
          "Authentication flows",
          "Traffic inspection paths",
          "User experience vs security trade-offs",
          "Access segmentation enforcement",
        ],
      },
      {
        title: "Stack",
        items: "Zscaler · VPN · Firewall · Access Control",
      },
    ],
    path: "~/labs/secure_remote_access_validation_lab",
  },
  {
    title: "Incident Response & Log Analysis Playground",
    period: "Scenario Ready",
    stack: ["Linux", "Syslog", "Traffic Capture", "Automation"],
    intro: "Controlled environment for:",
    scope: [
      "Log correlation",
      "Syslog analysis",
      "Packet capture & replay",
      "Incident simulation",
      "Structured troubleshooting workflows",
    ],
    purpose:
      "Objective: strengthen observability discipline and improve P2 incident analysis across network security operations.",
    extraSections: [
      {
        title: "Stack",
        items: "Linux · Syslog · Traffic Capture · Automation",
      },
    ],
    path: "~/labs/incident_response_playground",
  },
  {
    title: "Firewall Policy Optimization Study",
    period: "Validation Phase",
    stack: ["Fortinet", "AlgoSec", "Segmentation"],
    intro: "Structured review and refinement of firewall rulebases.",
    scope: [
      "Rule cleanup & lifecycle management",
      "NAT optimization",
      "Segmentation reinforcement",
      "Policy overlap detection",
      "Change impact validation",
    ],
    scopeLabel: "Focus areas:",
    purpose:
      "Designed to improve clarity, performance and security posture in firewall environments.",
    extraSections: [
      {
        title: "Stack",
        items: "Fortinet · AlgoSec · Segmentation",
      },
    ],
    path: "~/labs/firewall_policy_optimization",
  },
];

const formatProjectDescription = (project: Project) => {
  const lines: string[] = [project.intro];

  if (project.scope.length > 0) {
    if (project.scopeLabel) {
      lines.push("", project.scopeLabel, ...project.scope.map((item) => `- ${item}`));
    } else {
      lines.push(...project.scope.map((item) => `- ${item}`));
    }
  }

  if (project.purpose) {
    lines.push("", project.purpose);
  }

  project.extraSections?.forEach((section) => {
    if (typeof section.items === "string") {
      lines.push("", `${section.title}: ${section.items}`);
    } else {
      lines.push("", `${section.title}:`, ...section.items);
    }
  });

  return lines.join("\n");
};

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

        <p className="text-sm md:text-base leading-relaxed text-gray-300 max-w-3xl">
          Infrastructure labs and operational tooling designed to validate secure
          connectivity, firewall behavior and network stability across
          production-like environments.
          <br />
          <br />
          These environments simulate real-world constraints such as
          segmentation, VPN reliability, proxy behavior (Zscaler), logging
          visibility and controlled change validation.
          <br />
          <br />
          They serve as validation platforms aligned with real operational
          challenges, especially in P2 incident troubleshooting and connectivity
          diagnostics.
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
                  {formatProjectDescription(project)}
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
                  {project.path}
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
                <li>• lab_mode: validation_platform</li>
                <li>• focus: secure_connectivity · proxy_behavior · policy_enforcement · automation · observability</li>
                <li>• environment: multi-site_vpn + segmented_network_domains</li>
                <li>• repository: github.com/SecureIT-Hub</li>
              </ul>
            </div>

            {/* Project types */}
            <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> project_types
              </p>
              <ul className="space-y-0.5 text-[11px] md:text-[12px] text-emerald-100/90">
                <li>lab_validation</li>
                <li>network_automation_tooling</li>
                <li>secure_remote_access_analysis</li>
                <li>incident_response_simulation</li>
                <li>firewall_policy_lifecycle_review</li>
              </ul>
            </div>

            {/* Stack matrix */}
            <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> stack_matrix
              </p>
              <pre className="text-[11px] md:text-[12px] text-emerald-100/90 leading-relaxed whitespace-pre">
{`stack = {
  network: [ "Cisco", "Fortinet", "IPSec" ],
  security: [ "Zscaler", "Firewall", "Segmentation" ],
  observability: [ "Syslog", "Monitoring", "Traffic Analysis" ],
  automation: [ "Python", "CLI", "Structured Workflows" ]
}`}
              </pre>
            </div>

            {/* Status */}
            <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> lab_status
              </p>
              <ul className="space-y-0.5 text-[11px] md:text-[12px] text-emerald-100/90">
                <li>• multi_site_lab: operational</li>
                <li>• automation_toolkit: ongoing</li>
                <li>• incident_playground: scenario_ready</li>
                <li>• firewall_study: validation_phase</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
