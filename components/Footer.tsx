import { Center, HStack } from "@chakra-ui/react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="sticky top-0 bg-white border-t-[1px] py-2">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-8 w-auto lg:w-[960px]">
          <HStack className="flex items-center justify-center">
          <img src="/facebook.svg" className="pr-4 " />
          <Link href={"/quienes-somos"} className="pr-4 azul">
            Quiénes somos
          </Link>
          <Link href={"/politica-de-privacidad"} className="pr-4 azul">
            Política de privacidad
          </Link>
          <Link href={"/terminos-y-condiciones-de-uso"} className="pr-4 azul">
            Términos y condiciones de uso
          </Link>
          <Link href={"/politica-de-cookies"} className="pr-4 azul">
            Política de cookies
          </Link>
          </HStack>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
