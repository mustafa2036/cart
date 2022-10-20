import React, { useState } from "react";
import "./App.css";
import Cart from "./Cart";
import Products from "./Products";

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart'

function App() {
  const [cart , setCart] = useState([]);
  const [page , setPage] = useState(PAGE_PRODUCTS);
  
  const addToCart = (product) => {
    setCart([...cart, {...product}]);
  };
  
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove))
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }


  return (
    <div className="App">
      <header>
        <button onClick={()=> navigateTo(PAGE_CART)}>Go to Cart ({cart.length})</button>
        <button onClick={()=> navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>
      {page === PAGE_PRODUCTS && ( <Products addToCart={(product) => addToCart(product) }/> )}
      {page === PAGE_CART && ( <Cart cart={cart} removeFromCart={(product) => removeFromCart(product)}/> )}
    </div>
  );
}

export default App;
