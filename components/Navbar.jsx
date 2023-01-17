import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { logo } from '../assets';
import { CryptoContext } from '../context/cryptoContext';
import Button from './Button';

const Navbar = ({ }) => {
  const connectionWallet = useSelector(state => state.provider.connection)
  const { loadWalletConnection } = useContext(CryptoContext);

  return (
    <div className="flex items-center justify-between border-b border-nft-gray-3 text-white sm:w-full">
      <div className="ml-10 sm:ml-2 cursor-pointer z-10">
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
      <div className="mr-10 sm:mr-2">
        {connectionWallet ? (
          <Link href="account">
            <div className='text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-inter font-semibold rounded-3xl nft-gradient cursor-pointer sm:p-2'>Личиный кабинет
              <span className='ml-4 border rounded-full py-[4px] px-[6px] sm:hidden'>{connectionWallet.toString().slice(0, 5)}...{connectionWallet.toString().slice(-5)}</span>
            </div>
          </Link>
        ) : (
          <Button
            name="Подключить кошелек"
            classStyle='text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-inter font-semibold rounded-3xl nft-gradient cursor-pointer sm:p-2'
            handleClick={() => loadWalletConnection()}
          />
        )}

      </div>
    </div>
  );
};

export default Navbar;
