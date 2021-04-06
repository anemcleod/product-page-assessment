
import Qty from './qty';

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

                        <div className="product-reviews">
                            <div>dynamic new price range</div>
                            <div>/options <span>{Object.keys(product.options).length} Options</span> (Min.Order)</div>    
                            <div>dynamic old price range</div>
                        </div>

                        <div className="shipping-offers">
                            <div>icon</div>
                            <div>Free shipping (up to $40)</div>
                            <div>On-time delivery guaranteed</div>
                            <div>icon</div>
                        </div>

                        <div className="product-discount">
                            <div><span>{product.discount.amount} OFF</span></div>
                            <div>Discount ends in icon {product.discount.end_date}</div>
                        </div>

                        <div className="product-options">
                            <div>Options</div>
                            <div>
                                {
                                    Object.keys(product.options).map((option, index) => {
                                        return (
                                            <div className="product-option" key={index}>
                                                <div>{product.options[option].label}</div>
                                                <div>{`${product.options[option].price.currency.symbol} ${product.options[option].price.value}`}</div>
                                                <Qty
                                                    min={0}
                                                    max ={3}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="vendor-details">
                                <div><span>icon</span><span>Trade Assurance</span> protects your Alibaba.com orders</div>
                                <div>Payments: <span>icon</span><span>icon</span><span>icon</span></div>
                                <div>Alibaba.com Logistics</div>
                                <div>Inspection Solutions</div>
                            </div>
                        </div>
                </div>

                <div className="product-purchase-container">
                    <div className="shipping-method">
                        <div>Ship to <span>{product.shipping.method.country}</span> by <span>{product.shipping.method.title}</span></div>
                        <div>{`${product.shipping.method.cost.currency.symbol} ${product.shipping.method.cost.value}`}</div>
                    </div>  
                    <div className="shipping-lead">{`Lead time ${product.shipping.lead_time.value} icon`}</div>
                    <div className="shipping-time">{`Shipping time ${product.shipping.method.shipping_time.value} icon`}</div>

                    <div className="buttons-container">
                        <button>Login to Purchase</button>
                        <button>icon Contact the Supplier</button>
                    </div>
                
                </div>
        </div>
    )
}

export default Product