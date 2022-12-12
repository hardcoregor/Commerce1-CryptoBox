import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { logo } from '../assets';
import Button from './Button';

const Navbar = () => {

  return (
    <div className="flex items-center justify-between border-b border-nft-gray-3 text-white">
      <div className="ml-10 cursor-pointer z-10">
        <Link href="/">
          <Image
            src={logo}
            objectFit="contain"
            width={108}
            height={63}
            alt="logo"
          />
        </Link>
      </div>
      <div className="mr-10">
        <Link href="account">
          <div className='text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-inter font-semibold rounded-3xl nft-gradient cursor-pointer'>Аккаунт</div>
        </Link>

      </div>
    </div>
  );
};

export default Navbar;
