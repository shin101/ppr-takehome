import React, {useState} from "react";

function Checkout({ addedToCart, setCart }){
  const [msg, setMsg] = useState(null);

  const handleClick = () => {
    setMsg("Checked out successfully")
    setCart({});

  }
  

  return(
    <>
    <p>Ready to check out?</p>
    <b>Items in your bag : </b>
    {/* {Object.entries(cart).map(([key,value]) => (<p><b>Item:</b> {key} <b>Qty:</b> {value}</p>))} */}

    {addedToCart.map(item => <p>{item}</p>)}

    <button onClick={handleClick}>Check out</button>
    <p>{msg}</p>

    </>
  )
}

export default Checkout;

