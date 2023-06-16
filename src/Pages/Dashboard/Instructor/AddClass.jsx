import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import useAxSecure from "../../../hooks/useAxSecure";
import Swal from "sweetalert2";

const AddClass = () => {
    const [axiosSecure] = useAxSecure();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        // reset();
        axiosSecure.post('/classes', data)
        .then(data => {
            console.log('after posting', data.data);
            if(data.data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    };
    console.log(errors);


    return (
        <div>
            <Helmet>
                <title>ADD Class</title>
            </Helmet>
            <h1 className=" font-sans font-extrabold text-2xl text-center my-10">ADD A CLASS</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full grid grid-cols-1 md:grid-cols-2 bg-amber-100 p-8 rounded-md ">
                    <div className=" mr-5">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Type here" className="input input-bordered max-w-lg"  {...register("name", { required: true })} />
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="text" name="image" placeholder="Type here" className="input input-bordered max-w-lg" {...register("image", { required: true })} />
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register("price", { required: true })} />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" name="instructor" value={user?.displayName} placeholder=" Name" className="input input-bordered max-w-lg"  {...register("instructor", { required: true, maxLength: 80 })} />
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="email" name="email" value={user.email} placeholder="Type here" className="input input-bordered max-w-lg" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="number" name="seat" placeholder="Type here" className="input input-bordered max-w-lg" {...register("available_seats", { required: true })} /> <br />
                        <button className="btn btn-primary ml-5 my-5">Add Course</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddClass;