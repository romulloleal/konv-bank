import axios from 'axios'
import { toast } from 'react-toastify'

export const api = axios.create({
  baseURL: process.env.REACT_APP_HOST,
})

api.interceptors.response.use(
  (response) => {
    if (response.data.message) toast.success(response.data.message)
    return response
  },
  (error) => {
    if (error.response.data.code === 500)
      toast.error('Houve um erro. Por favor tente mais tarde')
    else if (error.response.data.message)
      toast.error(error.response.data.message)
    return Promise.reject(error)
  }
)
