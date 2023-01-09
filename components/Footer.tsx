import { Stack } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-white border-t-[0.1px] border-[#a99ea7] py-4">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <Stack
            direction={["column", "row"]}
            spacing={4}
            className="azul header-tiny-bold flex items-start lg:items-center justify-center"
          >
            <Image src="/facebook.svg" className="pt-2 lg:pt-0" alt={""} width={23} height={23} />
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
