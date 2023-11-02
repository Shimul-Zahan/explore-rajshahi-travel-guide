import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import useAxios from './useAxios'

const useDistricts = () => {
    const instance = useAxios()
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['districts'],
        queryFn: async () => {
            const res = await instance.get('/districts')
            // const allDistricts = await fetch('http://localhost:5000/districts')
            return await res.data
        },
    })
    return { data, isLoading, refetch }
}

export default useDistricts