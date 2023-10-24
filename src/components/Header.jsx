import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import iceeLogo from 'src/images/logos/icee_logo.svg'
import Image from 'next/image'
import { useInView } from "react-intersection-observer";


function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export function Header() {
  return (
    <header className="fixed z-[1000] w-full ">
      <nav>
        <div className="relative z-50 flex">
          <div className="z-10 hidden items-center justify-between bg-[rgba(200,235,226,0.50)] px-[80px] py-[10px] shadow-[0_4px_10px_0_rgba(71,77,91,0.50)] backdrop-blur lg:flex lg:w-full">
            <a href="#">
              <Image height={60} width={60} src={iceeLogo} alt="ICEE Logo" />
            </a>
            <div className="hidden lg:flex lg:gap-[70px]">
              <NavLinks />
            </div>
          </div>
          <div className="flex w-full items-center justify-between bg-[rgba(200,235,226,0.50)] shadow-[0_4px_10px_0_rgba(71,77,91,0.50)] lg:hidden">
            <Link href="/" className="m-2 flex p-2 lg:hidden">
              <Image height={40} width={40} src={iceeLogo} alt="ICEE Logo" />
            </Link>
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:bg-[#FFFFFF] active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-10 w-10" />
                      ) : (
                        <MenuIcon className="h-10 w-10" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="/">Home</MobileNavLink>
                            <MobileNavLink href="#footer">
                              Contacts
                            </MobileNavLink>
                            <MobileNavLink href="/register">
                              Register
                            </MobileNavLink>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </div>
      </nav>
    </header>
  )
}
