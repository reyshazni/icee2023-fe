import CountUp from 'react-countup'
import React, { useRef, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import FadeIn from './Animations/FadeIn'

const CountUpAnimation = ({ num, duration, text, isPlus }) => {
  const [isInView, setIsInView] = useState(false)
  const [startAnimation, setStartAnimation] = useState(false)

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Adjust the threshold as needed
  })

  useEffect(() => {
    if (inView && !startAnimation) {
      setIsInView(true)
      setStartAnimation(true)
    }
  }, [inView, startAnimation])

  return (
    <div className="flex flex-col items-center" ref={ref}>
      {isInView && (
        <CountUp
          start={0}
          end={num}
          duration={duration}
          suffix={isPlus ? '+' : ''}
          onEnd={() => console.log('Counting animation completed')}
        >
          {({ countUpRef, start }) => (
            <span
              ref={countUpRef}
              className="font-sarmady text-[60px] font-semibold leading-[50px] text-[#FAFAFA] lg:text-[120px] lg:leading-[100px]"
            >
              {startAnimation ? start() : null}
            </span>
          )}
        </CountUp>
      )}
      <div className="rounded-[64px] bg-[#C8EBE2] px-[20px] shadow-[4px_25px_100px_0_rgba(250,250,250,0.20)]">
        <h2 className="text-center font-sarmady text-[11px] font-semibold text-[#005453] md:text-[14px] lg:text-[36px] lg:leading-[48px]">
          {text}
        </h2>
      </div>
    </div>
  )
}

const Number = ({ num, duration, text, isPlus }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <CountUp
          className="font-sarmady text-[60px] font-semibold leading-[50px] text-[#FAFAFA] lg:text-[120px] lg:leading-[100px]"
          start={0}
          end={num}
          duration={duration}
          suffix={isPlus ? '+' : ''}
          separator=""
          useEasing={true}
        />
        <div className="rounded-[64px] bg-[#C8EBE2] px-[20px] shadow-[4px_25px_100px_0_rgba(250,250,250,0.20)]">
          <h2 className="text-center font-sarmady text-[11px] font-semibold text-[#005453] md:text-[14px] lg:text-[36px] lg:leading-[48px]">
            {text}
          </h2>
        </div>
      </div>
    </>
  )
}

export default function Numbers() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="relative mb-[25px] text-center font-sarmady text-[30px] md:text-[60px] font-semibold italic text-[#FAFAFA] [text-shadow:_2px_2px_0_rgb(190_172_184)] lg:[text-shadow:_4px_4px_0_rgb(190_172_184)] lg:text-[120px]">
        ICEE in Numbers
      </h1>
      <div className="flex w-[80vw] flex-col gap-[40px] md:w-[60vw] lg:w-[80vw] lg:gap-[80px]">
        <FadeIn duration={6}>
          <CountUpAnimation
            num={9000}
            duration={5}
            text={'Total Participants'}
            isPlus={true}
          />
        </FadeIn>
        <FadeIn duration={6}>
          <div className="flex w-full justify-between">
            <CountUpAnimation
              num={1800}
              duration={3}
              text={'Workshop Participants'}
              isPlus={true}
            />
            <CountUpAnimation
              num={4372}
              duration={4}
              text={'Expo Participants'}
              isPlus={false}
            />
          </div>
        </FadeIn>

        <FadeIn duration={6}>
          <CountUpAnimation
            num={495}
            duration={2}
            text={'Group Participants'}
            isPlus={false}
          />
        </FadeIn>
        <FadeIn duration={6}>
          <div className="flex w-full justify-between">
            <CountUpAnimation
              num={2095}
              duration={3}
              text={'National Seminar Participants'}
              isPlus={false}
            />
            <CountUpAnimation
              num={300}
              duration={2}
              text={'Conference Participants'}
              isPlus={true}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
