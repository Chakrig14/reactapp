import "../productcard/index.css"

const ProductCard = props => {
    const {productDetails} = props
    const {brand,imageUrl,price,rating,title} = productDetails
    return(
        <div className="card">
            <img src={imageUrl} alt={title} className="product-image"/>
            <div className="card-content">
            <h4 className="product-title">{title}</h4>
            <p className="product-brand">by {brand}</p>
            <div className="product-pandr">
            <p className="product-price">Rs.{price}/-</p>
            <div className="rating">
            <p className="product-rating">{rating}</p>
            <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
            />
            </div>
            </div>
            </div>
        </div>
    )
}

export default ProductCard