import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const NavbarCustom = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Meu perfil",
    "Pedidos",
    "Configurações",
    "Ajuda & Feedback",
    "Sair",
  ];

  return(
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <AcmeLogo />
            <Link color="foreground" href="/">
              <p className="font-bold text-inherit">WEB STORE</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/shop?category=eletronicos">
              Eletrônicos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/shop?category=eletrodomesticos">
              Eletrodomésticos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/shop?category=imoveis">
              Imóveis
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/shop?category=veiculos">
              Veículos
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/signin">Entrar</Link>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Button as={Link} color="primary" href="#" variant="flat">
              Registrar-se
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === menuItems.length - 1 ? "danger" : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}

export default NavbarCustom;