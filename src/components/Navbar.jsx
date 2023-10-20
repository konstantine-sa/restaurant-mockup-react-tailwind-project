import { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [delivery, setDelivery] = useState(false);

  return (
    <section className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* {left side} */}
      <div className="flex items-center ">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer mr-4 pt-1 lg:pt-2"
        >
          <AiOutlineMenu
            size={30}
            className="text-gray-900 hover:text-gray-700 hover:scale-110 duration-200 ease-in-out"
          />
        </div>
        <h1 className="text-gray-900  text-2xl sm:text-3xl lg:text-4xl px-2 mr-4 cursor-pointer ">
          Gourmet<span className="font-bold">Go</span>
        </h1>
        {/* {delivery / pickup switch} */}
        <div
          onClick={() => setDelivery(!delivery)}
          className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] hover:bg-gray-300"
        >
          <p
            className={
              delivery
                ? "bg-gray-900 text-white rounded-full p-2 cursor-pointer hover:bg-gray-800 "
                : "p-2 cursor-pointer"
            }
          >
            Abholung
          </p>
          <p
            className={
              delivery
                ? "p-2 cursor-pointer"
                : "bg-gray-900 text-white rounded-full p-2 cursor-pointer hover:bg-gray-800"
            }
          >
            Lieferung
          </p>
        </div>
      </div>

      {/* {search input} */}
      <div
        className="bg-gray-200 text-gray-900 rounded-full flex items-center px-2 w-[200px] md:w-[300px] lg:w-[450px]
       hover:bg-gray-300 cursor-pointer"
      >
        <AiOutlineSearch size={20} />
        <input
          type="text"
          placeholder="Essen suchen"
          className="bg-transparent p-2 w-full focus:outline-none"
        />
      </div>

      {/* {cart button} */}
      <button
        className="bg-gray-900 text-white hidden md:flex items-center py-2 rounded-full hover:bg-white 
      hover:border-gray-900 hover:text-gray-900"
      >
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>

      {/* burger menu */}
      {/* overlay */}
      {nav ? (
        <div
          onClick={() => setNav(!nav)}
          className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
        ></div>
      ) : (
        ""
      )}

      {/* side menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-200 ease-in-out"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white"
        }
      >
        <AiOutlineClose
          size={30}
          onClick={() => setNav(!nav)}
          className="text-gray-900 absolute right-4 top-5 cursor-pointer hover:fill-slate-700  hover:scale-75 hover:rotate-90 duration-300 ease-in-out"
        />
        <h2 className="text-gray-900 text-2xl p-4">
          Gourmet<span className="font-bold text-gray-900">Go</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex items-center ">
              <TbTruckDelivery size={25} className="mr-4" />{" "}
              <span
                className="cursor-pointer hover:text-gray-600 relative text-xl w-fit block after:block after:content-[''] 
              after:absolute after:h-[2px] after:bg-gray-500 after:w-full after:scale-x-0 after:hover:scale-x-100 
              after:transition after:duration-200 after:origin-center"
              >
                Bestellungen
              </span>
            </li>
            <li className="text-xl py-4 flex items-center ">
              <BsFillSaveFill size={25} className="mr-4" />{" "}
              <span
                className="cursor-pointer hover:text-gray-600 relative text-xl w-fit block after:block after:content-[''] 
              after:absolute after:h-[2px] after:bg-gray-500 after:w-full after:scale-x-0 after:hover:scale-x-100 
              after:transition after:duration-200 after:origin-center"
              >
                Bestes Angebot
              </span>
            </li>
            <li className="text-xl py-4 flex items-center ">
              <MdFavorite size={25} className="mr-4" />{" "}
              <span
                className="cursor-pointer hover:text-gray-600 relative text-xl w-fit block after:block after:content-[''] 
              after:absolute after:h-[2px] after:bg-gray-500 after:w-full after:scale-x-0 after:hover:scale-x-100 
              after:transition after:duration-200 after:origin-center"
              >
                Favoriten
              </span>
            </li>
            <li className="text-xl py-4 flex items-center ">
              <AiFillTag size={25} className="mr-4" />{" "}
              <span
                className="cursor-pointer hover:text-gray-600 relative text-xl w-fit block after:block after:content-[''] 
              after:absolute after:h-[2px] after:bg-gray-500 after:w-full after:scale-x-0 after:hover:scale-x-100 
              after:transition after:duration-200 after:origin-center"
              >
                Promotionen
              </span>
            </li>
            <li className="text-xl py-4 flex items-center ">
              <FaWallet size={25} className="mr-4" />{" "}
              <span
                className="cursor-pointer hover:text-gray-600 relative text-xl w-fit block after:block after:content-[''] 
              after:absolute after:h-[2px] after:bg-gray-500 after:w-full after:scale-x-0 after:hover:scale-x-100 
              after:transition after:duration-200 after:origin-center"
              >
                Brieftasche
              </span>
            </li>
            <li className="text-xl py-4 flex items-center ">
              <FaUserFriends size={25} className="mr-4" />{" "}
              <span
                className="cursor-pointer hover:text-gray-600 relative text-xl w-fit block after:block after:content-[''] 
              after:absolute after:h-[2px] after:bg-gray-500 after:w-full after:scale-x-0 after:hover:scale-x-100 
              after:transition after:duration-200 after:origin-center"
              >
                Freunde einladen
              </span>
            </li>
            <li className="text-xl py-4 flex items-center ">
              <MdHelp size={25} className="mr-4" />{" "}
              <span
                className="cursor-pointer hover:text-gray-600 relative text-xl w-fit block after:block after:content-[''] 
              after:absolute after:h-[2px] after:bg-gray-500 after:w-full after:scale-x-0 after:hover:scale-x-100 
              after:transition after:duration-200 after:origin-center"
              >
                Hilfe
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
