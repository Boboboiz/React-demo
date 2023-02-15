import React from "react";
import { Link, Outlet } from "react-router-dom";

function HomeLayout() {
    return (
        <div>
      <div className="text-center bg-dark p-4">
        <Link to="/booking-ticket" className="me-2 text-light fw-semibold" style={{textDecoration:"none"}}>
        Booking-ticket-demo /
        </Link>
        <Link to="/user-form" className="me-2 text-light fw-semibold" style={{textDecoration:"none"}}>
        User-form-demo /
        </Link>
        <Link to='/beta-test' className="me-2 text-light fw-semibold" style={{textDecoration:"none"}}> Beta-test /</Link>
        <Link to='/beta-demo' className="me-2 text-light fw-semibold" style={{textDecoration: "none"}}> Beta-demo</Link>
      </div>
        <Outlet />  
      {/*Outlet vị trị component con  */}
    </div>
  );
}

export default HomeLayout;
