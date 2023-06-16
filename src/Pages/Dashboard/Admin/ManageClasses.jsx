import { Helmet } from "react-helmet";
import useAllClasses from "../../../hooks/useAllClasses";
import { Fade } from "react-awesome-reveal";


const ManageClasses = () => {

    const [courses] = useAllClasses()

    return (
        <div className="w-full">
            <Helmet>
                <title>Manage Classes</title>
            </Helmet>
            <h1 className="mx-auto font-bold text-lg">Total Classes : {courses.length}</h1>
            <div className="overflow-x-auto mb-7">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class image|Name</th>
                            <th>Ins. Name</th>
                            <th>Ins. Email</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((course, index) => <tr
                                key={course._id}
                            >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={course.image} alt="image" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{course.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td><div className="font-bold">{course.instructor}</div></td>
                                <td>{course.email}</td>
                                <td>{course.available_seats}</td>
                                <td>${course.price}</td>
                                <td>{course.status || 'Pending'}</td>
                                <Fade cascade>
                                    <td>
                                        <button className="btn btn-sm mb-1 ">Approved</button> <br />
                                        <button className="btn btn-sm mb-1">Deny</button> <br />
                                        <button className="btn btn-sm">Feedback</button>
                                    </td> 
                                </Fade>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;