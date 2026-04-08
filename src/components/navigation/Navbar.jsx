import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const NAV_LINKS = [
  { label: "Home",       href: "#hero" },
  { label: "Origins",    href: "#origins" },
  { label: "Dungeon Cleared",     href: "#projects" },
  { label: "Inventory",   href: "#skills" },
  { label: "Rank & Trials", href: "#experience" },
  { label: "Resume", href: "#resume" },
]

export default function Navbar() {
  const [active, setActive] = useState("Home")
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNav = (label, href) => {
    setActive(label)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const handleResume = () => {
    const a = document.createElement("a")
    a.href = "/DeepanshuResume.pdf"
    a.download = "DeepanshuResume.pdf"
    a.click()
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-black/80 backdrop-blur-md border-b border-cyan-400/15" : "bg-black/50 backdrop-blur-sm"
    }`}>
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-16 h-[60px] sm:h-[68px]">

        {/* Logo */}
        <div className="flex flex-col leading-none shrink-0">
          <span className="font-cinzel text-white font-bold tracking-[0.15em] text-base sm:text-lg">
            DEEPANSHU
          </span>
          <span className="font-rokkitt text-cyan-400/70 text-[8px] tracking-[0.15em] uppercase">
            Code to dream · Code to build
          </span>
        </div>

        {/* Desktop Nav — only show on lg+ where all 6 items fit */}
        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleNav(label, href)}
              className={`px-3 py-1.5 rounded font-rokkitt text-sm tracking-wide transition-all duration-200 ${
                active === label
                  ? "bg-[#1e4a6e] text-cyan-200 shadow-[0_0_12px_rgba(56,189,248,0.3)]"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right side icons — lg+ only */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a href="https://github.com/" target="_blank" rel="noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-cyan-400/50 transition-all duration-200">
            <FaGithub size={16} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-cyan-400/50 transition-all duration-200">
            <FaLinkedin size={16} />
          </a>
          <button onClick={handleResume}
            className="ml-1 px-3 py-1.5 border border-cyan-400/40 text-cyan-300 font-rokkitt text-xs tracking-widest hover:bg-cyan-400/10 hover:border-cyan-400/70 transition-all duration-200">
            RÉSUMÉ ↓
          </button>
        </div>

        {/* Hamburger — shown on everything below lg */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-1 shrink-0"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className={`block w-6 h-0.5 bg-cyan-300 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cyan-300 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cyan-300 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile/Tablet dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-cyan-400/15 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleNav(label, href)}
              className={`text-left px-4 py-2.5 font-rokkitt text-sm tracking-wide rounded transition-all duration-200 ${
                active === label
                  ? "bg-[#1e4a6e] text-cyan-200"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </button>
          ))}
          <div className="flex items-center gap-3 pt-3 border-t border-white/10 mt-1">
            <a href="https://github.com/Threcia-01" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/deepanshu-chaudhary-a1b7012a7/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
              <FaLinkedin size={18} />
            </a>
            <button onClick={handleResume} className="ml-auto px-3 py-1 border border-cyan-400/40 text-cyan-300 font-rokkitt text-xs tracking-widest">
              RÉSUMÉ ↓
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}