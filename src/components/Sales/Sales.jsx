import {useState, useEffect} from 'react'
import { PieChart } from 'react-minimal-pie-chart' 
import * as salesService from '../../services/salesService'

const Sales = () =>  {
  const[loanSales, setLoanSales] = useState()
  const[cashSales, setCashSales] = useState()
  const[filter, setFilter] = useState()

  useEffect(() => {
    salesService.getTransactionTotal()
    .then(res => {
      setLoanSales(res[1])
      setCashSales(res[2])
    })
  },[])

  useEffect(() => {
    salesService.getTransactionTotal()
    .then(res => {
      setLoanSales(res[1])
      setCashSales(res[2])
    })
  },[filter])

  return (
    <>
      <PieChart
      data={[
        { title: 'Cash', value: loanSales, color: '#E38627' },
        { title: 'Loan', value: cashSales, color: '#C13C37' },
      ]}
      />
      <div>SALES</div>
    </>
  )
}

export default Sales