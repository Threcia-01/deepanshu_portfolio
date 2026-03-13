import { useEffect, useRef } from "react"
import InventoryFrame from "../../components/containerBoxes/inventoryFrames"
import SkillTag from "./skillTag"
import inventoryIcon from "../../assets/images/inventoryBox2Image.png"
import shield from "../../assets/images/originsShield.png"
import { animateStagger } from "../../components/animations/ScrollAnimations"

export default function InventoryGrid() {
  const boxesRef = useRef([])

  useEffect(() => {
    const boxes = boxesRef.current.filter(Boolean)
    if (boxes.length) animateStagger(boxes, 0.1)
  }, [])

  const setRef = (i) => (el) => { boxesRef.current[i] = el }

  return (
    <div className="px-[4%] sm:px-[6%] md:px-[8%]">

      {/* Mobile: stack all boxes vertically. md+: grid layout */}
      <div className="
        flex flex-col gap-4
        md:grid
        md:[grid-template-areas:'prog_prog_prog_prog_prog_icon_icon_db_db_db''backend_backend_backend_backend_backend_frontend_frontend_frontend_frontend_frontend''shield_shield_shield_shield_tools_tools_tools_tools_tools_tools']
        md:[grid-template-columns:repeat(10,1fr)]
        md:[grid-template-rows:auto_auto_auto]
        md:gap-4
        mt-4
      ">

        {/* Programming Languages */}
        <div ref={setRef(0)} className="opacity-0 md:[grid-area:prog]">
          <InventoryFrame variant={1}>
            <h3 className="pl-4 sm:pl-6 mb-3 sm:mb-4 text-cyan-300 text-xs sm:text-sm tracking-widest">
              PROGRAMMING LANGUAGES
            </h3>
            <div className="flex gap-2 sm:gap-3 justify-center pr-4 sm:pr-6 flex-wrap">
              <SkillTag>Javascript</SkillTag>
              <SkillTag>Python</SkillTag>
            </div>
          </InventoryFrame>
        </div>

        {/* Center Icon — hidden on mobile */}
        <div ref={setRef(1)} className="opacity-0 hidden md:block md:[grid-area:icon]">
          <InventoryFrame variant={2}>
            <div className="flex justify-center">
              <img src={inventoryIcon} className="w-full" />
            </div>
          </InventoryFrame>
        </div>

        {/* Databases */}
        <div ref={setRef(2)} className="opacity-0 md:[grid-area:db]">
          <InventoryFrame variant={3}>
            <div>
              <h3 className="flex items-center justify-center mb-3 sm:mb-4 text-cyan-300 text-xs sm:text-sm tracking-normal">
                DATABASES
              </h3>
              <div className="flex gap-2 justify-center flex-wrap">
                <SkillTag>MongoDB</SkillTag>
                <SkillTag>MySQL</SkillTag>
              </div>
            </div>
          </InventoryFrame>
        </div>

        {/* Backend */}
        <div ref={setRef(3)} className="opacity-0 md:[grid-area:backend]">
          <InventoryFrame variant={4}>
            <h3 className="mb-3 sm:mb-4 pl-3 sm:pl-4 text-cyan-300 text-xs sm:text-sm tracking-widest">
              BACKEND DEVELOPMENT
            </h3>
            <div className="flex flex-wrap gap-2 justify-center pr-3 sm:pr-4">
              <SkillTag>Node.js</SkillTag>
              <SkillTag>Express.js</SkillTag>
              <SkillTag>REST APIs</SkillTag>
              <SkillTag>JWT</SkillTag>
              <SkillTag>Mongoose</SkillTag>
            </div>
          </InventoryFrame>
        </div>

        {/* Frontend */}
        <div ref={setRef(4)} className="opacity-0 md:[grid-area:frontend]">
          <InventoryFrame variant={5}>
            <h3 className="mb-3 sm:mb-4 pl-3 sm:pl-4 text-cyan-300 text-xs sm:text-sm tracking-widest">
              FRONTEND DEVELOPMENT
            </h3>
            <div className="flex flex-wrap gap-2 justify-center pr-3 sm:pr-4">
              <SkillTag>HTML</SkillTag>
              <SkillTag>CSS</SkillTag>
              <SkillTag>Tailwind</SkillTag>
              <SkillTag>React</SkillTag>
              <SkillTag>Next.js</SkillTag>
            </div>
          </InventoryFrame>
        </div>

        {/* Shield — hidden on mobile */}
        <div className="hidden md:flex h-full w-full md:[grid-area:shield]">
          <div className="flex justify-center w-full">
            <img src={shield} className="w-[60%]" />
          </div>
        </div>

        {/* Tools */}
        <div ref={setRef(5)} className="opacity-0 md:[grid-area:tools]">
          <InventoryFrame variant={1}>
            <h3 className="mb-3 sm:mb-4 pl-3 sm:pl-4 text-cyan-300 text-xs sm:text-sm tracking-widest">
              TOOLS &amp; PLATFORMS
            </h3>
            <div className="flex flex-wrap gap-2 justify-center pr-3 sm:pr-4">
              <SkillTag>Git</SkillTag>
              <SkillTag>VS Code</SkillTag>
              <SkillTag>AWS</SkillTag>
              <SkillTag>Figma</SkillTag>
              <SkillTag>Canva</SkillTag>
              <SkillTag>Postman</SkillTag>
            </div>
          </InventoryFrame>
        </div>

      </div>
    </div>
  )
}
