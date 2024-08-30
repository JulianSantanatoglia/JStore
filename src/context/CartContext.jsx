import { useState, useEffect, createContext, useContext } from 'react'

const CartContext = createContext();

export const { Provider } = CartContext;

export const useCartContext = () => {
    return useContext(cartContext)
}

const CartContextProvider = ({children}) => {
    
    const contextValue = {
        titulo: 'Aca va un titulo'
    }

    return (
        <Provider value={contextValue}>
        {children}
        </Provider>
    )
}


export default CartContextProvider;










// export const CartContext = createContext({
//     cart: []
// })

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([])
//     console.log(cart)

//     const addItem = (item, quantity) => {
//         if(!isInCart(item.id)) {
//             setCart(prev => [...prev, {...item, quantity}])
//         } else {
//             console.error('El producto ya fue agregado')
//         }
//     }

//     const removeItem = (itemId) => {
//         const cartUpdated = cart.filter(prod => prod.id !== itemId)
//         setCart(cartUpdated)
//     }

//     const clearCart = () => {
//         setCart([])
//     }

//     const isInCart = (itemId) => {
//         return cart.some(prod => prod.id === itemId)
//     }

//     return (
//         <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>  
//             { children }
//         </CartContext.Provider>
//     )
// }