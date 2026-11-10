import { useState } from 'react'
import SEO from '../components/SEO'
import ArticleCard from '../components/ArticleCard'
import { categories } from '../data/categories'
import { articles } from '../data/articles'

export default function Blog() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = articles.filter((a) => {
    const matchesCategory = activeCategory === 'all' || a.category === activeCategory
    const text = `${a.title} ${a.excerpt}`.toLowerCase()
    const matchesQuery = text.includes(query.trim().toLowerCase())
    return matchesCategory && matchesQuery
  })

  const tabClass = (active) =>
    `rounded-full border px-4 py-2 text-sm font-medium transition ${
      active
        ? 'border-primary bg-primary text-bg'
        : 'border-secondary/40 bg-white text-primary hover:border-accent'
    }`

  return (
    <>
      <SEO
        title="Blog | Interior Design & Home Improvement Articles | HomeCraft"
        description="Browse all HomeCraft articles on interior design, room ideas, furniture guides and home organization. Search or filter by category."
        path="/blog"
      />

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold text-primary">The HomeCraft Blog</h1>
          <p className="mt-3 max-w-2xl text-text/80">
            Ideas, guides and practical advice for styling, furnishing and organizing your home.
          </p>

          {/* Search */}
          <div className="mt-8">
            <label htmlFor="search" className="sr-only">Search articles</label>
            <input
              id="search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full max-w-md rounded border border-secondary/40 bg-bg px-4 py-3 text-sm outline-none focus:border-accent"
            />
          </div>

          {/* Category filter */}
          <div className="mt-6 flex flex-wrap gap-3" role="group" aria-label="Filter by category">
            <button onClick={() => setActiveCategory('all')} className={tabClass(activeCategory === 'all')}>
              All
            </button>
            {categories.map((c) => (
              <button
                key={c.slug}
                onClick={() => setActiveCategory(c.slug)}
                className={tabClass(activeCategory === c.slug)}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <p className="mb-6 text-sm text-text/70">
          {filtered.length} {filtered.length === 1 ? 'article' : 'articles'} found
        </p>

        {filtered.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-secondary/30 bg-white p-10 text-center">
            <p className="text-lg font-semibold text-primary">No articles found</p>
            <p className="mt-2 text-sm text-text/70">
              Try a different search term or choose another category.
            </p>
          </div>
        )}
      </section>
    </>
  )
}