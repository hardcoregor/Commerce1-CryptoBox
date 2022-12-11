import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { logo } from '../assets';
import Button from './Button';

const Navbar = ({ showModal }) => {
  const [first, setfirst] = useState(false);

  const changeWal = () => {
    setfirst(true);
  };

  return (
    <div className="flex items-center justify-between border-b border-nft-gray-3">
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
        {!first ? (
          <Button name="Подключить кошелек" classStyle="font-inter" handleClick={changeWal} />
        ) : (
          <a href="account">
            <Button name="Аккаунт" classStyle="font-inter" handleClick={changeWal} link="account" />
          </a>
        )}

      </div>
    </div>
  );
};

export default Navbar;
