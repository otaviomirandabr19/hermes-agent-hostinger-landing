import { landingContent } from './content/landingContent'

const isExternalHref = (href: string) => href.startsWith('http://') || href.startsWith('https://')

function App() {
  const { nav, hero, overview, infrastructure, flow, useCases, cta, faq, footer } = landingContent

  return (
    <div className="page-shell">
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Ir para o topo">
          <span className="brand-mark" />
          <span>
            <strong>Hermes Agent</strong>
            <small>hostinger pilot</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Navegação principal">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero section-frame">
          <div className="hero-copy">
            <span className="eyebrow">{hero.eyebrow}</span>
            <h1>{hero.title}</h1>
            <p className="hero-body">{hero.body}</p>

            <div className="badge-row" aria-label="Destaques do projeto">
              {hero.badges.map((badge) => (
                <span key={badge} className="badge-chip">
                  {badge}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={hero.primaryCta.href}
                target={isExternalHref(hero.primaryCta.href) ? '_blank' : undefined}
                rel={isExternalHref(hero.primaryCta.href) ? 'noreferrer' : undefined}
              >
                {hero.primaryCta.label}
              </a>
              <a
                className="button button-secondary"
                href={hero.secondaryCta.href}
                target={isExternalHref(hero.secondaryCta.href) ? '_blank' : undefined}
                rel={isExternalHref(hero.secondaryCta.href) ? 'noreferrer' : undefined}
              >
                {hero.secondaryCta.label}
              </a>
            </div>

            <p className="hero-note">{hero.note}</p>
          </div>

          <div className="hero-panel">
            <div className="panel-card panel-card-primary">
              <p>{hero.panel.kicker}</p>
              <h2>{hero.panel.title}</h2>
            </div>

            <div className="metric-grid">
              {hero.metrics.map((metric) => (
                <article key={metric.label} className="panel-card metric-card">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="overview" className="content-section">
          <div className="section-heading">
            <span className="eyebrow">{overview.sectionLabel}</span>
            <h2>{overview.sectionTitle}</h2>
            <p>{overview.sectionBody}</p>
            <p className="section-support">{overview.supportNote}</p>
          </div>

          <div className="card-grid three-up">
            {overview.cards.map((card) => (
              <article key={card.title} className="info-card">
                <span className="card-tag">{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="infrastructure" className="content-section infrastructure-shell">
          <div className="section-heading narrow">
            <span className="eyebrow">{infrastructure.sectionLabel}</span>
            <h2>{infrastructure.sectionTitle}</h2>
            <p>{infrastructure.sectionBody}</p>
          </div>

          <div className="card-grid three-up elevated-grid">
            {infrastructure.cards.map((card) => (
              <article key={card.title} className="info-card info-card-contrast">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <small>{card.detail}</small>
              </article>
            ))}
          </div>
        </section>

        <section id="flow" className="content-section">
          <div className="section-heading">
            <span className="eyebrow">{flow.sectionLabel}</span>
            <h2>{flow.sectionTitle}</h2>
          </div>

          <div className="flow-grid">
            {flow.steps.map((step) => (
              <article key={step.step} className="flow-card">
                <span className="flow-step">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <p className="section-note">{flow.note}</p>
        </section>

        <section className="content-section split-section">
          <div className="section-heading sticky-heading">
            <span className="eyebrow">{useCases.sectionLabel}</span>
            <h2>{useCases.sectionTitle}</h2>
            <p>{useCases.intro}</p>
          </div>

          <div className="card-grid two-up">
            {useCases.items.map((item) => (
              <article key={item.title} className="info-card info-card-soft">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="cta" className="content-section cta-section">
          <div className="cta-panel">
            <div>
              <span className="eyebrow">{cta.sectionLabel}</span>
              <h2>{cta.title}</h2>
              <p>{cta.body}</p>
            </div>

            <div className="offer-cluster">
              <div className="coupon-box">
                <span>Cupom</span>
                <strong>{cta.coupon}</strong>
                <small>{cta.note}</small>
              </div>
              <div className="hero-actions cta-actions">
                <a
                  className="button button-primary"
                  href={cta.primaryCta.href}
                  target={isExternalHref(cta.primaryCta.href) ? '_blank' : undefined}
                  rel={isExternalHref(cta.primaryCta.href) ? 'noreferrer' : undefined}
                >
                  {cta.primaryCta.label}
                </a>
                <a
                  className="button button-secondary"
                  href={cta.secondaryCta.href}
                  target={isExternalHref(cta.secondaryCta.href) ? '_blank' : undefined}
                  rel={isExternalHref(cta.secondaryCta.href) ? 'noreferrer' : undefined}
                >
                  {cta.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="content-section faq-section">
          <div className="section-heading">
            <span className="eyebrow">{faq.sectionLabel}</span>
            <h2>{faq.sectionTitle}</h2>
          </div>

          <div className="faq-list">
            {faq.items.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span className="eyebrow">{footer.kicker}</span>
        <strong>{footer.title}</strong>
        <p>{footer.body}</p>
      </footer>
    </div>
  )
}

export default App
