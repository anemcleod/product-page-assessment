import React, {useState} from 'react';

const Qty = ({min, max}) => {
    const [quantity, setQuantity] = useState(min);
    console.log(quantity)
    const count = (e) => {
       setQuantity(e.target.value); 
    };

   const decrement = (e) => {
       e.preventDefault();
        setQuantity(prevState => {
            if(prevState > 0){
                return prevState-1;
            } 
            return prevState   
        });
   };

    const increment = (e) => {
        e.preventDefault();
        setQuantity(prevState => {
            if(prevState < 3){
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
                -
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
                +
            </button>
        </form>
    )
}

export default Qty