import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { AiTwotoneDelete } from 'react-icons/ai';
import Swal from "sweetalert2";


const ManageUsers = () => {
    //TanStack Query without hook
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method : 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  }) 
            }

        })
    }
    const handleInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method : 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is Instructor Now`,
                    showConfirmButton: false,
                    timer: 1500
                  }) 
            }

        })
    }

    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            console.log(result);
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`,{
                    method: "DELETE",
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount>0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                    }
                })
                
            }
        })
    }

    return (
        <div className="w-full">
            <Helmet>
                <title>SO||Manage class</title>
            </Helmet>
            <p>Total Users: {users.length}</p>
            <div className="overflow-x-auto mb-7">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User</th>
                            <th>mail</th>
                            <th>Roles</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="font-bold">{user.name}</div>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button onClick={()=>handleAdmin(user)} disabled= {user.role === 'Admin'} className="btn btn-sm mb-1 ">Make Admin</button> <br />
                                    <button onClick={()=> handleInstructor(user)} disabled= {user.role === 'Instructor'} className="btn btn-sm ">Make Instructor</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn"><AiTwotoneDelete /></button>
                                </td>
                            </tr>)

                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUsers;