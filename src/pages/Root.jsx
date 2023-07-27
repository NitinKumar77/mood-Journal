import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
// import Modal from "../components/modal/Modal";

function Root() {
  // let [isOpen, setIsOpen] = useState(true);

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }
  return (
    <div>
      <Header />
      <Outlet />
      {/* {isOpen && (
        <Modal closeModal={closeModal} openModal={openModal} isOpen={isOpen} />
      )} */}
    </div>
  );
}

export default Root;
