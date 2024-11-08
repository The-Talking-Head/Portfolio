//use rafc to create a function skleleton.

import Link from 'next/link';
import React from 'react';

const navbar = () => {
  return (
    <nav>
        <div className="flex flex-wrap item-center justify-between mx-auto p-8">
            <Link href={"/"} className='trext-5xl text-white font-semibold'> 
                LOGO 
            </Link>
            <div className="menu"></div>
        </div>
    </nav>
  )
}

export default navbar