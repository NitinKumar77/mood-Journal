import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Modal from "../components/modal/Modal";

import { useModalContext } from "../context/ModalContext";

function Root() {
  const { isModalOpen } = useModalContext();
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      {isModalOpen && <Modal />}
    </div>
  );
}

export default Root;
