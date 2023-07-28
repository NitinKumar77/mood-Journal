import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Modal from "../components/modal/Modal";
import { isModalOpen } from "../redux/moodSlice";
import { useSelector } from "react-redux";

function Root() {
  const modalOpen = useSelector((state) => state.mood.modalOpen);

  return (
    <div>
      <Header />
      <Outlet />
      {modalOpen && <Modal isModalOpen={isModalOpen} modalOpen={modalOpen} />}
    </div>
  );
}

export default Root;
