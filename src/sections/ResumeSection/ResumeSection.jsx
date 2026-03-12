// ResumeSection.jsx

import SectionWrapper    from "../../layout/SectionWrapper";
import TopLeftCorner     from "../../components/containerCorners/topLeftCorner";
import TopRightCorner    from "../../components/containerCorners/topRightCorner";
import BottomLeftCorner  from "../../components/containerCorners/bottomLeftCorner";
import BottomRightCorner from "../../components/containerCorners/bottomRightCorner";

import ResumeHero   from "./ResumeHero";
import ResumeBottom from "./ResumeBottom";

import resumeBg from "../../assets/images/dungeonsSectionBg.png";

export default function ResumeSection({ className }) {
  return (
    <SectionWrapper className={className}>
      <div className="relative py-10">

        {/* background texture */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-55 pointer-events-none"
          style={{ backgroundImage: `url(${resumeBg})` }}
        />
        {/* black overlay */}
        <div
          className="absolute z-9 mt-85 inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.94) 10%, rgba(0,0,0,0.94) 100%)",

            opacity: 0.94,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-12 py-32">

          <TopLeftCorner />
          <TopRightCorner />

          <ResumeHero />

          {/* Divider */}
          <div className="resume-divider" >
            <sapn className="resume-divider-gem">◆</sapn>
          </div>
          
          <ResumeBottom />

          <BottomLeftCorner />
          <BottomRightCorner />

        </div>
      </div>
    </SectionWrapper>
  );
}