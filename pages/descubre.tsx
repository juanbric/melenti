import MetaTag from "../components/MetaTag";
import { createClient } from "contentful";
import BlogCard from "../components/BlogCard";
import Link from "next/link";
import { VStack } from "@chakra-ui/react";
import Schema from "../components/Schema";

export async function getStaticProps() {
  // Store contentful API keys into a client variable
  const client = createClient({
    //@ts-ignore
    space: process.env.CONTENTFUL_SPACE_ID,
    //@ts-ignore
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  // Store blog content from our contentful space into a res variable
  const res = await client.getEntries({ content_type: "blog" });

  // Adding .items to res gives us the whole object of the blog content
  return {
    props: {
      blogs: res.items,
      revalidate: 1,
    },
  };
}

export const Descubre = ({ blogs }: { blogs: any }) => {
  console.log(blogs);
  return (
    <VStack>
      <Schema
        title={"melenti | Blog de salud mental y bienestar emocional"}
        date={undefined}
        image={undefined}
        articleBody={undefined}
        description={
          "En nuestro blog de salud mental y bienestar emocional encontrarás estrategias efectivas para manejar tus sentimientos de inseguridad, ansiedad, tristeza y muchos más. Aprende a mejorar tu relación con tu cuerpo, aumentar tu energía y enfrentar tus miedos y dificultades en el trabajo y en las relaciones. ¡Visítanos para sentirte más seguro y en paz contigo mismo!"
        }
      />
      <MetaTag
        title={"Descubre | melenti"}
        description={
          "En nuestro blog de salud mental y bienestar emocional encontrarás estrategias efectivas para manejar tus sentimientos de inseguridad, ansiedad, tristeza y muchos más. Aprende a mejorar tu relación con tu cuerpo, aumentar tu energía y enfrentar tus miedos y dificultades en el trabajo y en las relaciones. ¡Visítanos para sentirte más seguro y en paz contigo mismo!"
        }
        url={undefined}
        image={undefined}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs?.map((article: any) => {
          const { title, slug } = article?.fields;
          const coverUrl = article?.fields.thumbnail.fields.file.url;
          return (
            <Link key={article?.sys.id} href={slug}>
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
export default Descubre;
