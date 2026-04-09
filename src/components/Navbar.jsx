import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isHome = location.pathname === '/';
  const light = isHome && !scrolled && !menuOpen;

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: light ? 'transparent' : 'rgba(245,240,235,0.95)',
      backdropFilter: light ? 'none' : 'blur(16px)',
      transition: 'all 0.4s',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70,
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--rose-quartz), var(--copper))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 15,
          }}>SP</div>
          <span style={{
            fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600,
            color: light ? '#fff' : 'var(--dark)', letterSpacing: 0.5, transition: 'color 0.4s',
          }}>Sheer Perfection</span>
        </Link>

        {/* Desktop nav */}
        <div className="desktop-nav" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} style={{
              fontSize: 13, fontWeight: 500, letterSpacing: 1.2, textTransform: 'uppercase',
              color: location.pathname === link.to
                ? 'var(--copper)'
                : light ? 'rgba(255,255,255,0.9)' : 'var(--dark)',
              transition: 'color 0.3s', padding: '4px 0',
              borderBottom: location.pathname === link.to ? '2px solid var(--copper)' : '2px solid transparent',
            }}>{link.label}</Link>
          ))}
          <Link to="/contact" className="btn-primary" style={{ padding: '10px 26px', fontSize: 12 }}>
            Book Now
          </Link>
        </div>

        {/* Mobile burger */}
        <button className="mobile-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
          style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            padding: 8, position: 'relative', width: 36, height: 36,
          }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              position: 'absolute', left: 6, width: 24, height: 2, borderRadius: 2,
              background: light ? '#fff' : 'var(--dark)', transition: 'all 0.3s',
              top: menuOpen
                ? 17
                : i === 0 ? 10 : i === 1 ? 17 : 24,
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg)' : i === 2 ? 'rotate(-45deg)' : 'none'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div style={{
        maxHeight: menuOpen ? 420 : 0, overflow: 'hidden', transition: 'max-height 0.4s ease',
        background: 'rgba(245,240,235,0.98)', backdropFilter: 'blur(20px)',
      }}>
        <div className="mobile-menu-inner" style={{ padding: '8px 20px 20px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} style={{
              fontSize: 16, fontWeight: 500, color: location.pathname === link.to ? 'var(--copper)' : 'var(--dark)',
              padding: '14px 0', display: 'block',
            }}>{link.label}</Link>
          ))}
          <Link to="/contact" className="btn-primary" style={{
            display: 'block', textAlign: 'center', marginTop: 8, padding: '14px 28px',
          }}>Book Now</Link>
        </div>
      </div>
    </nav>
  );
}
