import { Link } from 'react-router-dom'
import { categories } from '../data/categories'

export default function ArticleCard({ article }) {
  const category = categories.find((c) => c.slug === article.category)
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="group overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-lg">
      <Link to={`/blog/${article.slug}`} aria-label={article.title}>
        <div className="aspect-3/2 overflow-hidden bg-secondary/20">
          <img
            src={article.image}
            alt={article.imageAlt}
            width="600"
            height="400"
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-5">
        <Link
          to={`/category/${article.category}`}
          className="text-xs font-semibold uppercase tracking-wider text-secondary hover:text-primary"
        >
          {category?.name}
        </Link>

        <h3 className="mt-2 text-xl font-semibold leading-snug text-primary">
          <Link to={`/blog/${article.slug}`} className="hover:text-secondary">
            {article.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-text/80">{article.excerpt}</p>

        <p className="mt-4 text-xs text-text/60">
          {formattedDate} · {article.readTime}
        </p>
      </div>
    </article>
  )
}