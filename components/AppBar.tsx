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
import Logo from "./Logo";

export const AppBar = () => {
  return (
    <div className="sticky top-0 bg-white border-b-[0.00001px] border-[#a99ea7] py-1 lg:py-2">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1130px]">
          <div className="flex justify-between items-center">
            <div>
              <Logo />
            </div>
            <div className="hidden lg:block">
              <Link href={"/descubre"} className="pr-8 header-tiny-bold azul">
                Descubre
              </Link>
              <Link href={"/contacto"} className="header-tiny-bold azul">
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
                <MenuList minW='50px' className="azul">
                  <MenuItem>
                    <Link href={"/descubre"} >Descubre</Link>
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
