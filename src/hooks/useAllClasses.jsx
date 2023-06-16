import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
    const {data: courses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['courses'],
        queryFn: async() => {
            const res = await fetch('https://summer-camp-school-server-xi-rose.vercel.app/classes');
            return res.json();
        }
    })
    return [courses, loading, refetch]
};

export default useAllClasses;