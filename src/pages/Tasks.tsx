
import { Layout } from "@/components/layout/Layout";

const Tasks = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
          <p className="text-muted-foreground">
            Manage your team tasks and deliverables
          </p>
        </div>
        
        <div className="p-12 border border-dashed rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Full Tasks View Coming Soon</p>
        </div>
      </div>
    </Layout>
  );
};

export default Tasks;
