import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import pricetag from "../assets/pricetag.png";

function Calculator() {
  const [kmValue, setKmValue] = useState(500);
  const [hrValue, setHrValue] = useState(30);

  return (
    <div>
      <div id="our-cars" className=" scroll-mt-28 md:scroll-mt-62 md:block lg:hidden"> {/* mobile and tablet */}
        <h1 className='text-center md:hidden text-2xl font-bold mt-20' > Een deelauto is vaak <br /> goedkoper dan een eigen <br /> auto. Bereken hier je <br /> maandelijkse kosten <br /> bij Cago.</h1>
        <section className="  mx-10 md:bg-green-50 rounded-2xl mt-10 border border-[#eeeeee]">
          
          <div id="calculator" className=" scroll-mt-32 gap-8 p-4 bg-white ">
            <h1 className="text-green-600 font-light">COST CALCULATOR</h1>

            <div>
              <div>
                <div className=" flex justify-between mt-3">
                  <p className=" text-[#8e8e8e] font-extralight">
                    {" "}
                    Hoeveel kilometers <br />
                    reis je per maand?
                  </p>
                  <button className=" md:mr-40 rounded-3xl  py-1 px-10 bg-[#f4f4f4]">
                    {kmValue}
                  </button>
                </div>
                <input
                  value={kmValue}
                  max="1500"
                  min="0"
                  onChange={(e) => setKmValue(e.target.value)}
                  className="
          rounded-md
          appearance-none
          bg-gray-200 h-0.5
          cursor-pointer
           w-full mt-6 accent-black 
           md:w-75/100
           "
                  style={{
                    background: `linear-gradient(to right, black ${
                      (kmValue / 1500) * 100
                    }%, #e5e7eb ${(kmValue / 1500) * 100}%)`,
                  }}
                  type="range"
                />
              </div>
            </div>

            <div>
              <div>
                <div className=" flex justify-between mt-3 md:mt-8">
                  <p className=" text-[#8e8e8e] font-extralight">
                    {" "}
                    Hoeveel uur gebruik je <br /> de auto per maand?
                  </p>
                  <button className=" md:mr-40 rounded-3xl py-1 px-12 bg-[#f4f4f4]">
                    {hrValue}
                  </button>
                </div>

                <input
                  value={hrValue}
                  max="300"
                  min="0"
                  onChange={(e) => setHrValue(e.target.value)}
                  className="
          rounded-md
          appearance-none
          bg-gray-200 h-0.5
          cursor-pointer
          w-full
           md:w-75/100 mt-6 accent-black 
           "
                  style={{
                    background: `linear-gradient(to right, black ${
                      (hrValue / 300) * 100
                    }%, #e5e7eb ${(hrValue / 300) * 100}%)`,
                  }}
                  type="range"
                />
              </div>
            </div>
          </div>
          <hr className=" w-full md:mt-0 mt-3 text-[#e9e9e9] " />

          <div className="p-4 md:px-6 md:pb-0 md:flex md:gap-20 md:bg-green-50   ">
            <div className=" ">
              <h6 className="text-green-500 font-medium ">CAGO COSTS:</h6>
              <h1 className="text-4xl font-bold mt-4 text-[#494949] "> €220</h1>
              <p className="text-xs mt-2">
                {" "}
                It is recommended to use Cago <br /> PLUS subscription to save
                more.{" "}
              </p>
            </div>
            <div className="hidden md:block w-px h-30 mt-2 bg-[#787878] "> </div>
            <hr className=" md:hidden  my-4 text-[#e9e9e9] " />
            <div className=" ">
              <h6 className=" text-sm ">PERSONAL CAR COSTS:</h6>
              <div className=" flex items-center mt-4 gap-1">
                <h1 className="text-4xl font-bold  text-[#494949] "> €400</h1>
                <FontAwesomeIcon
                  className="mt-2 text-xl"
                  icon={faCircleExclamation}
                />
              </div>
              <p className="text-xs mt-2">
                {" "}
                Berekend op basis van bezit en <br /> gebruik van een VW Polo
                uit uit 2020
              </p>
            </div>
          </div>
          <div className=" bg-green-50 md:bg-green-100 md:w-85/100 md:flex md:items-center md:gap-40 md:m-6 mb-6 mx-4 rounded-md py-3 px-4">
            <p className=" text-sm ">
              Driving Cago{" "}
              <span
                className=" underline decoration-gray-500
"
              >
                luxurious car,
              </span>{" "}
              <br /> you will{" "}
              <span className=" text-green-600"> save per month:</span>
            </p>
            <div className=" mt-2 flex gap-2  items-center ">
              <h1 className=" text-4xl font-bold text-green-600"> €180</h1>{" "}
              <img className=" h-10" src={pricetag} alt="pricetag" />
            </div>
          </div>
        </section>
        <div id="benefit" className=" md:scroll-mt-20 scroll-mt-30 bg-gray-50 pb-6  my-4 mx-10 rounded-md">
          <h1 className=" md:hidden font-bold p-4">
            {" "}
            We take care of everything, you don’t <br />
            have to worry about:
          </h1>
          <h1 className="  hidden md:block font-bold p-4">
            {" "}
            We take care of everything, you don’t 
            have to worry about:
          </h1>



          <section className=" md:hidden lg:hidden gap-3 flex flex-col"> {/* for mobile screen*/}
            <div className=" gap-1 ml-4 mr-34 border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
              <FontAwesomeIcon
                className=" text-green-600"
                icon={faCircleCheck}
              />
              <p className=" font-extralight text-sm">
                {" "}
                Charging or refuelling
              </p>
            </div>
            <div className=" gap-1 ml-4 mr-56 border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
              <FontAwesomeIcon
                className=" text-green-600"
                icon={faCircleCheck}
              />
              <p className="font-extralight text-sm"> Insurance</p>
            </div>
            <div className=" gap-1 ml-4 mr-48 border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
              <FontAwesomeIcon
                className=" text-green-600"
                icon={faCircleCheck}
              />
              <p className="font-extralight text-sm"> APK Inspection</p>
            </div>
            <div className=" flex mx-4 gap-3">
              <div className=" gap-1 border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
                <FontAwesomeIcon
                  className=" text-green-600"
                  icon={faCircleCheck}
                />
                <p className="font-extralight text-sm"> Maintenance</p>
              </div>
              <div className=" gap-1  border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
                <FontAwesomeIcon
                  className=" text-green-600"
                  icon={faCircleCheck}
                />
                <p className="font-extralight text-sm"> Road tax</p>
              </div>
            </div>
            <div className=" gap-1 ml-4 mr-36 border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
              <FontAwesomeIcon
                className=" text-green-600"
                icon={faCircleCheck}
              />
              <p className="font-extralight text-sm"> Increasing parking fee</p>
            </div>
            <div className=" gap-1 ml-4 mr-40 border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
              <FontAwesomeIcon
                className=" text-green-600"
                icon={faCircleCheck}
              />
              <p className="font-extralight text-sm"> Roadside assistance</p>
            </div>

            <div className=" gap-1 ml-4 mr-46 border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
              <FontAwesomeIcon
                className=" text-green-600"
                icon={faCircleCheck}
              />
              <p className="font-extralight text-sm"> Car depreciation</p>
            </div>
          </section>

          <section className=" hidden lg:hidden md:block gap-3 ">
            <div className=" flex">
              <div className=" gap-1 ml-4 border border-[#e9e9e9] p-2 flex items-center bg-gray-100  pl-2  rounded-2xl">
              <FontAwesomeIcon
                className=" text-green-600"
                icon={faCircleCheck}
              />
              <p className=" font-extralight text-sm">
                {" "}
                Charging or refuelling
              </p>
            </div>
            <div className=" gap-1 ml-4 mr-56 border border-[#e9e9e9] p-2 flex items-center bg-gray-100  pl-2  rounded-2xl">
              <FontAwesomeIcon
                className=" text-green-600"
                icon={faCircleCheck}
              />
              <p className="font-extralight text-sm"> Insurance</p>
            </div>
            </div>
           <div className="flex mt-4">
             <div className=" gap-1 ml-4  border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
              <FontAwesomeIcon
                className=" text-green-600"
                icon={faCircleCheck}
              />
              <p className="font-extralight text-sm"> APK Inspection</p>
            </div>
            <div className=" flex mx-4 gap-3">
              <div className=" gap-1 border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
                <FontAwesomeIcon
                  className=" text-green-600"
                  icon={faCircleCheck}
                />
                <p className="font-extralight text-sm"> Maintenance</p>
              </div>
              <div className=" gap-1  border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
                <FontAwesomeIcon
                  className=" text-green-600"
                  icon={faCircleCheck}
                />
                <p className="font-extralight text-sm"> Road tax</p>
              </div>
            </div>
           </div>
           <div className="flex mt-4">
             <div className=" gap-1 ml-4 border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
              <FontAwesomeIcon
                className=" text-green-600"
                icon={faCircleCheck}
              />
              <p className="font-extralight text-sm"> Increasing parking fee</p>
            </div>
            <div className=" gap-1 ml-4 mr-40 border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
              <FontAwesomeIcon
                className=" text-green-600"
                icon={faCircleCheck}
              />
              <p className="font-extralight text-sm"> Roadside assistance</p>
            </div>

           </div>
            <div className=" gap-1 ml-4 mt-4 w-25/100 border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
              <FontAwesomeIcon
                className=" text-green-600"
                icon={faCircleCheck}
              />
              <p className="font-extralight text-sm"> Car depreciation</p>
            </div>
          </section>
        </div>
      </div>

      <div className=" hidden lg:block mx-20  "> {/* desktop */}
        <section className=" lg:flex lg:justify-between flex mx-10 rounded-2xl mt-10 border border-[#eeeeee]">
          <div className="  p-6 ">
            <h1 className="text-green-600 font-light">COST CALCULATOR</h1>

            <div>
              <div>
                <div className=" flex  gap-30 justify-between mt-3 ">
                  <p className=" text-[#8e8e8e] font-extralight">
                    {" "}
                    Hoeveel kilometers <br />
                    reis je per maand?
                  </p>
                  <button className=" lg:ml-4 rounded-3xl py-0 px-10 bg-[#f4f4f4]">
                    {kmValue}
                  </button>
                </div>
                <input
                  value={kmValue}
                  max="1500"
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
                  type="range"
                />
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
                  max="300"
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
                  type="range"
                />
              </div>
            </div>
          </div>
          
            <div className="bg-gray-100 w-px ml-22 "></div>
          <div className=" items-center bg-green-50 w-50/100  ">
            <div className="flex p-4 mt-4 justify-center  ">
            <div className="">
              <h6 className="text-green-500 font-medium ">CAGO COSTS:</h6>
              <h1 className="text-4xl font-bold mt-4 text-[#494949] "> €220</h1>
              <p className="text-xs mt-2">
                {" "}
                It is recommended to use Cago <br /> PLUS subscription to save
                more.{" "}
              </p>
            </div>
               <div className="bg-gray-300 w-px mx-6"></div>
            <div className=" flex-1  ">
              <h6 className=" text-sm ">PERSONAL CAR COSTS:</h6>
              <div className=" flex items-center mt-4 gap-1">
                <h1 className="text-4xl font-bold  text-[#494949] "> €400</h1>
                <FontAwesomeIcon
                  className="mt-2 text-xl"
                  icon={faCircleExclamation}
                />
              </div>
              <p className="text-xs mt-2">
                {" "}
                Berekend op basis van bezit en <br /> gebruik van een VW Polo
                uit uit 2020
              </p>
            </div>
          </div>
          <div className=" bg-green-100 w-90/100 mt-4 gap-20 flex items-center mb-6 mx-4 rounded-md py-1 px-4">
            <p className=" text-sm ">
              Driving Cago{" "}
              <span
                className=" underline decoration-gray-500
"
              >
                luxurious car,
              </span>{" "} <br />
              you will{" "}
              <span className=" text-green-600"> save per month:</span>
            </p>
            <div className="  flex gap-2   items-center ">
              <h1 className=" text-4xl font-bold text-green-600"> €180</h1>{" "}
              <img className=" h-10" src={pricetag} alt="pricetag" />
            </div>
          </div>
          </div>
          
        </section>
        
        <div className=" bg-gray-50 pb-4 mb my-4 mx-10 rounded-md">
          <h1 className=" font-bold p-4">
            {" "}
            We take care of everything, you don’t <br />
            have to worry about:
          </h1>

          <section className=" gap-3 flex flex-col ">
            <div className=" flex ">
              <div className=" gap-1 ml-4  border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
              <FontAwesomeIcon
                className=" text-green-600"
                icon={faCircleCheck}
              />
              <p className=" font-extralight text-sm">
                {" "}
                Charging or refuelling
              </p>
            </div>
            <div className=" gap-1 ml-4  border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
              <FontAwesomeIcon
                className=" text-green-600"
                icon={faCircleCheck}
              />
              <p className="font-extralight text-sm"> Insurance</p>
            </div>
            <div className=" gap-1 ml-4 mr-4 border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
              <FontAwesomeIcon
                className=" text-green-600"
                icon={faCircleCheck}
              />
              <p className="font-extralight text-sm"> APK Inspection</p>
            </div>
            
              <div className=" gap-1 border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
                <FontAwesomeIcon
                  className=" text-green-600"
                  icon={faCircleCheck}
                />
                <p className="font-extralight text-sm"> Maintenance</p>
              </div>
            </div>
              <div className=" flex mx-4">
                <div className=" gap-1  border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
                <FontAwesomeIcon
                  className=" text-green-600"
                  icon={faCircleCheck}
                />
                <p className="font-extralight text-sm"> Road tax</p>
              </div>
          
            <div className=" gap-1 ml-4 border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
              <FontAwesomeIcon
                className=" text-green-600"
                icon={faCircleCheck}
              />
              <p className="font-extralight text-sm"> Increasing parking fee</p>
            </div>
            <div className=" gap-1 ml-4  border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
              <FontAwesomeIcon
                className=" text-green-600"
                icon={faCircleCheck}
              />
              <p className="font-extralight text-sm"> Roadside assistance</p>
            </div>

            <div className=" gap-1 ml-4 border border-[#e9e9e9] p-1 flex items-center bg-gray-100  pl-2  rounded-2xl">
              <FontAwesomeIcon
                className=" text-green-600"
                icon={faCircleCheck}
              />
              <p className="font-extralight text-sm"> Car depreciation</p>
            </div>
              </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
