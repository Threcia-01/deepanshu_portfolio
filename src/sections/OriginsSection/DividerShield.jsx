import shield from "../../assets/images/originsShield.png"

export default function DividerShield() {
  return (
    <div className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      pointer-events-none
      z-20
    ">

      <img
        src={shield}
        className="h-40 mt-15 relative z-10"
      />

    </div>
  )
}