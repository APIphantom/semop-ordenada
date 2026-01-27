import SectionTitle from "./SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Calendar, FolderOpen } from "lucide-react";

const AboutSection = () => {
  const metrics = [
    {
      icon: Target,
      value: "250+",
      label: "Ações realizadas",
      description: "Em todo o município",
    },
    {
      icon: Calendar,
      value: "15",
      label: "Anos de atuação",
      description: "Servindo a população",
    },
    {
      icon: FolderOpen,
      value: "120",
      label: "Projetos executados",
      description: "Transformando a cidade",
    },
  ];

  return (
    <section id="sobre" className="section-spacing bg-card">
      <div className="container-semop">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <SectionTitle
              title="Sobre a SEMOP"
              subtitle=""
              centered={false}
            />
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                A Secretaria Municipal de Ordem Pública (SEMOP) é o órgão responsável pela 
                coordenação e execução das políticas públicas voltadas à manutenção da ordem 
                urbana, fiscalização e segurança do município.
              </p>
              <p>
                Atuamos de forma integrada com outros órgãos municipais e forças de segurança 
                para garantir o cumprimento das normas de postura, ordenamento do espaço público 
                e bem-estar da comunidade.
              </p>
              <p>
                Nossa missão é promover a qualidade de vida dos cidadãos através de ações 
                preventivas e corretivas que assegurem uma cidade mais organizada, segura e 
                acolhedora para todos.
              </p>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid gap-6">
            {metrics.map((metric, index) => (
              <Card 
                key={metric.label}
                className="bg-secondary rounded-xl card-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <metric.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                    <p className="font-medium text-foreground">{metric.label}</p>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
