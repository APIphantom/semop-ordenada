import SectionTitle from "./SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "SEMOP intensifica fiscalização no Centro",
      summary: "Ações de ordenamento do comércio ambulante reforçadas nas principais vias do Centro da cidade.",
      category: "Fiscalização",
      date: "20 Jan 2026",
    },
    {
      id: 2,
      title: "Programa de capacitação para agentes",
      summary: "Servidores participam de treinamento sobre novas legislações e procedimentos de abordagem.",
      category: "Institucional",
      date: "18 Jan 2026",
    },
    {
      id: 3,
      title: "Parceria com comerciantes locais",
      summary: "SEMOP firma acordo de cooperação para melhoria da organização comercial nos bairros.",
      category: "Parcerias",
      date: "15 Jan 2026",
    },
  ];

  return (
    <section id="noticias" className="section-spacing bg-secondary">
      <div className="container-semop">
        <SectionTitle
          title="Últimas Notícias"
          subtitle="Acompanhe as novidades e ações da SEMOP"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card 
              key={item.id}
              className="bg-card rounded-xl card-shadow overflow-hidden group hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder */}
              <div className="h-44 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Imagem da notícia</p>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.summary}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-accent hover:bg-transparent group/btn"
                >
                  Ler mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
