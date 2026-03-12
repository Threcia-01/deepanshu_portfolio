// ResumeBottom.jsx

import middleImg from "../../assets/images/inventoryBox2Image.png";

// ─── Section Data ──────────────────────────────────────────────────────────────
const SECTIONS = [
  {
    side: "right",
    title: "Summary",
    content: (
      <p className="font-rokkitt text-[11px] text-[#BEE1EE] leading-[1.7]">
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
      <div className="flex flex-col gap-[10px]">
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
        <div className="flex justify-between mb-1">
          <span className="font-rokkitt text-[11px] text-[#BEE1EE] font-semibold">Front End Developer Intern</span>
          <span className="font-rokkitt text-[10px] text-[#BEE1EE]">May 2025 – June 2025</span>
        </div>
        <p className="font-rokkitt text-[10px] text-[#82AEFF] mb-2">At Micro IT · Remote</p>
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
      <div className="flex flex-col gap-[10px]">
        <ProjectEntry title="AWS Code Optimisation"        date="Jul 2025"       desc="Lambda automation: EBS cleanup, IAM policies, CloudWatch monitoring." />
        <ProjectEntry title="INDIAMart-Inspired B2B Clone" date="Apr – May 2025" desc="B2B e-commerce UI, product listings, cart flow; scalable modular frontend." />
        <ProjectEntry title="YouTube Streaming Platform"   date="Sep – Oct 2023" desc="Full-stack: React, Node.js, JWT auth, MongoDB &amp; Cloudinary." />
      </div>
    ),
  },
  {
    side: "right",
    title: "Education",
    content: (
      <div className="flex flex-col gap-2">
        <EduEntry degree="B.Tech in Artificial Intelligence" inst="Babu Banarsi Das University, Lucknow" years="2023 – 2026" link />
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
];

// ─── Main Component ────────────────────────────────────────────────────────────
export default function ResumeBottom() {
  return (
    <div className="rb-outer">

      {/* ── LEFT COLUMN ── */}
      <div className="rb-col-left">
        {SECTIONS.map((sec, i) => sec.side !== "left" ? null : (
          <div key={i} className="rb-entry" style={{ animationDelay: `${0.08 + i * 0.11}s` }}>
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

      {/* ── RIGHT COLUMN ── */}
      <div className="rb-col-right">
        {SECTIONS.map((sec, i) => sec.side !== "right" ? null : (
          <div key={i} className="rb-entry" style={{ animationDelay: `${0.08 + i * 0.11}s` }}>
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
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function SectionTitle({ children }) {
  return (
    <h2 className="font-cinzel text-[13px] tracking-[0.2em] text-[#BEE1EE] uppercase font-bold mb-[10px]">
      {children}
    </h2>
  );
}

function CheckItem({ children }) {
  return (
    <li className="flex gap-[7px] font-rokkitt text-[10px] text-[#BEE1EE] leading-[1.6] list-none">
      <span className="text-[#BEE1EE] mt-[1px]">✓</span>
      {children}
    </li>
  );
}

function SkillRow({ label, text }) {
  return (
    <div className="flex gap-[10px] items-start">
      <span className="min-w-[66px] border border-[rgba(74,111,165,0.5)] bg-black/65 px-[6px] py-[2px] font-cinzel text-[9px] text-[#A4D5E9] uppercase tracking-[0.1em] text-center shrink-0">
        {label}
      </span>
      <p className="font-rokkitt text-[10px] text-[#BEE1EE] leading-[1.6]">{text}</p>
    </div>
  );
}

function ProjectEntry({ title, date, desc }) {
  return (
    <div>
      <div className="flex justify-between mb-[2px]">
        <span className="font-cinzel text-[10px] text-[#BEE1EE] font-semibold">{title}</span>
        <span className="font-rokkitt text-[9px] text-[#BEE1EE]">{date}</span>
      </div>
      <p className="font-rokkitt text-[10px] text-[#82AEFF] leading-[1.55]">{desc}</p>
    </div>
  );
}

function EduEntry({ degree, inst, years, link }) {
  return (
    <div>
      <div className="flex justify-between mb-[2px]">
        <span className="font-rokkitt text-[11px] text-[#BEE1EE] font-medium">{degree}</span>
        <span className="font-rokkitt text-[9px] text-[#BEE1EE]">{years}</span>
      </div>
      {link
        ? <a href="#" className="font-rokkitt text-[10px] text-[#82AEFF]">{inst}</a>
        : <p className="font-rokkitt text-[10px] text-[#82AEFF]">{inst}</p>
      }
    </div>
  );
}

function GoldRule() {
  return (
    <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(189,224,237,0.3), transparent)" }} />
  );
}