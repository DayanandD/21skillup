import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => (
  <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: "#111827" }}>
    <Toolbar>
      <IconButton edge="start" color="inherit" onClick={toggleSidebar} sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        LMS Dashboard
      </Typography>
      <Typography variant="body2">Welcome, Dayanand 👋</Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
