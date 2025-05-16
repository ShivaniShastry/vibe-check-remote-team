
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Calendar,
  BarChart3,
  CheckSquare,
  Layout,
  MessageSquare,
  Users,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Layout, name: "Dashboard", path: "/" },
  { icon: Calendar, name: "Calendar", path: "/calendar" },
  { icon: CheckSquare, name: "Tasks", path: "/tasks" },
  { icon: MessageSquare, name: "Surveys", path: "/surveys" },
  { icon: Users, name: "Team", path: "/team" },
  { icon: BarChart3, name: "AI Analytics", path: "/ai-analytics" }
];

export function AppSidebar() {
  // NavLink wrapper to work with react-router and sidebar
  const NavLinkWrapper = ({ to, children, className }) => (
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
