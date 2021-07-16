import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductPage({ product }) {

  return (
    <div className='from-white to-gray-500 flex flex-col items-center justify-center w-screen h-screen'>
      <img src={product.img} alt={product.name} className='w-7/12 h-3/6 p-6 m-4'></img>
      <div className='text-4xl m-4 italic'>"{product.desc}"</div>
      <div className='text-3xl m-4'>${product.price}</div>
      <div className='text-2xl m-4'>Sold out</div>
      <Link className='relative bottom-0 m-20' to='/content'>Go back</Link>
    </div>
  )
}
