import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    // Optional: Save sidebar state to localStorage
  }, [isSidebarOpen]);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar with toggle button */}
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="flex flex-1">
        {/* Collapsible Sidebar */}
        <Sidebar isOpen={isSidebarOpen} />

        {/* Main content area */}
        <main
          className={`transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "ml-[240px]" : "ml-[72px]"
          } w-full p-6`}
        >
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashboardLayout;
