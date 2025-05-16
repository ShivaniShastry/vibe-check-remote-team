
import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import type { DayContentProps } from "react-day-picker";

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
          <CalendarIcon className="h-5 w-5 text-muted-foreground" />
          <span className="font-medium text-sm">{format(new Date(), "MMMM yyyy")}</span>
        </div>
      </div>
      <Calendar
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
