import { ShieldCheck, Server, Network, Terminal, Cpu, Code, Layers } from "lucide-react";

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

        <h1 className="text-3xl md:text-4xl font-semibold text-white flex items-center gap-3">
          <Layers className="text-emerald-400 h-8 w-8" />
          Technical Skills &amp; Expertise
        </h1>

        <p className="text-sm md:text-base text-gray-400 max-w-3xl leading-[1.7]">
          A security-driven Network &amp; Systems stack focused on secure connectivity,
          VPN reliability and production-grade stability across hybrid enterprise
          environments.
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

              <div className="space-y-1.5 text-sm md:text-[13px] text-gray-300 leading-relaxed">
                <p>
                  <span className="text-emerald-300">
                    Cisco Routing &amp; Switching (CCNP Security – SVPN, CCNA)
                  </span>
                </p>
                <p>BGP · OSPF · EIGRP</p>
                <p>VLANs · STP · EtherChannel</p>
                <p>HSRP / VRRP</p>
                <p>Enterprise WAN / LAN environments</p>
                <p>VPN troubleshooting in production contexts</p>
                <p>Multi-site operational networks</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Cisco IOS",
                  "WAN / MPLS",
                  "Enterprise LAN/WAN",
                  "High availability enforcement",
                ].map((chip) => (
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
                    Fortinet FortiGate (policy control, NAT, IPSec VPN, IPS)
                  </span>
                </p>
                <p>Zscaler ZIA / ZPA administration</p>
                <p>IPSec &amp; SSL VPN (CCNP Security – SVPN level)</p>
                <p>Firewall rule lifecycle management</p>
                <p>Segmentation enforcement</p>
                <p>Secure remote-access environments</p>
                <p>Zero Trust principles (access control &amp; traffic boundaries)</p>
                <p>Security posture validation</p>
                <p>Incident impact analysis</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Zero Trust", "Access control", "Segmentation", "Policy lifecycle"].map(
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
                    Linux administration (Ubuntu – primary operational OS)
                  </span>
                </p>
                <p>Systemd &amp; service management</p>
                <p>Monitoring, SNMP &amp; Syslog analysis</p>
                <p>Bash &amp; operational scripting</p>
                <p>VMware (enterprise virtualization)</p>
                <p>Proxmox lab environments</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Systemd", "SNMP", "Syslog", "VMware", "Proxmox"].map((chip) => (
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
                    Python for network automation &amp; validation
                  </span>
                </p>
                <p>Backup automation &amp; configuration audits</p>
                <p>Drift detection &amp; compliance checks</p>
                <p>Ansible (network task basics)</p>
                <p>YAML / JSON structured configurations</p>
                <p>REST APIs</p>
                <p>Configuration templating</p>
                <p>Git / GitHub workflow integration</p>
              </div>

              <ul className="space-y-2 text-sm md:text-[13px] text-gray-200">
                <li>✔ Python for network automation &amp; validation</li>
                <li>✔ Backup automation &amp; configuration audits</li>
                <li>✔ Drift detection &amp; compliance checks</li>
                <li>✔ Ansible (network task basics)</li>
                <li>✔ YAML / JSON structured configurations</li>
                <li>✔ REST APIs &amp; configuration templating</li>
                <li>✔ Git / GitHub workflow integration</li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Python", "Ansible", "YAML/JSON", "REST APIs", "Git/GitHub"].map((chip) => (
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

          {/* ALSO EXPERIENCED WITH */}
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
                "Palo Alto (operational basics)",
                "Nmap",
                "Wireshark",
                "Syslog traffic analysis",
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

        {/* RIGHT COLUMN – TERMINAL SNAPSHOT */}
        <aside className="relative rounded-2xl border border-emerald-500/40 bg-black/85 overflow-hidden font-mono text-[12px] text-emerald-100">
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
│   ├── enterprise_routing_switching
│   ├── bgp_ospf_eigrp
│   └── high_availability_vpn_ops
├── security
│   ├── fortinet_policy_control
│   ├── zscaler_secure_access
│   └── ipsec_ssl_vpn_svnp
├── systems
│   ├── linux_operational_admin
│   ├── monitoring_syslog_snmp
│   └── virtualization_platforms
└── automation
    ├── python_network_validation
    ├── ansible_foundations
    └── structured_config_workflows`}
              </pre>
            </div>

            {/* Focus areas */}
            <div className="space-y-1.5 border-t border-emerald-500/20 pt-3">
              <p className="text-[11px] text-emerald-400">
                <span className="text-emerald-500">➜</span> focus_areas
              </p>
              <ul className="space-y-0.5 text-[11px] md:text-[12px] text-emerald-100/90">
                <li>secure_connectivity &amp; vpn_stability</li>
                <li>firewall_policy_lifecycle &amp; segmentation_enforcement</li>
                <li>observability &amp; incident_resolution</li>
                <li>enterprise_network_troubleshooting</li>
                <li>configuration_validation &amp; drift_control</li>
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
                <li>• scripting: Python · Bash · Ansible (foundations)</li>
                <li>• environment: Ubuntu workstation + controlled lab VMs</li>
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