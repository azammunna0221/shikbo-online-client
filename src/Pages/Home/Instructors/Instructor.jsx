import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const Instructor = () => {
    const allInstructors = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>SC || Instructors</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            {
                allInstructors.map(i => <div
                key={i._id}
                >
                    <div className="card w-80 h-96 bg-base-100 shadow-xl mx-auto">
                            <figure className="px-10 pt-10">
                                <img src={i.image} alt="Shoes" className="rounded-xl w-auto" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{i.name}</h2>
                                <p>{i.email}</p>
                                <p>Enrolled Students: {i.students}</p>
                            </div>
                        </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Instructor;