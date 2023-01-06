import Link from "next/link";
import Image from "next/image";
import {
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

export const AppBar = () => {
  return (
    <div className="sticky top-0 bg-white border-b-[1px] py-2">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-8 w-auto lg:w-[960px]">
          <div className="flex justify-between items-center">
            <div>
              <Link href={"/"} className="naranja">
                <HStack>
                  <img src="/logo.svg" className="w-[25px] h-[25px]" />{" "}
                  <p className="copy-bold">melenti</p>
                </HStack>
              </Link>
            </div>
            <div className="hidden lg:block">
              <Link href={"/blog"} className="pr-4 azul">
                Blog
              </Link>
              <Link href={"/contacto"} className="azul">
                Contacta
              </Link>
            </div>
            <div className="lg:hidden block">
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<img src="/hamburguer.png" />}
                  variant="white"
                />
                <MenuList>
                  <MenuItem>
                    <Link href={"/blog"}>Blog</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={"/contacto"}>Contacta</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
