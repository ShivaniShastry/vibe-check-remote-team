
import { User } from "lucide-react";

// Mock data
const teamMembers = [
  { id: 1, name: "Sarah Chen", points: 850, avatar: "/placeholder.svg" },
  { id: 2, name: "Alex Johnson", points: 720, avatar: "/placeholder.svg" },
  { id: 3, name: "Emma Davis", points: 690, avatar: "/placeholder.svg" },
  { id: 4, name: "David Miller", points: 580, avatar: "/placeholder.svg" },
  { id: 5, name: "Lisa Wong", points: 560, avatar: "/placeholder.svg" },
];

export const Leaderboard = () => {
  return (
    <div className="space-y-3">
      {teamMembers.map((member, index) => (
        <div 
          key={member.id}
          className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium">
              {index + 1}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <User className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="text-sm font-medium">{member.name}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">{member.points}</span>
            <span className="text-xs text-muted-foreground">pts</span>
          </div>
        </div>
      ))}
    </div>
  );
};
