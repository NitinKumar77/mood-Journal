import React, { useEffect, useState } from "react";
import { useNotificationContext } from "../../context/NotificationContextProvider";

function Notification() {
  const { showNotification, message, type } = useNotificationContext();
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    let interval;

    if (showNotification) {
      interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress === 0 ? 0 : prevProgress - 1
        );
      }, 30);
    } else {
      setProgress(100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [showNotification]);

  if (!showNotification) {
    return null;
  }

  const notificationBackgroundColor =
    type === "success" ? "bg-green-500" : "bg-red-500";
  const notificationTextColor =
    type === "success" ? "text-white" : "text-white";

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`flex items-center p-4 rounded-lg shadow-md ${notificationBackgroundColor} ${notificationTextColor}`}
      >
        <div className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {type === "success" ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            )}
          </svg>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">
            {type === "success" ? "Success!" : "Error!"}
          </h4>
          <p>{message}</p>
        </div>
      </div>
      <div
        className={`relative h-2 mt-2 ${notificationBackgroundColor}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default Notification;
