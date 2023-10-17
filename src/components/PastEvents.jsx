import * as React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import { images } from '../constants/past_events'
import FadeIn from './Animations/FadeIn'

function NextButton(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="51"
      viewBox="0 0 50 51"
      fill="none"
      {...props}
    >
      <path
        d="M12.7393 42.8849L16.4268 46.5724L37.2601 25.7391L16.4268 4.90576L12.7393 8.59326L29.8851 25.7391L12.7393 42.8849Z"
        fill="#C8EBE2"
      />
    </svg>
  )
}

function PrevButton(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="51"
      viewBox="0 0 50 51"
      fill="none"
      {...props}
    >
      <path
        d="M37.1562 8.80176L33.4479 5.11426L12.8438 25.7393L33.4687 46.3643L37.1562 42.6768L20.2187 25.7393L37.1562 8.80176Z"
        fill="#C8EBE2"
      />
    </svg>
  )
}

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity
}

export default function PastEvents() {
  const [[page, direction], setPage] = useState([0, 0])

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  // Function to auto-slide every 3 seconds
  const autoSlide = () => {
    paginate(1) // Go to the next image
  }

  useEffect(() => {
    // Set up an interval for auto-sliding
    const intervalId = setInterval(autoSlide, 3000)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, [page])

  return (
    
      <FadeIn>
        <div className="relative flex w-[100vw] h-[250px] lg:items-center justify-center lg:h-[700px] overflow-hidden">
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              className="absolute rounded-[8px] border-[1px] border-[#C8EBE2] bg-[#004141] shadow-[1px_1px_15px_0_rgba(250,250,250,0.20)] md:shadow-[1px_1px_15px_0_rgba(250,250,250,0.20)] lg:shadow-[2px_1px_25px_0_rgba(250,250,250,0.20)]"
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
            >
              <img
                src={images[imageIndex].img.src}
                draggable="false"
                className="h-[150px] w-[300px] object-cover md:w-[400px] lg:h-[450px] lg:w-[60vw]	rounded-[8px]"
              />
              <div className="px-[15px] pt-[17px] pb-[10px] lg:px-[30px] lg:pt-[30px]">
                <h2 className="font-montserrat text-[11px] font-medium text-[#FAFAFA] lg:text-[30px]">
                  ICEE {images[imageIndex].year}
                </h2>
                <h1 className="font-sarmady text-[20px] font-bold text-[#C8EBE2] lg:text-[80px]">
                  {images[imageIndex].name}
                </h1>
              </div>
            </motion.div>
          </AnimatePresence>

          <NextButton
            className="top-[calc(50% - 20px)] absolute right-[100px] z-[2] hidden h-[40px]  w-[40px] cursor-pointer select-none lg:flex"
            onClick={() => paginate(1)}
          />

          <PrevButton
            className="top-[calc(50% - 20px)] absolute left-[100px] z-[2] hidden h-[40px]  w-[40px] cursor-pointer select-none lg:flex"
            onClick={() => paginate(-1)}
          />
        </div>
      </FadeIn>
  )
}
