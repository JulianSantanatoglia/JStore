    import { useCartContext } from "../../context/CartContext";
    import { Table } from "react-bootstrap";
    import { useState } from "react";
    import { addDoc, collection } from "@firebase/firestore";
    import { db } from "../../firebase/dbConnection";

    const Cart = () => {
    const { cart, total, removeItem, clearCart } = useCartContext(); //cart es un array de productos en el carrito
    
    const [formData,setFormData] = useState({name:"", tel:"", email:""});
    const handleRemoveItem = (id, price, qty) => {
        removeItem(id, price, qty);
    };

    const handleClearCart = () => {
        clearCart();
    };
    const handleOnChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSaveCart = () => {

        const ordersCollection = collection(db, "orders")
        const newOrder = {
        buyer: formData,
        items: cart,
        date: new Date(),
        total: total
        }

        addDoc(ordersCollection, newOrder)
        .then((doc)=>{
            alert("Guardar orden con id: " + doc.id)
            clearCart();
            setFormData({name:"", tel:"", email:""})
        })
        .catch((error)=>{
            console.error("Error adding document: ", error)})
    }

    return (
        <>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {cart?.map(({ id, name, price, qty }, index) => {
            return (
                <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{qty}</td>
                <td>
                    <button onClick={() => handleRemoveItem(id, price, qty)}>
                    Eliminar producto
                    </button>
                </td>
                </tr>
            );
            })}
            <tr>
            <td colSpan={4}>Precio total</td>
            <td> $ {total}</td>
            </tr>
        </tbody>
        </Table>
        <button onClick={handleClearCart}>Limpiar carrito</button>

        <input type="text" name="name" id="name" placeholder="Ingrese su nombre" onChange={(e)=> handleOnChange(e)}/>
        <input type="number" name="tel" id="tel" placeholder="Ingrese su telefono" onChange={(e)=> handleOnChange(e)}/>
        <input type="email" name="email" id="email" placeholder="Ingrese su email" onChange={(e)=> handleOnChange(e)}/>
        <button onClick={handleSaveCart}>Finalizar Compra</button>
    </>
    )
    }


    export default Cart