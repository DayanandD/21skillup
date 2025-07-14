import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import { Dashboard, People, School, MenuBook } from "@mui/icons-material";
import { useLocation, Link } from "react-router-dom";

const drawerWidthOpen = 240;
const drawerWidthClosed = 72;

const navItems = [
  { text: "Dashboard", icon: <Dashboard />, path: "/" },
  { text: "Modules", icon: <MenuBook />, path: "/modules" },
  { text: "Topics", icon: <School />, path: "/topics" },
  { text: "Users", icon: <People />, path: "/users" },
];

const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isOpen ? drawerWidthOpen : drawerWidthClosed,
        [`& .MuiDrawer-paper`]: {
          width: isOpen ? drawerWidthOpen : drawerWidthClosed,
          transition: "0.3s",
          overflowX: "hidden",
          backgroundColor: "#1f2937",
          color: "#fff",
        },
      }}
    >
      <List>
        {navItems.map(({ text, icon, path }) => {
          const isActive = location.pathname === path;
          return (
            <Tooltip title={!isOpen ? text : ""} placement="right" key={text}>
              <ListItemButton
                component={Link}
                to={path}
                selected={isActive}
                sx={{
                  justifyContent: isOpen ? "initial" : "center",
                  color: isActive ? "#4ade80" : "#ffffffcc",
                  "&:hover": { backgroundColor: "#374151" },
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
