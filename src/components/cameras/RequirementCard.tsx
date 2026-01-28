import { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface RequirementCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

const RequirementCard = ({ icon: Icon, title, description, details }: RequirementCardProps) => {
  return (
    <Card className="card-shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-4 shadow-inner">
          <Icon className="h-10 w-10 text-primary" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {details.map((detail, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RequirementCard;
