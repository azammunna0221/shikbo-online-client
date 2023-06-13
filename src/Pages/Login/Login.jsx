import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { BiHide, BiShow } from 'react-icons/bi';
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {
    const navigate = useNavigate();
    const location =useLocation();
    const source = location.state?.from?.pathname || '/';

    const { signIn, googleUser } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                Swal.fire({
                    icon: 'success',
                    title: 'Logged In Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(source);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })

    }
    const handleGoogleUser = () => {
        googleUser()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    icon: 'success',
                    title: 'Logged In Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    //handle Show Password
    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            <Helmet>
                <title>SO|Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="relative form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type={passwordVisible ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="password"
                                    className="input input-bordered" />
                                <button onClick={handlePasswordVisibility} className="absolute top-[40%] right-3">
                                    {passwordVisible ? <BiHide /> : <BiShow />}
                                </button>
                                <label className="label">
                                    <small>If you are not register?
                                        <Link to="/register" className="label-text-alt link link-hover text-blue-700"> Sign Up!</Link>
                                    </small>
                                </label>
                            </div>
                            <div>
                                <p className=" text-red-400">{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Login</button>
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

export default Login;