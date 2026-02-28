import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

function Pricing() {
  return (
    <div>
      <section id="pricing" className="scroll-mt-30 md:scroll-mt-20" >
        <h1 className=" text-2xl px-10 font-bold lg:hidden ">
          {" "}
          Je kunt je abonnement elke maand wijzigen of <br /> beëindigen.
        </h1>
        <h1 className=" text-2xl px-10 font-bold mx-11 hidden lg:block lg:mt-40 ">
          {" "}
          Je kunt je abonnement elke <br />maand wijzigen of beëindigen.
        </h1>
        <div  className=" bg-gray-100 lg:mx-20 h-full my-10 py-10 rounded-2xl mx-10 ">
          <p className=" lg:hidden px-5 pb-6 font-light">
            {" "}
            <span className="font-bold ">Note: </span>Subscription can be
            different for each location based on extra services in some
            location. Go to your{" "}
            <span
            
             onClick={() =>
            {
              document.getElementById('our-cars').scrollIntoView(
                {
                  behavior: "smooth"
                }
              )
            }
            }
            className="font-bold cursor-pointer underline">location page </span>to see
            specific prices.{" "}
          </p>
          <div className=" flex flex-col gap-4 lg:hidden "> {/*for mobile and Tablet */}
         <div className=" flex flex-col gap-4 md:flex-row md:mx-5 md:gap-6 ">
               <div className=" text-white pb-10 md:flex-1 px-6 mx-5 md:mx-0 bg-green-700 rounded-2xl">
              <h1 className=" text-6xl pt-20 font-bold text-white "> Intro</h1>
              <p className=" text-2xl mt-8 font-medium">
                {" "}
                Start with free plan, <br /> no monthly payment
              </p>
              <h1 className=" text-2xl font-light mt-14">
                €5 / uur <br />
                €0,24 per KM
              </h1>
            </div>

            <div className=" text-white pb-10 md:flex-1 px-6 md:mx-0 mx-5 bg-[#5d6957] rounded-2xl">
              <h1 className=" pt-7  text-green-100 "> MEDIUM</h1>
              <h1 className="text-5xl font-medium mt-4">
                €50<span className="text-3xl font-light">/ maand</span>
              </h1>
              <p className=" mt-6 text-2xl">
                {" "}
                Elke maand eerste <br /> 10 uur gratis{" "}
              </p>
              <div className=" w-80/100 mt-4 gap-1 bg-[#517d5b] border border-[#14cb14] p-1 flex items-center pl-2  rounded-2xl">
                <FontAwesomeIcon
                  className=" text-green-400  "
                  text-
                  icon={faCircleExclamation}
                />
                <p className="font-extralight text-sm">
                  {" "}
                  Bespaart €0,5 per uur
                </p>
              </div>
              <p className="text-xl mt-6">
                {" "}
                <span className=" text-gray-400 line-through">€5</span> 4,5 /
                uur na vrije uren <br /> €0,24 / KM
              </p>
            </div>
         </div>

          
            <section className=" gap-4 flex flex-col md:flex md:flex-row md:mx-5 md:gap-6">
                <div className=" text-white pb-10 md:flex-1 md:mx-0  px-6 mx-5 bg-[#5d6957] rounded-2xl">
              <h1 className=" pt-7  text-green-100 "> PLUS</h1>
              <h1 className="text-5xl font-medium mt-4">
                €100<span className="text-3xl font-light">/ maand</span>
              </h1>
              <p className=" mt-6 text-2xl">
                {" "}
Elke maand eerste <br /> 30 uur gratis
              </p>
              <div className=" w-80/100 mt-4 gap-1 bg-[#517d5b] border border-[#14cb14] p-1 flex items-center pl-2  rounded-2xl">
                <FontAwesomeIcon
                  className=" text-green-400  "
                  text-
                  icon={faCircleExclamation}
                />
                <p className="font-extralight text-sm">
                  {" "}
                  Bespaart €0,5 per uur
                </p>
              </div>
              <p className="text-xl mt-6">
                {" "}
                <span className=" text-gray-400 line-through">€5</span> €3 /
                uur na vrije uren <br /> €0,24 / KM
              </p>
            </div>
            <div className=" text-white pb-10 md:mx-0 md:flex-1 px-6 mx-5 bg-[#5d6957] rounded-2xl">
              <h1 className=" pt-7  text-green-100 "> PRO</h1>
              <h1 className="text-5xl font-medium mt-4">
                €200<span className="text-3xl font-light">/ maand</span>
              </h1>
              <p className=" mt-6 text-2xl">
                {" "}
                Elke maand eerste <br /> 10 uur gratis{" "}
              </p>
              <div className=" w-80/100 mt-4 gap-1 bg-[#517d5b] border border-[#14cb14] p-1 flex items-center pl-2  rounded-2xl">
                <FontAwesomeIcon
                  className=" text-green-400  "
                  text-
                  icon={faCircleExclamation}
                />
                <p className="font-extralight text-sm">
                  {" "}
                  Bespaart €200+ / maand
                </p>
              </div>
              <p className="text-xl mt-6">
                {" "}
                <span className=" text-gray-400 line-through">€5</span> 2,5 /
                uur na vrije uren <br /> €0,24 / KM
              </p>
            </div>
            </section>
          </div>



          <div className="hidden lg:block md:hidden mx-10"> {/* for large screen */}
   
       <p className="  px-5 pb-6 font-light">
            {" "}
            <span className="font-bold ">Note: </span>Subscription can be
            different for each location based on extra <br />services in some
            location. Go to your{" "}
            <span className="font-bold underline">location page </span>to see
            specific prices.{" "}
          </p>
               <div className=" text-white flex bg-green-600 items-center justify-between rounded-xl m-2 px-6 py-4">
            <div className=" flex gap-6 items-center justify-center">
                <h1 className=" text-3xl  text-white "> Intro</h1>
              <p className="  mt-2 font-medium">
                {" "}
                Start with free plan, no monthly payment
              </p>
            </div>
              <h1 className="  font-light ">
                €5 / uur 
                €0,24 per KM
              </h1>
            </div>
              <div className=" flex gap-4 m-2 ">
            <div className=" text-white pb-10 flex-1 px-6  bg-[#5d6957] rounded-2xl">
              <h1 className=" pt-7  text-green-100 "> BASICS</h1>
              <h1 className="text-5xl font-medium mt-4">
                €50<span className="text-3xl font-light">/ maand</span>
              </h1>
              <p className=" mt-6 text-2xl">
                {" "}
                Elke maand eerste <br /> 10 uur gratis{" "}
              </p>
              <div className=" w-80/100 mt-4 gap-1 bg-[#517d5b] border border-[#14cb14] p-1 flex items-center pl-2  rounded-2xl">
                <FontAwesomeIcon
                  className=" text-green-400  "
                  text-
                  icon={faCircleExclamation}
                />
                <p className="font-extralight text-sm">
                  {" "}
                  Bespaart €0,5 per uur
                </p>
              </div>
              <p className="text-xl mt-6">
                {" "}
                <span className=" text-gray-00 line-through">€5</span> 4,5 /
                uur na vrije uren <br /> €0,24 / KM
              </p>
            </div>
         
                <div className=" text-white pb-10 flex-1  px-6 bg-[#5d6957] rounded-2xl">
              <h1 className=" pt-7  text-green-100 "> PLUS</h1>
              <h1 className="text-5xl font-medium mt-4">
                €100<span className="text-3xl font-light">/ maand</span>
              </h1>
              <p className=" mt-6 text-2xl">
                {" "}
Elke maand eerste <br /> 30 uur gratis
              </p>
              <div className=" w-80/100 mt-4 gap-1 bg-[#517d5b] border border-[#14cb14] p-1 flex items-center pl-2  rounded-2xl">
                <FontAwesomeIcon
                  className=" text-green-400  "
                  text-
                  icon={faCircleExclamation}
                />
                <p className="font-extralight text-sm">
                  {" "}
                  Bespaart €0,5 per uur
                </p>
              </div>
              <p className="text-xl mt-6">
                {" "}
                <span className=" text-gray-400 line-through">€5</span> €3 /
                uur na vrije uren <br /> €0,24 / KM
              </p>
            </div>
            <div className=" text-white pb-10 md:mx-0 md:flex-1 px-6 mx-5 bg-[#5d6957] rounded-2xl">
              <h1 className=" pt-7  text-green-100 "> PRO</h1>
              <h1 className="text-5xl font-medium mt-4">
                €200<span className="text-3xl font-light">/ maand</span>
              </h1>
              <p className=" mt-6 text-2xl">
                {" "}
                Elke maand eerste <br /> 10 uur gratis{" "}
              </p>
              <div className=" w-80/100 mt-4 gap-1 bg-[#517d5b] border border-[#14cb14] p-1 flex items-center pl-2  rounded-2xl">
                <FontAwesomeIcon
                  className=" text-green-400  "
                  text-
                  icon={faCircleExclamation}
                />
                <p className="font-extralight text-sm">
                  {" "}
                  Bespaart €200+ / maand
                </p>
              </div>
              <p className="text-xl mt-6">
                {" "}
                <span className=" text-gray-400 line-through">€5</span> 2,5 /
                uur na vrije uren <br /> €0,24 / KM
              </p>
            </div>
            
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
