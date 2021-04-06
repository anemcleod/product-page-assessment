
const Product = ({product}) => {

    return (
        <div className="product-container">
                <div className="product-image-container">
                    {
                        product.gallery.map((image, index) => {
                            return (
                                <img src={image.main} key={index} alt="productgit "/>
                            )
                        })
                    }
                </div>

                <div className="product-details-container">
                        <div className="product-props">
                            <div>{product.shipping.props.ready_to_ship ? 'Ready to Ship' : null}</div>
                            <div>{product.shipping.props.in_stock ? 'tick ' : 'no '}In Stock</div>
                            <div>{product.shipping.props.fast_dispatch ? 'tick ' : 'no '}Fast Dispatch</div>
                        </div>

                        <div className="product-description">
                            {product.name}

                            {
                                product.tags.map((tag, index) => {
                                    return (
                                    <div className="product-tags" key={index}>
                                        {tag}
                                    </div>
                                 )
                                })
                            }
                        </div>

                        <div className="product-reviews">
                        <div>{product.reviews.rating}</div>
                        <div>{product.reviews.count} reviews</div>
                        <div>{product.reviews.total_buyers} buyers</div>
                        </div>
                </div>

                <div className="product-purchase-container">
                
                </div>
        </div>
    )
}

export default Product