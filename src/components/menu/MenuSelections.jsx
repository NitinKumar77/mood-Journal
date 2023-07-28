import { Menu } from "@headlessui/react";
import { useState } from "react";

export default function MenuSelections() {
  const [selectedOption, setSelectedOption] = useState("Last Month");

  return (
    <div className="relative">
      <Menu as="div" className="inline-block text-left">
        <div>
          <Menu.Button
            className="text-black font-Outfit text-base 
         font-semibold leading-6 inline-flex w-full rounded-md bg-white px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            {selectedOption} {/* Show the selected option in the button */}
          </Menu.Button>
        </div>

        <Menu.Items className="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setSelectedOption("Last Week")}
                  className={`${
                    active ? "bg-defaultGreen text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Last Week
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setSelectedOption("Last Month")}
                  className={`${
                    active ? "bg-defaultGreen text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Last Month
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setSelectedOption("Last Year")}
                  className={`${
                    active ? "bg-defaultGreen text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Last Year
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setSelectedOption("All Time")}
                  className={`${
                    active ? "bg-defaultGreen text-white" : "text-gray-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  All Time
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
