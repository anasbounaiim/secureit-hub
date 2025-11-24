"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Layers,
  FolderGit2,
  BookOpenText,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/skills", label: "Skills", icon: Layers },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/blog", label: "Blog", icon: BookOpenText },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* DESKTOP: collapsible rail with hover expand */}
      <aside className="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 z-40">
        <div className="group relative">
          <nav
            className="
              flex flex-col gap-4 p-3 rounded-3xl
              bg-[#0b0b0b]/90 border border-white/5 shadow-xl
              w-16 group-hover:w-56
              transition-all duration-300 ease-out
              overflow-hidden
            "
          >
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;

              return (
<Link
  key={href}
  href={href}
  className={`
    flex items-center rounded-2xl 
    w-9 group-hover:w-full
    px-2 py-2
    transition-all duration-300
    ${
      active
        ? "bg-emerald-500/20 ring-1 ring-emerald-400/60"
        : "hover:bg-white/5"
    }
  `}
>
  <div className="flex w-8 justify-center">
    <Icon
      size={20}
      className={active ? "text-emerald-400" : "text-gray-200"}
    />
  </div>

  <span
    className="
      ml-2 text-sm text-gray-100 font-medium whitespace-nowrap
      opacity-0 group-hover:opacity-100
      translate-x-2 group-hover:translate-x-0
      transition-all duration-300
    "
  >
    {label}
  </span>
</Link>

              );
            })}
          </nav>
        </div>
      </aside>

      {/* MOBILE: simple hamburger + dropdown */}
      <div className="md:hidden fixed right-4 top-4 z-50">
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0b0b0b]/90 border border-white/10 shadow-lg"
        >
          {mobileOpen ? (
            <X size={22} className="text-white" />
          ) : (
            <Menu size={22} className="text-white" />
          )}
        </button>

        {mobileOpen && (
  <div
    className="
      absolute right-0 top-12   /* anchor under the button */
      p-4 w-56 rounded-3xl
      bg-[#0b0b0b]/95 backdrop-blur-xl
      border border-white/10 shadow-2xl
    "
  >
    <nav className="flex flex-col gap-2">
      {navItems.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            onClick={() => setMobileOpen(false)}
            className={`
              flex items-center gap-3 px-3 py-2 rounded-xl
              ${
                active
                  ? "bg-emerald-500/20 ring-1 ring-emerald-400/60"
                  : "hover:bg-neutral-800"
              }
            `}
          >
            <Icon
              size={20}
              className={active ? "text-emerald-400" : "text-gray-200"}
            />
            <span className="text-sm text-gray-100">{label}</span>
          </Link>
        );
      })}
    </nav>
  </div>
)}

      </div>
    </>
  );
}
