import React, {useState, useEffect, useMemo} from 'react';
import './App.css';
import ItemCard from './items/ItemCard';
import Checkout from './items/Checkout';
import axios from 'axios';


const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState({});


  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products?limit=10');
        setProducts(res.data);
      } catch (e){
        setError(e.message);
      }
    })();
    // IIFE 
  }, []);

  const addedToCart = useMemo(() => products.reduce((acc, p) => {
      if (cart[p.id]) {
        acc.push(`${p.title} : ${cart[p.id]}`);
      }

      return acc;
    }, []), [cart, products]);

  return (
    <div className="App">
      {error 
        ? <div>{error}</div> 
        : products.length 
        ? <ItemCard products={products} setCart={setCart} />
        : <p>Loading...</p>
      }

      <Checkout addedToCart={addedToCart} setCart={setCart} />
    </div>
  );
}

export default App;
