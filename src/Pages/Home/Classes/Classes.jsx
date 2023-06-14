import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Classes = () => {
    const allClasses = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleToAddClass = (c) => {
        const {_id, name, instructor, available_seats, price} = c;
        console.log(c);
        if (user && user.email) {
            const selectCourse ={courseId: _id, name, instructor,available_seats,price, email: user.email}
            fetch('http://localhost:5000/myClass', {
                method: 'POST',
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(selectCourse)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Course added Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please! Login First',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state:{from: location}})
                }
            })
        }
    }

    return (
        <div>
            <h1 className=" font-sans font-extrabold text-5xl text-center my-10">ALL CLASSES</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                {
                    allClasses.map(c => <div
                        key={c._id}
                        style={{ backgroundColor: c.available_seats === 0 ? 'red' : 'white' }}
                    >
                        <div className="card w-80 h-96 bg-base-100 shadow-xl mx-auto">
                            <figure className="px-10 pt-10">
                                <img src={c.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{c.name}</h2>
                                <p>Instructor : {c.instructor}</p>
                                <p className=" font-sans font-bold">Available Seats: {c.available_seats}</p>
                                <p>Course Fee : ${c.price}</p>
                            </div>
                            <div className="mx-auto ">
                                <button onClick={() => handleToAddClass(c)} disabled={c.available_seats === 0} className="btn btn-outline">Select</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <p>Its Classes page</p>
        </div>
    );
};

export default Classes;