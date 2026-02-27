import React from "react";
import vloto from "../assets/vloto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div >
      <section className=" flex flex-col gap-10 text-gray-700 md:hidden">
        <div className="flex gap-2 mt-10 mx-10">
          <img src={vloto} alt="vloto-logo" />
          <h1 className="text-green-900"> vloto</h1>
        </div>
        <div className=" flex flex-col gap-2  mx-10 ">
          <h1>About us</h1>
          <div className="flex items-center gap-2">
            <h1> For Taxidrivers</h1>
            <div className=" text-white bg-green-600 rounded-md px-1.5">
              {" "}
              NIEUW
            </div>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
          <div className="flex items-center gap-2">
            <h1> For Businesses</h1>
            <div className=" text-white bg-green-600 rounded-md px-1.5">
              {" "}
              NIEUW
            </div>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </div>

        <div className=" flex mx-10 gap-40 ">
            <div className="   flex flex-col gap-3">
              <h4 className=" font-bold"> Explore</h4>
              <h4> Our cars</h4>
              <h4> Benefits</h4>
              <h4> Pricing</h4>
            </div>
            <div  className=" flex flex-col">
        <h4 className=" font-bold"> Extra</h4>
              <h4> Cost calculators</h4>
              <h4> Locations</h4>
              <h4> Support</h4>
              <h4> Blog</h4>
            </div>
        </div>

        <div className=" flex flex-col mx-10 gap-4 mb-10">
            <h3 className=" font-bold "> Contact</h3>
           <p> +312 94 30 00 03</p>
         <p>info@Cago.nl</p>
        </div>
      </section>
     
    <section className=" my-10 mx-10 lg:mx-40 hidden md:block text-gray-700 "> {/* for large screen */}
         <div className=" flex justify-between ">
          <div className=" flex flex-col gap-3 ">
             <div className="flex gap-3 items-center  ">
          <img className="h-6" src={vloto} alt="vloto-logo" />
          <h1 className="text-green-900 text-3xl font-bold"> vloto</h1>
        </div>
           <h1 className="cursor-pointer"> About us</h1>
            <div className="flex items-center gap-2">
            <h1> For Taxidrivers</h1>
            <div className=" text-white bg-green-600 rounded-md px-1.5">
              {" "}
              NIEUW
            </div>
            <FontAwesomeIcon className="cursor-pointer" icon={faArrowUpRightFromSquare} />
          </div>
          <div className="flex items-center gap-2">
            <h1> For Businesses</h1>
            <div className=" text-white bg-green-600 rounded-md px-1.5">
              {" "}
              NIEUW
            </div>
            <FontAwesomeIcon className="cursor-pointer" icon={faArrowUpRightFromSquare} />
          </div>
          </div>

          <div className=" flex flex-col gap-3 ">
            <h1 className="font-bold text-2xl"> Explore</h1>
           <h1 className="cursor-pointer"> Our cars</h1>
           <h1 className="cursor-pointer"> Benefits</h1>
           <h1 className="cursor-pointer"> Pricing</h1>
          </div>

           <div className=" flex flex-col gap-3 ">
            <h1 className="font-bold text-2xl"> Extras</h1>
           <h1 className="cursor-pointer"> cost calculator</h1>
           <h1> Locations</h1>
           <h1 > Support</h1>
            <h1  > Blog</h1>
          </div>

           <div className=" flex flex-col gap-3 ">
            <h1 className="font-bold text-2xl"> Contact</h1>
           <h1 className="cursor-pointer" > +312 94 30 00 03</h1>
           <h1 className="cursor-pointer"  > info@Cago.nl</h1> 
          </div>
     </div>

       <div className=" flex justify-between mt-10">
<div className=" flex gap-4 items-center">
    <div className=" flex gap-2">
       <a href="https://www.instagram"
       target="_blank"> <FontAwesomeIcon className=" cursor-pointer" icon={faInstagram} /></a>
   <a href="https://www.facebook.com"
   target="_blank"> <FontAwesomeIcon className="cursor-pointer" icon={faFacebookF} /></a>
    </div>
   <div className="flex gap-4">
     <p className=" ml-10">Algemene voorwaarden</p>
    <p> Privacybeleid</p>
   </div>
</div>

<p> &copy; {new Date().getFullYear()} Cago </p>
       </div>

    </section>
    </div>
  );
}

export default Footer;
