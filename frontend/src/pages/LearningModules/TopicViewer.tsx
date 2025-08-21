
// TopicViewer.tsx
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Box } from "@mui/material";
import { X } from "lucide-react";

interface Topic {
  title: string;
  content: string;
  videoUrl?: string;
  codeSnippets?: string;
}

export default function TopicViewer({ topic, onClose }: { topic: Topic; onClose: () => void }) {
  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        {topic.title}
        <IconButton onClick={onClose} sx={{ float: "right" }}>
          <X />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {topic.videoUrl && (
          <Box sx={{ mb: 2 }}>
            <iframe
              width="100%"
              height="315"
              src={topic.videoUrl.replace("watch?v=", "embed/")}
              title="Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Box>
        )}

        <Typography variant="body1" sx={{ mb: 2 }}>
          {topic.content}
        </Typography>

        {topic.codeSnippets && (
          <Box sx={{ background: "#f9f9f9", p: 2, borderRadius: 2 }}>
            <Typography variant="caption" color="text.secondary">
              Code:
            </Typography>
            <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>{topic.codeSnippets}</pre>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
