import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";

export default function Modal({ isModalOpen, modalOpen }) {
  const dispatch = useDispatch();
  return (
    <>
      <Transition appear show={modalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 "
          onClose={() => dispatch(isModalOpen(false))}
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="flex max-w-[49.5rem] max-h-[28.5rem] p-6 flex-col items-start gap-4 flex-shrink-0 w-full  transform overflow-hidden rounded-2xl bg-[#F0F8F8] text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className={"flex flex-col w-full gap-3"}
                  >
                    <div className=" text-center  text-2xl p-2 font-extrabold ">
                      Register Mood
                    </div>
                    <div className=" text-center text-base font-normal ">
                      Select your mood and write what you are feeling.
                    </div>
                    <div className="  text-base font-semibold ">
                      How are you feeling?
                    </div>
                  </Dialog.Title>
                  <div className="mt-2"></div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => dispatch(isModalOpen(false))}
                    >
                      Got it, thanks!
                    </button>
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
