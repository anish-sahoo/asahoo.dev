/* eslint-disable react/jsx-key */
import * as React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarBrand,
} from "@heroui/navbar";

import { Link } from "gatsby";
import { Squash as Hamburger } from "hamburger-react";
// import githubLogo from "../images/github-mark-white.svg";

const NavbarMaker = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pages = [
    ["/", "Home"],
    ["/projects", "Projects"],
    ["/resume", "Resume"],
    ["/contact", "Contact"],
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-transparent"
      height="3rem"
      maxWidth="full"
      shouldHideOnScroll={false}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white mr-4"
          icon={<Hamburger />}
        />
        <NavbarBrand>
          <Link
            to="/"
            className="font-sans text-blue-400 hover:text-blue-300 text-2xl"
          >
            asahoo.dev
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Mobile menu */}
      <NavbarMenu style={{ backgroundColor: "#111827" }} className="my-2">
        {pages.map((page) => (
          <NavbarItem key={page[0] + " mobile"} className="py-1 px-2">
            <Link
              to={page[0]}
              className={`font-mono text-blue-300 text-3xl`}
              activeClassName="font-bold text-blue-50"
            >
              {page[1]}
            </Link>
          </NavbarItem>
        ))}
      </NavbarMenu>
      
      {/* Desktop menu */}
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
        {/* <NavbarItem key={'github'}>
          <a href="https://github.com/anish-sahoo">
          <img
            src={githubLogo}
            className="object-scale-down ml-16 h-6 w-auto rounded-lg"
            alt="GitHub Logo"/>
          </a>
        </NavbarItem> */}
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarMaker;
