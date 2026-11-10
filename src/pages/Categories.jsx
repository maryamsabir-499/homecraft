import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { categories } from '../data/categories'
import { articles } from '../data/articles'

export default function Categories() {
  return (
    <>
      <SEO
        title="Categories | HomeCraft"
        description="Explore HomeCraft categories: interior design, room ideas, furniture guides and home organization."
        path="/categories"
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-4xl font-bold text-primary">Categories</h1>
        <p className="mt-3 max-w-2xl text-text/80">
          Choose a topic to find articles that match what you are looking for.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {categories.map((c) => {
            const count = articles.filter((a) => a.category === c.slug).length
            return (
              <Link
                key={c.slug}
                to={`/category/${c.slug}`}
                className="rounded-lg border border-secondary/30 bg-white p-8 transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
              >
                <h2 className="text-2xl font-semibold text-primary">{c.name}</h2>
                <p className="mt-2 text-text/80">{c.description}</p>
                <p className="mt-4 text-sm font-semibold text-secondary">
                  {count} {count === 1 ? 'article' : 'articles'} →
                </p>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}