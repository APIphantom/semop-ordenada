import SectionTitle from "./SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Shield, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Fiscalização Urbana",
      description: "Controle e fiscalização de atividades comerciais, obras irregulares, publicidade e posturas municipais.",
    },
    {
      icon: Shield,
      title: "Ordem Pública",
      description: "Ações de ordenamento do espaço público, combate à poluição sonora e visual, e manutenção da ordem.",
    },
    {
      icon: Users,
      title: "Atendimento ao Cidadão",
      description: "Canal direto com a população para denúncias, sugestões e acompanhamento de solicitações.",
    },
  ];

  return (
    <section id="servicos" className="section-spacing bg-secondary">
      <div className="container-semop">
        <SectionTitle
          title="Nossos Serviços"
          subtitle="Conheça os principais serviços oferecidos pela SEMOP à população"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="bg-card rounded-xl card-shadow group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
