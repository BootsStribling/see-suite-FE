import "./Dashboard.css";
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <div className="metrics">
          <h1><Link to="/sales">Sales</Link></h1>
        </div>
        <div className="metrics">
          <h1>Loan Payments</h1>
        </div>
        <div className="metrics">
          <h1>Inventory</h1>
        </div>
        <div className="metrics">
          <h1>Commission</h1>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
