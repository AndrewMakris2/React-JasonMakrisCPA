// ── Footer ───────────────────────────────────────────────────
// Edit FOOTER_CONTENT to update contact info, nav links, and services list.

const FOOTER_CONTENT = {
  firmName: 'Dusseau & Makris',
  tagline:  'Trusted CPA and accounting services for individuals and businesses.',

  contact: {
    phone:   '(602) 996-8885',
    email:   'info@dusseaumakris.com',  // TODO: Replace with real email
    address: '3519 E Shea Blvd #122, Phoenix, AZ 85028',
  },

  quickLinks: [
    { label: 'About',    href: '#about'    },
    { label: 'Services', href: '#services' },
    { label: 'Team',     href: '#team'     },
    { label: 'Contact',  href: '#contact'  },
  ],

  services: [
    'Tax Preparation',
    'Bookkeeping',
    'Payroll Support',
    'Financial Reporting',
    'Business Accounting',
    'CPA Consulting',
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">

        {/* ── Top grid ─────────────────────────────────────── */}
        <div className="footer-top">

          {/* Brand + tagline */}
          <div className="footer-brand">
            <h3>
              {/* Split ampersand for accent color */}
              Dusseau <span>&amp;</span> Makris
            </h3>
            <p>{FOOTER_CONTENT.tagline}</p>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {FOOTER_CONTENT.quickLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services list */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {FOOTER_CONTENT.services.map(svc => (
                <li key={svc}>
                  <span>{svc}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ───────────────────────────────────── */}
        <div className="footer-bottom">
          <p>© {year} {FOOTER_CONTENT.firmName}. All rights reserved.</p>
          <p>
            {/* TODO: Replace with real contact details */}
            {FOOTER_CONTENT.contact.phone} &nbsp;·&nbsp; {FOOTER_CONTENT.contact.email}
          </p>
        </div>

      </div>
    </footer>
  )
}
