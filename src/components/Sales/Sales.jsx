import css from './Sales.css'
import Filters from "../Filters/Filters";
import FilterHtml from '../Filters/FilterHtml';
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

    const filterChange = (id, group) => setFilter(id)

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
              // { title: 'Cash', value: loanSales, color: '#F3B538' },
              // { title: 'Loan', value: cashSales, color: '##3DB1AB' },
              { title: 'Cash', value: 15, color: '#F3B538' },
              { title: 'Loan', value: 15, color: '#3DB1AB' },
            ]}
            label={({ dataEntry }) => dataEntry.value}
            startAngle={90}
            animate={true}
            animationDuration={2000}
            labelStyle={{fontSize:'10px'}}
            paddingAngle={7}
            lineWidth={30}  
            radius={30}
            // onMouseOver={() => {console.log('hello')}}
          />
        </div>
      </div>
    {/* <Filters filterChange={filterChange}  /> */}
    <FilterHtml filterChange={filterChange}/>
    </div>
  )
}

export default Sales;
