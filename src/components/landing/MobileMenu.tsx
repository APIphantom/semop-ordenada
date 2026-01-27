import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
}

const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] bg-card">
        <SheetHeader className="text-left">
          <SheetTitle className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">S</span>
            </div>
            <span className="font-bold text-foreground">SEMOP</span>
          </SheetTitle>
        </SheetHeader>
        
        <nav className="flex flex-col gap-4 mt-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="text-foreground hover:text-accent transition-colors font-medium text-lg py-2 border-b border-border"
            >
              {item.label}
            </a>
          ))}
          
          <Button 
            className="bg-primary hover:bg-accent text-primary-foreground rounded-lg mt-4 w-full"
            asChild
          >
            <a href="#contato" onClick={onClose}>Fale Conosco</a>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
