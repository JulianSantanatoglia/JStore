import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../utils/fetchData'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams()
    console.log("id", id)
    useEffect(() => {
        getProductById(id)
            .then((res) => {
                setProduct(res);
            })
            .catch((err) => {
            })
            .finally(() => {
            })
    }, [id])

    return(
        <>
        <div>
            <ItemDetail product={product}/>
        </div>
        </>
    )
}

export default ItemDetailContainer