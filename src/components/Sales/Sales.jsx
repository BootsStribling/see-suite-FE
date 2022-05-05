import React from 'react'
import './Sales.css'
import {PieChart, FullOption} from 'react-minimal-pie-chart'
import {Label} from 'semantic-ui-react'

export default function Sales() {
  return (
    <div className="pieChartContainer">
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

      <PieChart className="pieChart"
        data= {[
          { title: 'One', value: 15, color: '#F3B538' },
          { title: 'Two', value: 15, color: '#3DB1AB' },
        ]}
        label={({ dataEntry }) => dataEntry.value}
        radius={40}
        lineWidth={30}   
        startAngle={90}
        paddingAngle={7}
        labelStyle={{fontSize:'10px'}}
        // onMouseOver={() => {console.log('hello')}}
        animate
      />
    </div>
  )
}