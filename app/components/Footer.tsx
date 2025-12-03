import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-12 py-6 border-t border-white/5">
      <div className="mx-auto flex flex-col items-center gap-4 text-center">
        {/* Text */}
        <p className="font-mono tracking-wide text-[11px] sm:text-xs text-gray-500">
          © {new Date().getFullYear()} SecureIT-Hub — Network & Security Engineering portfolio .
        </p>

        {/* Responsive SVG Footer Logo */}
        <div
          className="
            w-[100px]
            sm:w-[100px]
            md:w-[150px]
            lg:w-[180px]
            xl:w-[200px]
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
              drop-shadow-[0_0_10px_rgba(52,211,153,0.6)]
            "
          />
        </div>
      </div>
    </footer>
  );
}
