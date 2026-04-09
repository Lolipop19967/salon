import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IMG, SERVICES, REVIEWS, CONTACT } from '../data';

export default function Home() {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveReview((a) => (a + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ─── Hero ─── */}
      <section style={{
        minHeight: '100vh', position: 'relative', display: 'flex',
        alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${IMG.hero})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(92,79,82,0.5) 0%, rgba(184,123,74,0.3) 50%, rgba(158,139,142,0.55) 100%)',
        }} />

        <div style={{ position: 'relative', textAlign: 'center', padding: '0 24px', maxWidth: 780 }}>
          <p className="fade-up fade-up-2" style={{
            fontSize: 13, fontWeight: 500, letterSpacing: 4, textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.75)', marginBottom: 20,
          }}>Wella Professional Colour Salon &middot; Centurion</p>

          <h1 className="fade-up fade-up-4" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(46px, 9vw, 88px)', fontWeight: 400,
            color: '#fff', lineHeight: 1.08, margin: '0 0 20px',
          }}>
            Sheer <em>Perfection</em>
          </h1>

          <p className="fade-up fade-up-6" style={{
            fontSize: 'clamp(15px, 2.2vw, 19px)',
            color: 'rgba(255,255,255,0.88)', maxWidth: 500, margin: '0 auto 36px',
            lineHeight: 1.7, fontWeight: 300,
          }}>
            Relax, unwind, and leave looking fabulous. Expert cuts, colour and nails in a cozy atmosphere with complimentary coffee and scalp massages.
          </p>

          <div className="fade-up fade-up-8" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" className="btn-primary" style={{ background: '#fff', color: 'var(--copper)' }}>
              View Services
            </Link>
            <Link to="/contact" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Services Preview ─── */}
      <section className="section" style={{ background: 'var(--linen)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">Our <em>Services</em></h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 24,
          }}>
            {SERVICES.map((s) => (
              <Link to="/services" key={s.slug} style={{
                borderRadius: 16, overflow: 'hidden', background: '#fff',
                transition: 'transform 0.4s, box-shadow 0.4s',
                display: 'block',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)'; }}
              >
                <div style={{ height: 220, overflow: 'hidden' }}>
                  <img src={s.img} alt={s.title} loading="lazy" style={{
                    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                    transition: 'transform 0.6s',
                  }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: '24px 28px 28px', textAlign: 'center' }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600,
                    color: 'var(--dark)', margin: '0 0 8px',
                  }}>{s.title}</h3>
                  <p style={{ fontSize: 14.5, color: 'var(--warm-oak)', margin: '0 0 16px', lineHeight: 1.6 }}>
                    {s.short}
                  </p>
                  <span style={{
                    fontSize: 13, fontWeight: 600, color: 'var(--copper)',
                    letterSpacing: 0.5,
                  }}>Book Now &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Teaser ─── */}
      <section className="section" style={{ background: 'linear-gradient(180deg, var(--bone), var(--linen))' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 48, alignItems: 'center',
          }}>
            <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative' }}>
              <img src={IMG.about} alt="Inside our salon" loading="lazy"
                style={{ width: '100%', display: 'block', borderRadius: 20 }} />
              <div style={{
                position: 'absolute', bottom: 20, left: 20, right: 20,
                background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)',
                borderRadius: 12, padding: '16px 20px',
                display: 'flex', justifyContent: 'space-around', textAlign: 'center',
              }}>
                {[{ n: '20+', l: 'Years' }, { n: '5★', l: 'Rating' }, { n: '1000+', l: 'Clients' }].map((s) => (
                  <div key={s.l}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: 'var(--copper)' }}>{s.n}</div>
                    <div style={{ fontSize: 11, color: 'var(--truffle)', letterSpacing: 1, textTransform: 'uppercase' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="section-label">About Us</p>
              <h2 className="section-title">A salon that feels <em>like home</em></h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.8, color: 'var(--warm-oak)', marginBottom: 16 }}>
                At Sheer Perfection, every visit feels like a mini retreat. You're welcomed with warmth, a fabulous scalp massage, and a fresh cup of filter coffee — always on the house.
              </p>
              <p style={{ fontSize: 15.5, lineHeight: 1.8, color: 'var(--warm-oak)', marginBottom: 24 }}>
                We're a Wella Professional Colour Salon and Mycro Keratin specialist. Our team is passionate about eco-friendly, cruelty-free products.
              </p>
              <Link to="/about" className="btn-outline">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Reviews ─── */}
      <section className="section" style={{
        background: 'linear-gradient(160deg, var(--truffle), var(--rose-quartz), var(--dusty-rose))',
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', padding: '0 20px' }}>
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Testimonials</p>
          <h2 className="section-title" style={{ color: '#fff' }}>What our <em>clients</em> say</h2>

          <div style={{ position: 'relative', minHeight: 200, marginTop: 32 }}>
            {REVIEWS.map((r, i) => (
              <div key={i} style={{
                position: i === activeReview ? 'relative' : 'absolute',
                top: 0, left: 0, right: 0,
                opacity: i === activeReview ? 1 : 0,
                transform: i === activeReview ? 'none' : 'translateY(16px)',
                transition: 'all 0.5s ease',
                pointerEvents: i === activeReview ? 'auto' : 'none',
              }}>
                <p style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 'clamp(17px, 2.8vw, 22px)',
                  color: '#fff', lineHeight: 1.75, fontStyle: 'italic', fontWeight: 300, margin: '0 0 24px',
                }}>"{r.text}"</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#fff', margin: '0 0 4px' }}>{r.author}</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', margin: 0 }}>{r.service}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 32 }}>
            {REVIEWS.map((_, i) => (
              <button key={i} onClick={() => setActiveReview(i)} aria-label={`Review ${i + 1}`}
                style={{
                  width: i === activeReview ? 28 : 10, height: 10, borderRadius: 100, border: 'none',
                  background: i === activeReview ? '#fff' : 'rgba(255,255,255,0.3)',
                  cursor: 'pointer', transition: 'all 0.4s',
                }} />
            ))}
          </div>

          <Link to="/reviews" style={{
            display: 'inline-block', marginTop: 32, fontSize: 13, fontWeight: 600,
            color: '#fff', letterSpacing: 1, textTransform: 'uppercase',
            borderBottom: '2px solid rgba(255,255,255,0.3)', paddingBottom: 4,
          }}>See All Reviews &rarr;</Link>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section" style={{ background: 'var(--bone)', textAlign: 'center' }}>
        <div className="container">
          <p className="section-label">Ready?</p>
          <h2 className="section-title">Book your <em>appointment</em> today</h2>
          <p style={{ fontSize: 16, color: 'var(--warm-oak)', maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Call us on <strong>{CONTACT.phone}</strong> or send us an email. Walk-ins welcome, bookings recommended.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Get in Touch</Link>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="btn-outline">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
