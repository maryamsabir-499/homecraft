import { Link, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../data/articles'
import { articleContent } from '../data/articleContent'
import { categories } from '../data/categories'

// Turns [link text](/blog/some-slug) inside a paragraph into a real router link
function renderInline(text) {
  const parts = []
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0
  let match

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    parts.push(
      <Link
        key={match.index}
        to={match[2]}
        className="font-medium text-secondary underline hover:text-primary"
      >
        {match[1]}
      </Link>
    )
    last = regex.lastIndex
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}

function renderBlock(block, i) {
  switch (block.type) {
    case 'h2':
      return <h2 key={i} className="mb-4 mt-10 text-3xl font-bold text-primary">{block.text}</h2>
    case 'h3':
      return <h3 key={i} className="mb-3 mt-8 text-2xl font-semibold text-primary">{block.text}</h3>
    case 'ul':
      return (
        <ul key={i} className="mb-6 list-disc space-y-2 pl-6 leading-relaxed">
          {block.items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ul>
      )
    default:
      return (
        <p key={i} className="mb-6 leading-relaxed">
          {renderInline(block.text)}
        </p>
      )
  }
}

export default function Article() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-primary">Article not found</h1>
        <p className="mt-3 text-text/80">The article you are looking for does not exist.</p>
        <Link
          to="/blog"
          className="mt-6 inline-block rounded bg-primary px-6 py-3 text-sm font-semibold text-white"
        >
          Back to blog
        </Link>
      </section>
    )
  }

  const category = categories.find((c) => c.slug === article.category)
  const blocks = articleContent[article.slug] || []
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Related: same category first, then fill with other articles, max 3
  const others = articles.filter((a) => a.slug !== article.slug)
  const related = [
    ...others.filter((a) => a.category === article.category),
    ...others.filter((a) => a.category !== article.category),
  ].slice(0, 3)

  return (
    <>
      <SEO
        title={article.metaTitle}
        description={article.metaDescription}
        path={`/blog/${article.slug}`}
        image={article.image}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <nav className="mb-6 text-sm text-text/70" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-primary">{category?.name}</span>
        </nav>

        <Link
          to={`/category/${article.category}`}
          className="text-xs font-semibold uppercase tracking-wider text-secondary hover:text-primary"
        >
          {category?.name}
        </Link>

        <h1 className="mt-3 text-4xl font-bold leading-tight text-primary md:text-5xl">
          {article.title}
        </h1>

        <p className="mt-4 text-sm text-text/60">
          {formattedDate} · {article.readTime}
        </p>

        <img
          src={article.image}
          alt={article.imageAlt}
          width="1200"
          height="800"
          fetchPriority="high"
          className="mt-8 aspect-3/2 w-full rounded-lg object-cover shadow-md"
        />

        <div className="mt-10 text-lg">
          <p className="mb-6 text-xl font-medium leading-relaxed text-primary">
            {article.excerpt}
          </p>
          {blocks.map(renderBlock)}
        </div>
      </article>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-primary">Related Articles</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}