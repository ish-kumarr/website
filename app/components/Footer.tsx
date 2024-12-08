'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'

const Blob = ({ className }: { className: string }) => (
  <div 
    className={`absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-10 ${className}`}
    style={{ background: 'linear-gradient(135deg, #6366F1 0%, #3B82F6 100%)' }}
  />
)

const FooterSection = ({ title, links }: { title: string, links: { label: string, href: string }[] }) => (
  <div className="mb-8 md:mb-0">
    <h3 className="text-lg font-semibold mb-4 text-gray-800">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="text-gray-600 hover:text-primary transition-colors">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const SocialIcon = ({ Icon, href }: { Icon: React.ElementType, href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors pt-2">
    <Icon size={24} />
  </a>
)

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
  }

  return (
    <footer className="relative overflow-hidden border-t bg-gray-50">
      <Blob className="left-0 top-0 -translate-x-1/2 -translate-y-1/2" />
      <Blob className="right-0 bottom-0 translate-x-1/2 translate-y-1/2" />
      
      <div className="container relative mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center text-2xl font-bold text-gray-900 mb-4 inline-block">
              <Image 
                src="https://i.imgur.com/YrXWWrk.png" 
                alt="Career Discovery Logo" 
                width={32} 
                height={32} 
                className="mr-3"
              />
              Career Discovery
            </Link>
            <p className="text-gray-600 mb-4">
              Empowering students to discover and pursue their dream careers through personalized guidance and support.
            </p>
            <div className="mt-4">
              <p className="text-gray-600"><strong>Email:</strong> info@careerdiscovery.com</p>
              <p className="text-gray-600"><strong>Phone:</strong> +91 9876543210</p>
              <p className="text-gray-600"><strong>Support:</strong> +91 9129887654</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <SocialIcon Icon={Facebook} href="https://facebook.com" />
              <SocialIcon Icon={Twitter} href="https://twitter.com" />
              <SocialIcon Icon={LinkedIn} href="https://linkedin.com" />
              <SocialIcon Icon={Instagram} href="https://instagram.com" />
            </div>
          </div>
          
          <FooterSection 
            title="Quick Links" 
            links={[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'How It Works', href: '/how-it-works' },
              { label: 'Success Stories', href: '/success-stories' },
              { label: 'Contact', href: '/contact' },
            ]}
          />
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Stay Updated</h3>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest career insights and opportunities.</p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white"
                required
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Career Discovery. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/terms" className="text-sm text-gray-500 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-sm text-gray-500 hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

