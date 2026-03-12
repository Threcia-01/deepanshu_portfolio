import sword from "../../assets/images/originsSword.png"
import OriginsTextContainer from "../../components/containerBoxes/originsTextContainer"

export default function ExperienceContent() {
  return (
    <div className="mt-10 flex flex-col min-w-0 items-center">

        {/* Experience PANEL */}
        <div className="relative w-full max-w-4xl">
            <OriginsTextContainer />
            <div className="
                absolute inset-0
                flex flex-col items-center justify-center
                px-[8%] py-[6%]
                text-center
            ">

                <h3 className="text-[#BEE1EE] font-cinzel font-bold tracking-[0.3em] mb-[3%] text-[36px]">
                EXPERIENCE
                </h3>

                <div className="flex-col w-full px-10">
                    <div className="flex justify-between tracking-widest"> 
                        <div className="flex-col ">
                            <div className="">Front End Developer Intern</div>
                            <div className="text-blue-300 text-left">At Micro IT . Remote</div>
                        </div>
                        <div className="flex ">May 2025 - June 2025</div>
                    </div>

                    {/* List */}
                    <div className="flex flex-col gap-[6%] pt-10">

                    {/* Item */}
                    <div className="grid grid-cols-[28px_1fr_auto] gap-[3%] items-start">
                        <img src={sword} className="w-full h-[80%] mt-1 opacity-90" />
                        <div className="text-[#E6FBFF] font-rokkitt tracking-[0.25em] whitespace-nowrap text-[16px] text-start ">
                            UI Structuring & layout optimization
                        </div>
                    </div>
                    {/* Item */}
                    <div className="grid grid-cols-[28px_1fr_auto] gap-[3%] items-start">
                        <img src={sword} className="w-full h-[80%] mt-1 opacity-90" />
                        <div className="text-[#E6FBFF] font-rokkitt tracking-[0.25em] whitespace-nowrap text-[16px] text-start ">
                            DOM Handling and vanilla Javascript logic
                        </div>
                    </div>
                    {/* Item */}
                    <div className="grid grid-cols-[28px_1fr_auto] gap-[3%] items-start">
                        <img src={sword} className="w-full h-[80%] mt-1 opacity-90" />
                        <div className="text-[#E6FBFF] font-rokkitt tracking-[0.25em] whitespace-nowrap text-[16px] text-start ">
                            Git & GitHub version control discipline
                        </div>
                    </div>
                    {/* Item */}
                    <div className="grid grid-cols-[28px_1fr_auto] gap-[3%] items-start">
                        <img src={sword} className="w-full h-[80%] mt-1 opacity-90" />
                        <div className="text-[#E6FBFF] font-rokkitt tracking-[0.25em] whitespace-nowrap text-[16px] text-start ">
                            Design institution for real world user flow
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>


        {/* Achivements and certifications PANEL */}
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
                tracking-widest
                mb-[5%]
                text-[36px]
                ">
                ACHIVEMENTS & CERTIFICATIONS 
                </h3>

                {/* List */}
                <div className="flex flex-col ">

                    {/* Item */}
                    <div className="grid grid-cols-[28px_1fr_auto] gap-[3%] ">

                        <img src={sword} className="w-7.5 h-9.5 mt-1 opacity-90" />

                        <div className="flex min-w-0">
                        <p className="flex items-center  text-[#E6FBFF] font-rokkitt tracking-wide text-[18px]">
                            Web Development Course --- Hitesh Choudhary
                        </p>
                        </div>

                        <p className="text-blue-400 font-rokkitt tracking-[0.25em] whitespace-nowrap text-[16px]">
                        VIEW
                        </p>

                    </div>

                    {/* Item */}
                    <div className="grid grid-cols-[28px_1fr_auto] gap-[3%] ">

                        <img src={sword} className="w-7.5 h-9.5 mt-1 opacity-90" />

                        <div className="flex min-w-0">
                        <p className="flex items-center  text-[#E6FBFF] font-rokkitt tracking-wide text-[18px]">
                            Code Titans --- Battle of Brilliance
                        </p>
                        </div>

                        <p className="text-blue-400 font-rokkitt tracking-[0.25em] whitespace-nowrap text-[16px]">
                        VIEW
                        </p>

                    </div>

                    {/* Item */}
                    <div className="grid grid-cols-[28px_1fr_auto] gap-[3%] ">

                        <img src={sword} className="w-7.5 h-9.5 mt-1 opacity-90" />

                        <div className="flex min-w-0">
                        <p className="flex items-center  text-[#E6FBFF] font-rokkitt tracking-wide text-[18px]">
                            Adobe Designathon --- IIT Delhi
                        </p>
                        </div>

                        <p className="text-blue-400 font-rokkitt tracking-[0.25em] whitespace-nowrap text-[16px]">
                        VIEW
                        </p>

                    </div>

                    {/* Item */}
                    <div className="grid grid-cols-[28px_1fr_auto] gap-[3%] ">

                        <img src={sword} className="w-7.5 h-9.5 mt-1 opacity-90" />

                        <div className="flex min-w-0">
                        <p className="flex items-center  text-[#E6FBFF] font-rokkitt tracking-wide text-[18px]">
                            UI/UX Hackathon --- IIT BHU (5th position)
                        </p>
                        </div>

                        <p className="text-blue-400 font-rokkitt tracking-[0.25em] whitespace-nowrap text-[16px]">
                        VIEW
                        </p>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}



