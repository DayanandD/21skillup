import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getModules,
  updateModuleProgress,
} from "./useModuleHooks";

import {
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardHeader,
  LinearProgress,
  Chip,
} from "@mui/material";
import { CheckCircle, PlayCircle, Clock } from "lucide-react";

interface Topic {
  topicId: number;
  title: string;
  completed?: boolean;
}

interface Module {
  moduleId: number;
  title: string;
  description: string;
  dayNumber: number;
  estimatedTime?: number;
  topics: Topic[];
}

export default function ModuleList() {
  const [modules, setModules] = useState<Module[]>([]);
  const [overallProgress, setOverallProgress] = useState(0);
  const [activeModuleId, setActiveModuleId] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getModules();
        let data: Module[] = [];

        if (typeof res.data === "string") {
          data = JSON.parse(res.data);
        } else if (Array.isArray(res.data)) {
          data = res.data;
        }

        setModules(data);

        const totalTopics = data.flatMap((m) => m.topics || []).length;
        const completedTopics = data.flatMap((m) => m.topics || []).filter((t) => t.completed).length;

        setOverallProgress(
          totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0
        );
      } catch (error) {
        console.error("Error fetching modules", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleUnload = () => {
      if (activeModuleId && startTime) {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        updateModuleProgress(activeModuleId, timeSpent)
          .then(() => console.log(`Progress saved: ${timeSpent}s for module ${activeModuleId}`))
          .catch((err) => console.error("Failed to update module progress", err));
      }
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => {
      handleUnload();
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [activeModuleId, startTime]);

  const getStatusIcon = (progress: number) => {
    if (progress === 100) return <CheckCircle color="green" size={16} />;
    if (progress > 0) return <PlayCircle color="blue" size={16} />;
    return <Clock color="#9ca3af" size={16} />;
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#fff", borderRadius: 3 }}>
      {/* Global Progress */}
      <Box mb={5}>
        <Typography variant="h5" gutterBottom>
          Overall Progress
        </Typography>
        <LinearProgress
          variant="determinate"
          value={overallProgress}
          sx={{ height: 10, borderRadius: 5 }}
        />
        <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
          {overallProgress}% Completed
        </Typography>
      </Box>

      {/* Heading */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        21-Day React Learning Journey
      </Typography>

      {/* Module Cards */}
      <Grid container spacing={3}>
        {modules
          .sort((a, b) => a.dayNumber - b.dayNumber)
          .map((module) => {
            const completedTopics = module.topics?.filter((t) => t.completed).length || 0;
            const totalTopics = module.topics?.length || 1;
            const progress = Math.round((completedTopics / totalTopics) * 100);
            const status = progress === 100 ? "completed" : progress > 0 ? "in-progress" : "locked";

            const cardBg =
              status === "completed"
                ? "#f0fdf4"
                : status === "in-progress"
                ? "#eff6ff"
                : "#ffffff";

            return (
              <Grid item xs={12} sm={6} md={4} key={module.moduleId}>
                <Card
                  sx={{
                    backgroundColor: cardBg,
                    border: "1px solid",
                    borderColor:
                      status === "completed"
                        ? "#bbf7d0"
                        : status === "in-progress"
                        ? "#bfdbfe"
                        : "#e5e7eb",
                    transition: "0.3s",
                    "&:hover": { boxShadow: 3 },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardHeader
                    title={
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex" alignItems="center" gap={1}>
                          <Chip label={`Day ${module.dayNumber}`} size="small" variant="outlined" />
                          {getStatusIcon(progress)}
                        </Box>
                        <Box display="flex" alignItems="center" gap={0.5}>
                          <Clock size={12} />
                          <Typography variant="caption">
                            {module.estimatedTime || 50} min
                          </Typography>
                        </Box>
                      </Box>
                    }
                    sx={{ pb: 0 }}
                  />

                  <CardContent sx={{ flex: 1, pt: 1 }}>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      {module.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {module.description?.slice(0, 80)}...
                    </Typography>

                    <Box mb={1}>
                      <Box display="flex" justifyContent="space-between" fontSize={12}>
                        <Typography variant="caption">Progress</Typography>
                        <Typography variant="caption">{progress}%</Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={{
                          height: 8,
                          borderRadius: 5,
                          mt: 0.5,
                          backgroundColor: "#e5e7eb",
                          "& .MuiLinearProgress-bar": {
                            borderRadius: 5,
                          },
                        }}
                        color={progress === 100 ? "success" : "primary"}
                      />
                    </Box>

                    <Button
                      variant={status === "locked" ? "outlined" : "contained"}
                      color={
                        status === "locked"
                          ? "inherit"
                          : progress === 100
                          ? "success"
                          : "primary"
                      }
                      fullWidth
                      disabled={status === "locked"}
                      sx={{ mt: 1.5 }}
                      onClick={() => {
                        if (activeModuleId && startTime) {
                          const timeSpent = Math.floor((Date.now() - startTime) / 1000);
                          updateModuleProgress(activeModuleId, timeSpent)
                            .then(() => console.log("✅ Progress updated:", timeSpent))
                            .catch((err) => console.error("❌ Error updating progress", err));
                        }

                        setActiveModuleId(module.moduleId);
                        setStartTime(Date.now());

                        // ✅ Navigate to module overview by day
                        navigate(`/modules/overview/${module.dayNumber}`);
                      }}
                    >
                      {status === "completed"
                        ? "Review"
                        : status === "in-progress"
                        ? "Continue"
                        : "Start"}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}
