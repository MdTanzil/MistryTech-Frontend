import { CiCalendar } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMailUnreadSharp } from "react-icons/io5";
import { IoWalletSharp } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { IoPieChartOutline } from "react-icons/io5";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";

import profile from "../../assets/images/profile.jpg";
import Chart from "../Chart/Chart";
import Table from "../Table/Table";
const AdminHome = () => {
  return (
    <div className=" mt-2">
      <div className="flex flex-col md:flex-row bg-indigo-100 ">
        <section className="w-auto md:w-[70%] h-full">
          <div className="w-full flex items-center justify-between">
            <div className="text-indigo-950 m-4 font-bold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-tl from-indigo-800 to-pink-800">
              Welcome to MistryTech Co.
            </div>
            <div className="flex md:hidden gap-4 items-center justify-end px-4 text-indigo-950">
              <CiCalendar />
              <IoIosNotificationsOutline />
              <IoMailUnreadSharp />
              <img src={profile} alt="" className="rounded-full w-8 h-8" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
            <div className="flex flex-col justify-between w-full md:w-auto h-48 bg-white p-4 rounded-md">
              <div className="flex w-full items-center justify-between">
                <div className="text-4xl text-indigo-950">
                  <IoWalletSharp />
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
                  <CiMenuKebab />
                </div>
              </div>
              <div className="font-extrabold text-4xl sm:text-2xl lg:text-xl text-indigo-950">
                $5000,4985.00
              </div>
              <div>
                <div className="text-indigo-950 text-sm font-semibold">
                  Your bank Balance
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full md:w-auto h-48 bg-white p-4 rounded-md">
              <div className="flex w-full items-center justify-between">
                <div className="text-4xl text-indigo-950">
                  <IoPieChartOutline />
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
                  <CiMenuKebab />
                </div>
              </div>
              <div className="font-extrabold text-4xl sm:text-2xl lg:text-xl text-indigo-950">
                $5000,4985.00
              </div>
              <div>
                <div className="text-indigo-950 text-sm font-semibold">
                  Your bank Balance
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full md:w-auto h-48 bg-white p-4 rounded-md">
              <div className="flex w-full items-center justify-between">
                <div className="text-4xl text-indigo-950">
                  <FaPeopleCarryBox />
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
                  <CiMenuKebab />
                </div>
              </div>
              <div className="font-extrabold text-4xl sm:text-2xl lg:text-xl text-indigo-950">
                $5000,4985.00
              </div>
              <div>
                <div className="text-indigo-950 text-sm font-semibold">
                  Employees Working Today{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full md:w-auto h-48 bg-white p-4 rounded-md">
              <div className="flex w-full items-center justify-between">
                <div className="text-4xl text-indigo-950">
                  <FaRegAddressCard />
                </div>
                <div className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
                  <CiMenuKebab />
                </div>
              </div>
              <div className="font-extrabold text-4xl sm:text-2xl lg:text-xl text-indigo-950">
                $5000,4985.00
              </div>
              <div>
                <div className="text-indigo-950 text-sm font-semibold">
                  This Week Card Processing
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-4 m-4 w-auto">
            <div className="col-span-4 md:col-span-1 h-28 bg-white rounded-md">
              <div className="flex flex-col justify-between p-4 h-full">
                <div className="font-semibold text-indigo-950">New Client</div>
                <div className="flex items-center justify-between w-full">
                  <div className="text-5xl sm:text-xl lg:text-5xl font-bold text-indigo-900">
                    64
                  </div>
                  <div className="flex px-2 py-1 text-sm rounded-full bg-green-500 items-center text-green-900">
                    +69%
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 md:col-span-3 row-span-2 bg-white">
              <Chart></Chart>
            </div>
            <div className="col-span-4 md:col-span-1 h-28 bg-white rounded-md">
              <div className="flex flex-col justify-between p-4 h-full">
                <div className="font-semibold text-indigo-950">
                  Invoice Overdue
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="text-5xl sm:text-xl lg:text-5xl font-bold text-indigo-900">
                    9
                  </div>
                  <div className="flex px-2 py-1 text-sm rounded-full bg-red-500 items-center text-white">
                    +19%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-4">
            <div className="text-indigo-950 font-bold text-2xl my-4">
              Recent Transactions
            </div>
            <Table></Table>
          </div>
        </section>
        <section className="w-full md:w-[30%] bg-indigo-200">
          <div className="flex flex-col m-4 ">
            <div className="hidden md:flex gap-4 items-center justify-end px-4 text-indigo-950">
              <CiCalendar />
              <IoIosNotificationsOutline />
              <IoMailUnreadSharp />
              <img src={profile} alt="" className="rounded-full w-8 h-8" />
            </div>
            <div
              className="flex flex-col bg-white gap-6 p-4 m-4
            rounded-md h-auto shadow-lg"
            >
              <div>
                <div className="font-bold text-indigo-950">
                  Formation Status
                </div>
                <div className="text-xs font-bold text-indigo-500">
                  In Progress
                </div>
              </div>
              <div className="h-4 w-full rounded-lg bg-gray-200">
                <div className="h-4 bg-indigo-900 rounded-lg w-[30%]"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-bold text-indigo-950">
                  Estimated Processing
                </div>
                <div className="font-semibold text-indigo-900 text-sm">
                  4-5 Business Days
                </div>
              </div>
              <div>
                <button className="w-full p-4 bg-gradient-to-tr from-pink-900 to bg-indigo-900 text-white rounded-xl">
                  View Status{" "}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-5 text-indigo-900 m-4">
              <div className="flex gap-4 items-center bg-white p-2 rounded-md w-full">
                <div className="flex items-center justify-center rounded-full w-8 h-8 text-slate-950 bg-indigo-300">
                  <CiTimer />
                </div>
                <div>
                  <div className="font-semibold text-sm ">Run Payroll</div>
                  <div className="text-indigo-500 text-xs ">
                    April 29th at 8:50Pm
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-white p-2 rounded-md w-full">
                <div className="flex items-center justify-center rounded-full w-8 h-8 text-slate-950 bg-indigo-300">
                  <CiTimer />
                </div>
                <div>
                  <div className="font-semibold text-sm ">Run Payroll</div>
                  <div className="text-indigo-500 text-xs ">
                    April 29th at 8:50Pm
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-white p-2 rounded-md w-full">
                <div className="flex items-center justify-center rounded-full w-8 h-8 text-slate-950 bg-indigo-300">
                  <CiTimer />
                </div>
                <div>
                  <div className="font-semibold text-sm ">Run Payroll</div>
                  <div className="text-indigo-500 text-xs ">
                    April 29th at 8:50Pm
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-white p-2 rounded-md w-full">
                <div className="flex items-center justify-center rounded-full w-8 h-8 text-slate-950 bg-indigo-300">
                  <CiTimer />
                </div>
                <div>
                  <div className="font-semibold text-sm ">Run Payroll</div>
                  <div className="text-indigo-500 text-xs ">
                    April 29th at 8:50Pm
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-white p-2 rounded-md w-full">
                <div className="flex items-center justify-center rounded-full w-8 h-8 text-slate-950 bg-indigo-300">
                  <CiTimer />
                </div>
                <div>
                  <div className="font-semibold text-sm ">Run Payroll</div>
                  <div className="text-indigo-500 text-xs ">
                    April 29th at 8:50Pm
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-white p-2 rounded-md w-full">
                <div className="flex items-center justify-center rounded-full w-8 h-8 text-slate-950 bg-indigo-300">
                  <CiTimer />
                </div>
                <div>
                  <div className="font-semibold text-sm ">Run Payroll</div>
                  <div className="text-indigo-500 text-xs ">
                    April 29th at 8:50Pm
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-white p-2 rounded-md w-full">
                <div className="flex items-center justify-center rounded-full w-8 h-8 text-slate-950 bg-indigo-300">
                  <CiTimer />
                </div>
                <div>
                  <div className="font-semibold text-sm ">Run Payroll</div>
                  <div className="text-indigo-500 text-xs ">
                    April 29th at 8:50Pm
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white gap-6 p-4 m-4 rounded-lg h-auto ">
              <div>
                <div className="font-bold text-indigo-950">Board Meeting</div>
                <div className="text-xs font-bold text-indigo-500">April 29th 2024</div>
              </div>
              <div className="font-semibold text-indigo-950 text-sm ">
                You have been invited to attend a meeting of directors
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminHome;
