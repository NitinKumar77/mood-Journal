import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { isModalOpen } from "../../redux/moodSlice";

function Header() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="Navbar flex  justify-between mx-[6.31rem] mb-[2.63rem] mt-[3.88rem]">
        <div className="logo self-center  border-defaultGreen border-l-4 text-black font-Outfit text-4xl font-semibold leading-8">
          Mood Journal
        </div>
        <div className="menu flex w-66 h-12 justify-center items-center gap-5 flex-shrink-0">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-defaultGreen" : "text-black"
            }
          >
            <span className="menu-1  text-center  text-base font-medium leading-6">
              Home
            </span>
          </NavLink>
          <NavLink
            to={"/history"}
            className={({ isActive }) =>
              isActive ? "text-defaultGreen" : "text-black"
            }
          >
            <span className="menu-2 text-center  text-base font-medium leading-6">
              History
            </span>
          </NavLink>
          <NavLink
            to={"/Statistics"}
            className={({ isActive }) =>
              isActive ? "text-defaultGreen" : "text-black"
            }
          >
            <span className="menu-3 text-center  text-base font-medium leading-6">
              Statistics
            </span>
          </NavLink>
        </div>
        <div className="register-button ">
          <button
            className="bg-defaultGreen flex focus-visible:outline-none p-4 justify-center items-center gap-4 rounded-[6.25rem] text-white  text-lg font-semibold leading-6  "
            onClick={() => dispatch(isModalOpen(true))}
          >
            {" "}
            Register Mood
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
