import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product, setSelectedProduct }) {
  return (
    <div className='flex bg-gray-50 p-6 text-center justify-center items-center flex-col w-34' onClick={() => setSelectedProduct(product)}>
      <Link to={`/product/${product.id}`}><img className='w-30 h-24 mb-4'src={product.img}></img></Link>
      <h2 className='p-4'>{product.name}</h2>
      <h3>${product.price}</h3>
    </div>
  )
}
export default ProductCard
