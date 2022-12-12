import Image from 'next/image';
import React from 'react';
import { eth } from '../assets';
import Button from './Button';

const Modal = ({ setShowModal }) => (

  <div className="flex flex-col flexCenter h-full p-20 text-white">
    <div className="flex-col flexCenter">
      <h1 className="font-bold text-3xl font-inter">Coin Sale</h1>
      <p className="text-lg font-inter">Easy money</p>
    </div>

    <div className="gradient-border rounded-2xl p-0.5 mt-4">
      <div className="w-500 h-400 p-4 bg-nft-black-2 rounded-2xl flex flexCenter">
        <div className="flex flex-col items-center ">
          <Image
            src={eth}
            objectFit="contain"
            alt="eth"
            height={224}
            width={224}
          />
          <Button
            name="Подключить кошелек"
            classStyle="mt-8 uppercase font-inter"
            handleClick={() => setShowModal(false)}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
