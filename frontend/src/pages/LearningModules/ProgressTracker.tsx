// ProgressTracker.tsx
import { Box, Typography, LinearProgress } from "@mui/material";

interface Topic {
  completed?: boolean;
}

export default function ProgressTracker({ topics }: { topics: Topic[] }) {
  const completed = topics.filter((t) => t.completed).length;
  const total = topics.length || 1;
  const progress = Math.round((completed / total) * 100);

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="subtitle2" gutterBottom>
        Progress: {completed} / {total} topics ({progress}%)
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ height: 10, borderRadius: 5 }}
        color={progress === 100 ? "success" : "primary"}
      />
    </Box>
  );
}
