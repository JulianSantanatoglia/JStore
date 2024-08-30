import { useState, useEffect } from 'react'
import { getProducts } from '../../utils/fetchData'
import ItemList from '../ItemList/ItemList'
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({  }) => {
    const [products, setProducts] = useState([])
    const [cat, setCat] = useState("todos")
    const { categoryId } = useParams()

    useEffect(() => {
        getProducts(categoryId)
        .then((res)=>{
            setProducts(res);
        })
        .catch((err)=>{})
        .finally(()=> {
        });
    }, [categoryId]);

    return (
        <>
        <div>
            <ItemList products={products}/>
        </div>
        </>
    )
}



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

