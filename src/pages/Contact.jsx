import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { SERVICES, CONTACT } from '../data';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const inputStyle = {
    width: '100%', padding: '14px 16px', borderRadius: 10,
    border: '1.5px solid var(--mushroom)', fontFamily: "'Outfit', sans-serif",
    fontSize: 15, color: 'var(--dark)', background: 'var(--linen)', outline: 'none',
    transition: 'border-color 0.3s', boxSizing: 'border-box',
  };

  return (
    <>
      <PageHeader
        label="Get In Touch"
        title={<>Contact <em>Us</em></>}
        subtitle="We'd love to hear from you. Book an appointment or send us a message."
      />

      <section className="section" style={{ background: 'var(--linen)' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 48,
          }}>
            {/* Contact Info */}
            <div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 400, color: 'var(--dark)', margin: '0 0 24px',
              }}>Visit us or <em style={{ fontWeight: 500 }}>get in touch</em></h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  { icon: '📍', label: 'Address', value: CONTACT.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}` },
                  { icon: '📞', label: 'Phone / WhatsApp', value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
                  { icon: '✉️', label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                  { icon: '📸', label: 'Instagram', value: CONTACT.instagram, href: CONTACT.instagramUrl },
                  { icon: '🕐', label: 'Hours', value: 'Mon – Fri: 8am – 5pm · Sat: 8am – 1pm', href: null },
                ].map((c) => (
                  <div key={c.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                      background: 'rgba(184,123,74,0.08)', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: 20,
                    }}>{c.icon}</div>
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: 1.2, textTransform: 'uppercase', color: 'var(--truffle)', margin: '0 0 4px' }}>{c.label}</p>
                      {c.href ? (
                        <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                          rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          style={{
                            fontSize: 15, color: 'var(--warm-oak)', transition: 'color 0.3s',
                            display: 'inline-block', lineHeight: 1.5,
                          }}
                          onMouseEnter={(e) => e.target.style.color = 'var(--copper)'}
                          onMouseLeave={(e) => e.target.style.color = 'var(--warm-oak)'}
                        >{c.value}</a>
                      ) : (
                        <p style={{ fontSize: 15, color: 'var(--warm-oak)', margin: 0, lineHeight: 1.5 }}>{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map embed */}
              <div style={{ marginTop: 32, borderRadius: 16, overflow: 'hidden', height: 240 }}>
                <iframe
                  title="Sheer Perfection Location"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(CONTACT.address)}`}
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <div style={{
                background: '#fff', borderRadius: 20, padding: 'clamp(28px, 4vw, 44px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 500,
                  color: 'var(--dark)', margin: '0 0 8px',
                }}>Send us a message</h3>
                <p style={{ fontSize: 14, color: 'var(--truffle)', margin: '0 0 28px' }}>
                  Fields marked with * are required.
                </p>

                {sent && (
                  <div style={{
                    background: 'rgba(122,129,108,0.12)', border: '1px solid rgba(122,129,108,0.3)',
                    borderRadius: 10, padding: '14px 18px', marginBottom: 20,
                    fontSize: 14, color: 'var(--dried-sage)', fontWeight: 500,
                  }}>
                    ✓ Message sent! We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <input type="text" placeholder="Your name *" required value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--copper)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--mushroom)'}
                  />
                  <input type="email" placeholder="Email address" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--copper)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--mushroom)'}
                  />
                  <input type="tel" placeholder="Phone / WhatsApp *" required value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = 'var(--copper)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--mushroom)'}
                  />
                  <select value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    style={{ ...inputStyle, appearance: 'none', color: form.service ? 'var(--dark)' : 'var(--mushroom)' }}>
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                  </select>
                  <textarea placeholder="Any special requests or notes?" rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--copper)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--mushroom)'}
                  />
                  <button type="submit" className="btn-primary" style={{
                    width: '100%', padding: '16px', fontSize: 14,
                  }}>Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
