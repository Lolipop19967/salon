import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { SERVICES } from '../data';

export default function Services() {
  return (
    <>
      <PageHeader
        label="What We Offer"
        title={<>Our <em>Services</em></>}
        subtitle="From cuts to colours to nails, we've got you covered."
      />

      <section className="section" style={{ background: 'var(--linen)' }}>
        <div className="container">
          {SERVICES.map((s, i) => (
            <div key={s.slug} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 40, alignItems: 'center',
              marginBottom: i < SERVICES.length - 1 ? 64 : 0,
              direction: i % 2 === 1 ? 'rtl' : 'ltr',
            }}>
              <div style={{ direction: 'ltr', borderRadius: 18, overflow: 'hidden' }}>
                <img src={s.img} alt={s.title} loading="lazy" style={{
                  width: '100%', height: 340, objectFit: 'cover', display: 'block',
                  borderRadius: 18, transition: 'transform 0.6s',
                }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ direction: 'ltr' }}>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 38px)',
                  fontWeight: 500, color: 'var(--dark)', margin: '0 0 16px',
                }}>{s.title}</h2>
                <p style={{
                  fontSize: 16, lineHeight: 1.8, color: 'var(--warm-oak)', margin: '0 0 24px',
                }}>{s.desc}</p>
                <Link to="/contact" className="btn-primary">
                  Book Now &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
