import React from 'react'
import './modal.css'

const Modal = ({ children, open, closeModal }) => {
    const handleModalContainerClick = (e) => e.stopPropagation();

    return (
        <article className={`modal ${open && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>
            <button className="modal-close" onClick={closeModal}> X </button>
            {children}
            </div>
        </article>
        );
    };
    
export default Modal;