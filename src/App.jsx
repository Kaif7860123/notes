 import React, { useEffect, useReducer, useState } from 'react'
import Navbar from './component/Navbar'
import Form from './component/Form'
import Card from './component/Card'
 import './App.css'
 const ReducerFunc=(state,action)=>{
  switch(action.type){
    case "SAVE":
      return action.payload;
      case "EDIT":
      return action.payload;
      case "CLEAR":
        return action.payload
      default:
        return state
  }
 
 }
   const notes = [
    {
      id: 1,
      title: "Grocery List",
      description: "A list of all the groceries I need to buy for the week. Includes fruits, vegetables, and snacks.",
      feature: "To-Do",
    },
    {
      id: 2,
      title: "Meeting Notes",
      description: "Key points from the team meeting held on December 1st, including action items and deadlines.",
      feature: "Work",
    },
  ];
 function App() {
 const[latestNotes,setLatestNotes]=useState([])
 const[selectedId,setSelectedId]=useState()
 const[isEdit,setisEdit]=useState(false)

 useEffect(()=>{
  setLatestNotes(notes)
 },[])
  const[state,dispatch]=useReducer(ReducerFunc,{
    feature:"",
    title:"",
    description:""
  })
  const onGetData=(e)=>{
    let key=e.target.id;
    let value=e.target.value;
     
    const newData = { ...state, [key]: value, id: latestNotes.length + 1 };
    
    dispatch({ type: "SAVE", payload: newData });
    
  }
  const onSaveNotes=()=>{
    setLatestNotes([...latestNotes, state])
  dispatch({ type: "CLEAR", payload:  {feature:"", title:"", description:""} });
  }
  const onDelete=(id)=>{
    const filteredData=latestNotes.filter((item)=>item.id!==id)
    setLatestNotes(filteredData)
  }
  const onEdit=(item)=>{
    setisEdit(true)
    setSelectedId(item.id)
    dispatch({type:"EDIT",payload:item})
  }
  const onClose=()=>{
     setisEdit(false)
     setSelectedId("")
  dispatch({ type: "CLEAR", payload:  {feature:"", title:"", description:""} });
  }
  const onUpdate=()=>{
     let index=latestNotes.findIndex((it)=>selectedId==it.id)
     latestNotes[index]=state;
     setLatestNotes(latestNotes)
     setisEdit(false)
     setSelectedId("")
     dispatch({ type: "CLEAR", payload:  {feature:"", title:"", description:""} });

  }
   return (
     <>
       <Navbar/>
       <Form onChange={onGetData} onClick={onSaveNotes}   isEdit ={isEdit} onUpdate={onUpdate}
       featureV={state.feature} descriptionV={state.description} titleV={state.title}
       />
       <div className='cardCont1'>
       {
        latestNotes.map((item)=>(
       <Card key={item.id} feature={item.feature} title={item.title} id={item.id} isEdit ={selectedId==item.id} 
        description={item.description} onClick={()=>onDelete(item.id)} onEdit={()=>onEdit(item)}
       onclose={()=>onClose()}
       />
        
        ))
       }
       </div>
     </>
   )
 }
 
 export default App
 