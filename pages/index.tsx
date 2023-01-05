import MetaTag from "../components/MetaTag";
import Spacer from "../components/Spacer";
import { VStack, Stack } from "@chakra-ui/react";


export default function Home() {
  return (
    <VStack>
      <MetaTag
        title={
          "melenti | Agencia de Desarrollo Web | Aumenta tus conversiones"
        }
        description={
          "Si buscas vender más, convertir mejor, y posicionarte más rápido, desarrolla tu presencia web con Zentra para conseguir los resultados que siempre soñaste."
        }
        url={undefined}
        image={"https://i.ibb.co/N7zSwSS/logo.png"}
      />
    <p className="rounded-full px-8 text-white bg-black">Hola</p>
      <Spacer size={24} />
    </VStack>
  );
}

