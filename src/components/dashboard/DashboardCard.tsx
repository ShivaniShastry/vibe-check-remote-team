
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const DashboardCard = ({
  title,
  icon,
  children,
  className
}: DashboardCardProps) => {
  return (
    <Card className={cn("overflow-hidden card-hover-effect", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="w-4 h-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
