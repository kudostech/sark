import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown,faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";


function Pricingfaq() {


    const [ readFaqs, setReadFaqs ] = useState(false);
  const faqs = [
{ 
  question: "Moet ik de elektrische auto verzekeren?",
  answer: " Alle Cars vallen onder de wettelijke aansprakelijkheid, met een eigen risico van €500. Onze maandelijkse zakelijke pakketten zijn volledig vrij van eigen risico."
 }, 

 {
   question:" Krijg ik korting als ik voor meerdere dagen huur?",
   answer: "kelijkheid, met een eigen risico van €500. Onze maandelijkse zakelijke pakketten zijn volledig vrij van eigen risico."
 }, 

 { 
  question:" Hoe en waar kan ik de auto opladen?",
  answer: "kelijkheid, met een eigen risico van €500. Onze maandelijkse zakelijke pakketten zijn volledig vrij van eigen risico."
 },  

 {
  question: " kelijkheid, met een eigen risico van €500. Onze maandelijkse zakelijke pakketten zijn volledig vrij van eigen risico.",
  answer: " ijkheid, met een eigen risico van €500. Onze maandelijk"
 },

  {
  question: " kelijkheid, met een eigen risico van €500. Onze maandelijkse zakelijke pakketten zijn volledig vrij van eigen risico.",
  answer: " ijkheid, met een eigen risico van €500. Onze maandelijk"
 }
]
  return (
    <div>
      <section>
        <h1 className="text-center font-medium text-3xl mt-10 lg:mt-40">
          FAQ on Pricing
        </h1>
        <div className=" m-10 gap-6 flex flex-col lg:mx-40">
          {faqs
          .slice(
            0, readFaqs ? faqs.length : 3)
            .map((faq, index) => (

           <details

           key={index}
           
           className="group hover:bg-white hover:border  hover:border-gray-400  bg-[#f1f1f1]  p-4 rounded-2xl ">
            <summary className=" font-bold list-none flex items-center justify-between ">
              <span> {faq.question} </span>
              <FontAwesomeIcon
                className=" pointer-events-none transition-transform duration-300 group-open:rotate-180   "
                icon={faAngleDown}
              />
            </summary>
            <p className=" mt-2 text-gray-600 font-light">
              {faq.answer}
            </p>
          </details>
           
           
           ))}
          
          <button 
        onClick={() => setReadFaqs(!readFaqs)}
          className=" hover:bg-gray-100 cursor-pointer border-2 border-gray-700 flex items-center justify-center gap-2 p-4 mx-20 rounded-2xl  ">
            {readFaqs? "Read Less" : "Read More Faqs"}
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Pricingfaq;
