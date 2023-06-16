import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';
import useAxSecure from './useAxSecure';


const useMyClass = () => {

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxSecure();
    
    const { refetch, data: course = [] } = useQuery({
        queryKey: ['myClass', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/myClass?email=${user?.email}`)
            console.log(res);
            return res.data;
        },
    })
    return [course, refetch]
};

export default useMyClass;