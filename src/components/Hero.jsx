// Edit HERO_CONTENT to update headline, tagline, subtext, and button labels.

const HERO_CONTENT = {
  eyebrow:  'CPA & Accounting Services',
  tagline:  'Trusted Accounting You Can Rely On',
  subtext:  'We help individuals and businesses navigate taxes, bookkeeping, payroll, and financial planning with clarity and confidence.',
  primaryCta:   { label: 'Get in Touch',  href: '#contact'  },
  secondaryCta: { label: 'Our Services',  href: '#services' },
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="hero-eyebrow">{HERO_CONTENT.eyebrow}</span>

        <h1>
          Dusseau <span className="amp">&amp;</span> Makris
        </h1>

        <p className="hero-tagline">{HERO_CONTENT.tagline}</p>
        <p className="hero-sub">{HERO_CONTENT.subtext}</p>

        <div className="hero-actions">
          <a href={HERO_CONTENT.primaryCta.href} className="btn btn-primary">
            {HERO_CONTENT.primaryCta.label}
          </a>
          <a href={HERO_CONTENT.secondaryCta.href} className="btn btn-ghost">
            {HERO_CONTENT.secondaryCta.label}
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint" aria-hidden="true">Scroll</div>
    </section>
  )
}
