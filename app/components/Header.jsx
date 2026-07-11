import Link from "next/link";
import { Button } from "../components/ui/button";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">

        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Fathima<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  );
};

export default Header;