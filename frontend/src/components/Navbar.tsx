import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#111827", // Tailwind gray-900
        color: "#fff",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleSidebar}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          LMS Dashboard
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Typography variant="body2" sx={{ fontSize: 14 }}>
          Welcome, Dayanand 👋
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
