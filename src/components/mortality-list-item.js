import React from 'react'
import {ColumnChart } from 'react-chartkick';
window.Chart = require('chart.js');

const yTitle = "% Mortalité"
const xTitle = "Age"
const MortalityListItem = ({mortality}) => {
        if(!mortality){
                return <tr><td>No data found</td></tr>
        }
         const maleData = formatChartData(mortality.male)
         const femaleData = formatChartData(mortality.female)
         
          return (
               <tr>
                <td>{mortality.country}<br/><img className="flags" alt={mortality.country + " flag "} src={`http://www.sciencekids.co.nz/images/pictures/flags680/${mortality.country}.jpg`}/></td>   
                <td className="col-md-6"> <ColumnChart xtitle={xTitle} ytitle={yTitle} data={maleData} max={30} /></td>
                <td className="col-md-6"> <ColumnChart xtitle={xTitle}  ytitle={yTitle} data={femaleData} max={30} /></td>
               </tr>
           )
}

  function formatChartData(mortality){
        const  array = mortality.map((data)=> {
                if(data.age<=101)
               return [Number((data.age).toFixed(0)),Number((data.mortality_percent).toFixed(1))] 
               else return [0,0]
           })

        return array;
   }
   
export default MortalityListItem