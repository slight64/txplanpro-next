import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Textarea } from "@/shared/ui/textarea";
import { Send, Mic, Paperclip } from "lucide-react";
import { motion } from "framer-motion";

export function ChatCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base text-muted-foreground">
          Ask us anything…
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-2 rounded-2xl border p-3">
          <Textarea
            placeholder="Type your message"
            className="min-h-[120px] resize-none border-0 shadow-none focus-visible:ring-0"
          />
          <div className="flex flex-col items-center gap-2 pb-1">
            <Button size="icon" variant="ghost" className="rounded-full">
              <Mic className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full">
              <Paperclip className="h-4 w-4" />
            </Button>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button className="rounded-full px-6">
                <Send className="mr-2 h-4 w-4" />
                Send
              </Button>
            </motion.div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
