// src/Routes/menuRoutes.ts
import ModuleList from "../pages/LearningModules/ModuleList";
import ModuleOverview from "../pages/LearningModules/ModuleOverview"; // 👈 Add this
import TopicList from "../pages/LearnTopic/TopicList";

const menuRoutes: { [key: string]: React.FC } = {
  modules: ModuleList,
  "modules/overview/:day": ModuleOverview, // ✅ Route for viewing a module by day
  topics: TopicList,
};

export default menuRoutes;
