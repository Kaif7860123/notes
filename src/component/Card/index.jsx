import React from 'react'
import './index.css'
function Card({feature,title,description,onClick,id,onEdit,isEdit,onclose}) {
  return (
    <>
      <div class="card mt-2 mb-4" style= {{width:"18rem"}}>
  <div class="card-body">
    <h5 class="card-title">{feature}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{title}</h6>
    <p class="card-text desc">{description}</p>
     <div style={{display:"flex",gap:"10px",justifyContent:"center"}}>
     <button className='btn btn-danger' onClick={onClick}>Delete</button>
     {

     
     isEdit? <button className='btn btn-success' onClick={onclose}>close</button>:  <button className='btn btn-info' onClick={onEdit}>Edit</button>
    
     }
     </div>
  </div>
</div>
    </>
  )
}

export default Card
