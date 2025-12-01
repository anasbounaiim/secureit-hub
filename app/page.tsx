"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Server,
  Network,
  Terminal,
  GlobeLock,
  Zap,
  Building2,
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
      "Enterprise-grade infrastructures with Cisco switching, routing and segmented designs.",
      "Focus on clean topologies, resilient routing (OSPF/BGP), predictable paths and stable WAN connectivity.",
      "Built for operational discipline and reliability in multi-site environments.",
    ],
  },
  SECURITY: {
    file: "security.log",
    lines: [
      "Firewall operations and segmentation with Fortinet and Zscaler.",
      "Rules, NAT, VPN, IPS, visibility and incident handling with clarity and control.",
      "Security aligned with continuity, stability and clean enforcement.",
    ],
  },
  VPN: {
    file: "vpn.log",
    lines: [
      "Enterprise remote access and site-to-site VPNs with Cisco, Fortinet and Zscaler.",
      "IPSec, SSL, ZPA/ZIA behavior, tunnel stability and clean troubleshooting under pressure.",
      "Designed for reliability and consistent access paths.",
    ],
  },
  LINUX: {
    file: "linux.log",
    lines: [
      "Linux as primary engineering environment (Ubuntu + Kali VM).",
      "System admin, CLI, automation, logs, packet capture and secure tooling.",
      "A stable platform for structured work and remote execution.",
    ],
  },
};

export default function HomePage() {
  const [activeLog, setActiveLog] = useState<LogKey | null>(null);

  return (
    <>
      <section className="space-y-14 md:space-y-16">
        {/* PATH LABEL */}
        <div className="relative">
          <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-400/80 animate-pulse">
            /home
          </p>
          <div className="absolute -bottom-1 left-0 w-12 h-[1px] bg-gradient-to-r from-emerald-400/60 to-transparent"></div>
        </div>

        {/* HERO + INTRO */}
        <div className="grid gap-10 md:gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] items-start">
          {/* LEFT – HERO TITLES & MAIN TEXT */}
          <div className="space-y-6">
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white flex items-center gap-3 hover:translate-x-1 transition-transform duration-300 group">
                <ShieldCheck
                  className="text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover:rotate-12 transition-transform duration-300"
                  size={30}
                />
                SECURE SYSTEMS.
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white flex items-center gap-3 hover:translate-x-1 transition-transform duration-300 group">
                <Network
                  className="text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform duration-300"
                  size={30}
                />
                REMOTE EXECUTION.
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white flex items-center gap-3 hover:translate-x-1 transition-transform duration-300 group">
                <Zap
                  className="text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover:rotate-12 transition-transform duration-300"
                  size={30}
                />
                BUILT FOR IMPACT.
              </h3>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
              I design, secure and operate{" "}
              <span className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors duration-300 cursor-default">
                enterprise-grade networks
              </span>{" "}
              using Cisco, Fortinet, Zscaler and Linux. My daily work is focused
              on{" "}
              <span className="font-medium text-gray-100">
                VPN connectivity, firewall operations, secure remote access and
                clean troubleshooting in live production environments.
              </span>
            </p>

            {/* SHORT HIGHLIGHTS BAR */}
            <div className="flex flex-wrap gap-3 text-[11px] sm:text-xs">
              <span className="px-3 py-1 rounded-full border border-emerald-500/60 bg-emerald-500/10 text-emerald-300 uppercase tracking-[0.15em] hover:bg-emerald-500/20 hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 cursor-default">
                Network & Security Engineer
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-200 uppercase tracking-[0.15em] hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
                10+ years in operational roles
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-200 uppercase tracking-[0.15em] hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
                Belgium · Full Remote Ready
              </span>
            </div>
          </div>

          {/* RIGHT – STACK / CURRENT MISSION PANEL */}
          <div
            className="
            rounded-2xl border border-emerald-500/40 bg-black/60 
            shadow-[0_0_25px_rgba(16,185,129,0.18)]
            hover:shadow-[0_0_35px_rgba(16,185,129,0.28)]
            hover:border-emerald-500/60
            transition-all duration-500
            backdrop-blur-sm
            relative overflow-hidden
            group
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
                secureit-hub :: context
              </span>
            </div>

            {/* Panel body */}
            <div className="p-5 sm:p-6 space-y-4 relative z-10">
              {/* Animated corner accent */}
              <div className="pointer-events-none absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl group-hover:bg-emerald-500/10 transition-all duration-700" />

              <div className="flex items-center gap-3 relative z-10">
                <Terminal className="text-emerald-400 animate-pulse" size={22} />
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/90">
                  CURRENT CONTEXT
                </p>
              </div>

              <div className="space-y-1 text-sm text-gray-200 relative z-10">
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
                  with strong uptime and security requirements.
                </p>
                <p className="hover:text-white transition-colors duration-200">
                  <span className="text-emerald-400 font-semibold">
                    Focus:&nbsp;
                  </span>
                  Secure connectivity, stability, incident resolution and service
                  continuity.
                </p>
              </div>

              <div className="border-t border-emerald-500/20 pt-3 space-y-2 relative z-10">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
                  <Server className="text-emerald-400" size={16} />
                  CORE STACK
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] text-emerald-200">
                  {[
                    "Cisco (routing & switching)",
                    "Fortinet FortiGate",
                    "Zscaler ZIA / ZPA",
                    "IPSec & SSL VPN",
                    "Linux (Ubuntu / servers)",
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

              <div className="border-t border-emerald-500/20 pt-3 space-y-1 relative z-10">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
                  <GlobeLock className="text-emerald-400" size={16} />
                  WORKING MODE
                </p>
                <p className="text-xs text-gray-300 hover:text-gray-100 transition-colors duration-200">
                  Full-remote, production-focused and documentation-friendly.
                  Languages:{" "}
                  <span className="text-emerald-300 font-medium">
                    English, French, Dutch, Arabic.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* HOW I WORK – THREE COLUMNS */}
      {/* HOW I WORK – THREE COLUMNS */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-emerald-500/30 p-4 sm:p-5 space-y-3 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
            I handle every change, rule and access path with disciplined execution
            and clear communication.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-emerald-500/30 p-4 sm:p-5 space-y-3 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
            Security is structure. Boundaries, policies and flows must stay
            predictable, consistent and controlled.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-emerald-500/30 p-4 sm:p-5 space-y-3 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="flex items-center gap-3 relative z-10">
            <Terminal
              className="text-emerald-400 group-hover:scale-110 transition-transform duration-300"
              size={20}
            />
            <p className="text-xs uppercase tracking-[0.2em] text-gray-300 group-hover:text-emerald-300 transition-colors duration-300">
              TOOLING AND AUTOMATION
            </p>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed relative z-10">
            Python, CLI and structured configs for clean automation, fast
            validation and reliable repeatability.
          </p>
        </div>
      </div>


        {/* AT A GLANCE – SMALL STAT CARDS */}
        <div className="space-y-4">
          <div className="relative">
            <p className="text-[11px] uppercase tracking-[0.3em] text-emerald-400/80">
              // at a glance
            </p>
            <div className="absolute -bottom-1 left-0 w-16 h-[1px] bg-gradient-to-r from-emerald-400/60 to-transparent"></div>
          </div>

          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Production-focused years",
                value: "10+",
                desc: "From security operations to systems & network engineering.",
              },
              {
                label: "Current mission",
                value: "Ahold Delhaize",
                desc: "Hybrid infra, strict uptime, secure remote access.",
              },
              {
                label: "Core domains",
                value: "Infra · Security · VPN",
                desc: "Stable routing, firewalls, remote connectivity.",
              },
              {
                label: "Remote-ready",
                value: "100%",
                desc: "Full-remote delivery, documentation and async-friendly.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-black/70 hover:bg-black/80 hover:border-emerald-500/40 px-4 py-3 sm:py-4 flex flex-col gap-1.5 transition-all duration-300 group relative overflow-hidden cursor-default"
              >
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <p className="text-xs uppercase tracking-[0.18em] text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {item.label}
                </p>
                <p className="text-lg sm:text-xl font-semibold text-emerald-300 group-hover:text-emerald-400 group-hover:scale-105 transition-all duration-300">
                  {item.value}
                </p>
                <p className="text-[11px] sm:text-xs text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SMALL CAPABILITIES ROW – TILES THAT TRIGGER LOG POPUP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
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
              flex flex-col items-center gap-2 p-4 
              rounded-xl border border-white/10
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
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Icon
                className="text-emerald-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] transition-all duration-300 relative z-10"
                size={26}
              />
              <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-gray-300 group-hover:text-emerald-300 transition-colors duration-300 relative z-10">
                {label}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* TERMINAL-STYLE LOG MODAL */}
      {activeLog && (
        <div
          className="
            fixed inset-0 z-50 flex items-center justify-center
            bg-black/80 backdrop-blur-sm
            animate-in fade-in duration-200
          "
          onClick={() => setActiveLog(null)}
        >
          <div
            className="
              w-full max-w-xl mx-4
              rounded-2xl border border-emerald-500/40
              bg-black/95 shadow-[0_0_35px_rgba(16,185,129,0.7)]
              overflow-hidden font-mono text-sm text-emerald-100
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar like your context window */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-emerald-500/30 bg-gradient-to-r from-emerald-500/20 via-black to-emerald-500/20">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-emerald-200">
                secureit-hub :: {LOG_CONTENT[activeLog].file}
              </span>
              <span className="text-[10px] text-emerald-500/70">●</span>
            </div>

            {/* Body – ONLY the final validated lines */}
            <div className="p-5 space-y-2">
              {LOG_CONTENT[activeLog].lines.map((line) => (
                <p key={line} className="leading-relaxed">
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
