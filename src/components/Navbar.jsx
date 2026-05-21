import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id')
      })
      document.querySelectorAll('.nav-links a').forEach((a) => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--green)' : ''
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const downloadCV = (e) => {
    e.preventDefault()
    window.open('/assets/Davon_Perry_Resume.pdf', '_blank')
  }

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">Davon<span>pn</span></a>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#research" onClick={closeMenu}>Research</a></li>
        <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      <a href="#" className="nav-cta" onClick={downloadCV}>Resume</a>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  )
}

export default Navbar
