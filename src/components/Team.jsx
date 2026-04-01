// ── Team section ─────────────────────────────────────────────
// Edit the TEAM array to update names, roles, and bios.
// `initials` is used for the avatar placeholder — replace with
// a real <img> tag when photos are available.

const TEAM = [
  {
    initials: 'JM',
    name: 'Jason Makris',
    // TODO: Update with actual title
    role: 'CPA, Partner',
    bio: 'Jason brings years of experience in tax strategy and business accounting, helping clients achieve their financial goals with practical, straightforward advice.',
  },
  {
    initials: 'KD',
    name: 'Ken Dusseau',
    // TODO: Update with actual title
    role: 'CPA, Partner',
    bio: 'Ken specializes in financial reporting and small business accounting, providing clients with the clarity and structure they need to grow their businesses confidently.',
  },
  {
    initials: 'AM',
    name: 'Aidan Modica',
    // TODO: Update with actual title
    role: 'Staff Accountant',
    bio: 'Aidan supports our clients with bookkeeping, payroll, and tax preparation, delivering thorough and reliable work with attention to detail.',
  },
]

export default function Team() {
  return (
    <section id="team" className="bg-alt">
      <div className="container">

        <div className="section-header" data-label="The People">
          <h2>Meet the Team</h2>
          <p>
            Our team of qualified accounting professionals is committed to
            providing personalized service and sound financial guidance.
          </p>
        </div>

        <div className="team-grid">
          {TEAM.map((member, i) => (
            <div className="team-card" key={i}>
              {/* ── Avatar ─────────────────────────────────────────
                  Replace this div with an <img> tag when photos are ready:
                  <img src={member.photo} alt={member.name} className="team-photo" />
              ─────────────────────────────────────────────────── */}
              <div className="team-avatar" aria-hidden="true">
                {member.initials}
              </div>

              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
