import { createContext, useContext, useState } from "react";

const useModalSource = () => {
  const [showModal, setShowModal] = useState(false);
  const [senderName, setSenderName] = useState("");

  const closeModal = () => {
    setShowModal(false);
    setSenderName("");
  };

  const openModal = (name) => {
    setShowModal(true);
    setSenderName(name);
  };

  return { showModal, senderName, closeModal, openModal };
};

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  return (
    <ModalContext.Provider value={useModalSource()}>
      {children}
    </ModalContext.Provider>
  );
};
