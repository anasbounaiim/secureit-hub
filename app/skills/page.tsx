import {
  ShieldCheck,
  Server,
  Network,
  Terminal,
  Cpu,
  Cloud,
  Lock,
  Code,
} from "lucide-react";

export default function SkillsPage() {
  return (
    <section className="max-w-6xl mx-auto space-y-10 md:space-y-12 lg:space-y-16">
      {/* PATH + TITLE */}
      <header className="space-y-4">
        <div className="relative inline-block">
          <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-400/80">
            /skills
          </p>
          <div className="absolute -bottom-1 left-0 w-20 h-[1px] bg-gradient-to-r from-emerald-400/70 to-transparent" />
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          Technical Skills &amp; Expertise
        </h1>

        <p className="text-sm md:text-base text-gray-400 max-w-2xl leading-[1.7]">
          A{" "}
          <span className="text-emerald-300">
            security-driven network &amp; systems stack
          </span>{" "}
          focused on stable, scalable and remote-friendly operations across
          hybrid environments.
        </p>
      </header>

      {/* MAIN GRID */}
      <div className="grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-[1.7fr,1.3fr] items-start">
        {/* LEFT COLUMN – TERMINAL CARDS */}
        <div className="space-y-6 md:space-y-7">
          {/* NETWORKING */}
          <div className="relative rounded-2xl border border-emerald-500/35 bg-black/80 shadow-[0_0_30px_rgba(16,185,129,0.35)] overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-emerald-500/25 bg-gradient-to-r from-emerald-500/18 via-black to-emerald-500/18">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-300/80">
                networking.ts
              </span>
            </div>

            {/* subtle inner glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_60%)]" />

            <div className="relative p-4 sm:p-5 space-y-4">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-emerald-300">
                <Network size={16} />
                <span>Networking</span>
              </div>

              {/* normal paragraphs with light accent */}
              <div className="space-y-1.5 text-sm md:text-[13px] text-gray-300 leading-relaxed">
                <p>
                  <span className="text-emerald-300">
                    Cisco Routing &amp; Switching (CCNA, CCNP Security in
                    progress)
                  </span>
                </p>
                <p>BGP, OSPF, EIGRP</p>
                <p>VLANs, STP, EtherChannel, HSRP / VRRP</p>
                <p>Enterprise WAN/LAN design and VPN troubleshooting</p>
                <p>Production-grade network operations across multiple sites</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Cisco IOS", "WAN / MPLS", "LAN design", "High availability"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-[11px] text-gray-200"
                    >
                      {chip}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* SECURITY */}
          <div className="relative rounded-2xl border border-emerald-500/35 bg-black/80 shadow-[0_0_30px_rgba(16,185,129,0.35)] overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-emerald-500/25 bg-gradient-to-r from-emerald-500/18 via-black to-emerald-500/18">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-300/80">
                security.cfg
              </span>
            </div>

            {/* subtle inner glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_60%)]" />

            <div className="relative p-4 sm:p-5 space-y-4">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-emerald-300">
                <ShieldCheck size={16} />
                <span>Security</span>
              </div>

              <div className="space-y-1.5 text-sm md:text-[13px] text-gray-300 leading-relaxed">
                <p>
                  <span className="text-emerald-300">
                    Fortinet FortiGate (policies, NAT, VPN, IPS)
                  </span>
                </p>
                <p>Zscaler ZIA / ZPA administration</p>
                <p>Firewall rules, segmentation and secure access design</p>
                <p>IPSec VPN design, remote access stability</p>
                <p>Security posture review and incident analysis</p>
              </div>

              <ul className="space-y-2 text-sm md:text-[13px] text-gray-200">
                {/* left intentionally empty */}
              </ul>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Zero Trust", "Remote access", "Segmentation", "Policy review"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-[11px] text-gray-200"
                    >
                      {chip}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* SYSTEMS & PLATFORMS */}
          <div className="relative rounded-2xl border border-white/12 bg-black/75 overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-black/80">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                <Cpu size={14} />
                <span>Systems &amp; Platforms</span>
              </div>
            </div>

            <div className="p-4 space-y-3 text-[12px] md:text-[13px] text-gray-200">
              <div className="space-y-1.5 text-sm md:text-[13px] text-gray-300 leading-relaxed">
                <p>
                  <span className="text-emerald-300">
                    Linux administration (Ubuntu as main OS)
                  </span>
                </p>
                <p>Bash and shell scripting</p>
                <p>Monitoring and log analysis</p>
                <p>VMware and Proxmox virtualization</p>
              </div>

              <ul className="space-y-2">
                <li>✔ Linux administration (Ubuntu)</li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Systemd", "Log analysis", "VMware", "Proxmox"].map((chip) => (
                  <span
                    key={chip}
                    className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-[11px] text-gray-200"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* AUTOMATION & TOOLING */}
          <div className="relative rounded-2xl border border-white/12 bg-black/75 overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-black/80">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                <Code size={14} />
                <span>Automation &amp; Tooling</span>
              </div>
            </div>

            <div className="p-4 space-y-3 text-[12px] md:text-[13px] text-gray-200">
              <div className="space-y-1.5 text-sm md:text-[13px] text-gray-300 leading-relaxed">
                <p>
                  <span className="text-emerald-300">
                    Python for network automation
                  </span>
                </p>
                <p>Backups, audits, config checks</p>
                <p>Ansible basics for network tasks</p>
                <p>Structured YAML / JSON configurations</p>
              </div>

              <ul className="space-y-2">
                <li>✔ Python for networking automation</li>
                <li>✔ Automating backups, audits &amp; config checks</li>
                <li>✔ Ansible basics for network tasks</li>
                <li>✔ YAML / JSON workflows &amp; structured configs</li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Git / GitHub", "REST APIs", "Config templates"].map((chip) => (
                  <span
                    key={chip}
                    className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-[11px] text-gray-200"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ALSO EXPERIENCED WITH – TAG GRID */}
          <div className="rounded-2xl border border-white/10 bg-black/70 p-4 sm:p-5 space-y-3">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-emerald-300">
              <Server size={14} />
              <span>Also experienced with</span>
            </div>

            <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[12px] text-gray-200">
              {[
                "AlgoSec",
                "Infoblox",
                "Citrix",
                "Palo Alto (basics)",
                "Git / GitHub",
                "Nmap",
                "Wireshark",
                "Syslog analysis",
              ].map((item) => (
                <li
                  key={item}
                  className="px-2.5 py-1 rounded-md border border-white/5 bg-white/5"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN – TERMINAL SNAPSHOT OF SKILLS */}
        <aside
          className="
            relative rounded-2xl border border-emerald-500/40 
            bg-black/85 shadow-[0_0_32px_rgba(16,185,129,0.5)]
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
              secureit-hub :: skills
            </span>
          </div>

          {/* Console body */}
          <div className="p-4 sm:p-5 space-y-4">
            {/* Skills tree */}
            <div className="space-y-1.5">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> skills tree
              </p>
              <pre className="text-[11px] md:text-[12px] text-emerald-100/90 leading-relaxed whitespace-pre">
{`skills/
├── networking
│   ├── cisco_routing_switching
│   ├── bgp_ospf_eigrp
│   └── qos_high_availability
├── security
│   ├── fortinet_fortigate
│   ├── zscaler_zia_zpa
│   └── vpn_ipsec_ssl
├── systems
│   ├── linux_admin
│   ├── monitoring_snmp_syslog
│   └── virtualization_vmware_proxmox
└── automation
    ├── python_networking
    ├── ansible_basics
    └── yaml_json_workflows`}
              </pre>
            </div>

            {/* Focus areas */}
            <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> focus_areas
              </p>
              <ul className="space-y-0.5 text-[11px] md:text-[12px] text-emerald-100/90">
                <li>- secure_connectivity &amp; remote_access</li>
                <li>- firewall_policies &amp; segmentation_reviews</li>
                <li>- observability &amp; incident_response</li>
                <li>- config_automation &amp; drift_control</li>
              </ul>
            </div>

            {/* Tooling snapshot */}
            <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> tooling_snapshot
              </p>
              <ul className="space-y-0.5 text-[11px] md:text-[12px] text-emerald-100/90">
                <li>• primary_stack: Cisco · Fortinet · Zscaler · Linux</li>
                <li>• side_tools: AlgoSec · Infoblox · Citrix · Wireshark</li>
                <li>• scripting: Python · Bash · Ansible_basics</li>
                <li>• env: ubuntu_desktop + lab_vms</li>
              </ul>
            </div>

            {/* System status */}
            <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> system_status
              </p>
              <div className="flex items-center gap-2 text-[11px] md:text-[12px] text-emerald-200">
                <Terminal size={13} className="text-emerald-400" />
                <span>ready_for_network_security_missions := true;</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
