import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const MyClasses = () => {

    const allClasses = useLoaderData();
    const { user } = useContext(AuthContext);

    //const searchEmail = 'jane@example.com';
    const filteredClasses = allClasses.filter((course) => course.email === user.email);

    if (filteredClasses.length > 0) {
        return (
            <div>
                <h1>Total Courses : {filteredClasses.length}</h1>

                {/* {filteredClasses.map((course, index) => (
                    <div key={course.id}>
                        <p>Name: {course.name}</p>
                        <p>Email: {course.email}</p>
                        <p>Age: {course.age}</p>
                    </div>
                ))} */}

                <div className="overflow-x-auto mb-7">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Your Courses</th>
                                <th>Ins. Name</th>
                                <th>Enrolled stud</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredClasses.map((course, index) => <tr
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
                                    <td>{course.enrolled || '0'}</td>
                                    <td>${course.price}</td>
                                    <td>{course.status || 'Pending'}</td>
                                    <td>
                                        <button className="btn btn-sm">Feedback</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    } else {
        return <p>Data not found for email: {user.email}</p>;
    }
};

export default MyClasses;