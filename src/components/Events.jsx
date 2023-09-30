import ScaleUp from './Animations/ScaleUp'
import PastEvents from './PastEvents'

export default function Events() {
  return (
    <section className="mb-[100px] lg:mb-[200px]">
      <h1 className="relative mb-[25px] text-center font-sarmady text-[60px] font-semibold text-[#FAFAFA] [text-shadow:_4px_4px_0_rgb(106_155_185)] lg:text-[120px]">
        Past Events
      </h1>
      <ScaleUp duration={1}>
        <PastEvents />
      </ScaleUp>
    </section>
  )
}
