import HomeBanner from "../components/HomeBanner";
import MetaTag from "../components/MetaTag";

export default function Home() {
  return (
    <>
      <MetaTag
        title={"melenti | Agencia de Desarrollo Web | Aumenta tus conversiones"}
        description={
          "Si buscas vender más, convertir mejor, y posicionarte más rápido, desarrolla tu presencia web con Zentra para conseguir los resultados que siempre soñaste."
        }
        url={undefined}
        image={"/logo.png"}
      />
      <div className="py-8 flex">
        <HomeBanner />
      </div>
    </>
  );
}
