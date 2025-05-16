
import { NavLink } from "react-router-dom";
import { 
  Calendar, BarChart3, CheckSquare, Layout, 
  MessageSquare, Users, Settings
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/ModeToggle";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

// Navigation items
const navItems = [
  { icon: Layout, name: "Dashboard", path: "/" },
  { icon: Calendar, name: "Calendar", path: "/calendar" },
  { icon: CheckSquare, name: "Tasks", path: "/tasks" },
  { icon: MessageSquare, name: "Surveys", path: "/surveys" },
  { icon: Users, name: "Team", path: "/team" },
  { icon: BarChart3, name: "AI Analytics", path: "/ai-analytics" }
];

// AppSidebar Component
function AppSidebar() {
  // NavLink wrapper to work with react-router and sidebar
  const NavLinkWrapper = ({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) => (
    <NavLink
      to={to}
      className={({ isActive }) => 
        cn(className, isActive ? "data-active=true" : "")
      }
    >
      {children}
    </NavLink>
  );

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="bg-primary text-primary-foreground rounded-md p-1 text-sm font-bold">RWT</div>
          <span className="font-bold">Remote Work Tracker</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild tooltip={item.name}>
                    <NavLinkWrapper to={item.path}>
                      <item.icon />
                      <span>{item.name}</span>
                    </NavLinkWrapper>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Settings">
                <NavLinkWrapper to="/settings">
                  <Settings />
                  <span>Settings</span>
                </NavLinkWrapper>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}

// Main Layout Component
interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function AppLayout({ children, className }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex-1 p-0">
          <header className="h-16 border-b border-border flex items-center justify-end p-4 sticky top-0 bg-background z-10">
            <SidebarTrigger className="mr-auto" />
            <ModeToggle />
          </header>
          <main className={cn("p-6", className)}>
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
