import css from './Sales.css'
import Filters from "../Filters/Filters";
import {useState, useEffect} from 'react'
import {PieChart} from 'react-minimal-pie-chart'
import * as salesService from '../../services/salesService'
import {Label} from 'semantic-ui-react'



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
    <div className={css.pieChartContainer}>
      <div className={css.legend}>
          <div className={css.legendName}>
            <Label 
              color={'yellow'}>
            </Label>
            <p>Loans</p>
          </div>
          <div className={css.legendName}>
            <Label 
              color={'teal'}>
            </Label>
            <p>Cash</p>
          </div>
        </div>
      <div className={css.pieChartContainer}>
        <div className={css.pieChart}>
          <PieChart
            data={[
              { title: 'Cash', value: loanSales, color: '#E38627' },
              { title: 'Loan', value: cashSales, color: '#C13C37' },
            ]}
            label={({ dataEntry }) => dataEntry.value}
            startAngle={90}
            animate={true}
            animationDuration={2000}
            labelStyle={{fontSize:'10px'}}
            paddingAngle={7}
            lineWidth={30}  
            radius={40}
            // onMouseOver={() => {console.log('hello')}}
          />
        </div>
      </div>
    <Filters />
    </div>
  )
}

export default Sales;
