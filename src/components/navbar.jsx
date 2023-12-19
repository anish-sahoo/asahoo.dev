import * as React from "react";
import Nav from "./nav";

const Navbar = () => {
  const pages = [
    ["Home", "/"],
    ["Contact", "/contact"],
    ["Projects", "/projects"]
  ];

  return (
    <nav>
      <ul class="flex flex-row">{pages.map((page) => (
        <Nav linkTo={page[1]} label={page[0]}/>
      ))}</ul>
    </nav>
  );
};

export default Navbar;