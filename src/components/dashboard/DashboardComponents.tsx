
import { useState } from "react";
import { User, Calendar, Clock, Users, MessageSquare, Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import type { DayContentProps } from "react-day-picker";

// DashboardCard Component
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
    <div className={cn("overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm card-hover-effect", className)}>
      <div className="flex flex-row items-center justify-between pb-2 p-6 space-y-0">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="w-4 h-4 text-muted-foreground">{icon}</div>
      </div>
      <div className="p-6 pt-0">{children}</div>
    </div>
  );
};

// Leaderboard Component
export const Leaderboard = () => {
  // Mock data
  const teamMembers = [
    { id: 1, name: "Sarah Chen", points: 850, avatar: "/placeholder.svg" },
    { id: 2, name: "Alex Johnson", points: 720, avatar: "/placeholder.svg" },
    { id: 3, name: "Emma Davis", points: 690, avatar: "/placeholder.svg" },
    { id: 4, name: "David Miller", points: 580, avatar: "/placeholder.svg" },
    { id: 5, name: "Lisa Wong", points: 560, avatar: "/placeholder.svg" },
  ];

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

// MeetingsList Component
export const MeetingsList = () => {
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

// MiniCalendar Component
export const MiniCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Mock event dates to highlight on calendar
  const eventDates = [
    new Date(2023, 4, 5),
    new Date(2023, 4, 10),
    new Date(2023, 4, 15),
    new Date(2023, 4, 20),
    new Date(2023, 4, 25),
  ];

  // Function to check if a date has events
  const hasEvent = (day: Date) => {
    return eventDates.some(eventDate => 
      eventDate.getDate() === day.getDate() &&
      eventDate.getMonth() === day.getMonth() &&
      eventDate.getFullYear() === day.getFullYear()
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <span className="font-medium text-sm">{format(new Date(), "MMMM yyyy")}</span>
        </div>
      </div>
      <CalendarComponent
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        modifiersClassNames={{
          selected: "bg-primary text-primary-foreground",
          today: "bg-accent text-accent-foreground",
        }}
        modifiersStyles={{
          event: {
            backgroundColor: "rgba(156, 163, 175, 0.2)",
            borderRadius: "50%"
          },
        }}
        modifiers={{
          event: (date) => hasEvent(date),
        }}
        components={{
          DayContent: ({ date, displayMonth }: DayContentProps) => (
            <div className={cn(
              "relative flex h-full w-full items-center justify-center",
              hasEvent(date) && displayMonth && "relative"
            )}>
              <span>{date.getDate()}</span>
              {hasEvent(date) && displayMonth && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-primary" />
              )}
            </div>
          ),
        }}
      />
    </div>
  );
};

// FeedbackForm Component
export const FeedbackForm = () => {
  const { toast } = useToast();
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState([3]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedback.trim()) {
      setIsSubmitted(true);
      toast({
        title: "Feedback Submitted",
        description: "Your anonymous feedback has been recorded.",
        duration: 3000,
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-6 space-y-2">
        <div className="text-4xl mb-3">🙏</div>
        <h3 className="text-sm font-medium">Thank you for your feedback</h3>
        <p className="text-xs text-muted-foreground">Your input helps us improve our remote work environment</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="feedback" className="text-sm font-medium">
          Share your thoughts anonymously
        </label>
        <Textarea
          id="feedback"
          placeholder="What's on your mind about our remote work culture?"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="resize-none"
          rows={3}
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">
          How connected do you feel with your team? ({rating})
        </label>
        <div className="px-2">
          <Slider
            value={rating}
            onValueChange={setRating}
            max={5}
            min={1}
            step={1}
            className="my-4"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Not connected</span>
            <span>Very connected</span>
          </div>
        </div>
      </div>
      
      <Button type="submit" disabled={!feedback.trim()} className="w-full">
        Submit Anonymously
      </Button>
    </form>
  );
};

// AIEngagementAnalyzer Component
export const AIEngagementAnalyzer = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [showPromptInput, setShowPromptInput] = useState(false);

  // Mock insights
  const insights = [
    "Team meeting participation decreased by 15% this week.",
    "Chat activity is lower than usual, consider organizing a casual virtual coffee break.",
    "Three team members have not participated in any team events this month.",
    "Weekly survey completion rate is at 65%, down from 80% last month."
  ];

  // Mock suggestions
  const suggestions = [
    "Schedule a virtual team building activity next week",
    "Consider implementing 'No Meeting Fridays' to reduce meeting fatigue",
    "Create more asynchronous communication opportunities",
    "Start team meetings with a fun icebreaker question"
  ];

  const handleGenerateSuggestions = () => {
    setIsGenerating(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <h3 className="text-sm font-medium flex items-center gap-2">
          <Bot className="h-4 w-4" /> 
          AI Insights
        </h3>
        <div className="space-y-2 text-sm">
          {insights.map((insight, index) => (
            <div 
              key={index} 
              className="p-2 bg-muted/50 rounded-md"
            >
              {insight}
            </div>
          ))}
        </div>
      </div>
      
      {!showPromptInput ? (
        <Button 
          variant="outline" 
          className="w-full flex items-center gap-2"
          onClick={() => setShowPromptInput(true)}
        >
          Request AI suggestions <ArrowRight className="h-4 w-4" />
        </Button>
      ) : (
        <div className="space-y-3">
          <div className="space-y-2">
            <label htmlFor="prompt" className="text-sm font-medium">
              What type of engagement would you like suggestions for?
            </label>
            <Textarea
              id="prompt"
              placeholder="e.g., Virtual team building activities for distributed teams"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="resize-none"
              rows={2}
            />
          </div>
          
          <Button 
            onClick={handleGenerateSuggestions} 
            disabled={!prompt.trim() || isGenerating}
            className="w-full"
          >
            {isGenerating ? "Generating..." : "Generate Suggestions"}
          </Button>
          
          {!isGenerating && prompt && (
            <div className="mt-4 space-y-2">
              <h4 className="text-sm font-medium">AI Suggestions:</h4>
              <ul className="space-y-2 text-sm">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="p-2 bg-accent/10 rounded-md">
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
