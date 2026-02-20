import React from "react";
import { useState } from "react";
function Calculator() {

  const [kmValue, setKmValue] = useState(500);
    const [hrValue, setHrValue] = useState(30);
return (
    <div className="md:hidden">
      <section className="  mx-8 p-4 rounded-2xl mt-10 border border-[#eeeeee]">
        <div className=" gap-8 ">
          <h1 className="text-green-600 font-light">COST CALCULATOR</h1>

         <div>
             <div>
            <div className=" flex justify-between mt-3">
            <p className=" text-[#8e8e8e] font-extralight">
              {" "}
              Hoeveel kilometers <br />
              reis je per maand?
            </p>
            <button className=" rounded-3xl py-1 px-10 bg-[#f4f4f4]">
            {kmValue}
            </button>
          </div>
          <input 
       value={kmValue}
          max= "1500"
          min="0"
          onChange={(e) => setKmValue(e.target.value)}
          className="
          rounded-md
          appearance-none
          bg-gray-200 h-0.5
          cursor-pointer
           w-full mt-6 accent-black 
           "
            style={{
          background: `linear-gradient(to right, black ${
            (kmValue / 1500) * 100
          }%, #e5e7eb ${(kmValue / 1500) * 100}%)`,
        }}
          type="range" />
          </div>
         </div>

         <div>
             <div>
            <div className=" flex justify-between mt-3">
            <p className=" text-[#8e8e8e] font-extralight">
              {" "}
              Hoeveel uur gebruik je <br /> de auto per maand?
            </p>
            <button className=" rounded-3xl py-1 px-12 bg-[#f4f4f4]">
            {hrValue}
            </button>
          </div>

          <input 
         value={hrValue}
          max= "300"
          min="0"
          onChange={(e) => setHrValue(e.target.value)}
          className="
          rounded-md
          appearance-none
          bg-gray-200 h-0.5
          cursor-pointer
           w-full mt-6 accent-black 
           "
            style={{
          background: `linear-gradient(to right, black ${
            (hrValue / 300) * 100
          }%, #e5e7eb ${(hrValue / 300) * 100}%)`,
        }}
          type="range" />
          </div>
         </div>
        </div>
      </section>
    </div>
  );
}

export default Calculator;
