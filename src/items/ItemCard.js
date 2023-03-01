import React from "react";
import './ItemCard.css';


function ItemCard({products, searchTerm, setCart}){

  const handleClick = (id) => {

    // implicit return of an object
    setCart((cart) => ({
      ...cart, [id]: (cart[id] || 0) + 1
    }));

  }

  
  return(
    <div className="item-cards">

    {products.map(product =>
      <div key={product.id} className="card">
          <p><b>{product.title}</b></p>
          <img src={product.image} alt="product" width="100px" height="100px"/>
          <p>${product.price}</p>
          <button onClick={() => handleClick(product.id)}>Add to cart</button>
      </div>
    )}


    </div>
  )

}

export default ItemCard;