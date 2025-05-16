
import { useState } from "react";
import { CheckSquare, Calendar, User } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

// Mock data
const initialTasks = [
  {
    id: 1,
    title: "Complete quarterly team survey",
    dueDate: "Today",
    assignee: "You",
    completed: false,
    priority: "high"
  },
  {
    id: 2,
    title: "Review team onboarding documentation",
    dueDate: "Tomorrow",
    assignee: "You",
    completed: false,
    priority: "medium"
  },
  {
    id: 3,
    title: "Submit weekly progress report",
    dueDate: "Friday",
    assignee: "You",
    completed: false,
    priority: "high"
  },
  {
    id: 4,
    title: "Schedule 1:1 with team members",
    dueDate: "Next week",
    assignee: "You",
    completed: false,
    priority: "medium"
  },
  {
    id: 5,
    title: "Complete team recognition nominations",
    dueDate: "Next week",
    assignee: "You",
    completed: false,
    priority: "low"
  }
];

export const TasksList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  
  const handleTaskToggle = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="space-y-1">
      {tasks.map((task) => (
        <div key={task.id} className={cn(
          "task-item group",
          task.completed && "opacity-60"
        )}>
          <Checkbox
            checked={task.completed}
            onCheckedChange={() => handleTaskToggle(task.id)}
            className="data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
          />
          <div className="flex flex-col flex-1 min-w-0">
            <span className={cn(
              "text-sm font-medium truncate",
              task.completed && "line-through text-muted-foreground"
            )}>
              {task.title}
            </span>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {task.dueDate}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {task.assignee}
              </span>
            </div>
          </div>
          <div className={cn(
            "w-2 h-2 rounded-full",
            task.priority === "high" ? "bg-destructive" : 
            task.priority === "medium" ? "bg-amber-400" : "bg-emerald-400"
          )} />
        </div>
      ))}
    </div>
  );
};
