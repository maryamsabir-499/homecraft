import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | HomeCraft"
        description="The page you are looking for does not exist."
        path="/404"
      />
      <section className="mx-auto max-w-6xl px-4 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary">404</p>
        <h1 className="mt-3 text-4xl font-bold text-primary">Page not found</h1>
        <p className="mt-3 text-text/80">Sorry, we could not find the page you were looking for.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded bg-primary px-6 py-3 text-sm font-semibold text-white"
        >
          Back to home
        </Link>
      </section>
    </>
  )
}