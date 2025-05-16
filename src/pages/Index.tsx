
import { Link } from "react-router-dom";
import { Calendar, CheckSquare, Users, MessageSquare, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DashboardCard, 
  MeetingsList, 
  MiniCalendar, 
  FeedbackForm, 
  Leaderboard, 
  AIEngagementAnalyzer 
} from "@/components/dashboard/DashboardComponents";
import { TasksList } from "@/components/dashboard/TasksList";
import { PulseSurvey } from "@/components/dashboard/PulseSurvey";

const Index = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Track your team's remote culture and engagement.
          </p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            View Calendar
          </Button>
          <Button size="sm">
            <CheckSquare className="mr-2 h-4 w-4" />
            Add Task
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main content - Left column */}
        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DashboardCard
              title="Tasks Pending"
              icon={<CheckSquare />}
              className="animate-fade-in"
            >
              <TasksList />
              <Link to="/tasks">
                <Button variant="link" size="sm" className="mt-2 px-0">
                  View all tasks <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </DashboardCard>

            <DashboardCard
              title="Upcoming Meetings"
              icon={<Calendar />}
              className="animate-fade-in [animation-delay:150ms]"
            >
              <MeetingsList />
              <Link to="/calendar">
                <Button variant="link" size="sm" className="mt-2 px-0">
                  View calendar <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </DashboardCard>
          </div>

          <DashboardCard
            title="AI Engagement Analyzer"
            icon={<BarChart3 />}
            className="animate-fade-in [animation-delay:300ms]"
          >
            <AIEngagementAnalyzer />
          </DashboardCard>
        </div>

        {/* Sidebar - Right column */}
        <div className="space-y-6">
          <DashboardCard
            title="Team Calendar"
            icon={<Calendar />}
            className="animate-fade-in [animation-delay:300ms]"
          >
            <MiniCalendar />
          </DashboardCard>

          <DashboardCard
            title="Weekly Pulse Survey"
            icon={<MessageSquare />}
            className="animate-fade-in [animation-delay:450ms]"
          >
            <PulseSurvey />
          </DashboardCard>

          <DashboardCard
            title="Anonymous Feedback"
            icon={<MessageSquare />}
            className="animate-fade-in [animation-delay:600ms]"
          >
            <FeedbackForm />
          </DashboardCard>

          <DashboardCard
            title="Team Engagement Leaderboard"
            icon={<Users />}
            className="animate-fade-in [animation-delay:750ms]"
          >
            <Leaderboard />
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default Index;
