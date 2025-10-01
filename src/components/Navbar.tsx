'use client'
import Link from 'next/link'
import { IoHome, IoBagRemove } from "react-icons/io5"
import { FaUser } from "react-icons/fa"
import { HiMailOpen } from "react-icons/hi"
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathName = usePathname()
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) setTheme(savedTheme)
  }, [])

  const navItems = [
    { icon: IoHome, url: '/', name: 'Home' },
    { icon: FaUser, url: '/about', name: 'About' },
    { icon: IoBagRemove, url: '/portfolio', name: 'Portfolio' },
    { icon: HiMailOpen, url: '/contact', name: 'Contact' }
  ]

  // Background & text colors based on theme
  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white'
  const iconColor = theme === 'dark' ? 'text-white' : 'text-gray-900'
  const hoverColor = 'hover:bg-amber-500'

  return (
    <>
      {/* Desktop Sidebar Navbar */}
      <div className="lg:flex flex-col gap-10 items-end mt-40 hidden">
        {navItems.map((navItem, index) => (
          <Link
            href={navItem.url}
            key={index}
            className={`${
              pathName === navItem.url ? 'bg-amber-500' : bgColor
            } group relative flex items-center justify-end w-12 h-12 rounded-full ${hoverColor} overflow-hidden transition-all duration-300 hover:w-38`}
          >
            <navItem.icon size={25} className={`z-10 mr-2.5 ${iconColor}`} />
            <span className="absolute right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold uppercase">
              {navItem.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile Bottom Navbar */}
      <div
        className={`flex fixed bottom-0 lg:hidden items-center justify-evenly gap-2 w-full ${bgColor} p-2`}
      >
        {navItems.map((navItem, index) => (
          <Link
            href={navItem.url}
            key={index}
            className={`${
              pathName === navItem.url ? 'bg-amber-300' : bgColor
            } w-12 h-12 rounded-full flex items-center justify-center ${hoverColor}`}
          >
            <navItem.icon size={20} className={iconColor} />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Navbar
