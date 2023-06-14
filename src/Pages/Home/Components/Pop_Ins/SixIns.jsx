import { useEffect, useState } from "react";

const SixIns = ({ instructors }) => {

    const [sorted, setSorted] = useState([]);

    useEffect(() => {
        const sortData = instructors.sort(
            (a, b) => b.students - a.students
        );
        setSorted(sortData);
    }, [instructors]);

    return (

        <div>
            <h1 className=" font-bold font-serif text-center text-4xl border-b-2 m-8">Most Popular Instructors</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    sorted.map(s => <div
                        key={s._id}
                    >
                        <div className="card w-80 h-96 bg-base-100 shadow-xl mx-auto">
                            <figure className="px-10 pt-10">
                                <img src={s.image} alt="Shoes" className="rounded-xl w-auto" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{s.name}</h2>
                                <p>{s.email}</p>
                                <p>Enrolled Students: {s.students}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SixIns;