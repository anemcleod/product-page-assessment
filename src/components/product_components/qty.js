import React, {useContext, useRef} from 'react';
import {DataContext} from '../../dataContext';

import plus from '../../assets/icons/plus.png';
import minus from '../../assets/icons/minus.png';


const Qty = ({min, max, step, product, option}) => {

    const {cart, setCart} = useContext(DataContext);
    const inputRef = useRef(min)
    
    const cartHandler = (num)=> {
        if(cart.length > 0){
            //loop through current cart 
            for(let i = 0; i < cart.length; i++){
                if(cart[i].name === product.name){
                //if product already exists in it
                    setCart(prevState => {
                        let copyCart = [...prevState];
                        for(let k = 0; k < copyCart[i].selected.length; k++){
                            if(copyCart[i].selected[k].option.label === option){
                                copyCart[i].selected[k].qty = num
                            };
                        }   
                        return copyCart;
                    });
                }
            } 
        } else {
            setCart(prevState => {
                let copyCart = [...prevState]
                let selectionArr = [];
                let productOptions = Object.keys(product.options);
                for(let v = 0; v < productOptions.length; v++){
                    let quantity = (product.options[productOptions[v]].label === option) ? num : 0;
                    selectionArr.push({
                        option: product.options[productOptions[v]],
                        qty: quantity,
                        price: product.options[productOptions[v]].price
                    });
                }
                copyCart.push({
                                name: product.name,
                                shipping: product.shipping,
                                selected: selectionArr
                                });
           
                 return copyCart;
          
            });
        } console.log(cart);  
    };

    const count = (e) => {
       cartHandler(e.target.value); 
    };

   const decrement = (e) => {
       e.preventDefault();
       console.log(option);
        if(inputRef.current > min){
            inputRef.current = inputRef.current-step;
            cartHandler(inputRef.current); 
        } 
   };

    const increment = (e) => {
        e.preventDefault();
        if(inputRef.current < max){
            inputRef.current = inputRef.current+step;
            cartHandler(inputRef.current); 
        } 
   };


    return (
        <form>
            <button 
                className={`count-btn ${inputRef.current === min ? 'disabled' : ''}`}
                onClick={decrement}>
               <img src={minus} alt="minus"/>
            </button>
            <input 
                className="hide-button"
                onChange={count}
                value={inputRef.current} 
                type="number"
                min={min} 
                max={max}/>
             <button 
                className={`count-btn ${inputRef.current === max ? 'disabled' : ''}`}
                onClick={increment}>
                <img src={plus} alt="plus"/>
            </button>
        </form>
    )
}

export default Qty