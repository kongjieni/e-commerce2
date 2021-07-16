import React from 'react'
import { Link } from 'react-router-dom'

const Body = ({ toggle }) => {
  return (
    <div className="from-white to-gray-400 w-screen h-screen flex flex-col justify-center items-center bg-image bg-no-repeat bg-cover">
      <h1 className="text-gray-100 lg:text-8xl md:text-6xl sm:text-4xl font-black mb-14">
        Gamer's Utopia
      </h1>
      <Link className="text-black py-5 px-9 bg-yellow-500 rounded-full text-2xl hover:bg-yellow-300 transition ease-in-out flex items-center" to="/content" onClick={toggle}>
        Shop Now
      </Link>
    </div>
  )
}

export default Body
