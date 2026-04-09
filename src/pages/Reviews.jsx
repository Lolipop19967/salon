import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { REVIEWS } from '../data';

export default function Reviews() {
  return (
    <>
      <PageHeader
        label="Testimonials"
        title={<>What our <em>clients</em> say</>}
        subtitle="Don't just take our word for it — see what our clients think."
      />

      <section className="section" style={{ background: 'var(--linen)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 24,
          }}>
            {REVIEWS.map((r, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 20, padding: 'clamp(28px, 4vw, 40px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                transition: 'transform 0.4s, box-shadow 0.4s',
                display: 'flex', flexDirection: 'column',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)'; }}
              >
                {/* Stars */}
                <div style={{ marginBottom: 16, fontSize: 18, color: 'var(--copper)', letterSpacing: 2 }}>
                  ★★★★★
                </div>
                <p style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 17,
                  color: 'var(--dark)', lineHeight: 1.75, fontStyle: 'italic', fontWeight: 300,
                  margin: '0 0 24px', flex: 1,
                }}>"{r.text}"</p>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--dark)', margin: '0 0 2px' }}>{r.author}</p>
                  <p style={{ fontSize: 12, color: 'var(--truffle)', margin: 0 }}>{r.service}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <p style={{ fontSize: 16, color: 'var(--warm-oak)', marginBottom: 24, lineHeight: 1.7 }}>
              Had a great experience? We'd love to hear from you!
            </p>
            <Link to="/contact" className="btn-primary">Leave a Review</Link>
          </div>
        </div>
      </section>
    </>
  );
}
