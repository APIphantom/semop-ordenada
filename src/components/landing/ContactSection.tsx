import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, MapPin, Phone, Mail } from "lucide-react";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Visual only - no backend
    console.log("Form submitted:", formData);
    alert("Formulário enviado! (Apenas visual - sem backend conectado)");
  };
  return <section id="contato" className="section-spacing bg-card">
      <div className="container-semop">
        <SectionTitle title="Entre em Contato" subtitle="Envie sua mensagem, dúvida ou sugestão para a SEMOP" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-secondary rounded-xl card-shadow animate-fade-in-up">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-foreground font-medium">
                    Nome Completo
                  </Label>
                  <Input id="nome" name="nome" type="text" placeholder="Digite seu nome" value={formData.nome} onChange={handleChange} required className="bg-card border-border focus:border-accent focus:ring-accent rounded-lg" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    E-mail
                  </Label>
                  <Input id="email" name="email" type="email" placeholder="seu@email.com" value={formData.email} onChange={handleChange} required className="bg-card border-border focus:border-accent focus:ring-accent rounded-lg" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem" className="text-foreground font-medium">
                    Mensagem
                  </Label>
                  <Textarea id="mensagem" name="mensagem" placeholder="Digite sua mensagem..." value={formData.mensagem} onChange={handleChange} required rows={5} className="bg-card border-border focus:border-accent focus:ring-accent rounded-lg resize-none" />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-accent text-primary-foreground rounded-lg transition-colors" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{
          animationDelay: "0.1s"
        }}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Informações de Contato
                </h3>
                <p className="text-muted-foreground mb-6">
                  Estamos à disposição para atender você. Entre em contato através 
                  dos canais abaixo ou preencha o formulário ao lado.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Endereço</p>
                    <p className="text-muted-foreground text-sm">
                      Av. Principal, 1000 - Centro<br />
                      CEP: 00000-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Telefone</p>
                    <p className="text-muted-foreground text-sm">(00) 0000-0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">E-mail</p>
                    <p className="text-muted-foreground text-sm">contato@semop.gov.br</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;