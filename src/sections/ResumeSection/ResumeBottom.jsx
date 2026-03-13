import { useEffect, useRef } from "react"
import middleImg from "../../assets/images/inventoryBox2Image.png"
import { animateStagger } from "../../components/animations/ScrollAnimations"

const SECTIONS = [
  {
    side: "right",
    title: "Summary",
    content: (
      <p className="font-rokkitt text-[10px] sm:text-[11px] text-[#BEE1EE] leading-[1.7]">
        Junior programmer with strong fundamentals in HTML, CSS and JavaScript; recently trained in AWS
        cloud services and actively pursuing full-stack mastery. Experienced in building scalable, modular
        UI architecture and backend systems with authentication, validation, and cloud storage. Passionate
        about clean solution-oriented design, performance optimisation, and continuous learning.
      </p>
    ),
  },
  {
    side: "left",
    title: "Technical Skills",
    content: (
      <div className="flex flex-col gap-[8px] sm:gap-[10px]">
        <SkillRow label="Frontend" text="HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), TypeScript, React.js, Next.js, DOM handling, UI structuring" />
        <SkillRow label="Backend"  text="Node.js, Express.js, RESTful APIs, JWT Authentication, MongoDB, PostgreSQL, Prisma, Drizzle" />
        <SkillRow label="Cloud"    text="AWS Lambda, IAM, CloudWatch, Cloudinary" />
        <SkillRow label="Tools"    text="Git, GitHub, VS Code, Postman, Figma, Canva, Eraser" />
      </div>
    ),
  },
  {
    side: "right",
    title: "Experience",
    content: (
      <div>
        <div className="flex flex-wrap justify-between gap-1 mb-1">
          <span className="font-rokkitt text-[10px] sm:text-[11px] text-[#BEE1EE] font-semibold">Front End Developer Intern</span>
          <span className="font-rokkitt text-[9px] sm:text-[10px] text-[#BEE1EE]">May 2025 – June 2025</span>
        </div>
        <p className="font-rokkitt text-[9px] sm:text-[10px] text-[#82AEFF] mb-2">At Micro IT · Remote</p>
        <ul className="flex flex-col gap-1 p-0">
          <CheckItem>UI structuring &amp; layout optimisation</CheckItem>
          <CheckItem>DOM handling &amp; vanilla JavaScript logic</CheckItem>
          <CheckItem>Git &amp; GitHub version control discipline</CheckItem>
          <CheckItem>Design solutions for real-world user flow</CheckItem>
        </ul>
      </div>
    ),
  },
  {
    side: "left",
    title: "Projects",
    content: (
      <div className="flex flex-col gap-[8px] sm:gap-[10px]">
        <ProjectEntry title="AWS Code Optimisation"        date="Jul 2025"       desc="Lambda automation: EBS cleanup, IAM policies, CloudWatch monitoring." />
        <ProjectEntry title="INDIAMart-Inspired B2B Clone" date="Apr – May 2025" desc="B2B e-commerce UI, product listings, cart flow; scalable modular frontend." />
        <ProjectEntry title="YouTube Streaming Platform"   date="Sep – Oct 2023" desc="Full-stack: React, Node.js, JWT auth, MongoDB & Cloudinary." />
      </div>
    ),
  },
  {
    side: "right",
    title: "Education",
    content: (
      <div className="flex flex-col gap-2">
        <EduEntry degree="B.Tech in Artificial Intelligence" inst="Babu Banarsi Das University, Lucknow" years="2023 – 2026" />
        <GoldRule />
        <EduEntry degree="Senior Secondary (12th CBSE)" inst="Rani Lakshmi Bai Memorial School" years="2020 – 2021" />
        <GoldRule />
        <EduEntry degree="Secondary (10th CBSE)" inst="Rani Lakshmi Bai Memorial School" years="2019 – 2020" />
      </div>
    ),
  },
  {
    side: "left",
    title: "Achievements & Certifications",
    content: (
      <ul className="flex flex-col gap-[5px] p-0">
        <CheckItem>Web Development Course – Hitesh Choudhary</CheckItem>
        <CheckItem>Code Titans: Battle of Brilliance (Participant)</CheckItem>
        <CheckItem>Adobe Designathon Program – IIT Delhi</CheckItem>
        <CheckItem>VitXR Hackathon – IIT BHU (6th position, 3rd round)</CheckItem>
      </ul>
    ),
  },
]

export default function ResumeBottom() {
  const entriesRef = useRef([])

  useEffect(() => {
    const entries = entriesRef.current.filter(Boolean)
    if (entries.length) animateStagger(entries, 0.1)
  }, [])

  return (
    <>
      {/* Desktop: two-column layout */}
      <div className="rb-outer hidden sm:grid">
        <div className="rb-col-left">
          {SECTIONS.map((sec, i) => sec.side !== "left" ? null : (
            <div key={i} ref={el => entriesRef.current[i] = el} className="rb-entry opacity-0">
              <div className="mt-3 w-full">
                <SectionTitle>{sec.title}</SectionTitle>
                {sec.content}
              </div>
              <div className="rb-left-med-connector">
                <div className="rb-left-stub-line" />
                <img src={middleImg} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="rb-col-right">
          {SECTIONS.map((sec, i) => sec.side !== "right" ? null : (
            <div key={i} ref={el => entriesRef.current[i + 10] = el} className="rb-entry opacity-0">
              <div className="rb-right-med-connector">
                <img src={middleImg} alt="" />
                <div className="rb-right-stub-line" />
              </div>
              <div className="mt-3 w-full">
                <SectionTitle>{sec.title}</SectionTitle>
                {sec.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: single column, RPG icon + content */}
      <div className="flex flex-col gap-6 sm:hidden px-2">
        {SECTIONS.map((sec, i) => (
          <div key={i} ref={el => entriesRef.current[i + 20] = el} className="opacity-0">
            <div className="flex items-center gap-2 mb-2">
              <img src={middleImg} alt="" className="w-8 h-8 shrink-0" />
              <SectionTitle>{sec.title}</SectionTitle>
            </div>
            <div className="pl-10">
              {sec.content}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function SectionTitle({ children }) {
  return (
    <h2 className="font-cinzel text-[10px] sm:text-[13px] tracking-[0.12em] sm:tracking-[0.2em] text-[#BEE1EE] uppercase font-bold mb-[8px] sm:mb-[10px]">
      {children}
    </h2>
  )
}

function CheckItem({ children }) {
  return (
    <li className="flex gap-[7px] font-rokkitt text-[10px] text-[#BEE1EE] leading-[1.6] list-none">
      <span className="text-[#BEE1EE] mt-[1px] shrink-0">✓</span>
      {children}
    </li>
  )
}

function SkillRow({ label, text }) {
  return (
    <div className="flex gap-[8px] sm:gap-[10px] items-start">
      <span className="min-w-[52px] sm:min-w-[66px] border border-[rgba(74,111,165,0.5)] bg-black/65 px-[4px] sm:px-[6px] py-[2px] font-cinzel text-[7px] sm:text-[9px] text-[#A4D5E9] uppercase tracking-[0.08em] sm:tracking-[0.1em] text-center shrink-0">
        {label}
      </span>
      <p className="font-rokkitt text-[10px] text-[#BEE1EE] leading-[1.6]">{text}</p>
    </div>
  )
}

function ProjectEntry({ title, date, desc }) {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-1 mb-[2px]">
        <span className="font-cinzel text-[9px] sm:text-[10px] text-[#BEE1EE] font-semibold">{title}</span>
        <span className="font-rokkitt text-[9px] text-[#BEE1EE]">{date}</span>
      </div>
      <p className="font-rokkitt text-[10px] text-[#82AEFF] leading-[1.55]">{desc}</p>
    </div>
  )
}

function EduEntry({ degree, inst, years }) {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-1 mb-[2px]">
        <span className="font-rokkitt text-[10px] sm:text-[11px] text-[#BEE1EE] font-medium">{degree}</span>
        <span className="font-rokkitt text-[9px] text-[#BEE1EE]">{years}</span>
      </div>
      <p className="font-rokkitt text-[10px] text-[#82AEFF]">{inst}</p>
    </div>
  )
}

function GoldRule() {
  return (
    <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(189,224,237,0.3), transparent)" }} />
  )
}