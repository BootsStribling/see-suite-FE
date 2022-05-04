import "./Dashboard.css";
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <div className="metrics">
          <h1><Link className='text-link' to="/sales">Sales</Link></h1>
        </div>
        <div className="metrics">
          <h1><Link className='text-link' to="">Loan Payments</Link></h1>
        </div>
        <div className="metrics">
        <h1><Link className='text-link' to="">Inventory</Link></h1>
        </div>
        <div className="metrics">
        <h1><Link className='text-link' to="">Commissions</Link></h1>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
