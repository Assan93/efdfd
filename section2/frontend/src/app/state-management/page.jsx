'use client';
import Nabvar from '@/components/Nabvar';
import React, { useState } from 'react'

const statemanagement = () => {

  
  
   const [count, setCount] = useState (0);
    return (
    <div className='container mx-auto'>

      <Nabvar />  
  
    

        <h1 className='text-center text-5xl font-bold my-6'> Event Handling</h1>

        <button className='border p-2'
           onClick={()=>  { alert ('button was clicked')}}
        >Click Event</button>

        <input className='border p-2' type="text"
        onChange={(e) => {
            console.log(e.target.value);
        }}  />  

        <button className='border p-2 block mt-5'

        onClick={()=> {
          setCount(count+1); console.log(count);
        }}
        
        >Counter</button>

         
        <h2 className='text-3xl mt-4'>{count}</h2>

    </div>
  )
}

export default statemanagement;