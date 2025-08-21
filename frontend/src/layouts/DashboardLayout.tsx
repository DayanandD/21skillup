import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Box, Toolbar } from "@mui/material";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar toggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />

      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Sidebar isOpen={isSidebarOpen} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            ml: isSidebarOpen ? "0px" : "1px",
            transition: "margin 0.3s",
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default DashboardLayout;
