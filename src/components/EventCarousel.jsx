import ScaleUp from './Animations/ScaleUp'
import ResponsiveCarousel from './ResponsiveCarousel'

export default function EventCarousel() {
  return (
    <section className="mb-[200px] margin-auto flex flex-col items-center mb-[80px]">
      <h1 className="font-sarmady text-[60px] font-semibold text-[#FAFAFA] [text-shadow:_4px_4px_0_rgb(106_155_185)] lg:text-[120px]">
        Events
      </h1>
      <ResponsiveCarousel />
    </section>
  )
}
