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
            <li><Link className='text-link' to="/sales" style={{ textDecoration: 'none' }}>Sales</Link></li>
            <li><Link className='text-link' to="" style={{ textDecoration: 'none' }}>Loan Payments</Link></li>
            <li><Link className='text-link' to="" style={{ textDecoration: 'none' }}>Inventory</Link></li>
            <li><Link className='text-link' to="" >Commission</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={ <Dashboard />} />
          <Route path="/sales" element={ <Sales />} />
        </Routes>
    
    </>
  )
}

export default NavBar
