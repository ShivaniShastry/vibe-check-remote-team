
import { useState } from "react";
import { Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

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
