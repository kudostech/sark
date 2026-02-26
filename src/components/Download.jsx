import React from 'react'

function Download() {
  return (
    <div>

        <section className=' md:hidden bg-green-950 p-4 flex flex-col justify-center font-bold  gap-3 mx-10 rounded-xl '>
        <h1 className='text-white text-center'>
            Download our app to <br /> book our cars and boats
        </h1>
        <button className=' mx-auto bg-white border rounded-xl px-2 py-3 font-normal'> Downlaod de app</button>
        </section>


 <section className=' hidden  bg-green-950 p-8 md:flex  justify-between font-bold   mx-10 rounded-xl '>
        <h1 className='text-white '>
            Download our app to <br /> book our cars and boats
        </h1>
         <h1 className='text-white hidden lg:block '>
            Download our app to <br /> book our cars and boats
        </h1>
        <button className='  bg-white border rounded-xl px-2 py-3 font-normal'> Downlaod de app</button>
        </section>
        
    </div>
  )
}

export default Download