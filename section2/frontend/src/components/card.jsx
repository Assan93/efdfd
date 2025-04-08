import React from 'react'

const Card = ({title, description, primaryText, secondaryText}) => {
  return (
    <div className='p-8 shadow-lg mt-10 rounded-lg space-y-4'>
        <h3 className='text-2xl font-bold'>{title} </h3>
        <p>{description}</p>

        <div className='flex gap-3'>
            <button className='bg-indigo-500 text-white rounded p-3'>{primaryText}</button>
            <button className='border-indigo-500 text-indigo-500 rounded p-3'>{secondaryText}</button>
        </div>
    </div>
    

  )
}

export default Card
