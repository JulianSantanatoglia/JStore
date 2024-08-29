import './ItemList.css'
import CardProduct from '../Card-product/CardProduct'

const ItemList = ({products }) => {
    return( 
        <div className='ListGroup flex-productos'>
            {products.map(prod => <CardProduct key={prod.id} {...prod} />)}
        </div>
    )
}


export default ItemList