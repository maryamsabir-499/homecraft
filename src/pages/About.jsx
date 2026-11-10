import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { categories } from '../data/categories'

const values = [
  {
    title: 'Practical First',
    text: 'Every idea we share is something you can realistically try, whatever your budget or the size of your home.',
  },
  {
    title: 'Research Backed',
    text: 'We check our facts, compare options and explain the reasoning, so you can make confident decisions.',
  },
  {
    title: 'Timeless Style',
    text: 'We focus on design principles that last, not short-lived trends that you will want to replace next year.',
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About HomeCraft | Interior Design & Home Improvement Blog"
        description="Learn about HomeCraft, a blog sharing practical interior design ideas, furniture guides and home organization tips for every kind of home."
        path="/about"
      />

      {/* Intro */}
      <section className="bg-primary">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">About Us</p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Helping you create a home you love
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            HomeCraft is a blog about interior design, furniture, organization and home
            improvement, written to make good design simple and achievable.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-3xl font-bold text-primary">Our Story</h2>
        <p className="mt-4 text-lg leading-relaxed">
          A home should feel comfortable, organized and personal. But with so many styles,
          products and opinions online, it is hard to know where to start. HomeCraft was
          created to cut through the noise with clear, honest and practical guidance.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Whether you are furnishing your first apartment, refreshing a single room or
          planning a bigger project, our articles break each topic into simple steps you
          can follow.
        </p>

        <h2 className="mt-12 text-3xl font-bold text-primary">Our Mission</h2>
        <p className="mt-4 text-lg leading-relaxed">
          Our mission is to make thoughtful interior design accessible to everyone, by
          sharing ideas that are practical, well researched and easy to apply.
        </p>
      </section>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-primary">What We Believe In</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border border-secondary/30 bg-bg p-6">
                <h3 className="text-xl font-semibold text-primary">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text/80">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-primary">What We Cover</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={`/category/${c.slug}`}
              className="rounded-lg border border-secondary/30 bg-white p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-primary">{c.name}</h3>
              <p className="mt-2 text-sm text-text/80">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center">
          <h2 className="text-3xl font-bold text-white">Have a question or an idea?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            We would love to hear from you. Send us a message and we will get back to you.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-text"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}