import * as React from "react";
import NavbarMaker from "../components/NavbarMaker";

import { NextUIProvider } from "@nextui-org/system";

const Layout = ({ children }) => {
  return (
    <NextUIProvider>
      <div className="h-auto text-gray-300 ">
        <NavbarMaker />
        <div className="h-auto  px-14 py-16 text-xl font-mono">{children}</div>
      </div>
    </NextUIProvider>
  );
};

export default Layout;
