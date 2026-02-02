import { SEOHead } from "@/shared/components/Seo/SeoHead"

export const Home = () => {
  return (
    <>
      <SEOHead
        title="Dashboard"
        description="Resumo do SaaS de orçamentos"
        canonical="https://www.site.com.br/dashboard"
        ogImage="https://www.site.com.br/images/dashboard-og.png"
      />
      <h1>HOME</h1>
    </>
  )
}
