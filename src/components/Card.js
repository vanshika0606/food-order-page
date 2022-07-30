import React , {useEffect, useState} from 'react'
import './card.css'
const Card = (props) => {
    
 

  
  return (
    
   
    
     < div className="cardd" 
    >
     <img src="https://ak.picdn.net/offset/photos/5ddc02c6469b183482a27b86/medium/offset_882191.jpg" className="card-img" alt="..." />
      <div className="rating">
         <i class="fa fa-star"   aria-hidden="true"></i>
        {props.star}
        </div>
      <div className='name'>{props.name}  
      <span className="weight">{props.weight}</span></div>
      <div className='price'>{props.price} </div>
      <div className='like'><i class="fa fa-heart-o" aria-hidden="true"></i></div>
    </div>



   
    
  )
}

export default Card
