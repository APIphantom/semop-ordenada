import SectionTitle from "./SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Programa Cidade Limpa",
      description: "Ações de limpeza urbana e combate ao descarte irregular de resíduos em áreas públicas.",
      category: "Meio Ambiente",
    },
    {
      id: 2,
      title: "Ordenamento do Comércio",
      description: "Regularização e organização de atividades comerciais nas vias públicas.",
      category: "Fiscalização",
    },
    {
      id: 3,
      title: "Segurança Comunitária",
      description: "Parceria com a comunidade para promover segurança e bem-estar nos bairros.",
      category: "Segurança",
    },
  ];

  return (
    <section id="projetos" className="section-spacing bg-secondary">
      <div className="container-semop">
        <SectionTitle
          title="Projetos em Destaque"
          subtitle="Conheça as principais iniciativas da SEMOP para melhorar a qualidade de vida da população"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-card rounded-xl card-shadow overflow-hidden group hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Imagem do projeto</p>
              </div>
              
              <CardContent className="p-6">
                <span className="inline-block bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-accent hover:bg-transparent group/btn"
                >
                  Saiba mais
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

export default ProjectsSection;
