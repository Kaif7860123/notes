import React from 'react'
import './index.css'
function Form({onChange,onClick,featureV,titleV,descriptionV,isEdit,onUpdate}) {
  return (
    <>
      <div className="mb-3 mt-5 m-auto" style={{width:"50%"}}>
  <label for="exampleFormControlInput1" className="form-label labels">Notes Name</label>
  <input type="email" onChange={onChange} value={featureV} className="form-control inputs" id="feature" placeholder="Name"/>
    
  <label for="exampleFormControlInput1" className="form-label labels mt-2">Title</label>
  <input type="email" onChange={onChange} value={titleV} className="form-control inputs" id="title" placeholder="Title"/>
    </div>
<div className="mb-3 m-auto" style={{width:"50%"}}>
  <label for="exampleFormControlTextarea1" className="form-label labels">Description</label>
  
  <textarea className="form-control inputs" placeholder='description' value={descriptionV} onChange={onChange} id="description" rows="3"></textarea>
<div className='d-flex justify-content-end'>
  {
       isEdit?  <button className='btn btn-success text-end mt-3' onClick={onUpdate}>Update notes</button>:
       <button className='btn btn-primary text-end mt-3' onClick={onClick}>Add notes</button>
    
  }

</div>
</div>
    </>
  )
}

export default Form
