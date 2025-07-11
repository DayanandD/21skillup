import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import { Home, People, School, Dashboard } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const drawerWidthOpen = 240;
const drawerWidthClosed = 72;

const navItems = [
  { text: "Dashboard", icon: <Dashboard />, path: "/admin-dashboard" },
  { text: "Users", icon: <People />, path: "/user" },
  { text: "Topics", icon: <School />, path: "/topic" },
  { text: "Modules", icon: <Home />, path: "/client" },
];

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isOpen ? drawerWidthOpen : drawerWidthClosed,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: isOpen ? drawerWidthOpen : drawerWidthClosed,
          transition: "width 0.3s ease",
          overflowX: "hidden",
          boxSizing: "border-box",
          backgroundColor: "#1f2937", // Tailwind gray-800
          color: "#fff",
        },
      }}
    >
      <List>
        {navItems.map(({ text, icon, path }) => {
          const isActive = location.pathname === path;

          return (
            <Tooltip key={text} title={!isOpen ? text : ""} placement="right">
              <ListItemButton
                component={Link}
                to={path}
                selected={isActive}
                sx={{
                  justifyContent: isOpen ? "initial" : "center",
                  px: 2.5,
                  color: isActive ? "#4ade80" : "#ffffffcc", // Tailwind green-400 if active
                  "&:hover": {
                    backgroundColor: "#374151", // gray-700
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "inherit",
                    minWidth: 0,
                    mr: isOpen ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {icon}
                </ListItemIcon>
                {isOpen && <ListItemText primary={text} />}
              </ListItemButton>
            </Tooltip>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
