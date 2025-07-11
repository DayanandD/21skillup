import api from "../../api/axios"; // Update with correct path

export const getTopics = () => api.get("/topics");
export const getTopicById = (id: number) => api.get(`/topics/${id}`);
export const getTopicsByModuleId = (moduleId: number) => api.get(`/topics/module/${moduleId}`);
