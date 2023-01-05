import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export const AppBar = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Exo&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="appbar gap-8 px-8">
        <Link href={"/"}>
          Inicio
        </Link>
        <Link href={"/nosotros"}>Sobre nosotros</Link>
        <Link href={"/servicios"}>Nuestros servicios</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/contacto"}>Contacto</Link>
      </div>
    </>
  );
};

export default AppBar;