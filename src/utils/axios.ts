import axios from "axios";

const token = sessionStorage?.getItem('token')

export const api = axios.create({
    baseURL: 'http://52.90.233.196/api',
    headers: {
        Authorization: `Bearer ${token || ''}`
    }
})
