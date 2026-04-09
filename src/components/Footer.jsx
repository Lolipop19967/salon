import { Link } from 'react-router-dom';
import { CONTACT } from '../data';

export default function Footer() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer style={{ padding: '48px 20px 28px', background: 'var(--dark)' }}>
      <div className="container">
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
          flexWrap: 'wrap', gap: 32, paddingBottom: 32,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--rose-quartz), var(--copper))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 13,
              }}>SP</div>
              <span style={{
                fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600,
                color: 'rgba(255,255,255,0.85)',
              }}>Sheer Perfection</span>
            </Link>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', maxWidth: 280, lineHeight: 1.6 }}>
              Wella Professional Colour Salon in Centurion. Expert cuts, colour, nails and treatments.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 12 }}>Pages</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {links.map((l) => (
                  <Link key={l.to} to={l.to} style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => e.target.style.color = 'rgba(255,255,255,0.9)'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
                  >{l.label}</Link>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 12 }}>Contact</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
                <span>{CONTACT.phone}</span>
                <span>{CONTACT.email}</span>
                <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer"
                  style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = 'rgba(255,255,255,0.9)'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
                >{CONTACT.instagram}</a>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          paddingTop: 20, display: 'flex', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12, fontSize: 12, color: 'rgba(255,255,255,0.25)',
        }}>
          <span>&copy; {new Date().getFullYear()} Sheer Perfection Hair Salon</span>
          <span>Centurion, Gauteng, South Africa</span>
        </div>
      </div>
    </footer>
  );
}
