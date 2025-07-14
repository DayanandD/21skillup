import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import { CheckCircle, PlayCircle, BookOpen } from "lucide-react";

interface Topic {
  topicId: number;
  title: string;
  completed?: boolean;
  videoUrl?: string;
  codeSnippets?: string;
}

interface Props {
  topic: Topic;
  onClick: () => void;
}

export default function TopicCard({ topic, onClick }: Props) {
  const getStatusIcon = () => {
    if (topic.completed) return <CheckCircle color="green" size={20} />;
    if (topic.videoUrl) return <PlayCircle color="blue" size={20} />;
    return <BookOpen color="#9ca3af" size={20} />;
  };

  return (
    <Card
      sx={{
        border: topic.completed ? "1px solid #bbf7d0" : "1px solid #e5e7eb",
        backgroundColor: topic.completed ? "#f0fdf4" : "#ffffff",
        transition: "0.3s",
        cursor: "pointer",
        "&:hover": { boxShadow: 3 },
      }}
      onClick={onClick}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" fontWeight="medium">
            {topic.title}
          </Typography>
          <IconButton size="small">{getStatusIcon()}</IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
