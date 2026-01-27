import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="bg-card section-spacing overflow-hidden">
      <div className="container-semop">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Governo Municipal</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Promovendo Ordem, Segurança e Cidadania
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              A Secretaria Municipal de Ordem Pública trabalha incansavelmente para garantir 
              a qualidade de vida dos cidadãos, promovendo ações de fiscalização, segurança 
              e organização urbana.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-accent text-primary-foreground rounded-lg transition-all duration-300 group"
                asChild
              >
                <a href="#servicos">
                  Nossos Serviços
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-foreground hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
                asChild
              >
                <a href="#sobre">Conheça a SEMOP</a>
              </Button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="animate-fade-in lg:animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-12 w-12 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Imagem institucional<br />será inserida aqui
                  </p>
                </div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 card-shadow hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">+</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">250+</p>
                    <p className="text-xs text-muted-foreground">Ações realizadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
