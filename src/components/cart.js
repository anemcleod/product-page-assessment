import React, {useContext, useEffect} from 'react';
import {DataContext} from '../dataContext';

import info from '../assets/icons/info.png';

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
                                                <div>{item.qty}</div>
                                                <div>{`${item.option.price.currency.symbol} ${(Math.round(item.option.price.value * item.qty * 100) / 100).toFixed(2)}`}</div>
                                            </div>
                                        )
                                    }

                                })
                            }
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