// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import menuRoutes from "../src/Routes/menuRoutes";
import DashboardLayout from "../src/layouts/DashboardLayout";
import ModuleList from "./pages/LearningModules/ModuleList";
// import { MenuProvider } from "./context/menuContext";

export default function App() {
  return (
    // <MenuProvider>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<ModuleList />} />

          {/* Protected/Dashboard Routes */}
          {Object.entries(menuRoutes).map(([path, Component]) => (
            <Route
              key={path}
              path={`/${path}`}
              element={
                <DashboardLayout>
                  <Component />
                </DashboardLayout>
              }
            />
          ))}

          {/* Fallback Route */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </Router>
    // </MenuProvider>
  );
}
