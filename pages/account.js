import Image from 'next/image';
import React from 'react';
import { box } from '../assets';

const account = () => (
  <div className="flex flex-1 text-white">
    <div className="w-1/4 border-r border-nft-gray-3 pt-3 pb-1.5 px-3">
      <h3 className="text-center text-bold font-inter border rounded-3xl border-nft-gray-3 p-1">Ваш аккаунт: 0x54....9ecdE2</h3>

      <div className="flex justify-between text-center pt-3 pb-1.5 px-3">
        <p className="font-inter">Ваш баланс: </p>
        <span className="font-bold font-inter">395.95 $</span>
      </div>
    </div>

    <div className="w-3/4">
      <h2 className="text-center pt-3 pb-1.5 px-3 font-inter font-semibold">Ваши покупки</h2>

      {/* <div className="flex">

        <div className="flex flex-col items-center w-1/5 -ml-12">
          <Image
            width={150}
            height={150}
            objectFit="contain"
            src={box}
            className=""
          />
          <p>Крипто бокс 1</p>
        </div>

        <div className="flex">
          <p>Ориентировочный доход</p>
          <p>Динамика прибыли</p>
        </div>

      </div> */}
    </div>
  </div>
);

export default account;
