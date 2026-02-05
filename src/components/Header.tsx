"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/logohive.ico";

const Header: React.FC = () => {
  const pathname = usePathname();

  const showHeader =
    pathname === "/" || pathname === "/movies" || pathname === "/series";

  if (!showHeader) return null;

  return (
    <header className=" text-white h-40 flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col  items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-4xl font-bold">The Hive Network</h1>

        <div className="animate-slow-spin">
          <Image src={logo} alt="Logo" width={80} height={80} priority />
        </div>
      </div>
    </header>
  );
};

export default Header;
