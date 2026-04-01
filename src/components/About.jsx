// ── About section ────────────────────────────────────────────
// Edit ABOUT_CONTENT to update the firm description and stats.

const ABOUT_CONTENT = {
  heading: 'About Our Firm',
  paragraphs: [
    'Dusseau & Makris is a full-service CPA and accounting firm dedicated to helping individuals and businesses manage their finances with confidence. We combine professional expertise with a personal approach, ensuring every client receives the attention their financial situation deserves.',
    'Whether you need assistance with annual tax filing, day-to-day bookkeeping, or long-term financial strategy, our team is here to provide clear guidance and dependable support.',
    'We believe that good accounting is more than numbers — it is about building a relationship of trust and helping our clients make informed decisions that support their goals.',
  ],
  // ── Stats boxes ───────────────────────────────────────────
  // Placeholder values — update once you have real figures.
  stats: [
    { number: '3+',    label: 'Experienced Team Members' },
    { number: '100+',  label: 'Clients Served'           },
    { number: '15+',   label: 'Years of Experience'       },
    { number: '100%',  label: 'Client Satisfaction Focus' },
  ],
}

export default function About() {
  return (
    <section id="about" className="bg-alt">
      <div className="container">
        <div className="about-grid">

          {/* Left: text content */}
          <div className="about-text">
            <span className="about-label">Who We Are</span>
            <h2>{ABOUT_CONTENT.heading}</h2>
            {ABOUT_CONTENT.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Right: stat boxes */}
          <div className="about-stats">
            {ABOUT_CONTENT.stats.map((stat, i) => (
              <div className="stat-box" key={i}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
