// ── Reviews section ───────────────────────────────────────────
// Reviews sourced from Google. Add or remove entries in REVIEWS below.

const REVIEWS = [
  {
    name:    'Son Shyn',
    rating:  5,
    date:    '7 years ago',
    excerpt: 'My husband and I have used Dusseau & Makris for quite some time. They have always been very prompt and thorough when it comes to completing our taxes. I would highly recommend them for all your accounting needs.',
  },
  {
    name:    'Vinh Dang',
    rating:  5,
    date:    '6 years ago',
    excerpt: 'What I pay for their service vs what they do to make my business more manageable is no fair trade off. Jason is always helpful and goes out of his way to help me whenever he can. I don\'t feel like it\'s a business relationship but rather a friendship.',
  },
  {
    name:    'David Feign',
    rating:  5,
    date:    '11 months ago',
    excerpt: 'Excellent.',
  },
  {
    name:    'Tim Hamilton',
    rating:  5,
    date:    '6 years ago',
    excerpt: 'Professional, knowledgeable, and easy to work with. Highly recommend for any accounting needs.',
  },
]

function Stars({ count }) {
  return (
    <div className="review-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'star filled' : 'star'} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-alt">
      <div className="container">

        <div className="section-header" data-label="Client Reviews">
          <h2>What Our Clients Say</h2>
          <p>
            Rated 5.0 on Google — here's what clients have shared about working
            with Dusseau &amp; Makris.
          </p>
        </div>

        {/* Overall rating summary */}
        <div className="reviews-summary">
          <span className="reviews-score">5.0</span>
          <div className="reviews-summary-right">
            <Stars count={5} />
            <span className="reviews-count">Based on Google Reviews</span>
          </div>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((review, i) => (
            <div className="review-card" key={i}>
              <div className="review-header">
                <div className="review-avatar" aria-hidden="true">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="review-name">{review.name}</div>
                  <div className="review-date">{review.date}</div>
                </div>
              </div>
              <Stars count={review.rating} />
              <p className="review-text">{review.excerpt}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
