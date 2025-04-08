
import Card from '@/components/card'
import Mybutton from '@/components/mybutton'
import Nabvar from '@/components/Nabvar'
import React from 'react'

const Home = () => {
  return (
    
    <div className='text-center bg-[url()]'>
       <Nabvar />
        <h1 className='font-bold text-3xl text-center'>My Home Page </h1>
        <p style={{ color : 'red', fontSize : 30  }}>Using Inline css in JSX</p>
        <p style={{ color : 'blue', fontSize : 25 }}>Making my first project in React </p>

        <input type="text" />
        <Mybutton/>
        <Card
        title="my card title 1"
        description="my card description 1"
        primaryText="Save"
        secondaryText="Cancle"

      
        /> 
        
        
    </div>
  )
}

export default Home