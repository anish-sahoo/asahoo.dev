import * as React from "react";
import NavbarMaker from "../components/NavbarMaker";

import { HeroUIProvider } from "@heroui/system";

const Layout = ({ children }) => {
  return (
    <HeroUIProvider>
      <div className="h-auto text-gray-300 dark">
        <NavbarMaker />
        <div className="h-auto  px-10 lg:px-24 py-4 text-xl font-mono">
          {children}
        </div>
      </div>
    </HeroUIProvider>
  );
};

export default Layout;
