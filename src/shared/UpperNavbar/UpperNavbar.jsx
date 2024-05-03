import { useContext, useRef } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Mistrytech furniture logo svg.svg";
import { AuthContext, SearchContext } from "../../context";
import AvatarDropDown from "../../profile/AvarterDropDown";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const UpperNavbar = () => {
  const inputRef = useRef(null);
  const { user } = useContext(AuthContext);
  const { isMobileView } = useContext(SearchContext);
  const placeholder = isMobileView ? "Search" : "Search Product";

  return (
    <>
      <nav className="  mx-auto min-w-full flex items-center justify-center px-4 py-2   bg-white  ">
        <div className="flex container mx-auto justify-between">
          <Link
            to={"/"}
            className=" cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold transition-all duration-200 hover:scale-120"
          >
            <img src={Logo} alt="" className="  h-[56px] " />
          </Link>
          <div className="flex items-center justify-between lg:justify-between gap-1 lg:gap-16">
            <div className="form-control relative">
              <input
                className="rounded-lg border w-32 border-primary bg-transparent px-4 py-2  focus:outline-none md:w-52 lg:w-[400px]  placeholder:text-sm placeholder:font-light lg:placeholder:text-base"
                type="text"
                placeholder={placeholder}
                ref={inputRef}
              />
              <button className="btn btn-ghost btn-circle absolute right-0 top-0 bottom-0 m-auto ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex items-center justify-between gap-10 text-black">
              <Link to={"/help-center"}>
                <li className="group lg:flex hidden lg:visible  cursor-pointer flex-col font-medium">
                  Help Center{" "}
                  <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </li>
              </Link>
              <Link to="/contact-us">
                <li className="group flex  cursor-pointer flex-col    font-medium">
                  Contact Us{" "}
                  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </li>
              </Link>
              <Link to={"/meeting-request"}>
                <li className="group  lg:flex hidden lg:visible  cursor-pointer flex-col font-medium">
                  Meeting Request{" "}
                  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </li>
              </Link>
              <Box sx={{ "& button": { m: 1 } }}>
                <div className="text-center">
                  <div>
                    <div className="text-gray-500">Talk to an Expert</div>
                    <div className="text-secondary">+8801999099009</div>
                  </div>
                  <Button
                    variant="contained"
                    className="text-nowrap"
                    size="small"
                  >
                    Call for free estimate
                  </Button>
                </div>
              </Box>
            </ul>
            <div className="flex  items-center justify-between gap-1 lg:gap-5">
              {!user ? (
                <Link
                  to={"/login"}
                  className="lg:px-2 lg:py-2 px-1 py-1 text-lg text-black hidden lg:inline "
                >
                  <FaRegUser />
                </Link>
              ) : (
                <AvatarDropDown />
              )}

              <div className="lg:px-2 lg:py-2 px-1 py-1 text-2xl mr-4 lg:mr-4 text-black ">
                <div className="lg:px-2 lg:py-2 px-1 py-1 text-2xl mr-4 lg:mr-4 text-black cursor-pointer">
                  <Link to={"/cart"}>
                    <AiOutlineShopping></AiOutlineShopping>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default UpperNavbar;
