import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import logoSemop from "@/assets/logo-semop.jpg";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { handleAnchorClick } = useSmoothScroll();

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Projetos", href: "#projetos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Notícias", href: "#noticias" },
    { label: "Câmeras", href: "/cameras", isRoute: true },
  ];

  return (
    <header className="bg-card/95 backdrop-blur-md sticky top-0 z-50 shadow-md border-b border-border/50">
      <div className="container-semop">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={logoSemop} 
                alt="SEMOP - Secretaria Municipal de Ordem Pública" 
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300"
              />
              <div className="hidden sm:block">
                <span className="font-bold text-foreground text-lg">SEMOP</span>
                <p className="text-xs text-muted-foreground">Secretaria de Ordem Pública</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-foreground hover:text-accent transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="text-foreground hover:text-accent transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              className="bg-primary hover:bg-accent text-primary-foreground rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              asChild
            >
              <a 
                href="#contato"
                onClick={(e) => handleAnchorClick(e, "#contato")}
              >
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </header>
  );
};

export default Header;
