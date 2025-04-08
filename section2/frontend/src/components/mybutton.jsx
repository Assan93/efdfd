import React, { Children } from 'react'

const Mybutton = ({Children}) => {
  return (

         
    <button className=' bg-indigo-500 hover:bg-indigo-700 duration-300 rounded text-white px-2 py-2'>Click Me
    {Children} 
    
    </button>
  
    
    
  )
}

export default Mybutton