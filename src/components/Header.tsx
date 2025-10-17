// Place this file at: src/components/Header.tsx

'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import './Header.css'

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = (): void => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link href="/" className="logo-link">
            <Image 
              src="/images/logo.png" 
              alt="ALMA Logo" 
              width={60} 
              height={60}
              className="logo"
            />
            <span className="logo-text">ALMA</span>
          </Link>

          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link href="/" onClick={closeMenu}>Home</Link></li>
            <li><Link href="/about" onClick={closeMenu}>About</Link></li>
            <li><Link href="/programs" onClick={closeMenu}>Programs</Link></li>
            <li><Link href="/gallery" onClick={closeMenu}>Gallery</Link></li>
            <li><Link href="/achievements" onClick={closeMenu}>Achievements</Link></li>
            <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>

          <Link href="/contact" className="btn btn-primary cta-btn">
            Register Now
          </Link>
        </nav>
      </div>
    </header>
  )
}