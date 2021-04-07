import React, {useContext, useState, useEffect} from 'react';
import {DataContext} from './dataContext';
import './assets/style.sass';

import Product from './components/product';
import Cart from './components/cart';
import Loader from './components/loader';

function App() {
  const {isLoading} = useContext(DataContext);
  const {setIsLoading} = useContext(DataContext);
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
        !isLoading ? (
          <React.Fragment>
            <Product product={product}/> 
            <Cart/>
          </React.Fragment> 
        ): <Loader/>
      }       
    </div>
  );
}

export default App;
