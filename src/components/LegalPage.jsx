import SEO from './SEO'

export default function LegalPage({ title, metaTitle, metaDescription, path, updated, sections }) {
  return (
    <>
      <SEO title={metaTitle} description={metaDescription} path={path} />

      <section className="bg-primary">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-white/80">Last updated: {updated}</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12">
        {sections.map((s) => (
          <div key={s.heading} className="mb-8">
            <h2 className="mb-3 text-2xl font-semibold text-primary">{s.heading}</h2>
            {s.paragraphs?.map((p, i) => (
              <p key={i} className="mb-3 leading-relaxed">{p}</p>
            ))}
            {s.list && (
              <ul className="mb-3 list-disc space-y-1 pl-6 leading-relaxed">
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </article>
    </>
  )
}