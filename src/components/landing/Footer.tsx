import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logoSemop from "@/assets/logo-semop.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    institucional: [
      { label: "Sobre a SEMOP", href: "#sobre" },
      { label: "Estrutura Organizacional", href: "#" },
      { label: "Legislação", href: "#" },
      { label: "Transparência", href: "#" },
    ],
    servicos: [
      { label: "Fiscalização Urbana", href: "#servicos" },
      { label: "Ordem Pública", href: "#servicos" },
      { label: "Atendimento ao Cidadão", href: "#servicos" },
      { label: "Ouvidoria", href: "#contato" },
      { label: "Acesso às Câmeras", href: "/cameras", isRoute: true },
    ],
    acesso: [
      { label: "Portal da Transparência", href: "#" },
      { label: "Diário Oficial", href: "#" },
      { label: "Licitações", href: "#" },
      { label: "Trabalhe Conosco", href: "#" },
    ],
  };

  return (
    <footer className="bg-semop-primary text-primary-foreground">
      <div className="container-semop py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo e Contato */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logoSemop} 
                alt="SEMOP" 
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <span className="font-bold text-lg">SEMOP</span>
                <p className="text-xs text-primary-foreground/70">Secretaria de Ordem Pública</p>
              </div>
            </Link>
            
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Av. Principal, 1000 - Centro<br />CEP: 00000-000</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>(00) 0000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>contato@semop.gov.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span>Seg a Sex: 8h às 17h</span>
              </div>
            </div>
          </div>

          {/* Links Institucionais */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Institucional</h4>
            <ul className="space-y-2">
              {links.institucional.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Serviços */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2">
              {links.servicos.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Links Acesso Rápido */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Acesso Rápido</h4>
            <ul className="space-y-2">
              {links.acesso.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© {currentYear} SEMOP - Secretaria Municipal de Ordem Pública. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Acessibilidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
