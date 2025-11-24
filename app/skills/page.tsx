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
      <section className="space-y-10">
        {/* Header */}
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
            /skills
          </p>
  
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            Technical Skills & Expertise
          </h1>
  
          <p className="text-sm md:text-base text-gray-400 max-w-2xl">
            A security-driven technical stack built for stable, scalable,
            and remote-friendly network operations.
          </p>
        </header>
  
        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">
  
          {/* Networking */}
          <div className="rounded-2xl bg-[#111]/70 p-6 ring-1 ring-green-500/20 backdrop-blur-sm space-y-4">
            <div className="flex items-center gap-2">
              <Network className="text-emerald-400" size={20} />
              <h2 className="text-sm uppercase tracking-[0.25em] text-emerald-400">
                Networking
              </h2>
            </div>
  
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              <li>✔ Cisco Routing & Switching (CCNA / CCNP level)</li>
              <li>✔ BGP, OSPF, EIGRP — design + troubleshooting</li>
              <li>✔ VLANs, STP, EtherChannel, HSRP/VRRP</li>
              <li>✔ QoS, traffic shaping, link optimization</li>
            </ul>
          </div>
  
          {/* Security */}
          <div className="rounded-2xl bg-[#111]/70 p-6 ring-1 ring-green-500/20 backdrop-blur-sm space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-emerald-400" size={20} />
              <h2 className="text-sm uppercase tracking-[0.25em] text-emerald-400">
                Security
              </h2>
            </div>
  
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              <li>✔ Fortinet FortiGate (policies, VPN, IPS, NAT)</li>
              <li>✔ Zscaler ZIA / ZPA administration</li>
              <li>✔ Firewall rules, segmentation, access design</li>
              <li>✔ IPSec / SSL VPN design & troubleshooting</li>
            </ul>
          </div>
  
          {/* Systems & Platforms */}
          <div className="rounded-2xl bg-[#111]/70 p-6 ring-1 ring-green-500/20 backdrop-blur-sm space-y-4">
            <div className="flex items-center gap-2">
              <Terminal className="text-emerald-400" size={20} />
              <h2 className="text-sm uppercase tracking-[0.25em] text-emerald-400">
                Systems & Platforms
              </h2>
            </div>
  
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              <li>✔ Linux administration (Debian / Ubuntu)</li>
              <li>✔ Bash & shell scripting</li>
              <li>✔ Monitoring: SNMP, Syslog, Zabbix, Prometheus basics</li>
              <li>✔ Virtualization (VMware, Proxmox, Hyper-V)</li>
            </ul>
          </div>
  
          {/* Automation */}
          <div className="rounded-2xl bg-[#111]/70 p-6 ring-1 ring-green-500/20 backdrop-blur-sm space-y-4">
            <div className="flex items-center gap-2">
              <Code className="text-emerald-400" size={20} />
              <h2 className="text-sm uppercase tracking-[0.25em] text-emerald-400">
                Automation & Tooling
              </h2>
            </div>
  
            <ul className="space-y-2 text-sm md:text-base text-gray-300">
              <li>✔ Python for networking automation</li>
              <li>✔ Automating backups, audits & config checks</li>
              <li>✔ Ansible basics for network tasks</li>
              <li>✔ YAML / JSON workflows & structured configs</li>
            </ul>
          </div>
        </div>
  
        {/* Additional Optional Section */}
        <div className="rounded-2xl bg-[#111]/70 p-6 ring-1 ring-green-500/10 backdrop-blur-sm space-y-4">
          <h2 className="text-xs uppercase tracking-[0.3em] text-emerald-400">
            Also Experienced With
          </h2>
  
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-300 text-sm">
            <li>• AlgoSec</li>
            <li>• Infoblox</li>
            <li>• Citrix</li>
            <li>• Palo Alto basics</li>
            <li>• Git / GitHub</li>
            <li>• Nmap</li>
            <li>• Wireshark</li>
            <li>• Syslog analysis</li>
          </ul>
        </div>
      </section>
    );
  }
  