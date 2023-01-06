import Spacer from "../components/Spacer";
import { VStack, Stack, HStack } from "@chakra-ui/react";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <>
      <div className="lg:w-2/5">
        <HStack className="header lg:pt-[150px]">
          <div className="rounded-full p-6 mt-1 bg-azul" />
          <div className="vino">melenti</div>
        </HStack>
        <Spacer size={8} />
        <p className="sub-header-tiny">Mente sana, vida plena</p>
        <Spacer size={24} />
        <h1 className="copy blue">
          Blog profesional especializado en salud mental y bienestar emocional.
          Te ofrecemos consejos y soluciones prácticas para mejorar tu bienestar
          psicológico y equilibrio emocional. Desde ejercicios de respiración y
          meditación, hasta terapias online y técnicas de autoayuda ante el
          estrés y la ansiedad. Con melenti te brindamos las herramientas que
          necesitas para fortalecer tu mente y mejorar tu calidad de vida.
        </h1>
        <Spacer size={48} />
        <Link
          href={"/blog"}
          className="bg-azul px-8 py-3 rounded-[18px] text-white header-tiny-bold"
        >
          DESCUBRE
        </Link>
      </div>
      <div className="hidden lg:block lg:pl-12 lg:w-3/5">
        <div className="grid grid-cols-2">
          <div className="pr-8">
            <img
              src="/cover-1.svg"
              className="max-w-[270px] rounded-cool shadow-xl"
            />
            <img
              src="/cover-3.svg"
              className="max-w-[270px] mt-16 rounded-cool"
            />
          </div>
          <div className="pt-[80px]">
            <img src="/cover.svg" className="max-w-[270px] rounded-cool" />
            <img
              src="/cover-2.svg"
              className="max-w-[270px] shadow-xl rounded-cool mt-8"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
