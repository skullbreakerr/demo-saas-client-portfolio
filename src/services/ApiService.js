import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

const ApiService = {
  get: (url, config = {}) => axios.get(`${BASE_URL}${url}`, config),
  post: (url, data, config = {}) => axios.post(`${BASE_URL}${url}`, data, config),
  put: (url, data, config = {}) => axios.put(`${BASE_URL}${url}`, data, config),
  delete: (url, config = {}) => axios.delete(`${BASE_URL}${url}`, config),
};

export default ApiService;