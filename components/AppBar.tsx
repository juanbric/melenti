import Link from "next/link";
import Image from "next/image";
import { Center, HStack } from "@chakra-ui/react";

export const AppBar = () => {
  return (
    <div className=" sticky top-0 bg-white border-b-[1px] py-2">
      <Center>
        <HStack className="flex justify-between main">
          <div>
            <Link href={"/"} className="naranja copy-bold">
              <HStack>
                <img src="/logo.svg" className="w-[25px] h-[25px]" /> <p>melenti</p>
              </HStack>
            </Link>
          </div>
          <div>
            <Link href={"/descubre"} className="pr-4 verde">
              Descubre
            </Link>
            <Link href={"/contacto"} className="naranja">
              {" "}
              Contacta
            </Link>
          </div>
        </HStack>
      </Center>
    </div>
  );
};

export default AppBar;
