import Img from "../../assets/images/collections-hero.jpg";
import Table from "../../assets/images/table.jpg";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import { useEffect, useRef, useState } from "react";
const Collections = () => {
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const items = ["React", "Angular", "Vue"];
  const [filter2, setFilter2] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  return (
    <div>
      <div className="relative">
        <img
          src={Img}
          alt="collections-hero"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            {" "}
            Text Here
          </h1>
        </div>
      </div>
      <div className="flex mt-6 mx-auto max-w-[1250px]">
        {/* Drawer */}
        <div className="">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className=" ">
                <div
                  className="flex items-center gap-1"
                  onClick={() => setFilter2(true)}
                >
                  Filter
                  {filter2 ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
                </div>
              </label>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 mt-28 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>



        <div
          ref={dropDownRef}
          className="relative mx-auto pr-[9px]  md:pr-[996px] md:pl-[00px] pl-[10px]"
        >
          <button onClick={() => setOpen((prev) => !prev)} className="">
            <div
              className="flex items-center gap-1"
              onClick={() => setDropDown((prevDropDown) => !prevDropDown)}
            >
              Featured
              {dropDown ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
            </div>
          </button>
          <ul
            className={`${
              open
                ? "visible translate-y-0 duration-300"
                : "invisible translate-y-4"
            } absolute top-12 z-50 w-28 space-y-1 rounded-sm bg-white shadow-md`}
          >
            {items.map((item, idx) => (
              <li
                key={idx}
                className={`rounded-sm p-2 ${
                  open ? "opacity-100 duration-300" : "opacity-0"
                } hover:bg-sky-500`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Card */}
      <div className="container mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="card  rounded-none relative flex justify-center items-center">
          <img src={Table} alt="Shoes" className="h-72" />
          <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <button className="cursor-pointer bg-secondary text-white hover:text-white hover:bg-primary text-center py-2 px-12 mt-24">
              Select Option
            </button>
          </div>
          <div className=" text-center">
            <h2 className="text-xl"> Easy Table | TV2-005</h2>
            <p>
              From tk 6,990.00{" "}
              <span className="line-through text-slate-400">TK 7,500.00</span>
            </p>
          </div>
        </div>
        <div className="card  rounded-none relative flex justify-center items-center">
          <img src={Table} alt="Shoes" className="h-72" />
          <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <button className="cursor-pointer bg-secondary text-white hover:text-white hover:bg-primary text-center py-2 px-12 mt-24">
              Select Option
            </button>
          </div>
          <div className=" text-center">
            <h2 className="text-xl"> Easy Table | TV2-005</h2>
            <p>
              From tk 6,990.00{" "}
              <span className="line-through text-slate-400">TK 7,500.00</span>
            </p>
          </div>
        </div>
        <div className="card  rounded-none relative flex justify-center items-center">
          <img src={Table} alt="Shoes" className="h-72" />
          <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <button className="cursor-pointer bg-secondary text-white hover:text-white hover:bg-primary text-center py-2 px-12 mt-24">
              Select Option
            </button>
          </div>
          <div className=" text-center">
            <h2 className="text-xl"> Easy Table | TV2-005</h2>
            <p>
              From tk 6,990.00{" "}
              <span className="line-through text-slate-400">TK 7,500.00</span>
            </p>
          </div>
        </div>
        <div className="card  rounded-none relative flex justify-center items-center">
          <img src={Table} alt="Shoes" className="h-72" />
          <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <button className="cursor-pointer bg-secondary text-white hover:text-white hover:bg-primary text-center py-2 px-12 mt-24">
              Select Option
            </button>
          </div>
          <div className=" text-center">
            <h2 className="text-xl"> Easy Table | TV2-005</h2>
            <p>
              From tk 6,990.00{" "}
              <span className="line-through text-slate-400">TK 7,500.00</span>
            </p>
          </div>
        </div>
        <div className="card  rounded-none relative flex justify-center items-center">
          <img src={Table} alt="Shoes" className="h-72" />
          <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <button className="cursor-pointer bg-secondary text-white hover:text-white hover:bg-primary text-center py-2 px-12 mt-24">
              Select Option
            </button>
          </div>
          <div className=" text-center">
            <h2 className="text-xl"> Easy Table | TV2-005</h2>
            <p>
              From tk 6,990.00{" "}
              <span className="line-through text-slate-400">TK 7,500.00</span>
            </p>
          </div>
        </div>
        <div className="card  rounded-none relative flex justify-center items-center">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="h-72"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <button className="cursor-pointer bg-white text-black hover:text-white hover:bg-primary text-center py-2 px-12 mt-24">
              Select Option
            </button>
          </div>
          <div className=" text-center">
            <h2 className="text-xl"> Easy Table | TV2-005</h2>
            <p>
              From tk 6,990.00{" "}
              <span className="line-through text-slate-400">TK 7,500.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
