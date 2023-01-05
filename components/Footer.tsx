import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer px-8">
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
    </footer>
  );
};

export default Footer;
