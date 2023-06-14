import { useLoaderData } from "react-router-dom";

const Classes = () => {
    const allClasses = useLoaderData();
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                {
                    allClasses.map(c => <div
                        key={c._id}
                    >
                        <div className="card w-80 h-96 bg-base-100 shadow-xl mx-auto">
                            <figure className="px-10 pt-10">
                                <img src={c.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{c.name}</h2>
                                <p>Instructor : {c.instructor}</p>
                                <p>Available Seats: {c.available_seats}</p>
                                <p>Course Fee : ${c.price}</p>
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