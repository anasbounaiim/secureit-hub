import { ChevronDown, ExternalLink, FolderGit2, ServerCog } from "lucide-react";

type CaseStudy = { title: string; summary: string; tags: string[]; context: string; contribution: string; outcome: string; takeaway: string };
type ExtraSection = { title: string; items: string | string[] };
type Project = { title: string; period: string; stack: string[]; intro: string; scope: string[]; scopeLabel?: string; purpose: string; extraSections?: ExtraSection[]; path: string };

const caseStudies: CaseStudy[] = [
  {
    title: "Overnight Warehouse PDA Outage",
    summary: "Investigated an overnight handheld-device outage, validated network connectivity and helped direct troubleshooting towards the vendor-managed application backend. Service was restored following vendor configuration changes and device restarts.",
    tags: ["Network Troubleshooting", "DNS", "Handheld Devices", "Vendor Coordination"],
    context: "Warehouse handheld devices were unable to initialize their application, disrupting overnight operations. Initial troubleshooting needed to distinguish a connectivity issue from an application or backend failure.",
    contribution: "I checked network and backend connectivity, investigated application initialization timeouts and reviewed hostname resolution behaviour. I documented the findings, supported coordination with the application vendor and tracked recovery with the operational team.",
    outcome: "The vendor applied backend configuration changes and requested device restarts. The operational team confirmed that the handheld devices were working again. No network connectivity fault was identified during the investigation.",
    takeaway: "Structured validation helped narrow the investigation and direct the incident towards the team able to restore service.",
  },
  {
    title: "Transport Dispatching IP Telephony Outage",
    summary: "Coordinated troubleshooting of a widespread Cisco IP phone outage affecting transport dispatching. The investigation covered switch-stack health, voice VLAN configuration and telephony services, with recovery confirmed before the night shift.",
    tags: ["Cisco", "Switching", "Voice VLAN", "CUCM", "Incident Coordination"],
    context: "Most dispatching IP phones were unavailable and displayed a ‘Host not found’ error. Restoring sufficient telephony capacity before the next operational shift was a key requirement.",
    contribution: "I investigated endpoint behaviour, coordinated device reset tests and requested checks of switch connectivity and voice VLAN configuration. I followed the network provider’s intervention, tracked the remaining telephony impact and continued escalation to the voice support team after network connectivity had been restored.",
    outcome: "The network provider corrected a software-version mismatch within the switch stack. The phone issue persisted despite subsequent port and voice VLAN checks. The voice provider then restarted Extension Mobility and Trust Verification Services across the telephony servers, restoring phone functionality before the night shift. Follow-up work increased diagnostic logging because the underlying service failure mechanism had not been conclusively established.",
    takeaway: "Restoring network infrastructure was an intermediate step. Recovery required continued investigation across both switching and telephony services, followed by operational confirmation.",
  },
  {
    title: "Warehouse Handheld Connectivity — DHCP Investigation",
    summary: "Investigated wireless connectivity problems affecting warehouse handheld devices. LAN DNS validation and comparison with a previous incident supported a targeted DHCP/Infoblox escalation. The infrastructure team restored service by restarting DHCP services.",
    tags: ["Infoblox", "DHCP", "DNS", "Wireless Connectivity", "Incident Analysis"],
    context: "Drivers and loading teams reported connectivity and login failures on wireless handheld devices. The investigation needed to distinguish a general backend or DNS issue from a problem affecting wireless clients.",
    contribution: "I confirmed that the application hostname resolved from the internal LAN and compared this with the resolution failures reported on wireless devices. I reviewed a previous incident with similar symptoms, identified DHCP address availability on Infoblox as a likely investigation path and escalated the findings to the infrastructure team. I also tracked partial recovery, documented the remaining impact and coordinated the overnight handover with operational teams.",
    outcome: "The infrastructure team restarted DHCP services on both Infoblox servers. The recorded resolution states that this freed IP addresses and restored service. The available evidence supports the DHCP investigation path, although detailed lease and pool diagnostics were not included in the incident record.",
    takeaway: "Comparing working and affected client environments, then using previous incident findings, helped produce a focused escalation with clear operational follow-up.",
  },
];

const projects: Project[] = [
  {
    title: "Multi-Site Infrastructure Lab", period: "Operational", stack: ["Cisco", "Fortinet", "VPN", "Linux", "Monitoring"],
    intro: "Multi-site environment replicating segmented networks, routed domains and secure inter-site connectivity.",
    scope: ["IPSec site-to-site tunnels", "Policy-driven firewall enforcement", "Centralized logging & visibility", "SNMP monitoring", "Segmentation and traffic boundary validation"],
    scopeLabel: "Scope includes:", purpose: "Purpose: simulate real production behavior under controlled conditions and validate secure connectivity patterns at scale.", path: "~/labs/multi_site_infrastructure_lab",
  },
  {
    title: "Network Automation Toolkit", period: "Ongoing", stack: ["Python", "Automation", "CLI", "Structured Configs"],
    intro: "Operational Python toolkit designed to improve reliability, consistency and speed in network operations.", scope: [],
    purpose: "Focus: repeatability, execution control and reduction of human error in operational tasks.",
    extraSections: [
      { title: "Includes", items: ["Automated configuration backups", "Compliance & drift detection", "Inventory parsing", "CLI-driven bulk operations", "Structured validation workflows"] },
      { title: "Extended use", items: ["Store-level connectivity diagnostics", "Multi-node validation (routers, nodes, endpoints)", "Rapid P2 troubleshooting support"] },
    ], path: "~/labs/network_automation_toolkit",
  },
  {
    title: "Secure Remote Access Validation Lab", period: "Operational", stack: ["Zscaler", "VPN", "Firewall", "Access Control"],
    intro: "Comparative testing of secure remote access architectures:", scope: ["Zscaler ZIA / ZPA", "IPSec VPN", "SSL VPN"],
    purpose: "Designed to analyze real-world remote connectivity patterns, proxy behavior and secure access strategies.",
    extraSections: [{ title: "Validation focus", items: ["Policy behavior", "Authentication flows", "Traffic inspection paths", "User experience vs security trade-offs", "Access segmentation enforcement"] }], path: "~/labs/secure_remote_access_validation_lab",
  },
  {
    title: "Incident Response & Log Analysis Playground", period: "Scenario Ready", stack: ["Linux", "Syslog", "Traffic Capture", "Automation"],
    intro: "Controlled environment for:", scope: ["Log correlation", "Syslog analysis", "Packet capture & replay", "Incident simulation", "Structured troubleshooting workflows"],
    purpose: "Objective: strengthen observability discipline and improve P2 incident analysis across network security operations.", path: "~/labs/incident_response_playground",
  },
  {
    title: "Firewall Policy Optimization Study", period: "Validation Phase", stack: ["Fortinet", "AlgoSec", "Segmentation"],
    intro: "Structured review and refinement of firewall rulebases.", scope: ["Rule cleanup & lifecycle management", "NAT optimization", "Segmentation reinforcement", "Policy overlap detection", "Change impact validation"],
    scopeLabel: "Focus areas:", purpose: "Designed to improve clarity, performance and security posture in firewall environments.", path: "~/labs/firewall_policy_optimization",
  },
];

function formatProjectDescription(project: Project) {
  const lines = [project.intro];
  if (project.scope.length) {
    if (project.scopeLabel) lines.push("", project.scopeLabel);
    lines.push(...project.scope.map((item) => `- ${item}`));
  }
  if (project.purpose) lines.push("", project.purpose);
  project.extraSections?.forEach((section) => {
    lines.push("", `${section.title}:`);
    lines.push(...(typeof section.items === "string" ? [section.items] : section.items.map((item) => `- ${item}`)));
  });
  return lines.join("\n");
}

function Tags({ tags }: { tags: string[] }) {
  return <div className="flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wide text-gray-200">{tag}</span>)}</div>;
}

function WindowBar({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between border-b border-emerald-500/20 bg-gradient-to-r from-emerald-500/15 via-black to-emerald-500/15 px-3 py-2">
      <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-500/80" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /></div>
      <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-300/80">{label}</span>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl space-y-12 md:space-y-16">
      <header className="space-y-4">
        <div className="relative inline-block"><p className="text-[11px] uppercase tracking-[0.3em] text-emerald-400/80">/projects</p><div className="absolute -bottom-1 left-0 h-px w-24 bg-gradient-to-r from-emerald-400/70 to-transparent" /></div>
        <h1 className="flex items-center gap-2 text-3xl font-semibold text-white md:text-4xl"><FolderGit2 className="shrink-0 text-emerald-400" size={24} /><span>Projects &amp; Operational Experience</span></h1>
        <p className="max-w-4xl text-sm leading-relaxed text-gray-300 md:text-base">Selected production incident case studies, laboratory environments and operational tooling focused on network security, secure connectivity and service continuity. Case studies are anonymized and describe my contribution alongside the teams involved.</p>
      </header>

      <section className="space-y-5" aria-labelledby="operational-case-studies">
        <div className="space-y-1"><p className="font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-400/70">production_incidents</p><h2 id="operational-case-studies" className="flex items-center gap-2 text-2xl font-semibold text-white"><ServerCog className="text-emerald-400" size={22} />Operational Case Studies</h2></div>
        <div className="grid gap-5">
          {caseStudies.map((study, index) => (
            <article key={study.title} className="overflow-hidden rounded-2xl border border-emerald-500/25 bg-black/80 shadow-[0_0_28px_-18px_rgba(16,185,129,0.9)]">
              <WindowBar label={`case-study-${String(index + 1).padStart(2, "0")}.log`} />
              <div className="space-y-4 p-4 sm:p-5">
                <h3 className="text-lg font-semibold text-white md:text-xl">{study.title}</h3>
                <p className="text-sm leading-relaxed text-gray-300">{study.summary}</p>
                <Tags tags={study.tags} />
                <details className="group rounded-xl border border-emerald-500/20 bg-black/55 open:border-emerald-500/35">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] text-emerald-300 [&::-webkit-details-marker]:hidden">View incident details<ChevronDown size={16} className="shrink-0 transition-transform group-open:rotate-180" /></summary>
                  <div className="grid gap-5 border-t border-emerald-500/20 px-4 py-4 md:grid-cols-2">
                    {[["Context", study.context], ["My Contribution", study.contribution], ["Resolution & Outcome", study.outcome], ["Key Takeaway", study.takeaway]].map(([title, body]) => (
                      <div key={title} className="space-y-1.5"><h4 className="font-mono text-xs uppercase tracking-wider text-emerald-400">{title}</h4><p className="text-[13px] leading-relaxed text-gray-300">{body}</p></div>
                    ))}
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5" aria-labelledby="labs-and-tooling">
        <div className="space-y-1"><p className="font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-400/70">controlled_environments</p><h2 id="labs-and-tooling" className="text-2xl font-semibold text-white">Labs &amp; Tooling</h2></div>
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className="group relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-black/80 shadow-[0_0_28px_-18px_rgba(16,185,129,0.9)]">
              <WindowBar label={`project-${String(index + 1).padStart(2, "0")}.log`} />
              <div className="space-y-4 p-4 sm:p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"><h3 className="text-lg font-semibold text-white">{project.title}</h3><span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />{project.period}</span></div>
                <div className="whitespace-pre-line rounded-lg border border-emerald-500/20 bg-black/70 px-3 py-2 font-mono text-[11px] leading-relaxed text-emerald-100/90 md:text-xs">{formatProjectDescription(project)}</div>
                <Tags tags={project.stack} /><p className="pt-1 font-mono text-[11px] text-gray-500">{project.path}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-emerald-400/0 transition group-hover:border-emerald-400/60 group-hover:shadow-[0_0_40px_-18px_rgba(16,185,129,1)]" />
            </article>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 pt-2"><a href="https://github.com/SecureIT-Hub" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-500/20 md:text-sm"><ExternalLink size={14} />View all repositories on GitHub</a><span className="font-mono text-[11px] text-gray-500">github.com/SecureIT-Hub</span></div>
      </section>
    </section>
  );
}
