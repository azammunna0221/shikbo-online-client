import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxSecure from "./useAxSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log('Admin', res);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;