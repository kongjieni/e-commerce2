import React from 'react'
import ProductCard from './ProductCard'

function Content(props) {

  const showContent = () => {return props.products.map(product => {return(<ProductCard key={product.id} product={product}  setSelectedProduct={props.setSelectedProduct}/>)})}

  return (
    <div className='grid grid-cols-3 gap-4 font-mono h-screen w-screen'>
      {showContent()}
    </div>
  )
}

export default Content
