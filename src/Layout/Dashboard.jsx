import { Link, Outlet } from "react-router-dom";
import { MdOutlineClass,MdPayment,MdHome } from 'react-icons/md';
import { TbBooks } from 'react-icons/tb';
import Theme from "../Components/Theme";

const Dashboard = () => {
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
                        {/* Sidebar content here */}
                        <li><Theme></Theme></li>
                        <li><Link><MdHome/>User Home</Link></li>
                        <li><Link><MdPayment/>Payment History</Link></li>
                        <li><Link to='/dashboard/manageClasses'><MdOutlineClass />My Classes</Link></li>
                        <li><Link><TbBooks/>My Enrolled Classes</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;