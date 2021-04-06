
import Qty from './qty';
import Vendor from './vendor';
import Offers from './shippingOffers';

import check from '../assets/icons/check.png';
import time from '../assets/icons/time.png';
import star from '../assets/icons/star.png';

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
                            {
                                product.shipping.props.ready_to_ship ? (
                                    <div>Ready to Ship</div>
                                ) : null 
                            }
                             {
                                product.shipping.props.in_stock ? (
                                    <div><img src={check}/>In Stock</div>
                                ) : null 
                            }
                             {
                                product.shipping.props.fast_dispatch ? (
                                    <div><img src={check}/>Fast Dispatch</div>
                                ) : null 
                            }
                           
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
                            <div>
                                <img src={star} alt="star"/>
                                <img src={star} alt="star"/>
                                <img src={star} alt="star"/>
                                <img src={star} alt="star"/>
                                <img src={star} alt="star"/>
                            </div>
                            <div>{product.reviews.rating}</div>
                            <div>{product.reviews.count} reviews</div>
                            <div>{product.reviews.total_buyers} buyers</div>
                        </div>

                        <div className="product-price">
                            <div>dynamic new price range</div>
                            <div>/options <span>{Object.keys(product.options).length} Options</span> (Min.Order)</div>    
                            <div>dynamic old price range</div>
                        </div>

                      < Offers />

                        <div className="product-discount">
                            <div><span>{product.discount.amount} OFF</span></div>
                            <div>Discount ends in <img src={time} alt="clock"/> {product.discount.end_date}</div>
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

                            <Vendor/>

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