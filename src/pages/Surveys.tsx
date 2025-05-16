
import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';

function Surveys() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Surveys</h2>
        <p className="text-muted-foreground">
          Create and manage surveys for your remote team.
        </p>
      </div>
      <div className="grid gap-6">
        {/* Content for Surveys page */}
        <div className="border rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Your Surveys</h3>
          <p>This feature is coming soon. Check back for updates!</p>
        </div>
      </div>
    </div>
  );
}

export default Surveys;
