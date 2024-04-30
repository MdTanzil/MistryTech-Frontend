import { FaBoxOpen, FaListAlt } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import {
  IoChatbubblesOutline,
  IoHomeOutline,
  IoLogOutOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";
import logo from "../../assets/images/Mistrytech furniture logo white svg.2-01.svg";
const AdminSidebar = () => {
  return (
    <div>
      {/* <!-- component --> */}


      <div className="min-h-screen flex flex-row ">
        <div className="flex flex-col  bg-secondary rounded-r-xl overflow-hidden">
          <div className="flex items-center justify-center h-28 shadow-md">
            <img src={logo} className="min-w-60" alt="" />{" "}
          </div>
          <ul className="flex flex-col py-4">
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <IoHomeOutline />
                </span>
                <span className="text-sm font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <FaBoxOpen />
                </span>
                <span className="text-sm font-medium">Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <FaListAlt />
                </span>
                <span className="text-sm font-medium">Orders</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <IoIosSettings />
                </span>
                <span className="text-sm font-medium">Settings</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <IoChatbubblesOutline />
                </span>
                <span className="text-sm font-medium">Chat</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <IoPersonCircleOutline />
                </span>
                <span className="text-sm font-medium">Profile</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white">
                  <IoLogOutOutline />
                </span>
                <span className="text-sm font-medium">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
