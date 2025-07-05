import axios from "axios";

const API = "http://localhost:3310/api";

export const fetchTodos = () => axios.get(API);
export const createTodo = (title: string) => axios.post(API, { title });
export const toggleTodo = (id: number) => axios.put(`${API}/${id}/toggle`);
export const deleteTodo = (id: number) => axios.delete(`${API}/${id}`);