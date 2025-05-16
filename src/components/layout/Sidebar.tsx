
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Calendar,
  BarChart3,
  CheckSquare,
  Layout,
  MessageSquare,
  Users,
  Settings,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { icon: Layout, name: "Dashboard", path: "/" },
  { icon: Calendar, name: "Calendar", path: "/calendar" },
  { icon: CheckSquare, name: "Tasks", path: "/tasks" },
  { icon: MessageSquare, name: "Surveys", path: "/surveys" },
  { icon: Users, name: "Team", path: "/team" },
  { icon: BarChart3, name: "AI Analytics", path: "/ai-analytics" }
];

export const Sidebar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);

  // Use anchor tags as a fallback when not in a router context
  const NavLinkOrAnchor = ({ to, className, children }: { to: string; className?: string; children: React.ReactNode }) => {
    return (
      <NavLink
        to={to}
        className={(navData) => cn(className, navData.isActive ? "bg-sidebar-accent" : "")}
      >
        {children}
      </NavLink>
    );
  };

  return (
    <>
      {isMobile && (
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      )}

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex flex-col bg-sidebar border-r border-border transition-all duration-300 ease-in-out",
          isOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full md:w-20 md:translate-x-0"
        )}
      >
        <div className="flex items-center h-16 px-6">
          <div className={cn(
            "flex items-center gap-2 font-bold text-lg transition-opacity duration-200",
            isOpen ? "opacity-100" : "opacity-0 md:opacity-0"
          )}>
            <div className="bg-primary text-primary-foreground rounded-md p-1">RWT</div>
            <span className="hidden md:block">Remote Work Tracker</span>
          </div>
          {!isOpen && (
            <div className="hidden md:flex items-center justify-center w-full">
              <div className="bg-primary text-primary-foreground rounded-md p-1 text-sm font-bold">RWT</div>
            </div>
          )}
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <NavLinkOrAnchor
              key={item.name}
              to={item.path}
              className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-sidebar-accent transition-colors group"
            >
              <item.icon className={cn(
                "flex-shrink-0 w-5 h-5 text-sidebar-foreground",
                isOpen ? "mr-3" : "mx-auto"
              )} />
              <span className={cn(
                "text-sidebar-foreground transition-opacity duration-200",
                isOpen ? "opacity-100" : "opacity-0 hidden md:block md:opacity-0"
              )}>
                {item.name}
              </span>
              {!isOpen && (
                <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-primary text-primary-foreground text-sm invisible opacity-0 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                  {item.name}
                </div>
              )}
            </NavLinkOrAnchor>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <NavLinkOrAnchor
            to="/settings"
            className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-sidebar-accent transition-colors"
          >
            <Settings className={cn(
              "flex-shrink-0 w-5 h-5 text-sidebar-foreground",
              isOpen ? "mr-3" : "mx-auto"
            )} />
            <span className={cn(
              "text-sidebar-foreground transition-opacity duration-200",
              isOpen ? "opacity-100" : "opacity-0 md:opacity-0"
            )}>
              Settings
            </span>
          </NavLinkOrAnchor>
        </div>
      </div>
    </>
  );
};
