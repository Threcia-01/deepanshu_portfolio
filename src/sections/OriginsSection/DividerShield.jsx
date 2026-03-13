import shield from "../../assets/images/originsShield.png"

export default function DividerShield() {
  return (
    <div className="relative z-20 flex justify-center pointer-events-none -mt-10 -mb-10">
      <img
        src={shield}
        className="h-25 sm:h-29 md:h-33"
      />
    </div>
  )
}