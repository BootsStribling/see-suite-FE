import React from 'react'
import './Sales.css'
import {PieChart, FullOption} from 'react-minimal-pie-chart'
import {Label} from 'semantic-ui-react'

export default function Sales() {
  return (
    <div className="pieChartContainer">
      <div className='legend'>
        <Label 
          color={'yellow'}>
        </Label>
        <Label 
          color={'teal'}>
        </Label>cash
      </div>

      <PieChart className="pieChart"
      data= {[
        { title: 'One', value: 15, color: '#F3B538' },
        { title: 'Two', value: 15, color: '#3DB1AB' },
      ]}
      radius={40}
      lineWidth={30}   
      startAngle={90}
      paddingAngle={7}
      
    
    />
    </div>
  )
}