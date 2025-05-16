
import { Layout } from "@/components/layout/Layout";

const Calendar = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">
            View and manage your team meetings and events
          </p>
        </div>
        
        <div className="p-12 border border-dashed rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Full Calendar View Coming Soon</p>
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
