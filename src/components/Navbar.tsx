import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../assets/ride-logo.png'

// Define your navigation links
const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')

  const handleMenuClick = (name: string) => {
    setActive(name)
    setMenuOpen(false)
  }

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src={Logo} alt="Logo" style={{ height: 32 }} />
        </Link>

        {/* Desktop Menu */}
        <nav className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`navbar-link${active === item.name ? ' active' : ''}`}
              onClick={() => handleMenuClick(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Signup Button */}
        <div className="navbar-search">
          <Link to="/signup" className="navbar-signup-btn">Signup</Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="navbar-hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
