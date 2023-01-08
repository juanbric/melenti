import HomeBanner from "../components/HomeBanner";
import MetaTag from "../components/MetaTag";
//@ts-ignore
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
       <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "BlogPosting",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://melenti.vercel.app/"
              },
              "headline": "melenti | Blog de salud mental y bienestar emocional",
              "author": {
                "@type": "Person",
                "name": "Juan Pablo Briceno"
              },
              "image": "https:${undefined}"
              "publisher": {
                "@type": "Organization",
                "name": "melenti",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://svgshare.com/i/pNR.svg"
                }
              },
              "copyrightYear": 2023,
              "inLanguage": "es-ES",
              "description": "${undefined}"
            }
          `}
        </script>
      </Helmet>
      
      <MetaTag
        title={"melenti | Blog de salud mental y bienestar emocional"}
        description={
          "Si buscas vender más, convertir mejor, y posicionarte más rápido, desarrolla tu presencia web con Zentra para conseguir los resultados que siempre soñaste."
        }
        url={undefined}
        image={"/logo.png"}
      />
      <div className="py-4 lg:py-8 flex">
        <HomeBanner />
      </div>
    </>
  );
}
