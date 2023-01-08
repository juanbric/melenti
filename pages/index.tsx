import HomeBanner from "../components/HomeBanner";
import MetaTag from "../components/MetaTag";
import Schema from "../components/Schema";

export default function Home() {
  return (
    <>
      <Schema
        title={"melenti | Blog de salud mental y bienestar emocional"}
        date={undefined}
        image={undefined}
        articleBody={undefined}
        description={"En nuestro blog de salud mental y bienestar emocional encontrarás estrategias efectivas para manejar tus sentimientos de inseguridad, ansiedad, tristeza y muchos más. Aprende a mejorar tu relación con tu cuerpo, aumentar tu energía y enfrentar tus miedos y dificultades en el trabajo y en las relaciones. ¡Visítanos para sentirte más seguro y en paz contigo mismo!"}
      />
      <MetaTag
        title={"melenti | Blog de salud mental y bienestar emocional"}
        description={
          "En nuestro blog de salud mental y bienestar emocional encontrarás estrategias efectivas para manejar tus sentimientos de inseguridad, ansiedad, tristeza y muchos más. Aprende a mejorar tu relación con tu cuerpo, aumentar tu energía y enfrentar tus miedos y dificultades en el trabajo y en las relaciones. ¡Visítanos para sentirte más seguro y en paz contigo mismo!"
        }
        url={undefined}
        image={undefined}
      />
      <div className="py-4 lg:py-8 flex">
        <HomeBanner />
      </div>
    </>
  );
}
