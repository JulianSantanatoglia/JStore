import './ItemDetailContainer.css'
import { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { Spinner } from '../Spinner/Spinner'
import { db } from '../../firebase/dbConnection'
import { collection, getDoc, doc } from 'firebase/firestore';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams()

    useEffect(() => {
        setLoading(true);
        const productsCollection = collection(db, "productos");
        const refDoc = doc(productsCollection, id)

        getDoc(refDoc)
            .then((doc) => {
                setProduct({id: doc.id, ...doc.data()})
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
            })

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
