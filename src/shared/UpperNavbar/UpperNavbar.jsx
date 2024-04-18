import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { useContext, useEffect, useRef } from "react";
import { SearchContext } from "../../context";
const UpperNavbar = () => {
  const {isSearch,
    setIsSearch} = useContext(SearchContext)
    const inputRef = useRef(null);

    useEffect(() => {
      if (isSearch) {
        // Focus the input element when isSearch is true
        inputRef.current.focus();
      }
    }, [isSearch]);

    const searchContent = <div className="absolute min-w-full   bg-white z-10">
    <div    className="flex justify-between items-center h-28 ">
      <div>Logo</div>
      <div>  <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-36 md:w-auto pr-10"
           ref={inputRef}
            onBlur={()=> setIsSearch(false)}
          /></div>
      <div>          
        <div className="flex items-center justify-between gap-5">
          <Link className=" px-2 py-2 text-lg text-black  ">
            <FaRegUser />
          </Link>
          <Link className=" px-2 py-2 text-2xl text-black  ">
            <AiOutlineShopping />
          </Link>
        </div>
        </div>
    </div>
      </div>

  return (
    <>
      {isSearch && searchContent}
      <nav className="flex items-center justify-between bg-white px-4 py-2 ">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110">
          <h2 className="text-black font-bold">Logo.....</h2>
        </div>
        <div className="flex items-center justify-between gap-16">
          <div className="form-control relative">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto pr-10"
              onFocus={()=> setIsSearch(true)}
             
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
            <li className="group flex  cursor-pointer flex-col">
              Help Center{" "}
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              Contact Us{" "}
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              Meeting Request{" "}
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>
          <div className="flex items-center justify-between gap-5">
            <Link className=" px-2 py-2 text-lg text-black  ">
              <FaRegUser />
            </Link>
            <Link className=" px-2 py-2 text-2xl text-black  ">
              <AiOutlineShopping />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default UpperNavbar;
