import React from 'react'

function Download() {
  return (
    <div>

        <section className=' md:hidden bg-green-950 p-4 flex flex-col justify-center font-bold  gap-3 mx-10 rounded-xl '>
        <h1 className='text-white text-center'>
            Download our app to <br /> book our cars and boats
        </h1>
<a href="https://play.google.com/store/apps?hl=en_GB" className='mx-auto'
target='_blank'><button
         className=' cursor-pointer  bg-white border rounded-xl px-2 py-3 font-normal'> Downlaod de app</button></a>
        </section>


 <section className=' hidden  bg-green-950 p-8 md:flex justify-between font-bold   mx-10 rounded-xl lg:mx-40'> {/* large screen */}
        <h1 className='text-white lg:hidden '>
            Download our app to <br /> book our cars and boats
        </h1>
         <h1 className='text-white hidden lg:block  '>
            Download our app to <br /> book our cars and boats
        </h1>
<a href="https://play.google.com/store/apps?hl=en_GB 
" target='_blank'><button className=' cursor-pointer  bg-white border rounded-xl px-2 py-3 font-normal'> Downlaod de app</button></a>
        </section>
        
    </div>
  )
}

export default Download