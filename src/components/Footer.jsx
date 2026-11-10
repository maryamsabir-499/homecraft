import { Link } from 'react-router-dom'
import { categories } from '../data/categories'

export default function Footer() {
  return (
    <footer className="bg-primary text-bg">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-2xl font-bold">
            Home<span className="text-accent">Craft</span>
          </h3>
          <p className="text-sm leading-relaxed opacity-80">
            Interior design ideas, furniture guides and home improvement tips
            to help you create a home you love.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-semibold">Categories</h4>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={`/category/${c.slug}`} className="hover:text-accent">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-lg font-semibold">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy-policy" className="hover:text-accent">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="hover:text-accent">Terms &amp; Conditions</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-secondary/40 py-4 text-center text-xs opacity-80">
        © {new Date().getFullYear()} HomeCraft. All rights reserved.
      </div>
    </footer>
  )
}