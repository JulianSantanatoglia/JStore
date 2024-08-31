    import './Cart.css'
    import { useCartContext } from "../../context/CartContext";
    import { Table } from "react-bootstrap";
    import { useState } from "react";
    import { addDoc, collection } from "@firebase/firestore";
    import { db } from "../../firebase/dbConnection"


    const Cart = () => {
    const { cart, total, removeItem, clearCart } = useCartContext();

    const [formData, setFormData] = useState({name:"", tel:"", email:""});

    
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
        console.log("Saving in database")
        console.log("formdata", formData)
        console.log("cart", cart)
        
        const ordersCollection = collection(db, "orders")
        const newOrder = {
        buyer: formData,
        items: cart,
        date: new Date(),
        total: total
        }

        addDoc(ordersCollection, newOrder)
        .then((doc)=>{
            alert("Tu compra ha sido generada con el siguiente indentificador: " + doc.id)
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
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acción</th>
            </tr>
        </thead>
        <tbody>
            {cart?.map(({ id, name, price, qty }) => {
            return (
                <tr key={id}>
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
        <button className="button-limpiar" onClick={handleClearCart}>Vaciar🗑️</button>


        <div className="contenedor-form">
        <div className='flex-formu'>
        <h3 className='subtitulo-form'>Completa el formulario para terminar la compra</h3>
        <label className='clase-padding prop-tipo' htmlFor="term">Ingresa tu nombre</label>
        <input className="form-contact" type="text" name="name" id="name" placeholder="Julián Santanatoglia" onChange={(e)=> handleOnChange(e)}/>
        </div>
        <div className='flex-formu'>
        <label className='clase-padding prop-tipo' htmlFor="term">Ingresa tu telefono</label>
        <input className="form-contact" type="number" name="tel" id="tel" placeholder="671 000 000" onChange={(e)=> handleOnChange(e)}/>
        </div>
        <div className='flex-formu'>
        <label className='clase-padding prop-tipo' htmlFor="term">Ingresa tu email</label>
        <input className="form-contact" type="email" name="email" id="email" placeholder="julian@prueba.com" onChange={(e)=> handleOnChange(e)}/>

        <button className="form-contact button-finalizar" onClick={handleSaveCart}>Finalizar compra</button>
        </div>
        </div>
    </>
    )
    }


    export default Cart 