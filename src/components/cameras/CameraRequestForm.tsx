import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, User, MapPin, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { maskCPF, maskPhone, maskCEP } from "@/utils/masks";

const formSchema = z.object({
  nomeCompleto: z.string().min(3, "Nome deve ter pelo menos 3 caracteres").max(100),
  cpf: z.string().min(14, "CPF inválido").max(14),
  rg: z.string().min(5, "RG inválido").max(20),
  dataNascimento: z.string().min(1, "Data de nascimento é obrigatória"),
  email: z.string().email("Email inválido").max(255),
  telefone: z.string().min(15, "Telefone inválido").max(15),
  endereco: z.string().min(5, "Endereço deve ter pelo menos 5 caracteres").max(200),
  bairro: z.string().min(2, "Bairro é obrigatório").max(100),
  cep: z.string().min(9, "CEP inválido").max(9),
  motivo: z.string().min(10, "Descreva o motivo com mais detalhes").max(500),
  dataOcorrencia: z.string().min(1, "Data da ocorrência é obrigatória"),
  localOcorrencia: z.string().min(5, "Local da ocorrência é obrigatório").max(200),
});

type FormData = z.infer<typeof formSchema>;

const CameraRequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeCompleto: "",
      cpf: "",
      rg: "",
      dataNascimento: "",
      email: "",
      telefone: "",
      endereco: "",
      bairro: "",
      cep: "",
      motivo: "",
      dataOcorrencia: "",
      localOcorrencia: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    
    toast({
      title: "Solicitação enviada com sucesso!",
      description: "Entraremos em contato em breve para agendar a retirada das imagens.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Card className="card-shadow border-0 bg-card overflow-hidden">
      <CardHeader className="text-center bg-gradient-to-r from-primary/5 to-accent/5 pb-8 pt-8">
        <CardTitle className="text-2xl md:text-3xl font-bold">Formulário de Cadastro</CardTitle>
        <CardDescription className="text-base mt-2">
          Preencha todos os campos abaixo para solicitar acesso às imagens
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Data Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-primary/20">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">
                  Dados Pessoais
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="nomeCompleto"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel className="text-sm font-medium">Nome Completo *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Digite seu nome completo" 
                          className="h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cpf"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">CPF *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="000.000.000-00" 
                          className="h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                          {...field}
                          onChange={(e) => field.onChange(maskCPF(e.target.value))}
                          maxLength={14}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="rg"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">RG *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="00.000.000-0" 
                          className="h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dataNascimento"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Data de Nascimento *</FormLabel>
                      <FormControl>
                        <Input 
                          type="date" 
                          className="h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">E-mail *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="seu@email.com" 
                          className="h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Telefone *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="(00) 00000-0000" 
                          className="h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                          {...field}
                          onChange={(e) => field.onChange(maskPhone(e.target.value))}
                          maxLength={15}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Address Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-primary/20">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">
                  Endereço
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="endereco"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel className="text-sm font-medium">Endereço Completo *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Rua, número, complemento" 
                          className="h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bairro"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Bairro *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Seu bairro" 
                          className="h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="cep"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">CEP *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="00000-000" 
                          className="h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                          {...field}
                          onChange={(e) => field.onChange(maskCEP(e.target.value))}
                          maxLength={9}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Occurrence Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-primary/20">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileSearch className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">
                  Dados da Ocorrência
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="dataOcorrencia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Data da Ocorrência *</FormLabel>
                      <FormControl>
                        <Input 
                          type="date" 
                          className="h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="localOcorrencia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Local da Ocorrência *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Endereço ou referência" 
                          className="h-12 bg-secondary/50 border-border/50 focus:border-primary transition-colors"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="motivo"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel className="text-sm font-medium">Motivo da Solicitação *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva detalhadamente o motivo da sua solicitação de acesso às imagens..."
                          className="min-h-[140px] bg-secondary/50 border-border/50 focus:border-primary transition-colors resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="pt-6 space-y-4">
              <Button 
                type="submit" 
                className="w-full h-14 text-base font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-accent hover:to-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl" 
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Solicitação
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                Ao enviar este formulário, você concorda com nossa política de privacidade 
                e autoriza o uso dos dados para processamento da solicitação.
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default CameraRequestForm;
