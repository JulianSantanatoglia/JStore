import './ItemDetail.css'


const ItemDetail = ({product}) => {
    const {id, name, description, price, image, stock} = product;
    return (
        <div className="card-container centrar-imagen">
        <img className="camiseta-producto" src={image} alt={name} />
        <h2 className="card-header">{name}</h2>
        <p className="card-text card-price">€{price} <span className="card-text descuento-precio">100€</span></p>
        <p className="card-text card-price texto-pequeño">Stock: {stock}</p>
        <p className="card-text card-price texto-pequeño">{description}</p>
        </div>
    )
}



export default ItemDetail