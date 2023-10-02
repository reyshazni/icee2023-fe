import React from 'react'
import {
  StackedCarousel,
  ResponsiveContainer,
} from 'react-stacked-center-carousel'

import Image from 'next/image'
import ScaleUp from './Animations/ScaleUp'
import { carouselData } from '@/constants/event_carousel'

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

  const autoplayInterval = 3000

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
              height={parentWidth <= 767 ? 400 : 700}
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

  return (
    <ScaleUp duration={dataIndex === 0 ? 0.7 : dataIndex * 0.9}>
      <div
        key={dataIndex}
        className="my-slide-component flex h-[300px] w-[100%] items-center p-4 md:h-[700px] lg:h-[700px]"
      >
        <div className="event-card m-auto flex h-[300px] w-[60%] select-none flex-col items-center justify-center gap-[15px] rounded-[8px] border-[1px] border-[#FAFAFA] bg-[#1B4141] px-[20px] md:h-[600px] md:w-[100%] md:gap-[25px] lg:h-[600px] lg:w-[100%] lg:gap-[25px]">
          <div className="w-[60px] md:w-max lg:w-max">
            <Image src={carouselData[dataIndex].img} draggable={false} />
          </div>
          <h1 className="text-center font-adam text-[24px] font-semibold text-[#FAFAFA] md:text-[40px] lg:text-[40px] lg:leading-[45px]">
            {carouselData[dataIndex].title}
          </h1>
          <p className="text-center font-montserrat text-[8px] text-[#FAFAFA] md:text-[16px] lg:text-[16px]">
            {carouselData[dataIndex].desc}
          </p>
          <button className="w-[100px] rounded-[32px] bg-[#BEACB8] py-[7.5px] md:w-[200px] md:py-[15px] lg:w-[200px] lg:py-[15px]">
            <p className="text-center font-adam text-[12px] font-bold md:text-[18px] lg:text-[18px]">
              Register
            </p>
          </button>
        </div>
      </div>
    </ScaleUp>
  )
})
