import { createContext, useContext, useState } from "react";

const ModalContext = createContext();
export const useModalContext = () => useContext(ModalContext);

export function ModalContextProvider({ children }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}
