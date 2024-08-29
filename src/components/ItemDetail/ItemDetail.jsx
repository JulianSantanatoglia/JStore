import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

import { CartContext } from '../../context/CartContext'


const ItemDetail = ({ id, name, img, category, price, description, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

    const item = {
        id, name, price
    }

    addItem(item, quantity)
    }

    return (
        <div className="card-container">
        <img className="camiseta-producto" src={img} alt={name} />
        <h2 className="card-header">{name}</h2>
        <p className="card-text card-price">€{price} <span className="card-text descuento-precio">100€</span></p>
        <p className="card-text card-price texto-pequeño">Categoria: {category}</p>
        <p className="card-text card-price texto-pequeño">Stock: {stock}</p>
        <p className="card-text card-price texto-pequeño">{description}</p>
        <div>
            {
                quantityAdded > 0 ? (
                    <Link to='/cart' className='Option agregar-carrito'>Terminar la compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }
        </div>
        </div>
    )
}



export default ItemDetail