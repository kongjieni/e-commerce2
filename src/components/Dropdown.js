import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-3 text-center items-center bg-black text-white transition transform ease-out duration-200 absolute w-screen'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to='/' className='p-4'>
        Home
      </Link>
      <Link to='/menu' className='p-4'>
        Login
      </Link>
      <Link to='/cart' className='p-4'>
        Cart
      </Link>
    </div>
  );
};

export default Dropdown
