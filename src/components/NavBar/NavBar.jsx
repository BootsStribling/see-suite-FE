import { Link, Routes, Route, useLocation } from "react-router-dom";
import "./NavBar.css";
import Sales from "../Sales/Sales";
import Dashboard from "../Dashboard/Dashboard";

const NavBar = () => {
  const location = useLocation()
  const renderNavLink = (to, label) => {
    const isActiveRoute = to === location.pathname;
    const className = isActiveRoute ? "text-link active" : "text-link";
    return (
      <li className={className}>
        <Link to={to}>{label}</Link>
      </li>
    );
  };

  return (
    <>
      <nav>
        <div>
          <li className="greeting">Hello Stakeholder!</li>
        </div>
        <ul>
          {renderNavLink("/sales", "Sales")}
          {renderNavLink("", "Loan Payments")}
          {renderNavLink("", "Inventory")}
          {renderNavLink("", "Commisions")}
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </>
  );
};

export default NavBar;
