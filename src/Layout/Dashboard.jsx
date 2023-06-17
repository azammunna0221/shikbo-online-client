import { Link, Outlet } from "react-router-dom";
import { MdOutlineClass, MdPayment, MdHome } from 'react-icons/md';
import { TbBooks } from 'react-icons/tb';
import Theme from "../Components/Theme";
import useMyClass from "../hooks/useMyClass";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    const [course] = useMyClass();

    //TODO Admin Swap
    const [isAdmin] = useAdmin();
    //const isAdmin = false;
    const [isInstructor] = useInstructor();
   // const isInstructor = true;


    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-amber-200 text-base-content">
                        {
                            isAdmin ? <>
                                <li><Theme></Theme></li>
                                <li className="font-bold m-4">Admin Panel</li>
                                <li><Link><MdHome />Admin Home</Link></li>
                                <li><Link to="/dashboard/manageUsers"><MdPayment />Manage Users</Link></li>
                                <li><Link to="/dashboard/manageClasses"><TbBooks />Manage classes</Link></li>
                            </> : isInstructor ? <>
                                <li><Theme></Theme></li>
                                <li className="font-bold m-4">Instructor Panel</li>
                                <li><Link><MdHome />Instructor Home</Link></li>
                                <li><Link to='/dashboard/addClass'><MdPayment />Add a class</Link></li>
                                <li><Link to='/dashboard/myClasses' ><TbBooks />My classes</Link></li>
                            </> : <>
                                <li><Theme></Theme></li>
                                <li className="font-bold m-4">Student Panel</li>
                                <li><Link><MdHome />Student Home</Link></li>
                                <li><Link><MdPayment />Payment History</Link></li>
                                <li>
                                    <Link to='/dashboard/selectClasses'><MdOutlineClass />My Classes<span className="badge badge-secondary">{course?.length || 0}</span></Link></li>
                                <li><Link><TbBooks />My Enrolled Classes</Link></li>
                            </>
                        }
                        <div className="divider"></div>
                        <li><Link to="/"><MdHome /> Home</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;