import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center gap-4 mb-5">

      {/* Responsive SVG Logo */}
      <div className="w-[210px] sm:w-[220px] md:w-[260px] lg:w-[400px]">
        <Image
          src="/secureithubLogo.svg"
          alt="SecureIT Hub Logo"
          width={300}
          height={80}
          priority
          className="
            w-full h-auto 
            object-contain 
            select-none 
            pointer-events-none
            drop-shadow-[0_0_12px_rgba(0,255,65,0.6)]
          "
        />
      </div>

    </header>
  );
}
