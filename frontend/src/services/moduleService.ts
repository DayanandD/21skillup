import api from "../api/axios"

export const getModules = () => api.get("/modules")
export const getModuleById = (id: number) => api.get(`/modules/${id}`)
export const createModule = (data: any) => api.post("/modules", data)
export const deleteModule = (id: number) => api.delete(`/modules/${id}`)
