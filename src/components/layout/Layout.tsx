
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { ModeToggle } from "@/components/layout/ModeToggle";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="px-4">
          <header className="h-16 border-b border-border flex items-center justify-end p-4 sticky top-0 bg-background z-10">
            <SidebarTrigger className="mr-auto" />
            <ModeToggle />
          </header>
          <main className={cn("px-4 py-6", className)}>
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
