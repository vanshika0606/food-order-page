import React ,{useState} from 'react'
import Sidebar from './Sidebar'
import './Total.css'
import Card from './Card.js'
import data from './data'
import Order from './Order.js'
const Total = () => {

  


  return (
    <div className='outer-box'>
    <div className='box'>
      <Sidebar/>
      
      <div className="grid-order">
      <div className='grid-images'>
      {
       data.map((d)=>{
         
        return <>
          <Card name={d.name} weight={d.weight} price={d.price} star={d.star} click={d.click}/>
        </>
       })
      }
      </div>
      <Order/>
      
     
    </div>
    </div>
    </div>
  )
}

export default Total
