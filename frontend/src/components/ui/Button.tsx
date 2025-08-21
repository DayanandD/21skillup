// components/ui/Button.tsx
import React from "react"
import MuiButton from "@mui/material/Button"
import { ButtonProps as MuiButtonProps } from "@mui/material"

const Button: React.FC<MuiButtonProps> = ({ children, ...props }) => {
  return (
    <MuiButton
      variant={props.variant || "contained"}
      color={props.color || "primary"}
      size={props.size || "medium"}
      {...props}
    >
      {children}
    </MuiButton>
  )
}

export default Button
