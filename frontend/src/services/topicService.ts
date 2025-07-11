import api from "../api/axios"

export const getTopics = () => api.get("/topics")
export const getTopicById = (id: number) => api.get(`/topics/${id}`)
export const createTopic = (data: any) => api.post("/topics", data)
export const deleteTopic = (id: number) => api.delete(`/topics/${id}`)
export const getTopicsByModuleId = (moduleId: number) => api.get(`/topics/module/${moduleId}`)
