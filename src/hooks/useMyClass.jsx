import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';


const useMyClass = () => {

    const { user } = useContext(AuthContext);

    const { refetch, data : course = []  } = useQuery({
        queryKey: ['myClass', user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/myClass?email=${user?.email}`)
            return res.json();
        },
      })
      return [course, refetch]
};

export default useMyClass;