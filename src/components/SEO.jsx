import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://yourdomain.com' 

export default function SEO({ title, description, path = '/', image }) {
  const url = `${SITE_URL}${path}`
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={`${SITE_URL}${image}`} />}
    </Helmet>
  )
}