import './CardProduct.css';
import { Link } from 'react-router-dom'


const CardProduct = ({ id, name, img, category, price, stock }) => {


    return (
        <div className="card-container">
        <img className="camiseta-producto" src={img} alt={name} />
        <h2 className="card-header">{name}</h2>
        <p className="card-text card-price">€{price} <span className="card-text descuento-precio">100€</span></p>
        {/* <p className="card-text card-price texto-pequeño">Categoria: {category}</p> */}
        <p className="card-text card-price texto-pequeño">Stock: {stock}</p>
        <Link to={`/item/${id}`} className="Option agregar-carrito">Ver Detalle</Link>
        </div>

    )
}



export default CardProduct


