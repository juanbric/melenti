import MetaTag from "../components/MetaTag";
import { createClient } from "contentful";
import Skeleton from "../components/Skeleton";

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
export async function getStaticProps({ params } : { params: any }) {
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

  const { title, articleNormalText } = blog.fields;
  const coverUrl = blog.fields.thumbnail.fields.file.url;
  console.log("blog", blog);
  return (
    <article>
      <MetaTag
        title={title + " | Zentra Dev"}
        description={"remember to add description juaaaaaan"}
        url={undefined}
        image={"https:" + coverUrl}
      />
      <img
        src={"https:" + coverUrl}
        alt="Cover image"
        className="object-cover h-[300px] w-full rounded-[22px]"
      />
      <h1 className=" mt-8">{title}</h1>
      <p className=" my-6">{"remember to add description juaaaaaan"}</p>
      <div className="">
       {articleNormalText}
      </div>
    </article>
  );
};

export default Slug;