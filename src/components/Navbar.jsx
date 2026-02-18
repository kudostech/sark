import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <section className="flex justify-between  items-center mx-4 mt-2 md:mx-8 lg:mx-24">
        <img
          className=" cursor-pointer w-18 h-7 mt-0"
          src={logo}
          alt=" logo.png"
        />
        <ul className=" hidden md:hidden mt-3 gap-8 lg:flex">
          <li className=" cursor-pointer hover:font-bold"> Our Cars</li>
          <li className=" cursor-pointer hover:font-bold"> Locations</li>
          <li className=" cursor-pointer hover:font-bold"> Pricing </li>
          <li className=" cursor-pointer hover:font-bold"> Benefits</li>
          <li className=" cursor-pointer hover:font-bold"> Support</li>
        </ul>
        <div>
          <div className="flex justify-center items-center gap-4 mt-2 md:mt-4 ">
            <button className=" cursor-pointer md:hidden text-white bg-[#34432d] py-1 rounded-md px-2 ">
              Download
            </button>
            <button className="hidden cursor-pointer text-white md:block bg-[#34432d] py-1 rounded-md px-2">
              Download app
            </button>

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
      <hr className=" mt-4 text-[#e9e8e8] " />

      {menuOpen && (
        <section className=" lg:hidden fixed inset-0 md:px-14 md:pt-10 px-8 bg-white pt-8">
          <div className=" flex justify-between ">
            <img
              onClick={() => setMenuOpen(false)}
              className=" cursor-pointer w-18 h-7 mt-0"
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
            <li className=" cursor-pointer hover:font-bold"> Our Cars</li>
            <li className=" cursor-pointer hover:font-bold"> Locations</li>
            <li className=" cursor-pointer hover:font-bold"> Pricing </li>
            <li className=" cursor-pointer hover:font-bold"> Benefits</li>
            <li className=" cursor-pointer hover:font-bold"> Support</li>
          </ul>
        </section>
      )}
    </nav>
  );
};

export default Navbar;
