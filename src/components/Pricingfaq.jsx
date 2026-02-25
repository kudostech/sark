import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
function Pricingfaq() {
  return (
    <div>
        
        <section>
           <h1 className='text-center font-medium text-3xl mt-10'>FAQ on Pricing</h1>

         <div className=' m-10 gap-6 flex flex-col'>
              <details className='group hover:bg-white  bg-[#f1f1f1]  p-4 rounded-2xl '>
            <summary className=' font-bold list-none flex items-center justify-between ' >
             <span> Moet ik de elektrische auto verzekeren?</span>
              <FontAwesomeIcon className=' pointer-events-none transition-transform duration-300 group-open:rotate-180  'icon={faAngleDown}/>
            </summary>
       <p className=' mt-2 text-gray-600 font-light'>Alle Cars vallen onder de wettelijke aansprakelijkheid, met een eigen risico van €500. Onze maandelijkse zakelijke pakketten zijn volledig vrij van eigen risico.</p>
           </details>

            <details className='group border border-gray-400 p-4 rounded-2xl '>
            <summary className=' font-bold list-none flex items-center justify-between ' >
             <span> Krijg ik korting als ik voor meerdere dagen huur?</span>
              <FontAwesomeIcon className=' pointer-events-none transition-transform duration-300 group-open:rotate-180  'icon={faAngleDown}/>
            </summary>
       <p className=' mt-2 text-gray-600 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis labore sapiente cum nisi unde reprehenderit, adipisci voluptates quam neque, soluta distinctio pariatur amet illo voluptatum quibusdam assumenda quas minus corporis.</p>
           </details>
         </div>

        </section>
     
        
        </div>
  )
}

export default Pricingfaq;