import React from 'react'

function Navbar() {
 
  return (
    <>
     <div className='w-full bg-red-600 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold ml-4'>Identifica ai</div>
            <div className='flex gap-4 mr-4'>
              <div className='hover:underline'>Home</div>
              <div className='hover:underline'>Contato</div>
              <div className='hover:underline'>Sobre nós </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
