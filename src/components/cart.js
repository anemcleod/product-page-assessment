import React, {useContext, useEffect} from 'react';
import {DataContext} from '../dataContext';

import info from '../assets/icons/info.png';
import mail from '../assets/icons/mail.png';

const Cart = () => {
    const {cart, setCart} = useContext(DataContext);

    useEffect(()=>{
    //when cart updates, loop through products 
        for(let i = 0; i < cart.length; i++){  
            //if all selected quantities are 0 remove product from cart 
            if(cart[i].selected.every(item => item.qty === 0)){
                setCart(prevState => {
                    return prevState.filter((e)=> {
                        return e !== cart[i];
                    });
                })
            }
        }
    },[cart])

    return (
        <div className="product-cart-container">
            {
            cart.length > 0 ? (

                cart.map((product, index) => {
                    return (
                        <div key={index}>

                            {
                                product.selected.map((item, i) =>{
                                    if(item.qty > 0) {
                                        return (
                                            <div className="cart-item" key={i}>
                                                <div>{item.option.label}</div>
                                                <div>QTY {item.qty}</div>
                                                <div className="cart-item-price">{`${item.option.price.currency.symbol} ${(Math.round(item.option.price.value * item.qty * 100) / 100).toFixed(2)}`}</div>
                                            </div>
                                        )
                                    }

                                })
                            }
                            <div className="shipping-details shipping-method">
                                <div>Ship to <span>{product.shipping.method.country}</span> by <span>{product.shipping.method.title}</span></div>
                                <div className="shipping-price">{`${product.shipping.method.cost.currency.symbol} ${product.shipping.method.cost.value.toFixed(2)}`}</div>
                            </div>  

                            <div className="shipping-details shipping-lead" data-tooltip={product.shipping.lead_time.info}>
                                {`Lead time ${product.shipping.lead_time.value}`}
                                <img className="info shipping-lead-info"src={info} alt="info" />
                            </div>
                            
                            <div className="shipping-details shipping-time " data-tooltip={product.shipping.method.shipping_time.info}>
                                {`Shipping time ${product.shipping.method.shipping_time.value} `}
                                <img className="info shipping-time-info" src={info} alt="info" />
                            </div>
                        </div>
                    )
                })
                    
                ) : null
            }
            
            <div className="buttons-container">
                <button className="btn login-btn">Login to Purchase</button>
                <button className="btn contact-btn">
                    <img src={mail} alt="mail"/>
                    Contact the Supplier
                </button>
            </div>
        </div>
    )
}

export default Cart;