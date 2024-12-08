'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import Button from './Button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  const navItems = useMemo(
    () => [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#services', label: 'Services' },
      { href: '#how-it-works', label: 'How It Works' },
      { href: '#success-stories', label: 'Success Stories' },
      { href: '#contact', label: 'Contact' },
    ],
    []
  )

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.querySelector(item.href)
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY
          const sectionBottom = sectionTop + section.offsetHeight

          if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionBottom - 100) {
            setActiveSection(item.href)
          }
        }
      })
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const linkClass = (item: { href: string }) =>
    `${isScrolled ? 'text-gray-900' : 'text-white'} ${
      activeSection === item.href ? 'font-bold' : ''
    } hover:text-gray-600`

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://i.imgur.com/YrXWWrk.png"
              alt="Career Discovery Logo"
              width={32}
              height={32}
              className="mr-3"
            />
            <span className={`text-2xl font-bold ${linkClass({ href: '#home' })}`}>
              Career Discovery
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.href} className="relative">
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 0.1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <a
                  href={item.href}
                  className={`relative z-10 px-3 py-2 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  } ${activeSection === item.href ? 'font-bold' : ''} hover:text-primary`}
                  onClick={(e) => handleSectionClick(e, item.href)}
                >
                  {item.label}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Contact Us Button (Desktop) */}
          <div className="hidden md:block">
            <Button href="/contact" variant={isScrolled ? 'primary' : 'white'}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button className={`md:hidden ${linkClass({ href: '#home' })}`}>
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="w-full max-h-[80vh] rounded-b-3xl pt-16 bg-white/80 backdrop-blur-md border-none overflow-y-auto"
            >
              <SheetHeader className="px-6">
                <SheetTitle className="text-2xl font-bold mb-6">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 px-6 pb-6">
                {navItems.map((item) => (
                  <motion.div key={item.href} className="relative">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 0.1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <a
                      href={item.href}
                      className="relative z-10 block px-3 py-2 text-xl text-gray-800 hover:text-primary"
                      onClick={(e) => handleSectionClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}
                <Button
                  href="#contact"
                  variant="primary"
                  className="mt-4"
                  onClick={(e) => handleSectionClick(e, '#contact')}
                >
                  Contact Us
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
