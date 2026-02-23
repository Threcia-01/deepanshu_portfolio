import DividerShield from "./DividerShield"
import sword from "../../assets/images/originsSword.png"
import OriginsTextContainer from "../../components/containerBoxes/originsTextContainer"

export default function OriginsContent() {
  return (
    <div className="mt-10 flex flex-col min-w-0 items-center">

        {/* SUMMARY PANEL */}
        <div className="relative w-full max-w-4xl">
            <OriginsTextContainer />
            <div className="
                absolute inset-0
                flex flex-col items-center justify-center
                px-[8%] py-[6%]
                text-center
            ">

                <h3 className="text-[#BEE1EE] font-cinzel font-bold tracking-[0.3em] mb-[3%] text-[36px]">
                SUMMARY
                </h3>

                <p className="text-[#BEE1EE] font-rokkitt text-center font-regular leading-relaxed max-w-[90%] text-[20px]">
                I began by learning the basics of the web—HTML, CSS, and JavaScript— and building small things just to understand how
                 everything worked. Over time, those experiments turned into real projects, and I started paying attention to structure,
                  clarity, and how ideas come together into something usable.
                    <br></br><br></br>
                  This phase is about curiosity, trial and error, and developing the habit of learning continuously. It laid the foundation
                   for how I approach building today.
                </p>

            </div>
        </div>

        {/* DIVIDER OVERLAY */}
        <DividerShield />

        {/* EDUCATION PANEL */}
        <div className="relative w-full max-w-4xl mt-12">
            <OriginsTextContainer />
            <div className="
                absolute inset-0
                px-[8%] py-[7%]
                flex flex-col
            ">

                {/* Title */}
                <h3 className="
                text-[#BEE1EE]
                text-center
                font-cinzel
                font-bold
                tracking-[0.3em]
                mb-[5%]
                text-[36px]
                ">
                EDUCATION
                </h3>

                {/* List */}
                <div className="flex flex-col gap-[6%]">

                {/* Item */}
                <div className="grid grid-cols-[28px_1fr_auto] gap-[3%] items-start">

                    <img src={sword} className="w-[30px] h-[50px] mt-[4px] opacity-90" />

                    <div className="min-w-0">
                    <p className="text-[#E6FBFF] font-rokkitt tracking-wide text-[18px]">
                        B.Tech in Artificial Intelligence
                    </p>
                    <p className="text-[#6FB6FF] font-rokkitt tracking-wide text-[15px] mt-[2px]">
                        Babu Banarsi Das University, Lucknow
                    </p>
                    </div>

                    <p className="text-[#E6FBFF] font-rokkitt tracking-[0.25em] whitespace-nowrap text-[16px]">
                    2022 — 2026
                    </p>

                </div>


                <div className="grid grid-cols-[28px_1fr_auto] gap-[3%] items-start">

                    <img src={sword} className="w-[30px] h-[50px] mt-[4px] opacity-90" />

                    <div className="min-w-0">
                    <p className="text-[#E6FBFF] font-rokkitt tracking-wide text-[18px]">
                        Senior Secondary (12th CBSE)
                    </p>
                    <p className="text-[#6FB6FF] font-rokkitt tracking-wide text-[15px] mt-[2px]">
                        Rani Lakshmi Bai Memorial School
                    </p>
                    </div>

                    <p className="text-[#E6FBFF] font-rokkitt tracking-[0.25em] whitespace-nowrap text-[16px]">
                    2020 — 2021
                    </p>

                </div>


                <div className="grid grid-cols-[28px_1fr_auto] gap-[3%] items-start">

                    <img src={sword} className="w-[30px] h-[50px] mt-[4px] opacity-90" />

                    <div className="min-w-0">
                    <p className="text-[#E6FBFF] font-rokkitt tracking-wide text-[18px]">
                        Secondary (10th CBSE)
                    </p>
                    <p className="text-[#6FB6FF] font-rokkitt tracking-wide text-[15px] mt-[2px]">
                        Rani Lakshmi Bai Memorial School
                    </p>
                    </div>

                    <p className="text-[#E6FBFF] font-rokkitt tracking-[0.25em] whitespace-nowrap text-[16px]">
                    2019 — 2020
                    </p>

                </div>

                </div>

            </div>
        </div>
    </div>
  )
}



