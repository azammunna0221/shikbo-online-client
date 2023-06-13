import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { BiHide, BiShow } from 'react-icons/bi';
import { useState } from "react";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

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
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="relative form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="password"
                                    className="input input-bordered" />
                                <button onClick={handlePasswordVisibility} className="absolute top-[40%] right-3">
                                    {passwordVisible ? <BiHide/> : <BiShow/>}
                                </button>
                                <label className="label">
                                    <small>If you are not register?
                                        <Link to="/register" className="label-text-alt link link-hover text-blue-700"> Sign Up!</Link>
                                    </small>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="mx-auto mb-6">
                            <button className="btn btn-outline rounded-full text-xl"><FcGoogle /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;