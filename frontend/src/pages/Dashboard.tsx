// src/pages/Home.tsx
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store"
import { setUser } from "../features/user/userSlice"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

const Dashboard = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)

  const handleClick = () => {
    dispatch(setUser({ name: "Dayanand", email: "daya@example.com" }))
  }

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4">Hello, {user.name || "Guest"}</Typography>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Set User
      </Button>
    </div>
  )
}

export default Dashboard
