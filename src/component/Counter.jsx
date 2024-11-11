import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount,reset } from '../Redux/counterSlice'



const Counter = () => {

  const handleIncrementAmount=()=>{
    if(amount){
      dispatch(incrementByAmount(+amount))
    }
    else{
      alert("Please enter a valid amount")
    }
  }

  const {count} = useSelector(state=>state.counterReducer)
  const dispatch=useDispatch()
  const [amount,setAmount]=useState(0)
  return (
    <div style={{height:'100vh'}} className='bg-dark text-center'>
        <h1 className=' text-light'>Counter App</h1>
        <div style={{marginLeft:'300px',marginRight:'300px',borderRadius:'10px'}} className='border mt-5 '>
          <h1 className='mt-5 text-light fw-bolder'>{count}</h1>
          <div  className='mt-4 '>
            <button onClick={()=>dispatch(increment())} className='btn bg-warning p-2  text-light'>INCREMENT</button>
            <button onClick={()=>dispatch(reset())}className='btn ms-5 bg-danger p-2 text-light'>RESET</button>
            <button onClick={()=>dispatch(decrement())}className='btn ms-5 bg-success p-2 text-light'>DECREMENT</button>
          </div>
          <div className='d-flex p-5 justify-content-center'>
          <input onChange={(e)=>setAmount(e.target.value)} placeholder='Enter the amount to be incremented' type="text" style={{height:'40px'}} className='ms-5 w-25 mt-5 ' />
            <button onClick={handleIncrementAmount} className='btn m-3 mt-5 p-2 bg-primary text-light'>INCREMENT BY AMOUNT</button>
          </div>
        </div>
    </div>
  )
}

export default Counter