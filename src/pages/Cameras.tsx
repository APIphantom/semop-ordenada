import { FileText, UserCheck, Usb, ArrowLeft, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoSemop from "@/assets/logo-semop.jpg";
import RequirementCard from "@/components/cameras/RequirementCard";
import CameraRequestForm from "@/components/cameras/CameraRequestForm";

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
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card sticky top-0 z-50 shadow-md border-b border-border/50">
        <div className="container-semop">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={logoSemop} 
                alt="SEMOP - Secretaria Municipal de Ordem Pública" 
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all"
              />
              <div className="hidden sm:block">
                <span className="font-bold text-foreground text-lg">SEMOP</span>
                <p className="text-xs text-muted-foreground">Secretaria de Ordem Pública</p>
              </div>
            </Link>
            <Button variant="outline" asChild className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="py-12 md:py-20">
        <div className="container-semop">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-6 shadow-lg">
              <Camera className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Acesso às Câmeras de<br className="hidden md:block" /> Monitoramento
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Saiba como solicitar acesso às imagens das câmeras de monitoramento urbano da cidade
            </p>
          </div>

          {/* Requirement Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {requirementCards.map((card, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <RequirementCard {...card} />
              </div>
            ))}
          </div>

          {/* Registration Form */}
          <div className="max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <CameraRequestForm />
          </div>

          {/* Important Info */}
          <div className="mt-16 p-8 bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl max-w-3xl mx-auto border border-border/50 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h3 className="font-bold text-foreground text-lg mb-5 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">i</span>
              </span>
              Informações Importantes
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>As imagens ficam disponíveis por até 30 dias após a ocorrência</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>O prazo para retirada das imagens é de até 5 dias úteis após aprovação</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>É necessário comparecer pessoalmente para retirada com documento de identificação</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>O pendrive fornecido deve estar vazio e formatado</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>Horário de atendimento: Segunda a Sexta, das 8h às 17h</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary py-10">
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
