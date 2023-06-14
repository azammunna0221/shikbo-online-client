
const ShowClass = ({ course }) => {
    return (
        <div>
            <h1 className=" font-bold font-serif text-center text-4xl border-b-2 m-8">Most Popular Classes</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                course.map(c => <div
                    key={c._id}
                >
                    <div className="card w-80 h-96 bg-base-100 shadow-xl mx-auto">
                        <figure className="px-10 pt-10">
                            <img src={c.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{c.name}</h2>
                            <p>{c.instructor}</p>
                        </div>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default ShowClass;