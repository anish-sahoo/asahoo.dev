/* eslint-disable react/jsx-key */
import * as React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/navbar";

import { Link } from "gatsby";
import { Squash as Hamburger } from "hamburger-react";

const NavbarMaker = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pages = [
    ["/", "Home"],
    ["/about", "About Me"],
    ["/projects", "Projects"],
    ["/resume", "Resume"],
    ["/contact", "Contact"],
  ];

  return (
    <Navbar
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      className="bg-gray-900"
      height="3rem"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
          icon={<Hamburger />}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12">
        {pages.map((page) => (
          <NavbarItem key={page[0]}>
            <Link
              to={page[0]}
              className={`font-mono text-blue-400`}
              activeClassName="font-bold text-blue-100"
            >
              {page[1]}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu style={{ backgroundColor: "#111827" }}>
        {pages.map((page) => (
          <NavbarItem key={page[0] + " mobile"}>
            <Link
              to={page[0]}
              className={`font-mono text-blue-400`}
              activeClassName="font-bold"
            >
              {page[1]}
            </Link>
          </NavbarItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarMaker;
