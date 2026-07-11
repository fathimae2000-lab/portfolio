"use client"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from './ui/sheet'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'

const links = [
  {
    name: "home",
    path: '/'
  },
  {
    name: "services",
    path: '/services'
  },
  {
    name: "resume",
    path: '/resume'
  },
  {
    name: "work",
    path: '/work'
  },
  {
    name: "contact",
    path: '/contact'
  },
]

const MobileNav = () => {

  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent-hover' />
      </SheetTrigger>

      <SheetContent className='flex flex-col bg-primary overflow-y-auto h-full pb-4'>

        <SheetHeader>
          <SheetTitle className="hidden">
            Mobile Navigation
          </SheetTitle>
        </SheetHeader>

        {/* logo */}
        <div className='mt-32 mb-40 text-right text-2xl'>
          <Link href="/">
            <h1 className='text-4xl font-semibold'>
              Fathima
              <span className='text-accent-hover'>.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${link.path === pathname
                    ? "text-accent-hover border-b-2 border-accent-hover"
                    : ""
                  } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

      </SheetContent>
    </Sheet>
  )
}

export default MobileNav