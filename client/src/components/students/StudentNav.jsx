import { NavLink } from "react-router-dom";
import "../../styles/pages/student/StudentNav.css";

function StudentNav() {
  return (
    <nav className="student-nav">
      <h2 className="student-nav__logo">PUPay</h2>

      <div className="student-nav__links">
        <NavLink
          to="/student/dashboard"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/student/collections"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          My Collections
        </NavLink>

        <NavLink
          to="/student/payments"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          My Payments
        </NavLink>

        <NavLink
          to="/student/announcements"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Announcements
        </NavLink>
      </div>
    </nav>
  );
}

export default StudentNav;