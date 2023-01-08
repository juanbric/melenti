import MetaTag from "../components/MetaTag";
import { createClient } from "contentful";
import Skeleton from "../components/Skeleton";
//@ts-ignore
import { Helmet } from 'react-helmet';
//@ts-ignore
import ReactMarkdown from "react-markdown";
import { Stack } from "@chakra-ui/react";
import Logo from "../components/Logo";
import Spacer from "../components/Spacer";
import ProgressBar from "../components/ProgressBar";

// Store contentful API keys into a client variable
const client = createClient({
  //@ts-ignore
  space: process.env.CONTENTFUL_SPACE_ID,
  //@ts-ignore
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

// Generates all different slugs we have in contentful
export const getStaticPaths = async () => {
  // Store blog content from our contentful space into a res variable
  const res = await client.getEntries({
    content_type: "blog",
  });

  // Returns the slug in the following form
  // params: { slug: slug }
  const paths = res.items.map((item: any) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

// Runs this function for every slug retrieved above
export async function getStaticProps({ params }: { params: any }) {
  const { items } = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { blog: items[0] },
    revalidate: 1,
  };
}

export const Slug = ({ blog }: { blog: any }) => {
  console.log("blog", blog);
  if (!blog) return <Skeleton />;

  const {
    title,
    articleNormalText,
    slug,
    thumbnail,
    description,
    metaDescription,
    category,
  } = blog.fields;
  const thumbnailUrl = thumbnail.fields.file.url;
  const date = blog.sys.updatedAt;
  const options = { year: "numeric", month: "short", day: "numeric" };
  //@ts-ignore
  const localDate = new Date(date).toLocaleDateString("es-ES", options);

  return (
    <div className="pb-4">
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
              "headline": "${title}",
              "datePublished": "${date}",
              "author": {
                "@type": "Person",
                "name": "Juan Pablo Briceno"
              },
              "image": "https:${thumbnailUrl}",
              "articleBody": "${articleNormalText}",
              "keywords": ["article", "blog", "writing"],
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
              "description": "${metaDescription}"
            }
          `}
        </script>
      </Helmet>

      <MetaTag
        title={title + " | melenti"}
        description={metaDescription}
        url={undefined + slug}
        image={"https:" + thumbnailUrl}
      />
      <article>
        <h1 className="mt-4 header-medium lg:header azul">{title}</h1>
        <h3 className="description azul my-4">{description}</h3>
        <Stack direction={["column", "row"]}>
          <Logo />
          <span className="copy gris pt-1 lg:px-6">{localDate}</span>
          <span className="bg-gris rounded-full header-tiny text-white px-4 py-2 flex items-center justify-center">
            {category}
          </span>
        </Stack>
        <Spacer size={24} />
        <img
          src={"https:" + thumbnailUrl}
          alt="Cover image"
          className="object-cover h-[300px] w-full rounded-[22px]"
        />
        <Spacer size={24} />
        <ReactMarkdown className="markdown">{articleNormalText}</ReactMarkdown>
        <ProgressBar />
      </article>
    </div>
  );
};

export default Slug;
