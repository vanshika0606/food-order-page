import React, { useState } from 'react'
import './order.css'

const Order = () => {

    const [quantity, setQuantity] =useState(1)

    const inc=()=>{
        let i= quantity;
        i=i+1;
        setQuantity(i);
    }

    const dec=()=>{
        let i= quantity;
        if(i>1)
           i=i-1;
        setQuantity(i);
    }
   
  return (
    <div className='order'>
        <div className='order-edit'>My Order    <span>Edit</span></div>
        <div className='time'><i class="fa fa-clock-o" aria-hidden="true"></i> 14:30 AM</div>

        <hr  />
        <div className='food-order'>
        <img src="https://ak.picdn.net/offset/photos/5ddc02c6469b183482a27b86/medium/offset_882191.jpg" className="food-img" alt="..." />

        <div className='food-name'>Bean soup<div className='food-weight'>350g</div></div>
        <div className='quantity'>
            <span className='increase' 
            onClick={
                inc }>+</span> {quantity} <span className='decrease' 
                onClick={dec} >-</span>
        </div>
        <div className='food-price'>$4.99  <span className='cut'  onClick={ (e)=>{
          let m=  e.currentTarget.parentNode.parentElement;

          m.classList.add('none')

        }}>x</span></div>
         
        </div>



        <div className='food-order'>
        <img src="https://ak.picdn.net/offset/photos/5ddc02c6469b183482a27b86/medium/offset_882191.jpg" className="food-img" alt="..." />

        <div className='food-name'>Bean soup<div className='food-weight'>350g</div></div>
        <div className='quantity'>
            <span className='increase' 
            onClick={
                inc }>+</span> {quantity} <span className='decrease' 
                onClick={dec} >-</span>
        </div>
        <div className='food-price'>$4.99  <span className='cut'  onClick={ (e)=>{
          let m=  e.currentTarget.parentNode.parentElement;

          m.classList.add('none')

        }}>x</span></div>
         
        </div>

      

        <div className='food-order'>
        <img src="https://ak.picdn.net/offset/photos/5ddc02c6469b183482a27b86/medium/offset_882191.jpg" className="food-img" alt="..." />

        <div className='food-name'>Bean soup<div className='food-weight'>350g</div></div>
        <div className='quantity'>
            <span className='increase' 
            onClick={
                inc }>+</span> {quantity} <span className='decrease' 
                onClick={dec} >-</span>
        </div>
        <div className='food-price'>$4.99  <span className='cut'  onClick={ (e)=>{
          let m=  e.currentTarget.parentNode.parentElement;

          m.classList.add('none')

        }}>x</span></div>
         
        </div>


        <div className='drag'>
            Drag&Drop
        </div>

        <div className='checkout'>Checkout </div>

    </div>
  )
}

export default Order
