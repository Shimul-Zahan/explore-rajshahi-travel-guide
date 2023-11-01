import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'

const usePlaces = () => {

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["Places"],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/places', {withCredentials: true});
            return res.data;
        }
    })
  
    return { data, isLoading, refetch };
}

export default usePlaces