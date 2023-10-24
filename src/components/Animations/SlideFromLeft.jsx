import { motion, useAnimation } from 'framer-motion'

export default function SlideFromLeft({ children, duration }) {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        duration: duration ?? 1,
        bounce: 0.3,
      },
    },
  }

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
