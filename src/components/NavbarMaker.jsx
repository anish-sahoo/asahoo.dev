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
      className="bg-transparent"
      height="3rem"
      maxWidth="full"
      isBlurred={false}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
          icon={<Hamburger />}
        />
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

      <NavbarContent className="hidden sm:flex gap-12">
        <div className="flex flex-row ml-auto">
        {pages.map((page) => (
          <NavbarItem key={page[0]}>
            <Link
              to={page[0]}
              className="font-mono text-blue-400 px-4 text-lg"
              activeClassName="font-bold text-white"
            >
              {page[1]}
            </Link>
          </NavbarItem>
        ))}
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarMaker;
