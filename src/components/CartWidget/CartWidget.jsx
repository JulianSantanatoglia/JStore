import cart from './assets/cart.svg'
import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {
    const { qtyItems } = useCartContext();
    
    return (
        <>
            <img className="icono-cart" src={cart} alt="cart-widget"/>
            <p className='texto-cart'>{ qtyItems }</p>
        </>
    )
}

export default CartWidget