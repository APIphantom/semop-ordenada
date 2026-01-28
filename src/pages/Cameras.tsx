import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FileText, UserCheck, Usb, ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
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
import logoSemop from "@/assets/logo-semop.jpg";

const formSchema = z.object({
  nomeCompleto: z.string().min(3, "Nome deve ter pelo menos 3 caracteres").max(100),
  cpf: z.string().min(11, "CPF inválido").max(14),
  rg: z.string().min(5, "RG inválido").max(20),
  dataNascimento: z.string().min(1, "Data de nascimento é obrigatória"),
  email: z.string().email("Email inválido").max(255),
  telefone: z.string().min(10, "Telefone inválido").max(15),
  endereco: z.string().min(5, "Endereço deve ter pelo menos 5 caracteres").max(200),
  bairro: z.string().min(2, "Bairro é obrigatório").max(100),
  cep: z.string().min(8, "CEP inválido").max(9),
  motivo: z.string().min(10, "Descreva o motivo com mais detalhes").max(500),
  dataOcorrencia: z.string().min(1, "Data da ocorrência é obrigatória"),
  localOcorrencia: z.string().min(5, "Local da ocorrência é obrigatório").max(200),
});

type FormData = z.infer<typeof formSchema>;

const requirementCards = [
  {
    icon: FileText,
    title: "Documentação",
    description: "Apresentar documento de identificação oficial com foto (RG, CNH ou Passaporte) e comprovante de residência atualizado.",
    details: [
      "Documento original e cópia",
      "Comprovante de residência (últimos 3 meses)",
      "Boletim de ocorrência (se aplicável)",
    ],
  },
  {
    icon: UserCheck,
    title: "Registro",
    description: "Preencher o formulário de solicitação abaixo com todos os dados pessoais e informações sobre a ocorrência.",
    details: [
      "Dados pessoais completos",
      "Informações da ocorrência",
      "Justificativa do pedido",
    ],
  },
  {
    icon: Usb,
    title: "Pendrive",
    description: "Trazer um pendrive vazio com capacidade mínima de 16GB para armazenamento das imagens solicitadas.",
    details: [
      "Capacidade mínima: 16GB",
      "Formato FAT32 ou NTFS",
      "Pendrive vazio e formatado",
    ],
  },
];

const Cameras = () => {
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
    
    // Simulate form submission
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card sticky top-0 z-50 shadow-sm">
        <div className="container-semop">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logoSemop} 
                alt="SEMOP - Secretaria Municipal de Ordem Pública" 
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover"
              />
              <div className="hidden sm:block">
                <span className="font-bold text-foreground text-lg">SEMOP</span>
                <p className="text-xs text-muted-foreground">Secretaria de Ordem Pública</p>
              </div>
            </Link>
            <Button variant="outline" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="py-12 md:py-16">
        <div className="container-semop">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Acesso às Câmeras de Monitoramento
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Saiba como solicitar acesso às imagens das câmeras de monitoramento urbano da cidade
            </p>
          </div>

          {/* Requirement Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {requirementCards.map((card, index) => (
              <Card key={index} className="card-shadow hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <card.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                  <CardDescription className="text-base">
                    {card.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {card.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Registration Form */}
          <Card className="max-w-3xl mx-auto card-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Formulário de Cadastro</CardTitle>
              <CardDescription>
                Preencha todos os campos abaixo para solicitar acesso às imagens
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Data Section */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground border-b pb-2">
                      Dados Pessoais
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="nomeCompleto"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Nome Completo *</FormLabel>
                            <FormControl>
                              <Input placeholder="Digite seu nome completo" {...field} />
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
                            <FormLabel>CPF *</FormLabel>
                            <FormControl>
                              <Input placeholder="000.000.000-00" {...field} />
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
                            <FormLabel>RG *</FormLabel>
                            <FormControl>
                              <Input placeholder="00.000.000-0" {...field} />
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
                            <FormLabel>Data de Nascimento *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
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
                            <FormLabel>E-mail *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="seu@email.com" {...field} />
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
                            <FormLabel>Telefone *</FormLabel>
                            <FormControl>
                              <Input placeholder="(00) 00000-0000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Address Section */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground border-b pb-2">
                      Endereço
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="endereco"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Endereço Completo *</FormLabel>
                            <FormControl>
                              <Input placeholder="Rua, número, complemento" {...field} />
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
                            <FormLabel>Bairro *</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu bairro" {...field} />
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
                            <FormLabel>CEP *</FormLabel>
                            <FormControl>
                              <Input placeholder="00000-000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Occurrence Section */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground border-b pb-2">
                      Dados da Ocorrência
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="dataOcorrencia"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Data da Ocorrência *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
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
                            <FormLabel>Local da Ocorrência *</FormLabel>
                            <FormControl>
                              <Input placeholder="Endereço ou referência" {...field} />
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
                            <FormLabel>Motivo da Solicitação *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Descreva detalhadamente o motivo da sua solicitação de acesso às imagens..."
                                className="min-h-[120px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Enviar Solicitação
                        </>
                      )}
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    Ao enviar este formulário, você concorda com nossa política de privacidade 
                    e autoriza o uso dos dados para processamento da solicitação.
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Important Info */}
          <div className="mt-12 p-6 bg-secondary rounded-xl max-w-3xl mx-auto">
            <h3 className="font-semibold text-foreground mb-4">Informações Importantes</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• As imagens ficam disponíveis por até 30 dias após a ocorrência</li>
              <li>• O prazo para retirada das imagens é de até 5 dias úteis após aprovação</li>
              <li>• É necessário comparecer pessoalmente para retirada com documento de identificação</li>
              <li>• O pendrive fornecido deve estar vazio e formatado</li>
              <li>• Horário de atendimento: Segunda a Sexta, das 8h às 17h</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary py-8">
        <div className="container-semop text-center">
          <p className="text-primary-foreground/80 text-sm">
            © {new Date().getFullYear()} SEMOP - Secretaria Municipal de Ordem Pública. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Cameras;
