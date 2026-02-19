import React from 'react'
import hero from '../assets/hero.png'

function Herosection() 
{
  return (
   <section>
<div className=' flex flex-col gap-5   '>
<div className='lg:flex  lg:mx-20 lg:justify-between '>
       <div className='hidden md:hidden lg:block'>
         <h1 className='  md:hidden  text-5xl  mt-14 mx-4'>
        Huur luxe <br /> deelauto voor <br /><span className=' text-green-600'>€2,5 per uur</span> 
    </h1>
    
     <h1 className=' hidden md:hidden  lg:block text-5xl  mt-14 mx-4'>
        Huur luxe <br /> deelauto voor <br /><span className=' text-green-600'>€2,5 per uur</span> 
    </h1>
  <div className=' lg:flex flex-col '>
      <h1 className=' font-bold leading-14 lg:hidden hidden md:block  text-5xl md:mt-14 md:mx-8'>
        Huur luxe deelauto voor <span className=' text-green-600'> <br />€2,5 per uur</span> 
    </h1>
<p className=' hidden font-light lg:hidden md:block mx-4 lg:mx-4 md:mx-8 '> No deposit. There's a plan that works  for everyone.</p>
<p className=' hidden font-light md:hidden lg:block mx-4 lg:mx-4 mt-4 '> No deposit. There's a plan <br /> that works for everyone.</p>
  </div>
  <p className='font-light mx-4 md:hidden'> No deposit. There's a plan that works <br /> for everyone.</p>
<p className=' hidden font-light lg:hidden mx-4 md:mx-8'> No deposit. There's a plan that works  for everyone.</p>
<img className=' lg:hidden mx-auto ' src={hero} alt="" />
<img className=' lg:hidden   mx-auto ' src={hero} alt="" />
       </div>
        <h1 className='  md:hidden  text-5xl  mt-14 mx-4'>
        Huur luxe <br /> deelauto voor <br /><span className=' text-green-600'>€2,5 per uur</span> 
    </h1>
         <h1 className='hidden md:block lg:hidden  text-5xl  mt-14 mx-8'>
        Huur luxe  deelauto voor <br /><span className=' text-green-600'>€2,5 per uur</span> 
    </h1>
          <p className='font-light mx-8 hidden md:block lg:hidden mt-4'> No deposit. There's a plan that works for everyone.</p>
    
      <p className='font-light mx-4 md:hidden mt-4'> No deposit. There's a plan that works <br /> for everyone.</p>
       <img className=' lg:hidden md:mt-20  mx-auto ' src={hero} alt="" />
<img className=' md:hidden hidden mt-10 lg:block ' src={hero} alt="" />
</div>
<h1 className='text-center md:hidden text-2xl font-bold mt-20' > Een deelauto is vaak <br /> goedkoper dan een eigen <br /> auto. Bereken hier je <br /> maandelijkse kosten <br /> bij Cago.</h1>
<h1 className=' hidden md:block text-center text-4xl font-medium mt-10' > Een deelauto is vaak  goedkoper <br /> dan een eigen auto. Bereken hier je <br /> maandelijkse kosten bij Cago.</h1>
</div>


   </section>
  )
}

export default Herosection;