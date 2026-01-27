import SectionTitle from "./SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Moradora do Centro",
      rating: 5,
      text: "Excelente trabalho da SEMOP na organização do comércio ambulante. Agora consigo caminhar tranquilamente pelas calçadas.",
    },
    {
      id: 2,
      name: "João Santos",
      role: "Comerciante",
      rating: 5,
      text: "O processo de regularização foi rápido e transparente. A equipe da SEMOP me orientou em todas as etapas.",
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Presidente de Associação",
      rating: 5,
      text: "A parceria com a SEMOP transformou nosso bairro. As ações de fiscalização reduziram significativamente os problemas.",
    },
  ];

  return (
    <section className="section-spacing bg-card">
      <div className="container-semop">
        <SectionTitle
          title="O que dizem sobre nós"
          subtitle="Depoimentos de cidadãos e parceiros sobre o trabalho da SEMOP"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="bg-secondary rounded-xl card-shadow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent/30 mb-4" />
                
                <p className="text-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
