// components/ui/Badge.tsx
import React from "react"
import MuiBadge from "@mui/material/Badge"
import { SxProps } from "@mui/system"

interface BadgeProps {
  label: string
  color?: "primary" | "secondary" | "error" | "default" | "success" | "info" | "warning"
  variant?: "standard" | "dot"
  sx?: SxProps
}

const Badge: React.FC<BadgeProps> = ({ label, color = "primary", variant = "standard", sx }) => {
  return (
    <MuiBadge
      badgeContent={label}
      color={color}
      variant={variant}
      sx={{
        "& .MuiBadge-badge": {
          fontSize: "0.75rem",
          fontWeight: 600,
          padding: "0 6px",
        },
        ...sx,
      }}
    />
  )
}

export default Badge
