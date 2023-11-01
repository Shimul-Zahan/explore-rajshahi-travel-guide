import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useThana = () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["thanas"],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/thanas', { withCredentials: true })
            return await res.data
        }
    })
    return { data, isLoading, refetch };
}

export default useThana