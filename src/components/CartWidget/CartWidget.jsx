import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <>
            <img className="icono-cart" src={cart} alt="cart-widget"/>
            <p className='texto-cart'>5</p>
        </>
    )
}

export default CartWidget