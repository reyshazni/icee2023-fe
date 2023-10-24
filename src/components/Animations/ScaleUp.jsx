import { motion, useAnimation } from 'framer-motion'

export default function ScaleUp({ children, duration }) {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
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
