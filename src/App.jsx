import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const[darkMode, setDarkMode] = useState(false);
  const[cart, setCart] = useState([]);
  const[filter, setFilter] = useState("all");

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      
      <label>Filter by Category: </label>
      <select
        value= {filter}
        onChange={(e) => 
          setFilter(e.target.value)}
      > <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList 
        filter= {filter}
        handleAddToCart = {handleAddToCart} 
      />

      <Cart cart= {cart} />

    </div>
  )
}

export default App;
