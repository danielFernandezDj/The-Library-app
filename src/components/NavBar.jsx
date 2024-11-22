import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsBlurred(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    "Home",
    "Roadmap",
    "Copyright",
    "About",
  ];

  return (
    <Navbar
      className={`bg-transparent navbar-custom-dashed-border  ${isBlurred ? ' bg-white/30 backdrop-blur-lg ' : ''}`}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Brand Centered */}
      <NavbarContent>
        <NavbarBrand>
          <img width={40} src="src/assets/images/icons.svg" alt="Artistic Echoes Logo" />
          <p className="ml-2 text-xl tracking-wider font-roboto text-gradient">
            Artistic Echoes
          </p>
        </NavbarBrand>

        {/* Hamburger to the Right */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex font-roboto gap-0 tracking-wider" justify="end">
        <NavbarItem>
          <Button href="#" variant="light" radius="sm" className="text-black-color h-8 text-base">
            Explore
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button href="#" variant="light" radius="sm" className="text-black-color h-8 text-base">
            Roadmap
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button href="#" variant="light" radius="sm" className="text-black-color h-8 text-base">
            About
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button href="#" variant="light" radius="sm" className="text-black-color h-8 text-base">
            License
          </Button>
        </NavbarItem>

        {/* Right-aligned Content */}
        <NavbarContent justify="end" className="ml-10">
          {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
          </NavbarItem> */}
          <NavbarItem>
            <Button
              className="Inter-Medium text-xl w-40 h-10 bg-magenta-color text-white tracking-wider"
              as={Link}
              radius="sm"
              href="#"
              color="secondary"
              variant="shadow"
            >
              Donation
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      {/* Hamburger Menu  */}
      <NavbarMenu className="bg-white/30 backdrop-blur-lg">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}