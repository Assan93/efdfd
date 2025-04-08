
import React from 'react'


const TodoApp = () => {
  return (
    <div className='h-screen bg-slate-200'>
        <h1 className='text-center font-bold text-3xl'> ToDo App </h1>
        <div className='mt-10 container shadow-lg border border-gray-300 '>
            <div className='p-5 border-b-2 border-gray-500'>
                <input type="text"
                className='px-4 py-2 rounded border-2 w-full'
                placeholder='enter your task here'
                />
            </div>
            <div className='p-5'>
                <p className='font-bold text-center my-8 text-3xl text-gray-400'>
                    No Tasks Found </p>
            </div>
            <div className='text-center'>
                <button className='rounded bg-blue-500 text-white p-2 px-2'>Search Here</button>
            </div>

            

        </div>
        
    </div>
  )
}

export default TodoApp