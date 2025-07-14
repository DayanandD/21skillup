// components/ModuleCard.tsx
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Button,
  Chip,
  LinearProgress,
} from "@mui/material"
import { CheckCircle, Clock, PlayCircle } from "lucide-react"

interface ModuleCardProps {
  module: {
    title: string
    description: string
    dayNumber: number
    estimatedTime?: number
    progress: number
  }
}

export default function ModuleCard({ module }: ModuleCardProps) {
  const getStatus = (progress: number) => {
    if (progress === 100) return "completed"
    if (progress > 0) return "in-progress"
    return "locked"
  }

  const status = getStatus(module.progress)

  const getStatusIcon = () => {
    switch (status) {
      case "completed":
        return <CheckCircle size={16} color="#22c55e" />
      case "in-progress":
        return <PlayCircle size={16} color="#3b82f6" />
      default:
        return <Clock size={16} color="#9ca3af" />
    }
  }

  const getStatusColor = () => {
    switch (status) {
      case "completed":
        return "#f0fdf4"
      case "in-progress":
        return "#eff6ff"
      default:
        return "#ffffff"
    }
  }

  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: getStatusColor(),
        borderColor:
          status === "completed"
            ? "#bbf7d0"
            : status === "in-progress"
            ? "#bfdbfe"
            : "#e5e7eb",
        transition: "0.3s",
        "&:hover": { boxShadow: 3 },
      }}
    >
      <CardHeader
        title={
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center" gap={1}>
              <Chip label={`Day ${module.dayNumber}`} size="small" variant="outlined" />
              {getStatusIcon()}
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              <Clock size={12} />
              <Typography variant="caption">{module.estimatedTime || 50} min</Typography>
            </Box>
          </Box>
        }
        subheader={
          <>
            <Typography variant="subtitle1" fontWeight="bold">
              {module.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {module.description?.slice(0, 80)}...
            </Typography>
          </>
        }
        sx={{ pb: 1 }}
      />

      <CardContent>
        <Box mb={1}>
          <Box display="flex" justifyContent="space-between" fontSize={12}>
            <Typography variant="caption">Progress</Typography>
            <Typography variant="caption">{module.progress}%</Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={module.progress}
            sx={{
              height: 8,
              borderRadius: 5,
              mt: 0.5,
              backgroundColor: "#e5e7eb",
              "& .MuiLinearProgress-bar": {
                borderRadius: 5,
              },
            }}
          />
        </Box>

        <Button
          variant={status === "locked" ? "outlined" : "contained"}
          color={status === "locked" ? "inherit" : "primary"}
          fullWidth
          disabled={status === "locked"}
        >
          {status === "completed"
            ? "Review"
            : status === "in-progress"
            ? "Continue"
            : "Start"}
        </Button>
      </CardContent>
    </Card>
  )
}
