// src/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import menuRoutes from "../Routes/menuRoutes";
import ModuleList from "../pages/LearningModules/ModuleList";
import ModuleOverview from "../pages/LearningModules/ModuleOverview";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Default route (Landing or ModuleList) */}
      <Route
        path="/"
        element={
          <DashboardLayout>
            <ModuleList />
          </DashboardLayout>
        }
      />

      {/* Route: /learning/day/:dayId → Module Overview */}
      <Route
        path="/learning/day/:dayId"
        element={
          <DashboardLayout>
            <ModuleOverview />
          </DashboardLayout>
        }
      />

      {/* Sidebar-driven dynamic routes */}
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

      {/* 404 fallback */}
      <Route
        path="*"
        element={
          <h2 style={{ textAlign: "center" }}>404 - Page Not Found</h2>
        }
      />
    </Routes>
  );
}
