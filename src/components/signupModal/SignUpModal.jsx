import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useModalContext } from "../../context/ModalContext";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { loginThunk } from "../../redux/loginslice";
import { useDispatch, useSelector } from "react-redux";
import { useNotificationContext } from "../../context/NotificationContextProvider";

export default function SignUpModal() {
  const dispatch = useDispatch();
  const { notificationHandler } = useNotificationContext();

  const [loginDetails, setLoginDetails] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { openSignupModal, closeSignupModal, isSignupModalOpen } =
    useModalContext();
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };
  useEffect(() => {
    setSearchParams("mode", "signup");
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "signin";
  const closeHandler = () => {
    closeSignupModal();
    navigate("/");
  };
  const sendDataHandler = (mode) => {
    if (
      loginDetails.hasOwnProperty("username") &&
      loginDetails.hasOwnProperty("password")
    ) {
      setLoginDetails({});
      dispatch(loginThunk(loginDetails, mode));

      closeSignupModal();
    }
  };
  const onChangeHandler = ({ target: { value, name } }) => {
    setLoginDetails((state) => ({ ...state, [name]: value }));
  };
  return (
    <>
      <Transition appear show={isSignupModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeHandler}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 dark:bg-black bg-white bg-opacity-100" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-[#19191B] p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg flex justify-center font-medium leading-6 text-gray-900"
                  >
                    <span className="logo self-center max-sm:text-2xl dark:text-white border-defaultGreen border-l-4 text-black font-Outfit text-4xl font-semibold leading-8">
                      Mood Journal
                    </span>{" "}
                  </Dialog.Title>
                  <div className="flex flex-col item1s-start gap-[0.625rem] rounded-md bg-[#F0F8F8] dark:bg-[#313134] mt-[1.44rem] p-6">
                    <div className="text-center  dark:text-white text-normal text-black text-xl font-semibold leading-6">
                      {" "}
                      {isLogin ? "Welcome Back!" : "Create Your Account"}{" "}
                    </div>
                    <input
                      name="username"
                      placeholder="Enter your username"
                      className=" py-[0.81rem] px-[0.75rem] resize-none rounded-lg  w-full placeholder:text-gray-400 text-gray-400 dark:bg-[#3F3F46]  placeholder:text-base text-base placeholder:leading-6 leading-6 placeholder:tracking-[0.0125rem] tracking-[0.0125rem] placeholder:p-3 focus-visible:outline-none"
                      onChange={onChangeHandler}
                    ></input>
                    <div className="relative">
                      <input
                        placeholder="Enter your password"
                        type={passwordVisible ? "text" : "password"}
                        className="py-[0.81rem] px-[0.75rem] resize-none rounded-lg w-full placeholder:text-gray-400 text-gray-400 dark:bg-[#3F3F46] placeholder:text-base text-base placeholder:leading-6 leading-6 placeholder:tracking-[0.0125rem] tracking-[0.0125rem] placeholder:p-3 focus-visible:outline-none pr-10"
                        onChange={onChangeHandler}
                        name="password"
                      />
                      <button
                        className="absolute top-0 right-0 h-full flex items-center px-4 text-gray-600"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? (
                          <BsFillEyeSlashFill size={20} />
                        ) : (
                          <BsFillEyeFill size={20} />
                        )}
                      </button>
                    </div>

                    <button
                      type="button"
                      className="flex justify-center w-full  text-white disabled:bg-gray-400 disabled:text-slate-400 text-[0.875rem]/[1.25rem]  rounded-md  focus-visible:outline-none  bg-defaultGreen px-4 py-3  hover:bg-spinnerLight tracking-[.025rem]"
                      onClick={() =>
                        sendDataHandler(isLogin ? "signin" : "signup")
                      }
                    >
                      {isLogin ? "Sign In" : "Sign Up"}
                    </button>
                    <div className="dark:text-white">
                      {!isLogin ? `Already a user ? ` : `New user ? `}
                      <Link
                        className="text-defaultGreen"
                        to={`?mode=${isLogin ? "signup" : "signin"}`}
                      >
                        {!isLogin ? " Sign In" : " Sign Up"}
                      </Link>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
