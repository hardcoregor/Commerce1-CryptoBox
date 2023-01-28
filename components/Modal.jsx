import Image from 'next/image';
import React, { useContext, useEffect } from 'react';
import { eth, ethNeon } from '../assets';
import { CryptoContext } from '../context/cryptoContext';
import Button from './Button';

const Modal = ({ }) => {
  const { loadWalletConnection, closeModel } = useContext(CryptoContext);

  return (
    <div className="flex flex-col flexCenter h-full p-20 text-white sm:mt-0 md:mt-20 lg:mt-40">
      <div className="flex-col flexCenter">
        <h1 className="font-bold text-3xl font-inter">Coin Sale</h1>
        <p className="text-lg font-inter">Easy money</p>
      </div>

      <div className="gradient-border rounded-2xl p-0.5 mt-4">
        <div className="w-500 sm:w-[90vw] h-450 p-4 bg-nft-black-2 rounded-2xl flex flexCenter">
          <div className="flex flex-col items-center ">
            <Image
              src={ethNeon}
              objectFit="contain"
              alt="eth"
              height={150}
              width={150}
              className="mt-4"
            />
            <div className='flex flex-col'>
              <Button
                name="Подключить кошелек"
                classStyle="mt-8 uppercase font-inter w-full"
                handleClick={() => loadWalletConnection()}
              />
              <Button
                name="Пропустить"
                classStyle="my-4 uppercase font-inter bg-none border border-gradient-1 text-gradient-1 w-full"
                handleClick={() => closeModel()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal;
