import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({filter, handleAddToCart}) => {
  const filteredProducts = filter === "all"
  ?sampleProducts: sampleProducts.filter((product) => product.category === filter);

  if (filteredProducts.length === 0){
    return <p>No products available.</p>;
  }
  return (
    <div>
      <h2>Available Products</h2>

      
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} handleAddToCart= {handleAddToCart} />
      ))}
    </div>
  )
}

export default ProductList;
