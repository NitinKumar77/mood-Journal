import { createContext, useContext, useState } from "react";

const ModalContext = createContext();
export const useModalContext = () => useContext(ModalContext);

export function ModalContextProvider({ children }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openSignupModal = () => setSignupModalOpen(true);
  const closeSignupModal = () => setSignupModalOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        isSignupModalOpen,
        openSignupModal,
        closeSignupModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
