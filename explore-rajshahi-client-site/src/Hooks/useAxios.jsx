import axios from "axios"
import { useEffect } from "react";

const instance = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: true,
})

const useAxios = () => {

    useEffect(() => {
        axios.interceptors.response.use(res => {
            return res;
        }, err => {
            console.log("error in interceptor", err.response)
        })
    }, [])

    return instance;
}

export default useAxios