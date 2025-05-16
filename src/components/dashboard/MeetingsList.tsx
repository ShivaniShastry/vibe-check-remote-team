
import { Calendar, Clock, User, Users } from "lucide-react";

// Mock data
const meetings = [
  {
    id: 1,
    title: "Weekly Team Sync",
    time: "10:00 AM - 11:00 AM",
    date: "Today",
    participants: ["Sarah Chen", "Alex Johnson", "+3 others"],
    type: "Regular"
  },
  {
    id: 2,
    title: "Project Retrospective",
    time: "2:00 PM - 3:00 PM",
    date: "Today",
    participants: ["Mike Anderson", "Lisa Wong", "+5 others"],
    type: "Important"
  },
  {
    id: 3,
    title: "Quarterly Planning",
    time: "9:30 AM - 11:30 AM",
    date: "Tomorrow",
    participants: ["Sarah Chen", "Alex Johnson", "David Miller", "+7 others"],
    type: "Important"
  },
  {
    id: 4,
    title: "1:1 with Manager",
    time: "3:00 PM - 3:30 PM",
    date: "Tomorrow",
    participants: ["Emma Davis"],
    type: "Regular"
  }
];

export const MeetingsList = () => {
  return (
    <div className="space-y-3">
      {meetings.map((meeting) => (
        <div 
          key={meeting.id}
          className="p-3 rounded-md border border-border bg-card/50 hover:bg-card transition-colors"
        >
          <div className="flex justify-between items-start">
            <h4 className="font-medium text-sm">
              {meeting.title}
            </h4>
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              meeting.type === "Important" 
              ? "bg-primary/10 text-primary"
              : "bg-muted text-muted-foreground"
            }`}>
              {meeting.type}
            </span>
          </div>
          <div className="mt-2 space-y-1 text-xs text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-2" />
              {meeting.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-2" />
              {meeting.time}
            </div>
            <div className="flex items-center">
              <Users className="w-3 h-3 mr-2" />
              <span className="truncate">
                {meeting.participants.join(", ")}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
