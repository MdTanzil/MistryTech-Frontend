import Img from "../../assets/images/collections-hero.jpg";

import { useEffect, useRef, useState } from "react";
const Collections = () => {
    
  const [open, setOpen] = useState(false);
  const dropDownRef = useRef(null);
  const items = ['React', 'Angular', 'Vue'];
  
  useEffect(() => {
    const close = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);
  return (
    <div>
      <div className="relative">
        <img src={Img} alt="collections-hero" className="w-full h-[400px]" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-4xl font-bold"> Text Here</h1>
        </div>
      </div>
      {/* Drawer */}
      <div className="container mx-auto mt-6">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div ref={dropDownRef} className="relative mx-auto w-fit text-white">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-sm bg-sky-600 px-6 py-2"
        >
          Dropdown
        </button>
        <ul
          className={`${
            open
              ? "visible translate-y-0 duration-300"
              : "invisible translate-y-4"
          } absolute top-12 z-50 w-full space-y-1 rounded-sm bg-sky-400 shadow-md`}
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
      {/* Card */}
      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card w-80 rounded-none relative">
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
        <div className="card w-80 rounded-none relative">
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
        <div className="card w-80 rounded-none relative">
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
        <div className="card w-80 rounded-none relative">
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
        <div className="card w-80 rounded-none relative">
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
        <div className="card w-80 rounded-none relative">
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
