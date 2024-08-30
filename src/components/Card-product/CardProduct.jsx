import './CardProduct.css';
import { Link } from 'react-router-dom'


const CardProduct = ({ id, name, price, stock, image }) => {
    // product.isStar = true
    return (
        <div className="card-container">
        <img className="camiseta-producto" src={image} alt={name} />
        <h2 className="card-header">{name}</h2>
        <p className="card-text card-price">€{price} <span className="card-text descuento-precio">100€</span></p>
        <p className="card-text card-price texto-pequeño">Stock: {stock}</p>
        <Link to={`/product/${id}`}>
        <button variant="primary" className="Option agregar-carrito">Ver detalle
        </button>
        </Link>
        </div>

    )
}



export default CardProduct


