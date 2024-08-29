import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)


    const increment = () => {
        if (quantity < stock ) {
            setQuantity(quantity+1)
        }
    };

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity -1)
        }
    }

    return (
        <div className="count-container">
            <button className="item-count" onClick={decrement}>-</button>
            <span className="number-count">{quantity}</span>
            <button className="item-count" onClick={increment}>+</button>
            <button className="agregar-carrito" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar</button>
        </div>
        
    );
}

export default ItemCount;

