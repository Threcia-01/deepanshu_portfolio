// ResumeHero.jsx
// Left: portrait image | Right: name, role badge, contact chips

import selfImage from "../../assets/images/selfImage.png";

export default function ResumeHero() {
  return (
    <div className="flex items-stretch min-h-[260px]">

      {/* ── LEFT — Portrait ── */}
      <div className="relative z-8 flex items-end justify-center" style={{ width: "35%" }}>
        <div className="absolute z-8 inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[220px] h-[280px]"
            style={{ background: "radial-gradient(ellipse at center, rgba(74,111,165,0.38) 0%, transparent 70%)" }}
          />
        </div>
        <img
          src={selfImage}
          alt="Deepanshu Chaudhary"
          className="relative z-8 h-[240px] w-auto object-cover object-top drop-shadow-[0_8px_32px_rgba(0,0,0,0.7)]"
        />
      </div>

      {/* ── RIGHT — Info ── */}
      <div className="flex flex-col justify-center pl-8" style={{ width: "65%" }}>

        {/* Name */}
        <h1
          className="font-cinzel text-center text-cyan-300 tracking-[0.2em] drop-shadow-[0_0_10px_rgba(99,171,198,0.8)] font-bold"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", lineHeight: 1.1 }}
        >
          Deepanshu Chaudhary
        </h1>

        {/* Role badge SVG */}
        <svg viewBox="0 0 388 54" className="w-full h-auto drop-shadow-[0_0_12px_rgba(164,213,233,0.5)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_dd_132_262)" transform="scale(1,1.1)">
            <path d="M22.978 11.575L11.6719 26.8663L22.978 41.9381H360.978L375.528 26.8663L360.978 11.575H22.978Z" fill="black" fillOpacity="0.65" shapeRendering="crispEdges"/>
            <path d="M22.978 11.575L11.6719 26.8663L22.978 41.9381H360.978L375.528 26.8663L360.978 11.575H22.978Z" stroke="#A4D5E9" strokeWidth="0.784173" shapeRendering="crispEdges"/>
          </g>
          <text x="195" y="30" dominantBaseline="middle" textAnchor="middle" fill="#BEE1EE" fontFamily="'Raleway', sans-serif" fontSize="11" letterSpacing="0.5">
            JUNIOR FULL-STACK DEVELOPER · FRONTEND-FOCUSED
          </text>
          <defs>
            <filter id="filter0_dd_132_262" x="0.000648499" y="-8.39233e-05" width="387.253" height="58.5134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/><feGaussianBlur stdDeviation="5.59147"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.263442 0 0 0 0 0.516813 0 0 0 0 0.62023 0 0 0 0.9 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_132_262"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/><feGaussianBlur stdDeviation="3.26731"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.468142 0 0 0 0 0.820632 0 0 0 0 0.964506 0 0 0 0.58 0"/>
              <feBlend mode="normal" in2="effect1_dropShadow_132_262" result="effect2_dropShadow_132_262"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_132_262" result="shape"/>
            </filter>
          </defs>
        </svg>

        {/* Contact row 1 */}
        <div className="flex flex-wrap gap-2 pl-8">
          <ContactChip icon={<LocationIcon />}>Lucknow, Uttar Pradesh, India</ContactChip>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <ContactChip icon={<GitHubIcon />}>GitHub</ContactChip>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <ContactChip icon={<LinkedInIcon />}>LinkedIn</ContactChip>
          </a>
        </div>

        {/* Contact row 2 */}
        <div className="flex flex-wrap gap-2 pl-8">
          <ContactChip icon={<EmailIcon />}>deepchaudhary29924@gmail.com</ContactChip>
          <ContactChip icon={<PhoneIcon />}>+91-7651882669</ContactChip>
        </div>

      </div>
    </div>
  );
}

// ── Chip ──────────────────────────────────────────────────────────────────────
function ContactChip({ icon, children }) {
  return (
    <span className="mt-2 inline-flex items-center gap-[10px] border border-[rgba(74,111,165,0.45)] px-[10px] py-[3px] font-rokkitt text-base text-[#A4D5E9] bg-black/65 tracking-[0.06em] cursor-default transition-[border-color] duration-200 hover:border-[rgba(200,169,110,0.6)]">
      <span className="text-[#c8a96e]">{icon}</span>
      {children}
    </span>
  );
}

// ── Icons ─────────────────────────────────────────────────────────────────────
const LocationIcon = () => (
  <svg width="11" height="11" fill="white" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
  </svg>
);
const GitHubIcon = () => (
  <svg width="11" height="11" fill="white" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="11" height="11" fill="white" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const EmailIcon = () => (
  <svg width="11" height="11" fill="white" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="11" height="11" fill="white" viewBox="0 0 20 20">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
  </svg>
);