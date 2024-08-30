import { useState } from "react";
import './ItemCount.css';
import { useNavigate }  from "react-router-dom";

const ItemCount = ({ stock, initial, handleOnBuy }) => {

    const navigate = useNavigate();
    const [qty, setQty] = useState(initial);
      const [itemAdded, setItemAdded] = useState(false);


    const handleClick = (op) => {
        op === "-" ? clickMenos() : clickMas();
    };

    const clickMenos = () => {
        if (qty === 1) {
        alert("No se puede seleccionar menos de 1 producto");
        return;
        }
        setQty(qty - 1);
    };

    const clickMas = () => {
        if (qty === stock) {
        alert("No hay mas stock");
        return;
        }
        setQty(qty + 1);
    };

    const handleAddToCart = () => {
        handleOnBuy(qty)
        setItemAdded(true)
    } 


    const handleGoToCheckout = () => {
        setItemAdded(false)
        navigate("/cart")
    }

    return (
        <> 
        {itemAdded ? (
        <button variant="primary" className="agregar-carrito" onClick={handleGoToCheckout}>Checkout</button>
        ) : (
        <>
            <div className="count-container">
            <button className="item-count" onClick={() => handleClick("-")}>-</button>
            <span className="number-count">{qty}</span>
            <button className="item-count" onClick={() => handleClick("+")}>+</button>
            </div>
            <button variant="primary" className="agregar-carrito" onClick={handleAddToCart}>Agregar al carrito</button>
        </>
        )}
    </>
    );
};

export default ItemCount;

