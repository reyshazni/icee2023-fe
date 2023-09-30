import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LearnImg from '../images/learn.png'
import InnovateImg from '../images/innovate.png'
import ContributeImg from '../images/contribute.png'
import SlideFromLeft from './Animations/SlideFromLeft'
import SlideFromRight from './Animations/SlideFromRight'
import FadeIn from './Animations/FadeIn'

const Card = ({ children1, children2 }) => {
  const [showTitle, setShowTitle] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [showTitle])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true)
    }, 8000)

    return () => {
      clearTimeout(timer)
    }
  }, [showTitle])

  return (
    <div
      className="h-[300px] w-[300px] overflow-hidden rounded-[8px] bg-[#004141] shadow-[4px_25px_100px_0_rgba(250,250,250,0.20)] sm:mb-[25px] md:mb-[25px] lg:h-[380px] lg:w-[25vw]"
      onMouseEnter={() => setShowTitle(false)}
      onMouseLeave={() => setShowTitle(true)}
    >
      <AnimatePresence>
        {showTitle ? (
          <motion.div
            key="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex h-full flex-col"
          >
            {children1}
          </motion.div>
        ) : (
          <motion.div
            key="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex h-full flex-col justify-between p-[25px]"
          >
            {children2}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Vision() {
  return (
    <div className="mb-[100px] flex flex-col items-center justify-center px-[100px] lg:mb-[200px]">
      <div className="flex h-[145px] lg:h-[200px]">
        <SlideFromLeft>
          <div className="relative flex h-[100%] w-[100px] items-start justify-center lg:w-[200px]">
            <h1 className="absolute font-sarmady text-[60px] font-semibold leading-[100px] text-[#FAFAFA] lg:text-[120px]">
              Vision
            </h1>
          </div>
        </SlideFromLeft>
        <FadeIn duration={3}>
          <h1 className="text-center font-sarmady text-[180px] font-bold leading-[160px] text-[#C8EBE2] lg:text-[280px] lg:leading-[250px]">
            &
          </h1>
        </FadeIn>

        <SlideFromRight>
          <div className="relative flex h-[100%] w-[100px] items-end justify-center lg:w-[200px]">
            <h1 className="font-sarmady text-[60px] font-semibold leading-[100px] text-[#FAFAFA] lg:text-[120px]">
              Value
            </h1>
          </div>
        </SlideFromRight>
      </div>
      <div className="z-[10] flex min-h-[950px] w-[100%] flex-col items-center justify-between md:min-h-min lg:mt-[50px] lg:min-h-min lg:flex-row">
        <FadeIn duration={3}>
          <Card
            children1={
              <>
                <Image src={LearnImg} />
                <span className="px-[25px] pt-[20px] font-montserrat text-[24px] text-[#FAFAFA] lg:text-[30px]">
                  #1
                </span>
                <h1 className="px-[25px] font-sarmady text-[63px] font-bold leading-[100px] text-[#FAFAFA] lg:text-[6vw]">
                  Learn
                </h1>
              </>
            }
            children2={
              <>
                <p className="font-montserrat text-[18px] font-bold text-[#FAFAFA] lg:text-[1.5vw]">
                  LEARN is a cognitive process of acquiring new knowledge,
                  skills, or understanding, facilitating personal and
                  professional growth.
                </p>
                <p className="font-montserrat text-[24px] font-medium text-[#FAFAFA] lg:text-[30px]">
                  #1
                </p>
              </>
            }
          />
        </FadeIn>
        <FadeIn duration={6}>
          <Card
            children1={
              <>
                <Image src={InnovateImg} />
                <span className="px-[25px] pt-[20px] font-montserrat text-[24px] text-[#FAFAFA] lg:text-[30px]">
                  #2
                </span>
                <h1 className="px-[25px] font-sarmady text-[63px] font-bold leading-[100px] text-[#C8EBE2] lg:text-[6vw]">
                  Innovate
                </h1>
              </>
            }
            children2={
              <>
                <p className="font-montserrat text-[18px] font-bold text-[#C8EBE2] lg:text-[1.5vw]">
                  INNOVATE is to creatively introduce novel ideas, methods, or
                  technologies, fostering positive change and advancement within
                  an organization or industry.
                </p>
                <p className="font-montserrat text-[24px] font-medium text-[#FAFAFA] lg:text-[30px]">
                  #2
                </p>
              </>
            }
          />
        </FadeIn>

        <FadeIn duration={10}>
          <Card
            children1={
              <>
                <Image src={ContributeImg} />
                <span className="px-[25px] pt-[20px] font-montserrat text-[24px] text-[#FAFAFA] lg:text-[30px]">
                  #3
                </span>
                <h1 className="px-[25px] font-sarmady text-[63px] font-bold leading-[100px] text-[#BEACB8] lg:text-[6vw]">
                  Contribute
                </h1>
              </>
            }
            children2={
              <>
                <p className="font-montserrat text-[18px] font-bold text-[#BEACB8] lg:text-[1.5vw]">
                  CONTRIBUTE means actively and purposefully provide valuable
                  input, resources, or effort toward a particular goal or cause,
                  with the intention of enhancing its success or impact.
                </p>
                <p className="font-montserrat text-[24px] font-medium text-[#FAFAFA] lg:text-[30px]">
                  #3
                </p>
              </>
            }
          />
        </FadeIn>
      </div>
    </div>
  )
}
