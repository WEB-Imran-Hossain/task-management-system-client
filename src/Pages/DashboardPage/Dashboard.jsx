import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import { useState } from "react";
import { BsBoxArrowInLeft } from "react-icons/bs";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div
        className={`${
          open ? "w-72" : "w-48"
        } duration-300 min-h-screen bg-[#FF7452] text-white relative`}
      >
        <BsBoxArrowInLeft
          className={`absolute cursor-pointer -right-0 right-3 top-7 w-7 text-4xl ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <ul className="menu p-4 text-xl">
          <h4 className="text-xl font-bold mt-4"> SCC Technovision Inc.</h4>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 ">
        <div className=" p-7 text-xl lg:text-2xl font-bold uppercase">
          <h1>Dashboard</h1>
        </div>
        {/* dashboard content */}
        <div className="text-center mt-32">
          <div className="join">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="Search"
                />
              </div>
            </div>

            <div className="indicator">
              <button className="btn join-item rounded-r-lg uppercase btn hover:bg-transparent text-white bg-[#FF7452] border-[#FF7452] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-black text-lg font-semibold rounded uppercase">
                Add Task
              </button>
            </div>
          </div>
        </div>

        {/* three category item */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-20">
        <div className="w-96 h-96 border text-center rounded">
            <h3 className="bg-[#FF7452] h-10 text-2xl font-bold text-white uppercase">To-Do List</h3>
        </div>
        <div className="w-96 h-96 border text-center rounded">
            <h3 className="bg-[#FF7452] h-10 text-2xl font-bold text-white uppercase">Ongoing List</h3>
        </div>
        <div className="w-96 h-96 border text-center rounded">
            <h3 className="bg-[#FF7452] h-10 text-2xl font-bold text-white uppercase">Completed List</h3>
        </div>
      </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
