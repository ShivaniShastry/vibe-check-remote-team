
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";

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
