import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

const Modals = () => {
    const [open, openModal, closeModal] = useModal(false);
    

    return (
        <div>
        <h2>Modales</h2>
        <button onClick={openModal}>Modal 1</button>
        <Modal isOpen={open} closeModal={closeModal}>
            <h3>Modal 1</h3>
            <p>Hola ese es el contenido de mi modal 1</p>
            <img src="https://placeimg.com/400/400/animals" alt="Animals" />
        </Modal>
        </div>
    );
};

export default Modals;