import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'

const ItemDetail = ({id, name, description, price, image, stock}) => {
    const { addToCart } = useCartContext();

    const handleOnBuy = (qty) => {
        const item = { id, name, description, price};
        addToCart(item, qty);
    }
    return (
        <div className="card-container centrar-imagen">
        <img className="camiseta-producto" src={image} alt={name} />
        <h2 className="card-header">{name}</h2>
        <p className="card-text card-price">€{price} <span className="card-text descuento-precio">100€</span></p>
        <p className="card-text card-price texto-pequeño">Stock: {stock}</p>
        <p className="card-text card-price texto-pequeño">{description}</p>
        <ItemCount stock={stock} initial={1} handleOnBuy={handleOnBuy} />
        </div>
    )
}



export default ItemDetail