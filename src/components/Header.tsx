// Place this file at: src/components/Header.tsx

'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import './Header.css'

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const pathname = usePathname()

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = (): void => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string): boolean => {
    return pathname === path
  }

  const isHomePage = pathname === '/'

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link href="/" className="logo-link">
            <Image 
              src="/images/logo.png" 
              alt="ALMA Logo" 
              width={50} 
              height={50}
              className="logo"
            />
            <span className="logo-text">ALMA</span>
          </Link>

          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {!isHomePage && (
              <li>
                <Link 
                  href="/" 
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
            )}
            <li>
              <Link 
                href="/about" 
                onClick={closeMenu}
                className={isActive('/about') ? 'active-link' : ''}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/programs" 
                onClick={closeMenu}
                className={isActive('/programs') ? 'active-link' : ''}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                onClick={closeMenu}
                className={isActive('/gallery') ? 'active-link' : ''}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                onClick={closeMenu}
                className={isActive('/events') ? 'active-link' : ''}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={closeMenu}
                className={isActive('/contact') ? 'active-link' : ''}
              >
                Contact
              </Link>
            </li>
            <li className="cta-mobile">
              <Link href="/contact" className="btn btn-primary" onClick={closeMenu}>
                Register Now
              </Link>
            </li>
          </ul>

          <Link href="/contact" className="btn btn-primary cta-btn">
            Register Now
          </Link>
        </nav>
      </div>
    </header>
  )
}