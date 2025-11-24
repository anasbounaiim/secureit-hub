import { FolderGit2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Enterprise-Grade Homelab Architecture",
    period: "Ongoing",
    stack: ["Cisco", "Fortinet", "VPN", "Linux", "Monitoring"],
    description:
      "Designing a multi-site homelab replicating enterprise environments: segmented networks, IPSec tunnels, centralized logging (Syslog), SNMP monitoring, and policy-driven firewalling. A full playground for testing real-world production scenarios.",
    link: "https://github.com/SecureIT-Hub",
  },
  {
    title: "Network Automation Toolkit",
    period: "Ongoing",
    stack: ["Python", "Automation", "CLI", "Scripting"],
    description:
      "A collection of Python-based automations for daily network operations: config backups, compliance checks, device inventory parsing, and CLI-driven bulk tasks. Built for efficiency, clarity, and reproducibility.",
    link: "https://github.com/SecureIT-Hub",
  },
  {
    title: "Secure Remote Access Hardening Lab",
    period: "Lab",
    stack: ["Zscaler", "VPN", "Firewall", "Access Control"],
    description:
      "Research lab dedicated to testing and comparing remote access architectures, Zscaler ZPA/ZIA behavior, VPN policy tuning, and user experience trade-offs. Includes documentation of security posture and enforcement logic.",
    link: "https://github.com/SecureIT-Hub",
  },
  {
    title: "Incident Response & Log Analysis Playground",
    period: "Lab",
    stack: ["Linux", "Syslog", "Traffic Capture", "Automation"],
    description:
      "Environment to analyze logs, replay traffic captures, simulate incidents, and validate response workflows. Focus on visibility, forensic steps, and structured troubleshooting.",
    link: "https://github.com/SecureIT-Hub",
  },
  {
    title: "Firewall Policy Optimization Study",
    period: "Lab",
    stack: ["Fortinet", "AlgoSec", "Segmentation"],
    description:
      "Hands-on study focused on cleaning firewall rulebases, reducing shadowed rules, optimizing NAT policies, and improving segmentation using AlgoSec-style methodology.",
    link: "https://github.com/SecureIT-Hub",
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      {/* Header */}
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
          /projects
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold text-white flex items-center gap-2">
          <FolderGit2 className="text-emerald-400" size={24} />
          <span>Projects, Labs & Real-World Engineering</span>
        </h1>

        <p className="text-sm md:text-base text-gray-400 max-w-2xl">
          Practical labs, automation tools, and infrastructure designs focused on
          security, remote operations, and high-reliability networking. These
          projects reflect real-world scenarios, not theoretical examples.
        </p>
      </header>

      {/* Projects list */}
      <div className="space-y-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl bg-[#111]/70 p-6 ring-1 ring-green-500/20 backdrop-blur-sm hover:ring-emerald-400/40 hover:bg-[#151515]/80 transition"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
              <h2 className="text-lg md:text-xl font-semibold text-white">
                {project.title}
              </h2>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                {project.period}
              </span>
            </div>

            <p className="mt-3 text-sm md:text-base text-gray-300 leading-normal">
              {project.description}
            </p>

            {/* Stack tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-wide rounded-full bg-black/60 px-3 py-1 text-gray-200 ring-1 ring-green-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link */}
            {project.link && (
              <div className="mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs md:text-sm text-emerald-400 hover:underline"
                >
                  <ExternalLink size={14} />
                  <span>View more on GitHub</span>
                </a>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Note */}
      <p className="text-xs text-gray-500">
        Later, you can load these projects dynamically from GitHub or a simple
        JSON file to keep the portfolio always in sync.
      </p>
    </section>
  );
}
