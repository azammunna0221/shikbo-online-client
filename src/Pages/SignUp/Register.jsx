import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import Swal from "sweetalert2";

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, googleUser } = useContext(AuthContext);
    const location = useLocation();
    const source = location.state?.from?.pathname || '/';


    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.url)
                    .then(() => {
                        const saveInfo = { name: data.name, email: data.email }
                        fetch("http://localhost:5000/users", {
                            method: "POST",
                            headers: {
                                "content-type": 'application/json'
                            },
                            body: JSON.stringify(saveInfo)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Registered Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    };
    //google user
    const handleGoogleUser = () => {
        googleUser()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveInfo = { name: loggedUser.displayName, email: loggedUser.email }
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": 'application/json'
                    },
                    body: JSON.stringify(saveInfo)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(source, {replace: true});
                    })
            }).catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <Helmet>
                <title>SO| Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input {...register("name", { required: true })} name="name" type="text" placeholder="Full Name" className="input input-bordered" />
                                {errors.name && <span className=" text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} name="email" type="email" placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className=" text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: true, minLength: 6,
                                    pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/
                                })}
                                    name="password" type="text" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className=" text-red-500">This field is required</span>}
                                {errors.password?.type === 'minLength' && <span className=" text-red-500">Minimum length should be 6</span>}
                                {errors.password?.type === 'pattern' && <span className=" text-red-500"> Minimum one Uppercase,  one Special character</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input {...register("confirmPassword", {
                                    required: true, minLength: 6,
                                    pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/
                                })} name="confirmPassword" type="text" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className=" text-red-500">This field is required</span>}
                                {errors.password?.type === 'minLength' && <span className=" text-red-500">Minimum length should be 6</span>}
                                {errors.password?.type === 'pattern' && <span className=" text-red-500"> Minimum one Uppercase,  one Special character</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input {...register("url")} name="url" type="text" placeholder="URL" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className="mx-auto mb-6">
                            <button onClick={handleGoogleUser} className="btn btn-outline rounded-full text-xl"><FcGoogle /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;