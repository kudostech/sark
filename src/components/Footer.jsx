import React from "react";
import vloto from "../assets/vloto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div id="footer">
      <section className=" flex flex-col gap-10 text-gray-700 md:hidden"> {/*for mobile */}
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
              <h4
               onClick={()=> {
          document.getElementById('our-cars').scrollIntoView({
            behavior: "smooth"
          })
         
        }}> Our cars</h4>
              <h4
              className="cursor-pointer"
               onClick={()=> {
          document.getElementById('benefit').scrollIntoView({
            behavior: "smooth"
          })
         
        }}> Benefits</h4>
              <h4
              className="cursor-pointer"
               onClick={()=> {
          document.getElementById('pricing').scrollIntoView({
            behavior: "smooth"
          })
         
        }}> Pricing</h4>
            </div>
            <div  className=" flex flex-col">
        <h4 className=" font-bold"> Extra</h4>
              <h4
              className="cursor-pointer"
               onClick={()=> {
          document.getElementById('our-cars').scrollIntoView({
            behavior: "smooth"
          })
         
        }}> Cost calculators</h4>
              <h4
              
                 className="cursor-pointer"
               onClick={()=> {
          document.getElementById('our-cars').scrollIntoView({
            behavior: "smooth"
          })
         
        }}> Locations</h4>
              <h4
                 className="cursor-pointer"
               onClick={()=> {
          document.getElementById('footer').scrollIntoView({
            behavior: "smooth"
          })
         
        }}> Support</h4>
              <h4> Blog</h4>
            </div>
        </div>

        <div className=" flex flex-col mx-10 gap-4 mb-10">
            <h3 className=" font-bold "> Contact</h3>
          <a href="tel:+12345678"><p> +312 94 30 00 03</p></a>
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=abolajiayobami2000@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  info@Cago.nl
</a>

        </div>
      </section>
     
    <section id="support" className=" lg:hidden my-10 mx-10 lg:mx-40 hidden md:block text-gray-700 "> {/* for large screen */}
         <div className=" flex justify-between ">
          <div className=" flex flex-col gap-3 ">
             <div className="flex gap-3 items-center  ">
          <img className="h-6" src={vloto} alt="vloto-logo" />
          <h1 className="text-green-900 text-3xl font-bold"> vloto</h1>
        </div>
           <h1
          
            onClick={()=> {
          document.getElementById('nav').scrollIntoView({
            behavior: "smooth"
          })
         
        }} className="cursor-pointer"> About us</h1>
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
           <h1 
          onClick={()=> {
          document.getElementById('our-cars').scrollIntoView({
            behavior: "smooth"
          })
         
        }}
         className="cursor-pointer"> Our cars</h1>
           <h1 
            onClick={()=> {
          document.getElementById('benefit').scrollIntoView({
            behavior: "smooth"
          })
         
        }}className="cursor-pointer"> Benefits</h1>
           <h1
            onClick={()=> {
          document.getElementById('pricing').scrollIntoView({
            behavior: "smooth"
          })
         
        }} className="cursor-pointer"> Pricing</h1>
          </div>

           <div className=" flex flex-col gap-3 ">
            <h1 className="font-bold text-2xl"> Extras</h1>
           <h1 
            onClick={()=> {
          document.getElementById('our-cars').scrollIntoView({
            behavior: "smooth"
          })
         
        }}
           className="cursor-pointer"> cost calculator</h1>
           <h1
            onClick={()=> {
          document.getElementById('our-cars').scrollIntoView({
            behavior: "smooth"
          })
         
        }}> Locations</h1>
           <h1
            onClick={()=> {
          document.getElementById('footer').scrollIntoView({
            behavior: "smooth"
          })
         
        }} > Support</h1>
            <h1  > Blog</h1>
          </div>

           <div className=" flex flex-col gap-3 ">
            <h1 className="font-bold text-2xl"> Contact</h1>
           <a href="tel:+1234567890 "><h1 className="cursor-pointer" > +312 94 30 00 03</h1></a>
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=abolajiayobami2000@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  info@Cago.nl
</a>
          </div>
     </div>

       <div className=" flex justify-between mt-10">
<div className=" flex gap-4 items-center">
    <div className=" flex gap-2">
       <a href="https://www.instagram.com"
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

    <section id="lg-support" className=" my-10 mx-10 lg:mx-40 hidden md:hidden lg:block text-gray-700 "> {/* for desktop screen */}
         <div className=" flex justify-between ">
          <div className=" flex flex-col gap-3 ">
             <div className="flex gap-3 items-center  ">
          <img className="h-6" src={vloto} alt="vloto-logo" />
          <h1 className="text-green-900 text-3xl font-bold"> vloto</h1>
        </div>
           <h1
          
            onClick={()=> {
          document.getElementById('nav').scrollIntoView({
            behavior: "smooth"
          })
         
        }} className="cursor-pointer"> About us</h1>
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
           <h1 
          onClick={()=> {
          document.getElementById('lg-cars').scrollIntoView({
            behavior: "smooth"
          })
         
        }}
         className="cursor-pointer"> Our cars</h1>
           <h1 
            onClick={()=> {
          document.getElementById('lg-benefit').scrollIntoView({
            behavior: "smooth"
          })
         
        }}className="cursor-pointer"> Benefits</h1>
           <h1
            onClick={()=> {
          document.getElementById('pricing').scrollIntoView({
            behavior: "smooth"
          })
         
        }} className="cursor-pointer"> Pricing</h1>
          </div>

           <div className=" flex flex-col gap-3 ">
            <h1 className="font-bold text-2xl"> Extras</h1>
           <h1 
            onClick={()=> {
          document.getElementById('lg-cars').scrollIntoView({
            behavior: "smooth"
          })
         
        }}
           className="cursor-pointer"> cost calculator</h1>
           <h1
           className="cursor-pointer"
            onClick={()=> {
          document.getElementById('lg-cars').scrollIntoView({
            behavior: "smooth"
          })
         
        }}> Locations</h1>
           <h1
           className="cursor-pointer"
            onClick={()=> {
          document.getElementById('footer').scrollIntoView({
            behavior: "smooth"
          })
         
        }} > Support</h1>
            <h1  > Blog</h1>
          </div>

           <div className=" flex flex-col gap-3 ">
            <h1 className="font-bold text-2xl"> Contact</h1>
           <a href="tel:+1234567890 "><h1 className="cursor-pointer" > +312 94 30 00 03</h1></a>
            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=abolajiayobami2000@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  info@Cago.nl
</a>
          </div>
     </div>

       <div className=" flex justify-between mt-10">
<div className=" flex gap-4 items-center">
    <div className=" flex gap-2">
       <a href="https://www.instagram.com"
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
