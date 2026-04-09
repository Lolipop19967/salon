export default function PageHeader({ label, title, subtitle }) {
  return (
    <div style={{
      paddingTop: 130, paddingBottom: 60, textAlign: 'center',
      background: 'linear-gradient(160deg, var(--truffle), var(--rose-quartz), var(--dusty-rose))',
    }}>
      <div className="fade-up">
        {label && <p className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>{label}</p>}
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(36px, 7vw, 56px)', fontWeight: 400,
          color: '#fff', lineHeight: 1.15, margin: '0 0 12px',
        }}>{title}</h1>
        {subtitle && (
          <p style={{
            fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.75)',
            maxWidth: 500, margin: '0 auto', lineHeight: 1.6, fontWeight: 300,
          }}>{subtitle}</p>
        )}
      </div>
    </div>
  );
}
