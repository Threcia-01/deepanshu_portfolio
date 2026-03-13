import IslandImage from "../../assets/images/dungeonClearedIsland.png"

export default function DungeonCard({ logo, title, subtitle, tech = [], onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] md:max-w-[420px] mx-auto transition-transform hover:scale-105 cursor-pointer"
    >
      <img src={IslandImage} alt="" className="w-full block pointer-events-none select-none" />

      <div className="absolute inset-0 flex flex-col items-center justify-end pb-[2%]">
        {logo && (
          <div className="absolute top-[30%] left-[44%] w-[15%] aspect-square flex items-end justify-end">
            <img src={logo} className="w-full h-full object-contain rounded-md" />
          </div>
        )}

        {/* Title plate */}
        <div className="relative w-[70%] max-w-[220px] mx-auto">
          <svg viewBox="0 0 217 68" className="w-full h-auto drop-shadow-[0_0_12px_rgba(164,213,233,0.5)]" fill="none">
            <path d="M198.444 14.3766L16.613 12.0029V20.3109H11.998V49.9823H18.459V55.9166H198.444V49.9823H204.905V20.3109H198.444V14.3766Z" fill="#447A97" stroke="#A4D5E9" strokeWidth="0.784"/>
          </svg>
          <h3 className="absolute inset-0 flex items-center justify-center text-[#E6FBFF] font-cinzel tracking-[0.15em] sm:tracking-[0.25em] text-[clamp(8px,2.5vw,18px)] drop-shadow-[0_0_8px_rgba(120,200,255,0.4)]">
            {title}
          </h3>
        </div>

        {/* Subtitle plate */}
        <div className="relative w-[70%] max-w-[220px] mx-auto">
          <svg viewBox="0 0 388 54" className="w-full h-auto drop-shadow-[0_0_12px_rgba(164,213,233,0.5)]" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dd_132_262)" transform="scale(1,1.1)">
              <path d="M22.978 11.575L11.6719 26.8663L22.978 41.9381H360.978L375.528 26.8663L360.978 11.575H22.978Z" fill="black" fillOpacity="0.65" shapeRendering="crispEdges"/>
              <path d="M22.978 11.575L11.6719 26.8663L22.978 41.9381H360.978L375.528 26.8663L360.978 11.575H22.978Z" stroke="#A4D5E9" strokeWidth="0.784173" shapeRendering="crispEdges"/>
            </g>
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
          <p className="absolute inset-0 flex items-center justify-center text-[#BEE1EE] font-rokkitt text-[clamp(7px,2vw,14px)] mt-1 tracking-[0.08em] sm:tracking-[0.15em] drop-shadow-[0_0_8px_rgba(120,200,255,0.4)]">
            {subtitle}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex gap-1 flex-wrap justify-center mt-1">
          {tech.map((t, i) => (
            <span key={i} className="px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[10px] tracking-wide text-cyan-200 border border-cyan-400/40 rounded-md bg-black/40">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}