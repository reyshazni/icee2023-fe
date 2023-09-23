import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null)

  const router = useRouter()

  return [
    ['Home', '/'],
    ['Contact', '/#footer'],
    ['Register', '/register'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className={`relative rounded-lg px-4 font-sarmady text-[40px] font-bold ${
        router.asPath === href
          ? 'inset-0 rounded-[30px] bg-[#004141] text-[#FAFAFA] delay=[150ms]'
          : 'text-[#004141]'
      }  transition-colors hover:text-[#FAFAFA]`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-[30px] bg-[#004141] "
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10 ">{label}</span>
    </Link>
  ))
}
