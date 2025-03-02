export const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <dialog className="modal" onClick={(e) => {e.stopPropagation()}}  open>
          <div className="modal__content">{children}</div>
        </dialog>
      )}
    </>
  );
};
