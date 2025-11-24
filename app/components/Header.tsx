import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center gap-4 mb-5">


      {/* Title */}
      <pre className="ascii-title text-[5px] lg:text-[1'px] tracking-wider font-semibold text-emerald-400">

{`




███████ ███████  ██████ ██    ██ ██████  ███████     ██ ████████     ██   ██ ██    ██ ██████  
██      ██      ██      ██    ██ ██   ██ ██          ██    ██        ██   ██ ██    ██ ██   ██ 
███████ █████   ██      ██    ██ ██████  █████       ██    ██        ███████ ██    ██ ██████  
     ██ ██      ██      ██    ██ ██   ██ ██          ██    ██        ██   ██ ██    ██ ██   ██ 
███████ ███████  ██████  ██████  ██   ██ ███████     ██    ██        ██   ██  ██████  ██████  
`}

      </pre>
 
    </header>
  );
}
