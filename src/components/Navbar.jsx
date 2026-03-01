import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav id="nav" className="scroll-mt-4">
      <section className="fixed w-full  bg-white top-0 lg:pr-44 md:pr-10 left-0 pr-6 py-2 lg:px-18 flex justify-between  items-center mx-4 md:mx-8 ">
        <img
        onClick={()=> {
          document.getElementById('nav').scrollIntoView({
            behavior: "smooth"
          })
          setMenuOpen(false)
        }}
          className=" cursor-pointer w-18 h-7 "
          src={logo}
          alt=" logo.png"
        />

        
        <ul className=" hidden md:hidden mt-3 gap-8 lg:flex">
          <li
           onClick={()=> {
          document.getElementById('lg-cars').scrollIntoView({
            behavior: "smooth"
          })
         
        }} className=" cursor-pointer hover:font-bold"> Our Cars</li>
          <li 
           onClick={()=> {
          document.getElementById('lg-cars').scrollIntoView({
            behavior: "smooth"
          })
         
        }}className=" cursor-pointer hover:font-bold"> Locations</li>
          <li
           onClick={()=> {
          document.getElementById('pricing').scrollIntoView({
            behavior: "smooth"
          })
         
        }} className=" cursor-pointer hover:font-bold"> Pricing </li>
          <li 
          onClick={()=> {
          document.getElementById('lg-benefit').scrollIntoView({
            behavior: "smooth"
          })
        }}
          className=" cursor-pointer hover:font-bold"> Benefits</li>
          <li 
           onClick={()=> {
          document.getElementById('lg-support').scrollIntoView({
            behavior: "smooth"
          })
        }}
          className=" cursor-pointer hover:font-bold"> Support</li>
        </ul>
        <div>
          <div className="flex justify-center items-center gap-4 mt-2 md:mt-4 ">
            <a href="https://play.google.com/store/apps?hl=en_GB"
            target="_blank"><button className=" cursor-pointer md:hidden text-white bg-[#34432d] py-1 rounded-md px-2 ">
              Download
            </button></a>
           <a href="https://play.google.com/store/apps?hl=en_GB"
           target="_blank"> <button className="hidden cursor-pointer text-white md:block bg-[#34432d] py-1 rounded-md px-2">
              Download app
            </button></a>

            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              className=" lg:hidden
            "
            >
              {" "}
              {menuOpen ? (
                <div>
                  <FontAwesomeIcon
                    className=" cursor-pointer text-3xl block lg:hidden "
                    icon={faX}
                  />
                </div>
              ) : (
                <FontAwesomeIcon
                  className=" cursor-pointer text-3xl block lg:hidden "
                  icon={faBars}
                />
              )}
            </button>
          </div>
        </div>
      </section>
      <hr
      className=" z-50  w-full fixed bg-white md:hidden mt-17  text-[#e9e8e8] " />
       <div className="flex py-4 fixed px-4 gap-2 bg-white md:hidden  justify-around mt-14">
      <button
      onClick={
        () =>{
          document.getElementById('hero')?.scrollIntoView(
            {
              behavior: "smooth"
            }
          )
        }
      } className="  cursor-pointer text-[#8e8e8e] px-2 hover:text-black hover:bg-[#e9e8e8] hover:rounded-xl"> Overview</button>
      <button 
      onClick={()=> {
              document.getElementById('calculator')?.scrollIntoView(
                {
                  behavior: "smooth"
                }
              )
            }}
      className=" cursor-pointer text-[#8e8e8e]  px-2 hover:text-black hover:bg-[#e9e8e8] hover:rounded-xl"> Saving Calculator</button>
      <button
      onClick={()=> {
              document.getElementById('pricing')?.scrollIntoView(
                {
                  behavior: "smooth"
                }
              )
            }}
      className=" cursor-pointer text-[#8e8e8e]   px-2 hover:text-black hover:bg-[#e9e8e8] hover:rounded-xl"> Subscription plans</button>
      </div>

      {menuOpen && (
        <section className="  lg:hidden fixed inset-0 md:px-14 md:pt-10 px-8 bg-white pt-8">
          <div className=" flex justify-between ">
            <img
              onClick={() => setMenuOpen(false)}
              className=" cursor-pointer w-18 h-7 mb-0"
              src={logo}
              alt=" logo.png"
            />
            <FontAwesomeIcon
              onClick={() => setMenuOpen(false)}
              className=" cursor-pointer text-3xl block lg:hidden "
              icon={faX}
            />


          </div>
          <ul className=" flex flex-col gap-24 md:gap-30 mt-20 text-4xl items-center h-full">
            <li className=" cursor-pointer hover:font-bold"
            onClick={()=> {
              document.getElementById("our-cars")?.scrollIntoView(
              {
                behavior: "smooth"
              }
            )
            setMenuOpen(false)
            }}
            
            > Our Cars</li>
            <li 
            onClick={() =>
            {
              document.getElementById('our-cars').scrollIntoView(
                {
                  behavior: "smooth"
                }
              )
              setMenuOpen(false)
            }
            }
            className=" cursor-pointer hover:font-bold"> Locations</li>
            <li 
             onClick={() =>
            {
              document.getElementById('pricing').scrollIntoView(
                {
                  behavior: "smooth"
                }
              )
              setMenuOpen(false)
            }
            }
            className=" cursor-pointer hover:font-bold"> Pricing </li>
            <li 
              onClick={() =>
            {
              document.getElementById('benefit').scrollIntoView(
                {
                  behavior: "smooth"
                }
              )
              setMenuOpen(false)
            }
            }
            
            className=" cursor-pointer hover:font-bold"> Benefits</li>

            <li 
             onClick={() =>
            {
              document.getElementById('footer').scrollIntoView(
                {
                  behavior: "smooth"
                }
              )
              setMenuOpen(false)
            }
            }
            className=" cursor-pointer hover:font-bold"> Support</li>
          </ul>
        </section>
        
      )}
      
    </nav>
  );
};

export default Navbar;
