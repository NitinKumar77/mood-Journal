import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/header/Header";
import Modal from "../components/modal/Modal";

import { useModalContext } from "../context/ModalContext";
import Notification from "../components/notification/Notification";
import { useNotificationContext } from "../context/NotificationContextProvider";
import SignUpModal from "../components/signupModal/SignUpModal";

function Root() {
  const { isModalOpen, isSignupModalOpen } = useModalContext();
  const { showNotification } = useNotificationContext();
  const token = useLoaderData();
  console.log(token);
  return (
    <div className="w-full">
      {!isSignupModalOpen && <Header />}
      <Outlet />
      {<SignUpModal />}
      {isModalOpen && <Modal />}
      {showNotification && <Notification />}
    </div>
  );
}

export default Root;
