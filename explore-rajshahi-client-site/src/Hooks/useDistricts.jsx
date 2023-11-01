import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useDistricts = () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['districts'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/districts', {withCredentials: true})
            // const allDistricts = await fetch('http://localhost:5000/districts')
            return await res.data
        },
    })
    return { data, isLoading, refetch }
}

export default useDistricts