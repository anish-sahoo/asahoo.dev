import * as React from "react";
import NavbarMaker from "../components/NavbarMaker";

import { HeroUIProvider } from "@heroui/system";

const Layout = ({ children }) => {
  return (
    <HeroUIProvider>
      <div className="min-h-screen text-gray-300 dark relative">
        <NavbarMaker />
        <div className="h-auto px-10 lg:px-24 py-4 text-xl font-mono relative z-10">
          {children}
        </div>
      </div>
    </HeroUIProvider>
  );
};

export default Layout;
