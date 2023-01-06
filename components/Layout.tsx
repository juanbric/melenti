import { AppBar } from "./AppBar";
import { Footer } from "./Footer";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <AppBar />
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-8 w-auto lg:w-[960px] ">{children}</div>
        </div>
      <Footer />
    </>
  );
}
