export default function Footer() {
    return (
      <footer className="mt-12 py-4 text-center text-xs text-gray-500 border-t border-white/5">
        <p className="font-mono tracking-wide text-gray-500">
          © {new Date().getFullYear()} SecureIT-Hub — Crafted by{" "}
          <span className="text-emerald-400"> <a href="https://www.linkedin.com/in/anas-bounaim-37450621a" target="_blank">Anas Bounaim</a>  </span>
        </p>
{/* ASCII Art */}
<pre className="mt-3 leading-[1.05] text-[3px] sm:text-[6px] text-emerald-300">
{String.raw`


██████   ██████   ██████  ████████ ███████ ██████  
██   ██ ██    ██ ██    ██    ██    ██      ██   ██ 
██████  ██    ██ ██    ██    ██    █████   ██   ██ 
██   ██ ██    ██ ██    ██    ██    ██      ██   ██ 
██   ██  ██████   ██████     ██    ███████ ██████  
                                                                                                                              

`}
</pre>

      </footer>
    );
  }
  