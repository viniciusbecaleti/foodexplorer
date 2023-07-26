import axios, { AxiosError } from "axios"

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

api.interceptors.response.use(
  response => {
    return Promise.resolve(response)
  },
  error => {
    if (error instanceof AxiosError) {
      return Promise.reject(error.response?.data.message)
    }
  }
)
