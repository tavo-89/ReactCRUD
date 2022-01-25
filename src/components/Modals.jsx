import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import SongSearch from "./SongSearch";

const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
    const [isOpenSong, openModalSong, closeModalSong] = useModal(false);
    const [openModal, openModalPortal, closeModalPortal] = useModal(false)

    return (
        <div>
        <h2>Modales</h2>
        <button onClick={openModal1}>Modal 1</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <h3>Modal 1</h3>
            <p>Hola ese es el contenido de mi modal 1</p>
            <img src="https://placeimg.com/400/400/animals" alt="Animals" />
        </Modal>
        
        <button onClick={openModalContact}>Modal Contacto</button>
        <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
            <ContactForm />
        </Modal>
        <button onClick={openModalSong}>Modal Canciones</button>
        <Modal isOpen={isOpenSong} closeModal={closeModalSong}>
            <SongSearch />
        </Modal>

        <button onClick={openModalPortal}>Modal Portal</button>
        <Modal isOpen={openModal} closeModal={closeModalPortal}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos corrupti molestias voluptatum laboriosam recusandae omnis hic pariatur impedit nesciunt necessitatibus, nemo consequatur? Totam cum atque quaerat asperiores eius. Accusamus, dolorum!
            Eos quae nam ut id consectetur corporis! Nisi iure sit non, reprehenderit recusandae architecto enim a asperiores ea assumenda, cumque maxime ab maiores velit dolor quaerat voluptas! Rem, corrupti similique.
            Perferendis incidunt eum commodi blanditiis quas eos consectetur sapiente obcaecati beatae maiores cum, minus labore autem consequatur. Deserunt eaque molestiae porro harum recusandae! Fugit, veniam beatae odit voluptates totam dolorum?
            Quibusdam impedit soluta eveniet ipsa ullam numquam vitae autem. Nobis fugit eius, natus vero, id vel cumque, consectetur obcaecati voluptas possimus suscipit sunt voluptatum veniam porro velit. Veritatis, esse iste.
            Nisi inventore doloribus maxime! Dolorum eius quae quidem natus facilis sed amet. Odit ad minima culpa molestias obcaecati, totam laborum iste facere quas maiores earum perspiciatis consequuntur? Voluptatem, facilis hic.
            </p>
        </Modal>
        
        </div>
    );
};

export default Modals;