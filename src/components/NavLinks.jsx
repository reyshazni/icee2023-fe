import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null)

  const router = useRouter()

  return [
    ['Home', '/'],
    ['Contact', '#pricing'],
    ['Register', '/register'],
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className={`relative rounded-lg px-4 font-sarmady text-[40px] font-bold ${
        router.route === href ? 'text-[#6A9BB9]' : 'text-[#26405B]'
      }  transition-colors delay-[100ms] hover:text-[#6A9BB9] hover:delay-[100ms]`}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-gray-100"
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
