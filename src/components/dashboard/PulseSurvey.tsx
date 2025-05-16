
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const PulseSurvey = () => {
  const { toast } = useToast();
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedEmoji !== null) {
      setIsSubmitted(true);
      toast({
        title: "Survey Submitted",
        description: "Thank you for your feedback!",
        duration: 3000,
      });
    }
  };

  const emojis = [
    { value: 1, icon: "😣", label: "Very Unsatisfied" },
    { value: 2, icon: "😕", label: "Unsatisfied" },
    { value: 3, icon: "😐", label: "Neutral" },
    { value: 4, icon: "🙂", label: "Satisfied" },
    { value: 5, icon: "😁", label: "Very Satisfied" },
  ];

  if (isSubmitted) {
    return (
      <div className="text-center py-6 space-y-2">
        <div className="text-5xl mb-2">🎉</div>
        <h3 className="text-sm font-medium">Thanks for participating!</h3>
        <p className="text-xs text-muted-foreground">Your feedback helps improve our remote culture</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">This week's question:</h3>
        <p className="text-sm">How would you rate your work-life balance this week?</p>
      </div>

      <div className="flex justify-between items-center">
        {emojis.map((emoji) => (
          <button
            key={emoji.value}
            onClick={() => setSelectedEmoji(emoji.value)}
            className={`flex flex-col items-center p-2 rounded-md transition-all ${
              selectedEmoji === emoji.value 
                ? "bg-primary/10 scale-110" 
                : "hover:bg-muted"
            }`}
          >
            <span className="text-2xl mb-1">{emoji.icon}</span>
            <span className="text-xs text-muted-foreground">{emoji.label}</span>
          </button>
        ))}
      </div>

      <Button 
        onClick={handleSubmit} 
        disabled={selectedEmoji === null}
        className="w-full mt-4"
      >
        Submit
      </Button>
    </div>
  );
};
