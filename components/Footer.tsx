import { Center, HStack, Stack } from "@chakra-ui/react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="sticky top-0 bg-white border-t-[0.1px] border-[#a99ea7] py-2">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-8 w-auto lg:w-[1130px]">
          <Stack
            direction={["column", "row"]}
            spacing={4}
            className="azul flex items-start lg:items-center justify-center"
          >
            <img src="/facebook.svg" className="pt-2 lg:pt-0" />
            <Link href={"/quienes-somos"}>Quiénes somos</Link>
            <Link href={"/politica-de-privacidad"}>Política de privacidad</Link>
            <Link href={"/terminos-y-condiciones-de-uso"}>
              Términos y condiciones de uso
            </Link>
            <Link href={"/politica-de-cookies"}>Política de cookies</Link>
          </Stack>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
