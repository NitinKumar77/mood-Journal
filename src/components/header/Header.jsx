import React from "react";
import { NavLink } from "react-router-dom";
import { useModalContext } from "../../context/ModalContext";
import { useSelector } from "react-redux";

function Header() {
  const { openModal, openSignupModal } = useModalContext();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const token = localStorage.getItem("moodjournal-accesstoken");
  return (
    <div className="w-full fixed bg-white z-20 dark:bg-[#27272A] ">
      <div className="Navbar   flex max-md:m-0 max-sm:p-4 max-md:px-8 max-md:py-[3.63rem] justify-between mx-[6.31rem] mb-[2.63rem] mt-[3.88rem]">
        <div className="logo self-center max-sm:text-2xl dark:text-white border-defaultGreen border-l-4 text-black font-Outfit text-4xl font-semibold leading-8">
          Mood Journal
        </div>
        {(isLoggedIn || token) && (
          <>
            <div className="menu flex max-sm:hidden w-66 h-12 justify-center items-center gap-5 flex-shrink-0">
              <NavLink
                to={"/history"}
                className={({ isActive }) =>
                  isActive
                    ? "text-defaultGreen dark:text-defaultGreen  "
                    : "text-black dark:text-white"
                }
              >
                <span className="menu-2 text-center  text-base font-medium leading-6">
                  History
                </span>
              </NavLink>
              <NavLink
                to={"/Statistics"}
                className={({ isActive }) =>
                  isActive
                    ? "text-defaultGreen  dark:text-defaultGreen "
                    : "text-black dark:text-white"
                }
              >
                <span className="menu-3 text-center  text-base font-medium leading-6">
                  Statistics
                </span>
              </NavLink>
            </div>
          </>
        )}
        {(isLoggedIn || token) && (
          <div className=" flex gap-8 ">
            <div className="register-button ">
              <button
                className="bg-defaultGreen flex focus-visible:outline-none p-4 justify-center items-center gap-4 rounded-[6.25rem] text-white  text-lg font-semibold leading-6  "
                onClick={() => openModal()}
              >
                {" "}
                Add Mood
              </button>
            </div>
            <button className="avatar">
              <img
                className="w-12 h-12 rounded-full"
                src="data:image/jpeg;base64,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"
                alt="Rounded avatar"
              />
            </button>
          </div>
        )}
        {!isLoggedIn && !token && (
          <div className="flex">
            <div className="Signin-button ">
              <button
                className=" flex focus-visible:outline-none p-4 justify-center items-center gap-4 rounded-[6.25rem] text-defaultGreen  text-lg font-semibold leading-6  "
                onClick={openSignupModal}
              >
                <NavLink to={`?mode=${"signup"}`}>Sign Up</NavLink>
              </button>
            </div>
            <div className="Signin-button ">
              <button
                className="bg-defaultGreen flex focus-visible:outline-none py-4 px-10 justify-center items-center gap-4 rounded-[6.25rem] text-white  text-lg font-semibold leading-6  "
                onClick={openSignupModal}
              >
                {" "}
                <NavLink to={`?mode=${"signin"}`}>Sign In</NavLink>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="menu flex sm:hidden mx-[1rem]  w-66 h-12 justify-center items-center gap-5 flex-shrink-0">
        <NavLink
          to={"/history"}
          className={({ isActive }) =>
            isActive
              ? "text-defaultGreen dark:text-defaultGreen  "
              : "text-black dark:text-white"
          }
        >
          <span className="menu-2 text-center  text-base font-medium leading-6">
            History
          </span>
        </NavLink>
        <NavLink
          to={"/Statistics"}
          className={({ isActive }) =>
            isActive
              ? "text-defaultGreen  dark:text-defaultGreen "
              : "text-black dark:text-white"
          }
        >
          <span className="menu-3 text-center  text-base font-medium leading-6">
            Statistics
          </span>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
