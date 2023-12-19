import * as React from "react";
import NavbarMaker from "../components/NavbarMaker";

import { NextUIProvider } from "@nextui-org/system";

const Layout = ({ children }) => {
  return (
    <NextUIProvider>
      <div class="h-screen w-screen bg-gray-800">
        <NavbarMaker />
        <div class="px-10 py-16 text-xl font-mono text-gray-300">
          {children}
        </div>
      </div>
    </NextUIProvider>
  );
};

export default Layout;
