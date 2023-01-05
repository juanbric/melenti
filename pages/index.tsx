import MetaTag from "../components/MetaTag";
import Spacer from "../components/Spacer";
import { VStack, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack>
      <MetaTag
        title={"melenti | Agencia de Desarrollo Web | Aumenta tus conversiones"}
        description={
          "Si buscas vender más, convertir mejor, y posicionarte más rápido, desarrolla tu presencia web con Zentra para conseguir los resultados que siempre soñaste."
        }
        url={undefined}
        image={"/logo.png"}
      />
      <p className="header">melenti</p>
      <p className="sub-header">Vive con plenitud</p>
      <p className="copy">
        Blog especializado en salud mental y bienestar emocional. En este espacio encontrarás
        recursos valiosos escritos por psicólogos profesionales con el objetivo
        de ayudarte a superar diversas patologías mentales. Visita nuestro
        sitio y descubre cómo podemos ayudarte a encontrar las mejores opciones
        para ti en tu camino hacia una mente más sana y equilibrada.{" "}
      </p>
      <Spacer size={24} />
    </VStack>
  );
}
