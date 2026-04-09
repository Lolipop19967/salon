import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { IMG, CONTACT } from '../data';

export default function About() {
  return (
    <>
      <PageHeader
        label="Our Story"
        title={<>About <em>Sheer Perfection</em></>}
        subtitle="More than a salon — a place to relax, be yourself, and leave feeling amazing."
      />

      <section className="section" style={{ background: 'var(--linen)' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 48, alignItems: 'center',
          }}>
            <div style={{ borderRadius: 20, overflow: 'hidden' }}>
              <img src={IMG.about} alt="Inside our salon" loading="lazy"
                style={{ width: '100%', display: 'block', borderRadius: 20 }} />
            </div>
            <div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 400, color: 'var(--dark)', margin: '0 0 20px', lineHeight: 1.2,
              }}>A salon that feels <em style={{ fontWeight: 500 }}>like home</em></h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--warm-oak)', marginBottom: 16 }}>
                At Sheer Perfection, we believe every visit should feel like a mini retreat. From the moment you walk through our doors, you're welcomed with genuine warmth, a fabulous scalp massage, and a fresh cup of filter coffee — always on the house.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--warm-oak)', marginBottom: 16 }}>
                We're a proud Wella Professional Colour Salon and Mycro Keratin specialist. The personal touch we provide to each client makes all the difference compared to the average salon in a shopping centre.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--warm-oak)', marginBottom: 24 }}>
                Our team stays on top of the latest trends through regular seminars and training from all our brand service providers. We're also passionate about using eco-friendly, cruelty-free products that are not tested on animals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '60px 20px', background: 'var(--bone)' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 32, textAlign: 'center',
          }}>
            {[
              { n: '20+', l: 'Years of Experience' },
              { n: '5★', l: 'Client Rating' },
              { n: '1000+', l: 'Happy Clients' },
              { n: '100%', l: 'Eco-Friendly Products' },
            ].map((s) => (
              <div key={s.l} style={{
                background: '#fff', borderRadius: 16, padding: '32px 20px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700,
                  color: 'var(--copper)', lineHeight: 1, marginBottom: 8,
                }}>{s.n}</div>
                <div style={{ fontSize: 13, color: 'var(--truffle)', letterSpacing: 1, textTransform: 'uppercase' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: 'var(--linen)', textAlign: 'center' }}>
        <div className="container">
          <p className="section-label">The Team</p>
          <h2 className="section-title">Meet our <em>professionals</em></h2>
          <p style={{ fontSize: 16, color: 'var(--warm-oak)', maxWidth: 600, margin: '0 auto 32px', lineHeight: 1.7 }}>
            From cuts to colours, our team are qualified experts in the beauty industry. Led by Nadia, every stylist is dedicated to helping you get the look of your dreams.
          </p>
          <Link to="/contact" className="btn-primary">Book a Consultation</Link>
        </div>
      </section>
    </>
  );
}
