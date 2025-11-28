import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-12 py-6 border-t border-white/5">
      <div className="mx-auto flex flex-col items-center gap-4 text-center">
        {/* Text */}
        <p className="font-mono tracking-wide text-[11px] sm:text-xs text-gray-500">
          © {new Date().getFullYear()} SecureIT-Hub — Crafted by{" "}
          <a
            href="https://www.linkedin.com/in/anas-bounaim-37450621a"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-400 hover:text-emerald-300"
          >
            Anas Bounaim
          </a>
        </p>

        {/* Responsive SVG Footer Logo */}
        <div
          className="
            w-[100px]      /* Mobile */
            sm:w-[100px]   /* Small screens */
            md:w-[150px]   /* Medium */
            lg:w-[180px]   /* Desktop */
            xl:w-[200px]   /* Large desktop */
          "
        >
          <Image
            src="/rootedFooter.svg"
            alt="SecureIT Hub Footer Logo"
            width={380}
            height={80}
            priority
            className="
              w-full h-auto
              object-contain
              select-none 
              pointer-events-none
              drop-shadow-[0_0_10px_rgba(52,211,153,0.6)]  /* emerald-400 glow */
            "
          />
        </div>
      </div>
    </footer>
  );
}
