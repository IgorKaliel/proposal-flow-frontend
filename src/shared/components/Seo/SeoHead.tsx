import { useEffect } from "react"
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  COMPANY_STREET_ADDRESS,
  COMPANY_ADDRESSLOCALITY,
  COMPANY_ADDRESSREGION,
  COMPANY_POSTALCODE,
  COMPANY_ADDRESSCOUNTRY,
  COMPANY_PHONE_BR,
  COMPANY_CONTACT_TYPE,
  COMPANY_EMAIL,
} from "./config"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string

  // Open Graph
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  ogType?: string

  // Twitter
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string

  // Schema extra
  schema?: object | object[]

  // Language
  lang?: string
  alternateLanguages?: Array<{ lang: string; url: string }>

  // Additional meta
  robots?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

// ----- Funções de schema internas -----
function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_STREET_ADDRESS,
      addressLocality: COMPANY_ADDRESSLOCALITY,
      addressRegion: COMPANY_ADDRESSREGION,
      postalCode: COMPANY_POSTALCODE,
      addressCountry: COMPANY_ADDRESSCOUNTRY,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY_PHONE_BR,
      contactType: COMPANY_CONTACT_TYPE,
      email: COMPANY_EMAIL,
    },
  }
}

function createWebPageSchema({
  title,
  description,
  url,
}: {
  title: string
  description: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: "pt-BR",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

// ----- Componente SEOHead -----
export function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = "website",
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  schema,
  lang = "pt-BR",
  alternateLanguages = [],
  robots = "index, follow",
  author,
}: SEOHeadProps) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const pageDescription = description || SITE_DESCRIPTION

  const ogTitleFinal = ogTitle || fullTitle
  const ogDescriptionFinal = ogDescription || pageDescription
  const twitterTitleFinal = twitterTitle || fullTitle
  const twitterDescriptionFinal = twitterDescription || pageDescription

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (name: string, content?: string) => {
      if (!content) return
      let tag = document.querySelector(
        `meta[name="${name}"]`,
      ) as HTMLMetaElement
      if (!tag) {
        tag = document.createElement("meta")
        tag.name = name
        document.head.appendChild(tag)
      }
      tag.content = content
    }

    setMeta("description", pageDescription)
    setMeta("keywords", keywords)
    setMeta("author", author)
    setMeta("robots", robots)

    if (canonical) {
      let link = document.querySelector(
        `link[rel="canonical"]`,
      ) as HTMLLinkElement
      if (!link) {
        link = document.createElement("link")
        link.rel = "canonical"
        document.head.appendChild(link)
      }
      link.href = canonical
    }

    alternateLanguages.forEach((alt) => {
      let link = document.querySelector(
        `link[hreflang="${alt.lang}"]`,
      ) as HTMLLinkElement
      if (!link) {
        link = document.createElement("link")
        link.rel = "alternate"
        link.hreflang = alt.lang
        document.head.appendChild(link)
      }
      link.href = alt.url
    })

    const setOG = (property: string, content?: string) => {
      if (!content) return
      let tag = document.querySelector(
        `meta[property="${property}"]`,
      ) as HTMLMetaElement
      if (!tag) {
        tag = document.createElement("meta")
        tag.setAttribute("property", property)
        document.head.appendChild(tag)
      }
      tag.content = content
    }

    setOG("og:title", ogTitleFinal)
    setOG("og:description", ogDescriptionFinal)
    setOG("og:type", ogType)
    setOG("og:locale", lang)
    setOG("og:url", ogUrl || window.location.href)
    setOG("og:image", ogImage)

    const setTwitter = (name: string, content?: string) => {
      if (!content) return
      let tag = document.querySelector(
        `meta[name="${name}"]`,
      ) as HTMLMetaElement
      if (!tag) {
        tag = document.createElement("meta")
        tag.name = name
        document.head.appendChild(tag)
      }
      tag.content = content
    }

    setTwitter("twitter:card", twitterCard)
    setTwitter("twitter:title", twitterTitleFinal)
    setTwitter("twitter:description", twitterDescriptionFinal)
    setTwitter("twitter:image", twitterImage)

    // Schema JSON-LD
    const defaultSchema = createOrganizationSchema()
    const pageSchema =
      title && description
        ? createWebPageSchema({
            title: fullTitle,
            description: pageDescription,
            url: ogUrl || window.location.href,
          })
        : null

    const allSchemas = [
      defaultSchema,
      pageSchema,
      ...(Array.isArray(schema) ? schema : schema ? [schema] : []),
    ].filter(Boolean)

    let script = document.querySelector(
      `script[type="application/ld+json"]`,
    ) as HTMLScriptElement
    if (!script) {
      script = document.createElement("script")
      script.type = "application/ld+json"
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(allSchemas)

    document.documentElement.lang = lang
  }, [
    title,
    description,
    fullTitle,
    pageDescription,
    keywords,
    canonical,
    ogTitleFinal,
    ogDescriptionFinal,
    ogImage,
    ogUrl,
    ogType,
    twitterCard,
    twitterTitleFinal,
    twitterDescriptionFinal,
    twitterImage,
    schema,
    lang,
    alternateLanguages,
    robots,
    author,
  ])

  return null
}
