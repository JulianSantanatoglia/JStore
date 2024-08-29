import IconTrash from "../IconTrash/IconTrash";
import './ModalCart.css';
// import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ModalCart = () => {
    return (
        <div className="modal-container">
        <p className="modal-vacio">Tu carrito está vacio</p>
        {/* <ItemDetailContainer /> */}
        <IconTrash />
        </div>
    )
}


export default ModalCart