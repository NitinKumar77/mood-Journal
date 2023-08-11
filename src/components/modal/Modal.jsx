import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardData } from "../vectorOptionsData";
import MiniCard from "../card/MinICard";

import { postMoodListThunk } from "../../redux/moodSlice";
import { useModalContext } from "../../context/ModalContext";
import Spinner from "../spinner/Spinner";
import { useNotificationContext } from "../../context/NotificationContextProvider";

export default function Modal() {
  const { isModalOpen, closeModal } = useModalContext();
  const { notificationHandler } = useNotificationContext();

  const isSending = useSelector((state) => state.mood.isSending);
  const sendDataStatus = useSelector((state) => state.mood.sendDataStatus);
  const dispatch = useDispatch();
  const [moodData, setMoodData] = useState({});
  const [highlightedCard, setHighlightedCard] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);
  const sendDataHandler = () => {
    if (
      moodData.hasOwnProperty("mood") &&
      moodData.hasOwnProperty("description")
    ) {
      setMoodData({});
      dispatch(postMoodListThunk(moodData));
      notificationHandler({
        type: sendDataStatus,
        message:
          sendDataStatus === "success"
            ? "Data Registered Successfully"
            : "Data Registration Error",
      });
      closeModal();
    }
  };

  const handleTextAreaChange = (event) => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        setMoodData((prevMoodData) => ({
          ...prevMoodData,
          description: event.target.value,
        }));
      }, 1000)
    );
  };
  const setMoodHandler = (data) =>
    setMoodData((moodData) => ({
      ...moodData,
      mood: data,
    }));

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-30 "
          onClose={() => closeModal()}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
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
                <Dialog.Panel className="flex max-w-[49.5rem]  p-6 flex-col items-start gap-4 flex-shrink-0 w-full  transform overflow-hidden rounded-2xl bg-[#F0F8F8] dark:bg-[#27272A] dark:text-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className={"flex flex-col w-full gap-3"}
                  >
                    {" "}
                    <div className="flex justify-between">
                      <div className=" text-center self-center text-2xl p-2 w-full font-extrabold ">
                        Register Mood
                      </div>
                      <button onClick={() => closeModal()}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          className="fill-current dark:text-white text-defaultGreen  "
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.004 11.228a1.248 1.248 0 0 1-.883-2.133l7.986-7.987a1.248 1.248 0 1 1 1.767 1.766l-7.987 7.987a1.24 1.24 0 0 1-.883.367Z"
                            clipRule="evenodd"
                          />
                          <path
                            fillRule="evenodd"
                            d="M9.994 11.233c-.32 0-.64-.122-.883-.367L1.117 2.871a1.248 1.248 0 1 1 1.767-1.767L10.877 9.1a1.248 1.248 0 0 1-.883 2.134Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className=" text-center text-base font-normal ">
                      Select your mood and write what you are feeling.
                    </div>
                    <div className="  text-base font-semibold ">
                      How are you feeling?
                    </div>
                  </Dialog.Title>

                  <div className="flex mt-2  flex-col gap-[0.65rem] w-full">
                    <div className="w-full">
                      <div className=" flex justify-evenly w-full gap-[1.25rem] mt-[0.63rem] max-md:gap-[1.1rem ] max-sm:gap-[0.55rem] ">
                        {!isSending &&
                          cardData.map((data) => (
                            <MiniCard
                              onclickHandler={setMoodHandler}
                              isHighlighted={highlightedCard === data.text}
                              setHighlightedCard={setHighlightedCard}
                              icon={data.icon}
                              text={data.text}
                              key={data.text}
                            />
                          ))}
                      </div>
                    </div>
                    {!isSending && (
                      <textarea
                        placeholder="Write here relevant thoughts, reflections or feelings"
                        className="resize-none rounded-md px-[0.8125rem] py-[0.75rem] w-full min-h-[8.3rem] placeholder:text-gray-400 text-gray-400 dark:bg-[#3F3F46]  placeholder:text-base text-base placeholder:leading-6 leading-6 placeholder:tracking-[0.025rem] tracking-[0.025rem] placeholder:p-10 focus-visible:outline-none"
                        onChange={handleTextAreaChange}
                        disabled={isSending}
                      ></textarea>
                    )}
                    {isSending && <Spinner />}
                    <div className=" w-full">
                      <button
                        type="button"
                        className="flex justify-center w-full text-white disabled:bg-gray-400 disabled:text-slate-400 text-[0.875rem]/[1.25rem]  rounded-md  focus-visible:outline-none  bg-defaultGreen px-4 py-3  hover:bg-spinnerLight tracking-[.025rem]"
                        onClick={sendDataHandler}
                        disabled={isSending}
                      >
                        Send
                      </button>
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
