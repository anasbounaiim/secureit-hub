import {
  ShieldCheck,
  Server,
  Network,
  Terminal,
  GlobeLock,
  Zap,
  Building2,
} from "lucide-react";

export default function HomePage() {
  return (
    <section className="space-y-16">

      {/* HERO SECTION */}
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">/home</p>

        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-3">
            <ShieldCheck className="text-emerald-400" size={32} />
            SECURE SYSTEMS.
          </h1>

          <h1 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-3">
            <Network className="text-emerald-400" size={32} />
            REMOTE EXECUTION.
          </h1>

          <h1 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-3">
            <Zap className="text-emerald-400" size={32} />
            BUILT FOR IMPACT.
          </h1>
        </div>

        <p className="text-base md:text-lg text-gray-400 max-w-3xl leading-relaxed pl-1">
          I design, secure, and optimize network infrastructures with Cisco, Fortinet,
          Zscaler, and Linux at the core.  
          VPN engineering, firewall hardening, automation, and secure remote operations
          are my daily craft.
        </p>
      </div>

      {/* PROFESSIONAL SUMMARY WITH ICONS */}
      <div className="space-y-6 max-w-none leading-normal text-gray-300">

        <div className="flex items-start gap-4">
          <Terminal className="text-emerald-400 mt-1 "  size={22} />
          <p>
            Every environment is a puzzle — solved with clean logic, disciplined
            execution, and deep understanding of large-scale systems.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <Building2 className="text-emerald-400 mt-1 "  size={22} />
          <p>
            Current mission: <span className="text-emerald-400 font-medium">Ahold Delhaize</span>.
            Enterprise-grade hybrid infrastructure, high uptime requirements, and full-remote delivery.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <GlobeLock className="text-emerald-400 mt-1 "  size={22} />
          <p>
            Full remote, multilingual, security-driven.  
          </p>
        </div>

        <div className="flex items-start gap-4">
          <ShieldCheck className="text-emerald-400 mt-1 "  size={22} />
          <p>
            Systems hardened. Networks fortified. Execution guaranteed.
          </p>
        </div>

      </div>

{/* CAPABILITIES ROW */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">

  {/* Item */}
  {[
    { icon: Server, label: "Infra" },
    { icon: ShieldCheck, label: "Security" },
    { icon: Network, label: "VPN" },
    { icon: Terminal, label: "Linux" },
  ].map(({ icon: Icon, label }) => (
    <div
      key={label}
      className="
        flex flex-col items-center gap-2 p-4 
        rounded-xl border border-white/10
        bg-white/5 backdrop-blur-md
        shadow-[0_0_20px_-5px_rgba(16,185,129,0.15)]
        transition-all duration-300
        hover:scale-105 cursor-pointer hover:border-emerald-400/40
        hover:shadow-[0_0_25px_-2px_rgba(16,185,129,0.35)]
      "
    >
      <Icon className="text-emerald-400" size={28} />
      <p className="text-xs uppercase tracking-wide text-gray-300">
        {label}
      </p>
    </div>
  ))}

</div>


    </section>
  );
}
