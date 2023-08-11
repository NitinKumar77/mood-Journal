import { Menu } from "@headlessui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { dateListThunk } from "../../redux/moodSlice";

export default function MenuSelections() {
  const [selectedOption, setSelectedOption] = useState("Last Month");
  const dispatch = useDispatch();
  const optionsArr = [
    { label: "Week", value: "Last Week" },
    { label: "Month", value: "Last Month" },
    { label: "Year", value: "Last Year" },
    { label: "All", value: "All Time" },
  ];

  const MenuItem = ({ label, onClick }) => {
    return (
      <Menu.Item>
        {({ active }) => (
          <button
            onClick={onClick}
            className={`${
              active
                ? "bg-defaultGreen dark:bg-[#27272A] text-white"
                : "text-gray-900"
            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
          >
            {label}
          </button>
        )}
      </Menu.Item>
    );
  };

  return (
    <div className="relative">
      <Menu as="div" className="inline-block text-left">
        <div>
          <Menu.Button
            className="text-black dark:text-white font-Outfit text-base 
            font-semibold leading-6 inline-flex w-full rounded-md dark:bg-[#27272A] bg-white pr-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            {selectedOption}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="self-center"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.6667 5.92609C12.6667 6.08658 12.609 6.22547 12.4935 6.34276L8.4102 10.4909C8.29475 10.6082 8.15803 10.6668 8.00004 10.6668C7.84205 10.6668 7.70534 10.6082 7.58988 10.4909L3.50655 6.34276C3.3911 6.22547 3.33337 6.08658 3.33337 5.92609C3.33337 5.76559 3.3911 5.62671 3.50655 5.50942C3.622 5.39214 3.75872 5.3335 3.91671 5.3335H12.0834C12.2414 5.3335 12.3781 5.39214 12.4935 5.50942C12.609 5.62671 12.6667 5.76559 12.6667 5.92609Z"
                fill="#8E8EA9"
              />
            </svg>
          </Menu.Button>
        </div>

        <Menu.Items className="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            {optionsArr.map((option) => (
              <MenuItem
                key={option.value}
                label={option.label}
                onClick={() => {
                  setSelectedOption(option.value);
                  dispatch(dateListThunk(option.label));
                }}
              />
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
