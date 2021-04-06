import React, {useState, useEffect} from 'react';

import Product from './components/product';
import Loader from './components/loader';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);
  
  useEffect(()=>{
    fetch('https://fe-assignment.vaimo.net/' )
    .then(res => res.json())
    .then(data => {
      if(data.success){
        console.log(data);
        setProduct(data.product);
        setIsLoading(false)
      } 
    })
  }, []);

  return (
    <div className="App">
      {
        isLoading ? <Loader/> :  <Product product={product}/>
      }
    </div>
  );
}

export default App;
