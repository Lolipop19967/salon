import PageHeader from '../components/PageHeader';
import { IMG, CONTACT } from '../data';

export default function Gallery() {
  return (
    <>
      <PageHeader
        label="Our Work"
        title={<>Style <em>Gallery</em></>}
        subtitle="Browse some of our favourite transformations and nail art."
      />

      <section className="section" style={{ background: 'var(--linen)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 16,
          }}>
            {IMG.gallery.map((src, i) => (
              <div key={i} style={{
                borderRadius: 14, overflow: 'hidden',
                aspectRatio: i % 3 === 0 ? '3/4' : '1/1',
              }}>
                <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" style={{
                  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                  transition: 'transform 0.5s', cursor: 'pointer',
                }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section style={{ padding: '60px 20px 80px', background: 'var(--bone)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 400, color: 'var(--dark)', marginBottom: 8,
          }}>Follow our <em style={{ fontWeight: 500 }}>Instagram</em></h2>
          <div style={{
            width: 50, height: 3, background: 'var(--copper)',
            margin: '12px auto 16px', borderRadius: 2,
          }} />
          <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" style={{
            fontSize: 16, color: 'var(--warm-oak)', transition: 'color 0.3s',
            display: 'inline-block', marginBottom: 32,
          }}
            onMouseEnter={(e) => e.target.style.color = 'var(--copper)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--warm-oak)'}
          >{CONTACT.instagram}</a>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 12,
          }}>
            {IMG.gallery.map((src, i) => (
              <a key={i} href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer"
                style={{ borderRadius: 10, overflow: 'hidden', aspectRatio: '1/1', display: 'block' }}>
                <img src={src} alt={`Instagram ${i + 1}`} loading="lazy" style={{
                  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                  transition: 'transform 0.4s, opacity 0.4s',
                }}
                  onMouseEnter={(e) => { e.target.style.transform = 'scale(1.08)'; e.target.style.opacity = '0.85'; }}
                  onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.opacity = '1'; }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
