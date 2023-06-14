import { Helmet } from "react-helmet";
import useMyClass from "../../hooks/useMyClass";
import { AiTwotoneDelete } from 'react-icons/ai';
import Swal from "sweetalert2";

const ManageClasses = () => {
    const [course, refetch] = useMyClass();
    const total = course.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myClass/${item._id}`,{
                    method: "DELETE",
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deleteCount>0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
                
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>SO || My-Class</title>
            </Helmet>
            <div className=" font-bold uppercase mt-10 bg-amber-200 p-4 rounded-md flex justify-evenly align-middle">
                <h1>Total Classes: {course.length}</h1>
                <h1>Total Price: <span className=" text-red-600">${total}</span></h1>
                <button className="btn btn-sm">Pay</button>
            </div>
            <div className="overflow-x-auto mb-7">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course</th>
                            <th>Instructor</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            course.map((row, index) => <tr
                                key={row._id}
                            >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.image} alt="image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{row.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{row.instructor}</td>
                                <td>${row.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(row)} className="btn"><AiTwotoneDelete /></button>
                                </td>
                            </tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;