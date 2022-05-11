import './Sales.css'
import {useState, useEffect} from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import * as salesService from '../../services/salesService'
import { Label } from 'semantic-ui-react'
import FilterHtml from '../Filters/FilterHtml'


const Sales = () =>  {
  const[loanSales, setLoanSales] = useState()
  const[cashSales, setCashSales] = useState()

  useEffect(() => {
    salesService.getTransactionTotal()
    .then(res => {
      setLoanSales(res[1])
      setCashSales(res[2])
    })
  },[])
  
  const filterChange = (id, group) => {
    salesService.getGroupTotal(id,group)
    .then(res => {
      setLoanSales(res[1])
      setCashSales(res[2])
    })
  }

  return (
    <div className='pieChartContainer'>
      <div className='legend'>
          <div className='legendName'>
            <Label 
              color={'yellow'}>
            </Label>
            <p>Loans</p>
          </div>
          <div className='legendName'>
            <Label 
              color={'teal'}>
            </Label>
            <p>Cash</p>
          </div>
        </div>
      <div className='pieChartContainer1'>
        <div className='pieChart'>
          <PieChart
            data={[
              { title: 'Cash', value: cashSales, color: '#F3B538' },
              { title: 'Loan', value: loanSales, color: '#3DB1AB' },
              // { title: 'Cash', value: 15, color: '#F3B538' },
              // { title: 'Loan', value: 15, color: '#3DB1AB' },
            ]}
            startAngle={270}
            animate={true}
            animationDuration={2000}

          />
        </div>
      </div>
      <FilterHtml filterChange={filterChange} />
    </div>
  )
}

export default Sales