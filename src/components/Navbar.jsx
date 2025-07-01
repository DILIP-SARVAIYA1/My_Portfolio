import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.PNG";

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  return (
    <div className="sticky top-0">
      {/*<!-- Component: Navbar with CTA --> */}
      <header className=" relative z-50 w-full border-b shadow-lg shadow-slate-700/5 bg-black after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-800 lg:border-slate-800 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav className="flex h-[4.5rem] items-center justify-between font-medium text-white">
            {/*      <!-- Brand logo --> */}
            <div className="flex items-center pl-6">
              <Link to="/">
                <img className="w-10 h-7" src={logo} alt="logo" />
              </Link>
            </div>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-200 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-200 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-200 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute sm:left-0 left-1/2 top-0 z-[-1] h-screen w-full justify-center overflow-hidden overflow-y-auto overscroll-contain px-8 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-md"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch m-4">
                <Link
                  to={"/"}
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center py-2 transition-colors duration-300 hover:text-emerald-400 focus:text-emerald-400 focus:outline-none focus-visible:outline-none lg:px-2"
                  href="#"
                >
                  <span>Home</span>
                </Link>
              </li>

              <li role="none" className="flex items-stretch m-4">
                <Link
                  to={"/projects"}
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center py-2 transition-colors duration-300 hover:text-emerald-400 focus:text-emerald-400 focus:outline-none focus-visible:outline-none lg:px-2"
                  href="#"
                >
                  <span>Projects</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with CTA --> */}
    </div>
  );
};

export default Navbar;
