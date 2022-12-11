import Image from 'next/image';
import React from 'react';
import { bnb, MM } from '../assets';

const Partners = () => (
  <div className="p-12">
    <div className="uppercase text-center font-bold text-2xl">
      Наши партнеры
    </div>

    <div className="flex mt-10 w-full items-center border rounded-3xl border-white border-opacity-20 p-6">
      <div className="w-1/3">
        <Image
          src={MM}
          height={140}
          objectFit="contain"
        />
      </div>
      <div className="w-1/3">
        <Image
          src={bnb}
          height={70}
          objectFit="contain"
        />
      </div>
      <div className="w-1/3">
        <Image
          src={MM}
          height={140}
          objectFit="contain"
        />
      </div>
    </div>

    <p className="text-center pt-10 font-inter font-bold text-xl uppercase cursor-default">Стать нашим партнером</p>
    <form action="submit" className="flex justify-center pt-2">
      <input type="email" placeholder="Оставьте ваш e-mail." className=" w-1/2 text-center rounded-3xl p-1 text-lg font-inter text-white outline-none bg-none border border-nft-gray-3" />
    </form>

  </div>
);

export default Partners;
