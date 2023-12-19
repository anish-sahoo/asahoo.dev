import * as React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/navbar";

import { Link } from "gatsby";

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
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen} className="bg-gray-800" height='3rem'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          class="sm:hidden text-white"
          icon={isMenuOpen ? "close" : "links"}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-12">
        {pages.map((page) => (
          <NavbarItem>
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

      <NavbarMenu style={{backgroundColor: "#111827"}}>
        {pages.map((page) => (
          <NavbarItem>
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
