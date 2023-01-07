import MetaTag from "../components/MetaTag";
import { createClient } from "contentful";
import Skeleton from "../components/Skeleton";
import ReactMarkdown from 'react-markdown'


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
  if (!blog) return <Skeleton />;

  const {
    title,
    articleNormalText,
    slug,
    thumbnail,
    description,
    metaDescription,
  } = blog.fields;
  const thumbailUrl = thumbnail.fields.file.url;
  console.log("blog", blog);
  return (
    <div className="py-4">
      <MetaTag
        title={title + " | melenti"}
        description={metaDescription}
        url={undefined + slug}
        image={"https:" + thumbailUrl}
      />
      <article>
        <img
          src={"https:" + thumbailUrl}
          alt="Cover image"
          className="object-cover h-[300px] w-full rounded-[22px]"
        />
        <h1 className="mt-8 header-medium lg:header azul">{title}</h1>
        <h3 className="sub-header gris my-6">{description}</h3>
 <ReactMarkdown className="markdown">{articleNormalText}</ReactMarkdown>
      </article>
    </div>
  );
};

export default Slug;
