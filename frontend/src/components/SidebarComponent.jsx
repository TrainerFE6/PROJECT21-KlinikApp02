import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUser } from "../configs/userSlice";

const SidebarComponent = () => {
    const user = useSelector(selectUser);
    return (
        <div className="bg-primary col-auto col-md-3 min-vh-100 d-flex justify-content-between flex-column py-4">
        <div className="side-side">
            <NavLink to="#" className="text-decoration-none text-white d-none d-sm-inline d-flex align-items-center justify-content-center align-items-center ms-3 mt-3">
                <i className=" fs-4 fa fa-hospital"></i>
                <span className="ms-3 fs-4 d-none d-sm-inline">GHEALTH</span>
            </NavLink>
            <hr className="text-white d-none d-sm-block" />
            <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
                <li className="nav-item text-white my-1 py-2 py-sm-0">
                    <NavLink to="/dashboard-admin" className="nav-link text-white" aria-current="page">
                        <i className="fa fa-house-medical"></i>
                        <span className="ms-3 d-none d-sm-inline">Dashboard</span>
                    </NavLink>
                </li>
                <li className="nav-item text-white my-1 py-2 py-sm-0">
                    <NavLink to="/doctor-admin" className="nav-link text-white" aria-current="page">
                        <i className="fa fa-user-doctor"></i>
                        <span className="ms-3 d-none d-sm-inline">Doctor</span>
                    </NavLink>
                </li>
                <li className="nav-item text-white my-1 py-2 py-sm-0">
                    <NavLink to="/schedule-admin" className="nav-link text-white" aria-current="page">
                        <i className="fa fa-calendar-days"></i>
                        <span className="ms-3 d-none d-sm-inline">Doctor's Schedule</span>
                    </NavLink>
                </li>
                <li className="nav-item text-white my-1 py-2 py-sm-0">
                    <NavLink to="/appointment-admin" className="nav-link text-white" aria-current="page">
                        <i className="fa fa-list"></i>
                        <span className="ms-3 d-none d-sm-inline">Appointment</span>
                    </NavLink>
                </li>
                <li className="nav-item text-white my-1 py-2 py-sm-0">
                    <NavLink to="/patient-admin" className="nav-link text-white" aria-current="page">
                        <i className="fa fa-hospital-user"></i>
                        <span className="ms-3 d-none d-sm-inline">Patient</span>
                    </NavLink>
                </li>
                <li className="nav-item text-white my-1 py-2 py-sm-0">
                    <NavLink to="/user-admin" className="nav-link text-white" aria-current="page">
                        <i className="fa fa-users"></i>
                        <span className="ms-3 d-none d-sm-inline">User</span>
                    </NavLink>
                </li>
            </ul>
        </div>

        <div className="dropdown">
            <a className="text-decoration-none text-white dropdown-toggle p-3" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-circle-user"></i>
                <span className="ms-3 d-none d-sm-inline nameadm">{user.username}</span>
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="/logout"><span className="d-sm-inline"></span> <span className="d-none d-sm-block text-primary">LOGOUT</span></a></li>
            </ul>
        </div>
    </div>
    );
};
export default SidebarComponent;        
