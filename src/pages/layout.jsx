import * as React from "react";
import Navbar from "../components/navbar";

const Layout = ({ children }) => {
  return (
    <div class="h-screen w-screen bg-gray-800">
      <Navbar />
      <div class="px-10 py-16 text-xl font-mono text-gray-300">{children}</div>
    </div>
  );
};

export default Layout;
