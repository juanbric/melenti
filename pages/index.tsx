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
      <div>
        <h1 className="header text-start naranja">melenti</h1>
        <p className="sub-header">
          Técnicas y herramientas para mejorar tu salud mental y
          aumentar tu bienestar emocional en la vida cotidiana
        </p>
        <p className="copy">
          Bienvenido a nuestro blog sobre salud mental y bienestar emocional.
          Aquí, te ofrecemos consejos y soluciones prácticas para mejorar tu
          equilibrio emocional y bienestar psicológico en todas las áreas de tu
          vida. Desde ejercicios de respiración y meditación hasta técnicas
          especializadas de autoayuda y herramientas de gestión del estrés, te
          brindamos todo lo que necesitas para fortalecer tu mente y mejorar tu
          calidad de vida. ¡Síguenos para aprender más y vivir una vida más
          plena y satisfactoria!
        </p>
      </div>
      <Spacer size={24} />
    </VStack>
  );
}
