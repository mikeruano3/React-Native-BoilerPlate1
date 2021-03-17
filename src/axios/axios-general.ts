import axios, { AxiosInstance } from 'axios'

const instance:AxiosInstance = axios.create({
    baseURL: 'https://react-my-burger-ed689-default-rtdb.firebaseio.com/' 
})

export default instance