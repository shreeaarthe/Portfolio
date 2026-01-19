import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">Aarthe<span className="logo-dot">.</span></a>

        <div className="desktop-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <div className="nav-actions">

          <a href="/data/resume/Resume1.pdf" download className="btn-resume">
            <span className="icon">↓</span> Resume
          </a>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu glass-effect"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.2rem 0;
          transition: all 0.3s ease;
        }
        .navbar.scrolled {
          background: rgba(2, 6, 23, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--card-border);
          padding: 1rem 0;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.8rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
        }
        .logo-dot {
          color: var(--accent-color);
        }
        .desktop-menu {
          display: none;
          gap: 2.5rem;
        }
        .nav-link {
          font-size: 0.95rem;
          color: var(--text-secondary);
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #fff;
        }
        .nav-actions {
          display: none;
          gap: 1.5rem;
          align-items: center;
        }

        .btn-resume {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
          padding: 0.6rem 1.4rem;
          border-radius: 9999px;
          font-weight: 500;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          transition: transform 0.2s;
        }
        .btn-resume:hover {
          transform: translateY(-1px);
        }
        .icon {
          font-size: 1.1em;
        }

        .mobile-toggle {
          display: block;
          font-size: 1.5rem;
          color: var(--text-color);
        }
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
          border-bottom: 1px solid var(--card-border);
        }
        
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex;
          }
          .nav-actions {
             display: flex;
          }
          .mobile-toggle {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
