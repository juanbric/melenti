import MetaTag from "../components/MetaTag";
import { createClient } from "contentful";
import BlogCard from "../components/BlogCard";
import Link from "next/link";
import { VStack } from "@chakra-ui/react";

export async function getStaticProps() {
    
    // Store contentful API keys into a client variable
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    // Store blog content from our contentful space into a res variable
    const res = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      blogs: res.items,
      revalidate: 10,
    },
  };
}

export const Blog = ({ blogs }: { blogs: any }) => {
  console.log(blogs)
    return (
    <VStack>
      <MetaTag
        title={"Blog | melenti"}
        description={
          "Ofrecemos una amplia gama de servicios a nuestros clientes. Desde diseño y desarrollo de sitios web personalizados hasta soluciones de comercio electrónico, estamos equipados para manejar todas sus necesidades de tecnología de la información."
        }
        url={undefined}
        image={"undefined"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs?.map((article: any) => {
          const { title, slug } = article?.fields;
          const coverUrl = article?.fields.thumbnail.fields.file.url;
          return (
            <Link key={article?.sys.id} href={"/blog/" + slug}>
              <BlogCard
                title={title}
                subTitle={"Remember to add subtitle in contentful"}
                coverUrl={coverUrl}
              />
            </Link>
          );
        })}
      </div>
    </VStack>
  );
};
export default Blog;