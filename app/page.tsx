"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Server,
  Network,
  Terminal,
  GlobeLock,
  Zap,
  Lock,
  Activity,
} from "lucide-react";

type LogKey = "INFRA" | "SECURITY" | "VPN" | "LINUX";

const LOG_CONTENT: Record<
  LogKey,
  {
    file: string;
    lines: string[];
  }
> = {
  INFRA: {
    file: "infra.log",
    lines: [
      "Cisco routing & switching in production networks.",
      "Resilient WAN/LAN behavior, clean routing paths and high-availability operations.",
      "Secure connectivity enforced with predictable traffic flows and controlled change validation.",
    ],
  },
  SECURITY: {
    file: "security.log",
    lines: [
      "Firewall policy operations and segmentation enforcement.",
      "Fortinet FortiGate policy enforcement (NAT, IPSec VPN, IPS) and controlled access boundaries.",
      "Security is structural: consistent policies, validated impact, and clear operational execution.",
    ],
  },
  VPN: {
    file: "vpn.log",
    lines: [
      "Secure remote-access and VPN architectures: IPSec, SSL, and Zscaler ZIA/ZPA paths.",
      "Tunnel stability, authentication flows, and traffic inspection behavior under production constraints.",
      "Built for reliable remote execution with controlled access and uptime awareness.",
    ],
  },
  LINUX: {
    file: "linux.log",
    lines: [
      "Linux (Ubuntu) servers & operational tooling as a daily engineering platform.",
      "CLI-based execution, monitoring, syslog visibility, and packet capture for validation and troubleshooting.",
      "Automation-ready workflows for consistent deployments and incident response.",
    ],
  },
};

export default function HomePage() {
  const [activeLog, setActiveLog] = useState<LogKey | null>(null);

  return (
    <>
      <section className="space-y-14 md:space-y-16 lg:space-y-20 max-w-6xl mx-auto">
        {/* PATH LABEL */}
        <div className="relative">
          <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-400/80 animate-pulse">
            /home
          </p>
          <div className="absolute -bottom-1 left-0 w-12 h-[1px] bg-gradient-to-r from-emerald-400/60 to-transparent" />
        </div>

        {/* HERO + INTRO */}
        <div className="grid gap-10 md:gap-12 lg:gap-14 md:grid-cols-[minmax(0,2fr)_minmax(0,1.35fr)] items-start">
          {/* LEFT – HERO TITLES & MAIN TEXT */}
          <div className="space-y-7 md:space-y-8">
            <div className="space-y-2 md:space-y-3">
              <div className="space-y-1.5 md:space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white flex items-center gap-3 md:hover:translate-x-1 transition-transform duration-300 group">
                  <ShieldCheck
                    className="text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover:rotate-6 transition-transform duration-300"
                    size={30}
                  />
                  SECURE SYSTEMS.
                </h1>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white flex items-center gap-3 md:hover:translate-x-1 transition-transform duration-300 group">
                  <Network
                    className="text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform duration-300"
                    size={30}
                  />
                  REMOTE EXECUTION.
                </h2>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white flex items-center gap-3 md:hover:translate-x-1 transition-transform duration-300 group">
                  <Zap
                    className="text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover:rotate-6 transition-transform duration-300"
                    size={30}
                  />
                  BUILT FOR IMPACT.
                </h3>
              </div>
            </div>

            {/* HERO COPY — updated to match client wording */}
            <div className="space-y-3.5 text-[0.95rem] sm:text-[1rem] text-gray-300 max-w-[780px] leading-[1.6]">
              <p>
                I operate secure and resilient network infrastructures leveraging{" "}
                <span className="text-emerald-300/90">
                  Cisco, Fortinet, Zscaler and Linux
                </span>{" "}
                platforms within{" "}
                <span className="text-emerald-300/90">
                  production environments
                </span>
                .
              </p>

              <p>
                My focus is on secure connectivity, firewall operations, VPN
                stability and controlled remote execution under strict uptime
                constraints.
              </p>

              <p>
                Background built across{" "}
                <span className="text-emerald-300/90">
                  Belgian production infrastructures
                </span>{" "}
                and fully remote operations. Structured, pragmatic and
                reliability-driven engineering with security as a constant
                foundation.
              </p>

              <p>
                Current mission:{" "}
                <span className="text-emerald-300/90">Ahold Delhaize</span> –
                hybrid infrastructure with high availability requirements and
                security-critical connectivity.
              </p>

              <p className="leading-relaxed">
                Multilingual: English · French · Dutch · Arabic
                <br />
                Fully remote capable. Security-driven. Operationally disciplined.
              </p>
            </div>

            {/* SHORT HIGHLIGHTS BAR — already matches, kept */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] md:text-xs">
              <span className="px-3 py-1 rounded-full border border-emerald-500/60 bg-emerald-500/10 text-emerald-300 uppercase tracking-[0.15em] hover:bg-emerald-500/20 hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 cursor-default">
                Network &amp; Security Engineer
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-200 uppercase tracking-[0.15em] hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
                CCNP Security – SVPN
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-200 uppercase tracking-[0.15em] hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
                10+ years in production environments
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-200 uppercase tracking-[0.15em] hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
                Belgium · Full Remote Ready
              </span>
            </div>
          </div>

          {/* RIGHT – STACK / CURRENT MISSION PANEL */}
          <div
            className="
              rounded-2xl border border-emerald-500/45
              bg-black/70
              shadow-[0_0_30px_rgba(16,185,129,0.3)]
              hover:shadow-[0_0_45px_rgba(16,185,129,0.45)]
              hover:border-emerald-500/70
              transition-all duration-500
              backdrop-blur-md
              relative overflow-hidden
              group
            "
          >
            {/* Subtle inner glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_60%)] opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Terminal top bar */}
            <div className="relative z-10 flex items-center justify-between px-3 py-2 border-b border-emerald-500/25 bg-gradient-to-r from-emerald-500/20 via-black to-emerald-500/20">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-300/80">
                secureit-hub :: context
              </span>
            </div>

            {/* Panel body — updated per client request */}
            <div className="relative z-10 p-5 sm:p-6 space-y-5">
              <div className="flex items-center gap-3">
                <Terminal className="text-emerald-400 animate-pulse" size={22} />
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/90">
                  CURRENT CONTEXT
                </p>
              </div>

              <div className="space-y-1.5 text-sm text-gray-200">
                <p className="hover:text-white transition-colors duration-200">
                  <span className="text-emerald-400 font-semibold">
                    Role:&nbsp;
                  </span>
                  Systems / Network Engineer
                </p>

                <p className="hover:text-white transition-colors duration-200">
                  <span className="text-emerald-400 font-semibold">
                    Mission:&nbsp;
                  </span>
                  Ahold Delhaize (Belgium &amp; remote) – hybrid infrastructure
                  with strict uptime and security enforcement requirements.
                </p>

                <p className="hover:text-white transition-colors duration-200">
                  <span className="text-emerald-400 font-semibold">
                    Primary Focus:&nbsp;
                  </span>
                  Secure connectivity operations, VPN reliability, firewall
                  policy control, incident resolution and service continuity.
                </p>
              </div>

              <div className="border-t border-emerald-500/25 pt-3.5 space-y-2">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
                  <Server className="text-emerald-400" size={16} />
                  CORE STACK
                </p>

                <div className="flex flex-wrap gap-2 text-[11px] text-emerald-200">
                  {[
                    "Cisco routing & switching (production networks)",
                    "Fortinet FortiGate (policy enforcement, NAT, VPN, IPS)",
                    "Zscaler ZIA / ZPA",
                    "IPSec & SSL VPN (CCNP Security – SVPN level)",
                    "Linux (Ubuntu servers & operational tooling)",
                    "VMware / virtualization",
                    "Infoblox · F5 · Citrix",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:text-emerald-300 transition-all duration-300 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-emerald-500/25 pt-3.5 space-y-1.5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
                  <GlobeLock className="text-emerald-400" size={16} />
                  WORKING MODE
                </p>
                <p className="text-xs text-gray-300 hover:text-gray-100 transition-colors duration-200">
                  Production-focused, full-remote delivery with structured
                  documentation, change discipline and controlled implementation
                  practices. Languages:{" "}
                  <span className="text-emerald-300 font-medium">
                    English · French · Dutch · Arabic
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* HOW I WORK – THREE COLUMNS (updated) */}
        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/60 hover:bg-black/75 hover:border-emerald-500/30 p-4 sm:p-5 space-y-3 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 relative z-10">
              <Activity
                className="text-emerald-400 group-hover:scale-110 transition-transform duration-300"
                size={20}
              />
              <p className="text-xs uppercase tracking-[0.2em] text-gray-300 group-hover:text-emerald-300 transition-colors duration-300">
                APPROACH
              </p>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed relative z-10">
              Every configuration change, firewall rule and access path is
              handled with structured validation, impact awareness and clear
              communication.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/60 hover:bg-black/75 hover:border-emerald-500/30 p-4 sm:p-5 space-y-3 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 relative z-10">
              <Lock
                className="text-emerald-400 group-hover:scale-110 transition-transform duration-300"
                size={20}
              />
              <p className="text-xs uppercase tracking-[0.2em] text-gray-300 group-hover:text-emerald-300 transition-colors duration-300">
                SECURITY MINDSET
              </p>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed relative z-10">
              Security is not a feature — it is a structural principle.
              Segmentation, policy consistency and predictable traffic flows
              preserve operational integrity.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/60 hover:bg-black/75 hover:border-emerald-500/30 p-4 sm:p-5 space-y-3 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 relative z-10">
              <Terminal
                className="text-emerald-400 group-hover:scale-110 transition-transform duration-300"
                size={20}
              />
              <p className="text-xs uppercase tracking-[0.2em] text-gray-300 group-hover:text-emerald-300 transition-colors duration-300">
                TOOLING &amp; AUTOMATION
              </p>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed relative z-10">
              Python and CLI-based tooling for automation, validation and
              operational efficiency — structured configs (YAML/JSON) and
              repeatable workflows ensuring consistent deployments.
            </p>
          </div>
        </div>

        {/* AT A GLANCE – SMALL STAT CARDS (content aligned to new copy) */}
        <div className="space-y-4">
          <div className="relative">
            <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-400/80">
              // at a glance
            </p>
            <div className="absolute -bottom-1 left-0 w-16 h-[1px] bg-gradient-to-r from-emerald-400/60 to-transparent" />
          </div>

          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Network & Security Engineer",
                value: "Role",
                desc: "Secure connectivity · VPN stability · Firewall operations.",
              },
              {
                label: "CCNP Security – SVPN",
                value: "Certified",
                desc: "Enterprise VPN and secure remote-access environments.",
              },
              {
                label: "Production environments",
                value: "10+ years",
                desc: "Uptime discipline, operational stability and service continuity.",
              },
              {
                label: "Belgium · Full Remote Ready",
                value: "Mode",
                desc: "Structured documentation, change discipline and controlled execution.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-black/70 hover:bg-black/80 hover:border-emerald-500/40 px-4 py-3 sm:py-4 flex flex-col gap-1.5 transition-all duration-300 group relative overflow-hidden cursor-default"
              >
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <p className="text-xs uppercase tracking-[0.18em] text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {item.label}
                </p>
                <p className="text-lg sm:text-xl font-semibold text-emerald-300 group-hover:text-emerald-400 group-hover:scale-105 transition-all duration-300">
                  {item.value}
                </p>
                <p className="text-[11px] sm:text-xs text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SMALL CAPABILITIES ROW – unchanged behavior */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 pt-4">
          {[
            { icon: Server, label: "INFRA", key: "INFRA" as LogKey },
            { icon: ShieldCheck, label: "SECURITY", key: "SECURITY" as LogKey },
            { icon: Network, label: "VPN", key: "VPN" as LogKey },
            { icon: Terminal, label: "LINUX", key: "LINUX" as LogKey },
          ].map(({ icon: Icon, label, key }) => (
            <button
              type="button"
              key={label}
              onClick={() => setActiveLog(key)}
              className="
                flex flex-col items-center gap-2 p-3.5 sm:p-4 
                rounded-2xl border border-white/10
                bg-black/70 backdrop-blur-md
                shadow-[0_0_18px_-6px_rgba(16,185,129,0.35)]
                hover:shadow-[0_0_28px_-4px_rgba(16,185,129,0.55)]
                transition-all duration-300
                hover:scale-105 cursor-pointer hover:border-emerald-400/50
                hover:bg-black/90
                group
                relative overflow-hidden
              "
            >
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Icon
                className="text-emerald-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] transition-all duration-300 relative z-10"
                size={26}
              />
              <p className="text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.18em] text-gray-300 group-hover:text-emerald-300 transition-colors duration-300 relative z-10">
                {label}
              </p>
            </button>
          ))}
        </div>

        {/* SIGNATURE / TRACEROUTE BLOCK – unchanged */}
        <div className="pt-8 flex justify-center">
          <div
            className="
              w-full max-w-xl
              rounded-2xl border border-emerald-500/45
              bg-black/90 
              overflow-hidden font-mono text-sm text-emerald-100
              relative
            "
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-emerald-500/20 to-transparent" />

            <div className="relative z-10 flex items-center justify-between px-4 py-2 border-b border-emerald-500/30 bg-gradient-to-r from-emerald-500/20 via-black to-emerald-500/20">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="hidden sm:inline text-[11px] uppercase tracking-[0.25em] text-emerald-200">
                traceroute :: secureit-hub.com
              </span>
            </div>

            <div className="relative z-10 p-5 space-y-2">
              <p className="text-emerald-300">
                $ traceroute <span className="text-emerald-100">secureit-hub.com</span>
              </p>

              <p className="text-emerald-100">
                {"  "}hop 1: user_location{" "}
                <span className="text-emerald-400/80">[edge_client]</span>
              </p>
              <p className="text-emerald-100">
                {"  "}hop 2: vpn_gateway{" "}
                <span className="text-emerald-400/80">[encrypted_tunnel_established]</span>
              </p>
              <p className="text-emerald-100">
                {"  "}hop 3: secureit_infra{" "}
                <span className="text-emerald-400/80">[routing_clean · fw_policies_ok]</span>
              </p>
              <p className="text-emerald-100">
                {"  "}hop 4: secureit_services{" "}
                <span className="text-emerald-400/80">[monitoring_online · logs_streaming]</span>
              </p>
              <p className="text-emerald-100">
                {"  "}hop 5: secureit-hub.com{" "}
                <span className="text-emerald-400/80">[app_alive · tls_ok]</span>
              </p>

              <p className="mt-3 text-emerald-300">
                status: <span className="text-emerald-100">reachable ✓</span>
              </p>
              <p className="text-emerald-300">
                signal: <span className="text-emerald-100">stable</span>
              </p>
              <p className="text-emerald-300">
                notes:{" "}
                <span className="text-emerald-100">
                  path_encrypted=true, packet_loss=0%, ready_for_remote_work
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TERMINAL-STYLE LOG MODAL */}
      {activeLog && (
        <div
          className="
            fixed inset-0 z-50 flex items-center justify-center
            px-3 sm:px-0
            bg-black/80 backdrop-blur-md
            animate-in fade-in duration-200
          "
          onClick={() => setActiveLog(null)}
        >
          <div
            className="
              w-full max-w-lg mx-auto
              rounded-2xl border border-emerald-500/45
              bg-black/95 shadow-[0_0_40px_rgba(16,185,129,0.8)]
              overflow-hidden font-mono text-xs sm:text-sm text-emerald-100
              max-h-[80vh] flex flex-col
              animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-4 duration-200
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-emerald-500/30 bg-gradient-to-r from-emerald-500/20 via-black to-emerald-500/20">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-200 truncate max-w-[55%] sm:max-w-none">
                secureit-hub :: {LOG_CONTENT[activeLog].file}
              </span>

              <button
                type="button"
                onClick={() => setActiveLog(null)}
                className="text-[10px] text-emerald-500/80 hover:text-emerald-300 px-1"
                aria-label="Close log"
              >
                ●
              </button>
            </div>

            <div className="p-4 sm:p-5 space-y-2 overflow-y-auto">
              {LOG_CONTENT[activeLog].lines.map((line) => (
                <p key={line} className="leading-relaxed break-words">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}