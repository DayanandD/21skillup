// src/hooks/useModuleHooks.ts

import api from "../../api/axios";

// ✅ Get all modules
export const getModules = () => api.get("/modules");

// ✅ Get module by ID
export const getModuleById = (id: number) => api.get(`/modules/${id}`);

// ✅ Get module by Day Number
export const getModuleByDay = (day: number) => api.get(`/modules/day/${day}`);

// ✅ Get module by Topic ID
export const getModuleByTopic = (topicId: number) => api.get(`/modules/topic/${topicId}`);

// ✅ Create a new module
export const createModule = (data: any) => api.post("/modules", data);

// ✅ Delete a module
export const deleteModule = (id: number) => api.delete(`/modules/${id}`);

// ✅ Update progress (time spent)
export const updateModuleProgress = (id: number, timeSpent: number) =>
  api.put(`/modules/${id}/progress`, { timeSpent });
