import { useContext, useRef } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Mistrytech furniture logo svg.svg";
import { AuthContext } from "../../context";
import AvatarDropDown from "../../profile/AvarterDropDown";
const UpperNavbar = () => {
  const inputRef = useRef(null);
  const { user } = useContext(AuthContext);

  return (
    <>
      <nav className="  mx-auto min-w-full flex items-center justify-center px-4 py-2   bg-white  ">
        <div className="flex container mx-auto justify-between">
          <Link
            to={"/"}
            className="scale-110 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold transition-all duration-200 hover:scale-120"
          >
            <img src={Logo} alt="" className="  h-[56px] " />
          </Link>
          <div className="flex items-center  justify-between gap-16">
            <div className="form-control relative">
              <input
                className="rounded-lg border border-primary bg-transparent px-4 py-2  focus:outline-none w-[570px] "
                type="text"
                placeholder="Search Product"
                ref={inputRef}
              />
              <button className="btn btn-ghost btn-circle absolute right-0 top-0 bottom-0 m-auto">
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
              <li className="group flex  cursor-pointer flex-col font-medium">
                Help Center{" "}
                <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="group flex  cursor-pointer flex-col font-medium">
                Contact Us{" "}
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="group flex  cursor-pointer flex-col font-medium">
                Meeting Request{" "}
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
            <div className="flex  items-center justify-between gap-5">
              {!user ? (
                <Link to={"/login"} className=" px-2 py-2 text-lg text-black  ">
                  <FaRegUser />
                </Link>
              ) : (
                <AvatarDropDown />
              )}

              <Link className=" px-2 py-2 text-2xl text-black  ">
                <AiOutlineShopping />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default UpperNavbar;
