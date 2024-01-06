import React from 'react'
import {
  StackedCarousel,
  ResponsiveContainer,
} from 'react-stacked-center-carousel'

import Image from 'next/image'
import ScaleUp from './Animations/ScaleUp'
import { carouselData } from '@/constants/event_carousel'
import { useRouter } from 'next/router'

function Pagination(props) {
  return (
    <div className="flex gap-[13px]">
      {carouselData.map((_, index) => {
        const isCenterSlide = props.centerSlideDataIndex === index
        return (
          <div
            key={index}
            className={`h-[12px] w-[12px] rounded-full ${
              isCenterSlide ? 'animate-glowBullet bg-[#C8EBE2]' : 'bg-[#FAFAFA]'
            } `}
          />
        )
      })}
    </div>
  )
}

export default function ResponsiveCarousel() {
  const ref = React.useRef()
  const [centerSlideDataIndex, setCenterSlideDataIndex] = React.useState(0)
  const onCenterSlideDataIndexChange = (newIndex) => {
    setCenterSlideDataIndex(newIndex)
  }

  const goToNextSlide = () => {
    ref.current.goNext()
  }

  const autoplayInterval = 6000

  React.useEffect(() => {
    const autoplayTimer = setInterval(goToNextSlide, autoplayInterval)

    return () => {
      clearInterval(autoplayTimer)
    }
  }, [])

  // ResponsiveContainer will make the carousel to have the width of its parent
  return (
    <div className="relative flex w-[100%] flex-col items-center justify-start">
      <ResponsiveContainer
        render={(parentWidth) => {
          let currentVisibleSlide = 5
          if (parentWidth <= 1280) currentVisibleSlide = 3
          if (parentWidth <= 720) currentVisibleSlide = 1
          return (
            <StackedCarousel
              ref={ref}
              data={carouselData}
              carouselWidth={parentWidth}
              slideWidth={500}
              height={parentWidth <= 767 ? 400 : 600}
              slideComponent={Card}
              maxVisibleSlide={5}
              currentVisibleSlide={currentVisibleSlide}
              onActiveSlideChange={onCenterSlideDataIndexChange}
            />
          )
        }}
      />
      <Pagination centerSlideDataIndex={centerSlideDataIndex} />
    </div>
  )
}

// Very import to memoize your Slide component otherwise there might be performance issue
// At minimum your should do a simple React.memo(SlideComponent)
// If you want the absolute best performance then pass in a custom comparator function like below
export const Card = React.memo(function (props) {
  const { data, dataIndex } = props
  const router = useRouter()

  return (
    <ScaleUp duration={dataIndex === 0 ? 0.7 : dataIndex * 0.9}>
      <div
        key={dataIndex}
        className="my-slide-component flex h-[300px] w-[100%] items-center p-4 md:h-[500px] lg:h-[500px]"
      >
        <div className="event-card m-auto flex h-[300px] w-[60%] select-none flex-col items-center justify-center gap-[15px] rounded-[8px] border-[1px] border-[#FAFAFA] bg-[#1B4141] px-[20px] md:h-[500px] md:w-[80%] md:gap-[15px] lg:h-[500px] lg:w-[80%] lg:gap-[15px]">
          <div className="w-[60px] md:w-[100px] lg:w-[100px]">
            <Image
              src={carouselData[dataIndex].img}
              draggable={false}
              alt={carouselData[dataIndex].title}
            />
          </div>
          <h1 className="text-center font-adam text-[24px] font-semibold text-[#FAFAFA] md:text-[30px] lg:text-[30px] lg:leading-[45px]">
            {carouselData[dataIndex].title}
          </h1>
          <p className="text-center font-montserrat text-[8px] text-[#FAFAFA] md:text-[12px] lg:text-[12px]">
            {carouselData[dataIndex].desc}
          </p>
          <button
            onClick={() => {
              // Temporary fix
              if (dataIndex === 0) {
                router.push('/register/conference')
              } else {
                router.push('/register')
              }
            }}
            className="w-[100px] rounded-[32px] bg-[#FFC892] py-[7.5px] md:w-[200px] md:py-[10px] lg:w-[200px] lg:py-[10px]"
          >
            <p className="text-center font-adam text-[12px] font-extrabold md:text-[18px] lg:text-[18px]">
              Register
            </p>
          </button>
        </div>
      </div>
    </ScaleUp>
  )
})

Card.displayName = 'EventCard'
