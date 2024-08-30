import { useState, useEffect } from 'react'
import { getProducts } from '../../utils/fetchData'
import ItemList from '../ItemList/ItemList'
import '../ItemListContainer/ItemListContainer.css'

// import { useParams } from 'react-router-dom'

const ItemListContainer = ({  }) => {
    const [products, setProducts] = useState([])

    const [cat, setCat] = useState("todos")

    useEffect(() => {
        getProducts(cat)
        .then((res)=>{
            setProducts(res);
        })
        .catch((err)=>{})
        .finally(()=> {
        });
    }, [cat]);

    return (
        <>
            <div className="boton-contenedor">
        <button className='boton-filtro' onClick={()=> setCat("todos")}>Set Cat = Todos</button> 
        <button className='boton-filtro' onClick={()=> setCat("america")}>Set Cat = America</button>
        <button className='boton-filtro' onClick={()=> setCat("europa")}>Set Cat = Europa</button> 
        </div>
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

