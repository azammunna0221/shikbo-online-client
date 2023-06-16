import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxSecure from "./useAxSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxSecure();
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            console.log('Instructor', res);
            return res.data.instructor;
        }
    })
    return [isInstructor , isInstructorLoading];
};

export default useInstructor;