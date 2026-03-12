import InventoryFrame from "../../components/containerBoxes/inventoryFrames"
import SkillTag from "./skillTag"

import inventoryIcon from "../../assets/images/inventoryBox2Image.png"
import shield from "../../assets/images/originsShield.png"

export default function InventoryGrid() {
  return (
    <div
        className="px-[8%] "
      style={{
        display: "grid",
        gridTemplateAreas: `
          "prog prog prog prog prog icon icon db db db"
          "backend backend backend backend backend frontend frontend frontend frontend frontend"
          "shield shield shield shield tools tools tools tools tools tools"
        `,
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        gridTemplateRows: "auto auto auto ",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >

      {/* Programming Languages */}
      <div style={{ gridArea: "prog" }}>
        <InventoryFrame variant={1}>
          <h3 className="pl-6 mb-4 text-cyan-300 text-sm tracking-widest">
            PROGRAMMING LANGUAGES
          </h3>
          <div className="flex gap-3 justify-center pr-6 flex-wrap">
            <SkillTag>Javascript</SkillTag>
            <SkillTag>Python</SkillTag>
          </div>
        </InventoryFrame>
      </div>

      {/* Center Icon */}
      <div className="" style={{ gridArea: "icon" }}>
        <InventoryFrame variant={2} >
          <div className="flex justify-center">
            <img src={inventoryIcon} className="w-full " />
          </div>
        </InventoryFrame>
      </div>

      {/* Databases */}
      <div style={{ gridArea: "db" }}>
        <InventoryFrame variant={3}>
          <div>
            <h3 className="flex items-center justify-center mb-4  text-cyan-300 text-sm  tracking-normal ">
              DATABASES
            </h3>
            <div className="flex gap-2 justify-center flex-wrap ">
              <SkillTag>MongoDB</SkillTag>
              <SkillTag>MySQL</SkillTag>
            </div>
          </div>
        </InventoryFrame>
      </div>

      {/* Backend */}
      <div style={{ gridArea: "backend" }}>
        <InventoryFrame variant={4}>
          <h3 className="mb-4 pl-4 text-cyan-300 text-sm tracking-widest">
            BACKEND DEVELOPMENT
          </h3>
          <div className="flex flex-wrap gap-2 justify-center pr-4">
            <SkillTag>Node.js</SkillTag>
            <SkillTag>Express.js</SkillTag>
            <SkillTag>REST APIs</SkillTag>
            <SkillTag>JWT</SkillTag>
            <SkillTag>Mongoose</SkillTag>
          </div>
        </InventoryFrame>
      </div>

      {/* Frontend — spans 2 columns */}
      <div style={{ gridArea: "frontend" }}>
        <InventoryFrame variant={5}>
          <h3 className="mb-4 pl-4 text-cyan-300 text-sm tracking-widest">
            FRONTEND DEVELOPMENT
          </h3>
          <div className="flex flex-wrap gap-2 justify-center pr-4">
            <SkillTag>HTML</SkillTag>
            <SkillTag>CSS</SkillTag>
            <SkillTag>Tailwind</SkillTag>
            <SkillTag>React</SkillTag>
            <SkillTag>Next.js</SkillTag>
          </div>
        </InventoryFrame>
      </div>

      {/* Shield */}
      <div className="h-full w-full" style={{ gridArea: "shield" }}>
          <div className="flex justify-center">
            <img src={shield} className="w-[60%]" />
          </div>
      </div>

      {/* Tools — spans 2 columns */}
      <div style={{ gridArea: "tools" }}>
        <InventoryFrame variant={1}>
          <h3 className="mb-4 pl-4 text-cyan-300 text-sm tracking-widest">
            TOOLS & PLATFORMS
          </h3>
          <div className="flex flex-wrap gap-2 justify-center pr-4">
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
  )
}
