import './ItemDetailContainer.css'
import { useEffect, useState } from 'react'
import { getProductById } from '../../utils/fetchData'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { Spinner } from '../Spinner/Spinner'



const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams()

    useEffect(() => {
        setLoading(true);
        getProductById(id)
        .then((res)=>{
            setProduct(res);
        })
        .catch((err)=>{
            console.log(err);
        })
        .finally(()=> {
        setLoading(false);
        });
    }, [id]);

    return(
        <>
        { loading 
        ? <Spinner />
        : <ItemDetail {...product} />}
        </>
    )
}

export default ItemDetailContainer
