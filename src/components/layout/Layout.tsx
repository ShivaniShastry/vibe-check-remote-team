
import { Sidebar } from "@/components/layout/Sidebar";
import { ModeToggle } from "@/components/layout/ModeToggle";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="md:pl-20 pt-16 md:pt-0">
        <header className="fixed top-0 right-0 left-0 md:left-20 z-30 h-16 bg-background/80 backdrop-blur-md border-b border-border flex items-center justify-end px-4">
          <ModeToggle />
        </header>
        <main className={cn("px-4 md:px-8 py-6 md:py-8", className)}>
          {children}
        </main>
      </div>
    </div>
  );
};
