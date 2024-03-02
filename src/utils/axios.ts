import axios from "axios";

const token = sessionStorage?.getItem('token')

export const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        Authorization: `Bearer ${token || ''}`
    }
})
