export const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <dialog className="modal" open>
          <div className="modal__content">{children}</div>
        </dialog>
      )}
    </>
  );
};
