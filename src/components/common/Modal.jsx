import useStore from '@/store';

const Modal = () => {
  const senderName = useStore((state) => state.senderName);
  const closeModal = useStore((state) => state.closeModal);

  return (
    <div className='bg-opacity-40 block w-full h-screen fixed top-0 left-0 bg-slate-950 z-20'>
      <div className='size-full flex-center'>
        <div className='bg-light-body dark:bg-dark max-w-lg w-full p-6 rounded-lg'>
          <div className='space-y-3 mb-8'>
            <h3 className='text-lg lg:text-xl font-montserrat font-semibold capitalize text-primary'>
              Message Sent!
            </h3>
            <p className='paragraph-text'>
              Thank you{' '}
              <span className='text-primary font-medium'>{senderName}</span>,
              for your submission. We appreciate your effort and the time you
              took to share your message.
            </p>
          </div>
          <div className='text-right'>
            <button className='btn' onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
