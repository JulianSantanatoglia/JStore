import { useState, useEffect } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/dbConnection"
import ItemList from '../ItemList/ItemList'
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { Spinner } from '../Spinner/Spinner'
// import ModalCart from '../ModalCart/ModalCart'




const ItemListContainer = ({  }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        const productsCollection = collection(db, "productos")

        if (categoryId) {
            const productsCollectionFiltered = query(productsCollection, where("category", "array-contains", categoryId));
            getDocs(productsCollectionFiltered)
            .then(({docs}) => {
                const prodFromDocs = docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProducts(prodFromDocs)
                setLoading(false);
            })
            .catch((error) => {
            });
        } else {
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
            });
        }

    }, [categoryId]);

    return (
        <>
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

