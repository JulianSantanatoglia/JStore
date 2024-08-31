import { useState, useEffect } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/dbConnection"
import { useCartContext } from "../../context/CartContext"
import ItemList from '../ItemList/ItemList'
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { Spinner } from '../Spinner/Spinner'
// import ModalCart from '../ModalCart/ModalCart'




const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    const [loading, setLoading] = useState(true);
    const { titulo, titulo2 } = useCartContext();

    let titleToShow = titulo + " " + titulo2;


    useEffect(() => {
        setLoading(true);
        let productsCollection = collection(db, "productos")
        
        if(categoryId) {
        productsCollection = query(productsCollection, where("category", "array-contains", categoryId));
        }

        getDocs(productsCollection)
            .then(({docs}) => {
            const prodFromDocs = docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setProducts(prodFromDocs)
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error en el getting: ', error);
        });

    }, [categoryId]);

    return (
        <>
        {/* <div>Titulo?: {titleToShow}</div> */}
        { loading 
        ? <Spinner />
        : <ItemList products={products}/>}
        {/* <ModalCart /> */}
        </>
    );
};



export default ItemListContainer





// const ItemListContainer = ({  }) => {
//     const [products, setProducts] = useState([])

//     const { categoryId } = useParams()

//     useEffect (()=> {
//         const asyncFunc = categoryId ? getProductsByCategory : getProducts  

//         asyncFunc(  )
//             .then((response) => {
//             setProducts(response)
//         })
//             .catch((error) => {
//                 console.error(error)
//         })
//     }, [categoryId])

//     return (
//         <div>
//             <ItemList products={products}/>
//         </div>
//     )
// }


// export default ItemListContainer

