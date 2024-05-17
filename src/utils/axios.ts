import axios from "axios";

const token = sessionStorage?.getItem('token')

export const api = axios.create({
    baseURL: 'http://34.195.120.16/api',
    headers: {
        Authorization: `Bearer ${token || ''}`
    }
})
