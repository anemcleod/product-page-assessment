import React, {useContext} from 'react';
import {DataContext} from '../dataContext';

import info from '../assets/icons/info.png';

const Cart = () => {
    const {cart, cartItems} = useContext(DataContext);
    return (
        <div className="product-cart-container">
            {
            cartItems ? (

                cart.map((product, index) => {
                    return (
                        <div key={index}>
                            <div className="shipping-method">
                                <div>Ship to <span>{product.shipping.method.country}</span> by <span>{product.shipping.method.title}</span></div>
                                <div>{`${product.shipping.method.cost.currency.symbol} ${product.shipping.method.cost.value}`}</div>
                            </div>  

                            <div className="shipping-lead">
                                {`Lead time ${product.shipping.lead_time.value}`}
                                <img src={info} alt="info" data-tooltip={product.shipping.lead_time.info}/>
                            </div>
                            
                            <div className="shipping-time">
                                {`Shipping time ${product.shipping.method.shipping_time.value} `}
                                <img src={info} alt="info" data-tooltip={product.shipping.method.shipping_time.info}/>
                            </div>
                        </div>
                    )
                })
                    
                ) : null
            }
            
            <div className="buttons-container">
                <button>Login to Purchase</button>
                <button>icon Contact the Supplier</button>
            </div>
        </div>
    )
}

export default Cart;