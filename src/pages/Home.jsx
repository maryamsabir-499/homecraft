import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ArticleCard from '../components/ArticleCard'
import { categories } from '../data/categories'
import { articles } from '../data/articles'
import TiltImage from '../components/TiltImage'

export default function Home() {
  const latest = [...articles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)

  return (
    <>
      <SEO
        title="HomeCraft | Interior Design Ideas & Home Improvement Guides"
        description="Discover interior design ideas, room inspiration, furniture buying guides and home organization tips to create a home you love."
        path="/"
        image="/images/hero-3d.webp"
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary">
        <div
          aria-hidden="true"
          className="absolute right-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/30 blur-3xl"
        />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Interior Design &amp; Home Improvement
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Create a home you truly love
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/90">
              Practical design ideas, furniture guides and organization tips to
              help you style, plan and improve every room.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/blog"
                className="rounded bg-accent px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white"
              >
                Explore Articles
              </Link>
              <Link
                to="/categories"
                className="rounded border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-primary"
              >
                Browse Categories
              </Link>
            </div>
          </div>

                   <div className="flex justify-center px-4 pb-6">
            <TiltImage
              src="/images/hero-3d.webp"
              alt="Warm, elegant living room with vintage furniture and large windows"
              width="800"
              height="1000"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-primary">Explore by Category</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-text/80">
          Find exactly what you need, from design inspiration to practical guides.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={`/category/${c.slug}`}
              className="rounded-lg border border-secondary/30 bg-white p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-primary">{c.name}</h3>
              <p className="mt-2 text-sm text-text/80">{c.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-secondary">
                View articles →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest articles */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold text-primary">Latest Articles</h2>
            <Link to="/blog" className="text-sm font-semibold text-secondary hover:text-primary">
              View all →
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to transform your space?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Read our guides and start turning your ideas into a home that feels like yours.
          </p>
          <Link
            to="/blog"
            className="mt-6 inline-block rounded bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-text"
          >
            Start Reading
          </Link>
        </div>
      </section>
    </>
  )
}