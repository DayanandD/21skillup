// ModuleOverview.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getModuleByDay,
//   updateModuleProgress,
} from "./useModuleHooks";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
//   LinearProgress,
} from "@mui/material";
import TopicViewer from "./TopicViewer";
import { Eye, CheckCircle } from "lucide-react";

interface Topic {
  topicId: number;
  title: string;
  description?: string;
  completed?: boolean;
  content?: string;
}

interface Module {
  moduleId: number;
  title: string;
  description: string;
  dayNumber: number;
  topics: Topic[];
}

export default function ModuleOverview() {
  const { day } = useParams<{ day: string }>();
  const [module, setModule] = useState<Module | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [viewerOpen, setViewerOpen] = useState(false);

  useEffect(() => {
    const fetchModule = async () => {
      try {
        if (!day) return;
        const res = await getModuleByDay(parseInt(day));
        setModule(res.data);
      } catch (err) {
        console.error("Failed to load module", err);
      }
    };
    fetchModule();
  }, [day]);

  const handleViewTopic = (topic: Topic) => {
    setSelectedTopic(topic);
    setViewerOpen(true);
  };

  const markCompleted = (topicId: number) => {
    if (!module) return;
    const updated = {
      ...module,
      topics: module.topics.map((t) =>
        t.topicId === topicId ? { ...t, completed: true } : t
      ),
    };
    setModule(updated);
  };

  if (!module) return <Typography>Loading module...</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        {module.title} - Day {module.dayNumber}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {module.description}
      </Typography>

      <Grid container spacing={3} mt={2}>
        {module.topics.map((topic) => (
          <Grid item xs={12} sm={6} md={4} key={topic.topicId}>
            <Card
              sx={{
                backgroundColor: topic.completed ? "#ecfdf5" : "#fff",
                border: "1px solid",
                borderColor: topic.completed ? "#34d399" : "#e5e7eb",
              }}
            >
              <CardContent>
                <Typography fontWeight="bold" gutterBottom>
                  {topic.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {topic.description?.slice(0, 70)}
                </Typography>

                <Box mt={2} display="flex" justifyContent="space-between">
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<Eye size={14} />}
                    onClick={() => handleViewTopic(topic)}
                  >
                    View
                  </Button>

                  {topic.completed ? (
                    <CheckCircle color="green" size={18} />
                  ) : (
                    <Button
                      size="small"
                      onClick={() => markCompleted(topic.topicId)}
                    >
                      Mark as Done
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedTopic && (
        <TopicViewer
          open={viewerOpen}
          topic={selectedTopic}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </Box>
  );
}