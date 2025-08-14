import { useModal } from "@/context/ModalContext";
import { useEffect } from "react";

const Modal = () => {
  const { senderName, closeModal } = useModal();

  useEffect(() => {
    window.addEventListener("scroll", closeModal);
    return () => window.removeEventListener("scroll", closeModal);
  }, [closeModal]);

  return (
    <>
      <div
        className="bg-opacity-50 block w-full h-screen fixed top-0 left-0 bg-slate-950 z-20"
        onClick={closeModal}
      />
      <div className="bg-light-body dark:bg-dark max-w-lg w-full p-6 rounded-lg z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="space-y-3 mb-8">
          <h3 className="text-lg lg:text-xl font-montserrat font-semibold capitalize text-primary">
            Message Sent!
          </h3>
          <p className="paragraph-text">
            Thank you{" "}
            <span className="text-primary font-medium">{senderName}</span>, for
            your submission. We appreciate your effort and the time you took to
            share your message.
          </p>
        </div>
        <div className="text-right">
          <button className="btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
