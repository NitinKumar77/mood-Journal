import React, { createContext, useContext, useEffect, useState } from "react";

const notificationContext = createContext();
export const useNotificationContext = () => useContext(notificationContext);

function NotificationContextProvider({ children }) {
  const [showNotification, setShowNotification] = useState(false);
  const [type, setType] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
        setType(null);
        setMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const notificationHandler = ({ type, message }) => {
    console.log("=>", type, "=>", message);
    setType(type);
    setMessage(message);
    setShowNotification(true);
  };

  const values = { notificationHandler, showNotification, message, type };

  return (
    <notificationContext.Provider value={values}>
      {children}
    </notificationContext.Provider>
  );
}

export default NotificationContextProvider;
