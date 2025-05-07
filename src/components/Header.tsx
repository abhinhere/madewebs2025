
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("py-6 text-center", className)}>
      <div className="container px-4">
        <div className="mx-auto max-w-md">
          <h1 className="text-3xl font-bold tracking-tight text-primary">Madewebs</h1>
          <p className="mt-2 text-muted-foreground">Showcase of beautiful web projects</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
