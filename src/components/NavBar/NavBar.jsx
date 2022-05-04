import { Link, Routes, Route } from 'react-router-dom'
import "./NavBar.css"
import Sales from '../Sales/Sales'
import Dashboard from "../Dashboard/Dashboard";

const NavBar = () => {
  return (
    <>
        <nav>
          <div>
            <li className='greeting'>Hello Stakeholder!</li>
          </div>
          <ul>
            <li><Link to="/sales">Sales</Link></li>
            <li><Link to="">Loan Payments</Link></li>
            <li><Link to="">Inventory</Link></li>
            <li><Link to="">Commission</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={ <Dashboard />} />
          <Route path="/sales" element={ <Sales />} />
        </Routes>
    
    </>
  )
}

export default NavBar
