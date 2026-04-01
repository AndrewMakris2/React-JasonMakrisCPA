// ── Services section ─────────────────────────────────────────
// Add, remove, or edit cards in the SERVICES array below.
// `icon` can be any emoji or replaced with an SVG component.

const SERVICES = [
  {
    icon: '📋',
    title: 'Tax Preparation',
    description:
      'Accurate and timely tax preparation for individuals and businesses. We stay current with tax law changes so you get every deduction you are entitled to.',
  },
  {
    icon: '📒',
    title: 'Bookkeeping',
    description:
      'Organized, up-to-date financial records that give you a clear picture of your business. We handle the details so you can focus on running your operations.',
  },
  {
    icon: '💼',
    title: 'Payroll Support',
    description:
      'Reliable payroll processing that keeps your employees paid accurately and on time, with proper tax withholdings and compliance documentation.',
  },
  {
    icon: '📊',
    title: 'Financial Reporting',
    description:
      'Clear financial statements and reports that help you understand the health of your business and make confident, well-informed decisions.',
  },
  {
    icon: '🏢',
    title: 'Business Accounting',
    description:
      'Full-service accounting support for small and mid-sized businesses, from account reconciliation and expense tracking to year-end closings.',
  },
  {
    icon: '🤝',
    title: 'CPA Consulting',
    description:
      'One-on-one guidance from a licensed CPA. Whether you are starting a business, planning a major purchase, or navigating a financial challenge, we are here to help.',
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="container">

        <div className="section-header" data-label="What We Offer">
          <h2>Our Services</h2>
          <p>
            We offer a full range of accounting and financial services tailored to
            the needs of individuals and businesses of all sizes.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon-wrap" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
