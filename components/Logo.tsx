import { HStack } from "@chakra-ui/react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <HStack>
        <div className="rounded-full p-3 bg-azul" />
        <p className="header-small-bold vino">melenti</p>
      </HStack>
    </Link>
  );
};

export default Logo;
