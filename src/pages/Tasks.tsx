
import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';

function Tasks() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
        <p className="text-muted-foreground">
          Manage and track tasks for your remote team.
        </p>
      </div>
      <div className="grid gap-6">
        {/* Content for Tasks page */}
        <div className="border rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Your Tasks</h3>
          <p>This feature is coming soon. Check back for updates!</p>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
