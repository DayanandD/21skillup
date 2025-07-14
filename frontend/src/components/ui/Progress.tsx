// components\ui\Progress.tsx// components/ui/Progress.tsx
import React from "react"
import LinearProgress from "@mui/material/LinearProgress"
import { Box, Typography } from "@mui/material"

interface ProgressProps {
  value: number
  label?: string
}

const Progress: React.FC<ProgressProps> = ({ value, label }) => {
  return (
    <Box sx={{ width: "100%" }}>
      {label && (
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          {label}
        </Typography>
      )}
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 8,
          borderRadius: 5,
          "& .MuiLinearProgress-bar": {
            borderRadius: 5,
          },
        }}
      />
    </Box>
  )
}

export default Progress
