import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function CountUpAnimation({ num, duration, text, isPlus, key }) {
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
    <div className="flex flex-col items-center" ref={ref} key={key}>
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
