import React, {useState} from 'react';

import plus from '../assets/icons/plus.png';
import minus from '../assets/icons/minus.png';

const Qty = ({min, max}) => {
    const [quantity, setQuantity] = useState(min);
    console.log(quantity)
    const count = (e) => {
       setQuantity(e.target.value); 
    };

   const decrement = (e) => {
       e.preventDefault();
        setQuantity(prevState => {
            if(prevState > min){
                return prevState-1;
            } 
            return prevState   
        });
   };

    const increment = (e) => {
        e.preventDefault();
        setQuantity(prevState => {
            if(prevState < max){
                return prevState+1;
            }  
            return prevState  
        });
   };

    return (
        <form>
            <button 
                className={`count-btn ${quantity === min ? 'disabled' : ''}`}
                onClick={decrement}>
               <img src={minus} alt="minus"/>
            </button>
            <input 
                className="hide-button"
                onChange={count} 
                type="number"
                value={quantity}
                min={min} 
                max={max}/>
             <button 
                className={`count-btn ${quantity === max ? 'disabled' : ''}`}
                onClick={increment}>
                <img src={plus} alt="plus"/>
            </button>
        </form>
    )
}

export default Qty