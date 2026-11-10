import { Link, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import ArticleCard from '../components/ArticleCard'
import { categories } from '../data/categories'
import { articles } from '../data/articles'

export default function CategoryPage() {
  const { slug } = useParams()
  const category = categories.find((c) => c.slug === slug)

  if (!category) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-primary">Category not found</h1>
        <p className="mt-3 text-text/80">The category you are looking for does not exist.</p>
        <Link
          to="/categories"
          className="mt-6 inline-block rounded bg-primary px-6 py-3 text-sm font-semibold text-white"
        >
          View all categories
        </Link>
      </section>
    )
  }

  const categoryArticles = articles.filter((a) => a.category === slug)

  return (
    <>
      <SEO
        title={`${category.name} Articles | HomeCraft`}
        description={`${category.description} Browse all ${category.name.toLowerCase()} articles on HomeCraft.`}
        path={`/category/${category.slug}`}
      />

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="mb-4 text-sm text-text/70" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/categories" className="hover:text-primary">Categories</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">{category.name}</span>
          </nav>

          <h1 className="text-4xl font-bold text-primary">{category.name}</h1>
          <p className="mt-3 max-w-2xl text-text/80">{category.description}</p>

          {/* Other categories */}
          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to={`/category/${c.slug}`}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  c.slug === slug
                    ? 'border-primary bg-primary text-bg'
                    : 'border-secondary/40 bg-white text-primary hover:border-accent'
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        {categoryArticles.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categoryArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <p className="text-center text-text/70">No articles in this category yet.</p>
        )}
      </section>
    </>
  )
}