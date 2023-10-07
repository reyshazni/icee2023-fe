import CountUpAnimation from "./Animations/CountUpAnimation";

export default function Numbers() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="relative mb-[25px] text-center font-sarmady text-[30px] font-semibold italic text-[#FAFAFA] [text-shadow:_2px_2px_0_rgb(190_172_184)] md:text-[60px] lg:text-[120px] lg:[text-shadow:_4px_4px_0_rgb(190_172_184)]">
        ICEE in Numbers
      </h1>
      <div className="flex w-[80vw] flex-col gap-[40px] md:w-[60vw] lg:w-[80vw] lg:gap-[80px]">
        <CountUpAnimation
          key={'paricipants'}
          num={9000}
          duration={5}
          text={'Total Participants'}
          isPlus={true}
        />
        <div className="flex w-full justify-between">
          <CountUpAnimation
            key={'workshop'}
            num={1800}
            duration={3}
            text={'Workshop Participants'}
            isPlus={true}
          />
          <CountUpAnimation
            key={'expo'}
            num={4372}
            duration={4}
            text={'Expo Participants'}
            isPlus={false}
          />
        </div>

        <CountUpAnimation
          key={'group'}
          num={495}
          duration={2}
          text={'Group Participants'}
          isPlus={false}
        />
        <div className="flex w-full justify-between">
          <CountUpAnimation
            key={'seminar'}
            num={2095}
            duration={3}
            text={'National Seminar Participants'}
            isPlus={false}
          />
          <CountUpAnimation
            key={'conference'}
            num={300}
            duration={2}
            text={'Conference Participants'}
            isPlus={true}
          />
        </div>
      </div>
    </section>
  )
}
