import cart from './assets/cart.svg'
import { useCartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { qtyItems } = useCartContext();
    
    return (
        <>
            <Link to={`/cart`}>
            <img className="icono-cart" src={cart} alt="cart-widget"/>
            </Link>
            <p className='texto-cart'>{ qtyItems }</p>

        </>
    )
}

export default CartWidget