import { siteConfig } from "@/config/site"

export default function Head() {
  return (
    <>
      <title>{siteConfig.name}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={siteConfig.description} />
      <meta property="og:title" content={siteConfig.name} />
      <meta property="og:url" content={siteConfig.baseUrl} />
      <meta property="og:image" content={siteConfig.defaultOgImg} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteConfig.name} />
      <meta name="twitter:image" content={siteConfig.defaultOgImg} />
    </>
  )
}
