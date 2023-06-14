import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Classes = () => {
    const allClasses = useLoaderData();
    const { user } = useContext(AuthContext);

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
                                {
                                    user? 
                                    <><button disabled={c.available_seats === 0} className="btn btn-outline">Select</button></> : 
                                    <>
                                    <Link to="/login"><button className="btn btn-disabled">Select</button></Link>
                                    </>
                                }
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