import Image from 'next/image';
import React from 'react';
import { frame, stellar } from '../assets';
import Button from './Button';

const BuyOpenEarn = () => (
  <div className="flex w-full justify-between text-white">

    <div className="w-33 flex flex-col items-center">
      <div className="mt-40 z-10 text-center">
        <h1 className="font-semibold text-3xl font-inter">Купил. Открыл. Заработал.</h1>
        <h2 className="text-xl uppercase font-extralight font-inter">Получи свой первый доход в крипто с</h2>
        <h2 className="text-xl font-bold uppercase font-inter">Coin Sale</h2>
      </div>
      <Button
        name="Купить бокс"
        classStyle="px-6 py-2 mt-4 bg-none border hover:bg-white hover:text-black transition-all"
      />
      <div className="nongraText -z-10" />
    </div>

    <div>
      <div className="nongraMainCube" />
      <div>
        <Image
          src={frame}
          objectFit="contain"
          alt="frame"
          height={450}
        />
      </div>
    </div>

    <div className="flex flex-col w-33 items-center relative">
      <div className="nongraCoin" />
      <div className="-mt-10">
        <Image
          src={stellar}
          objectFit="contain"
          alt="frame"
          width={300}
        />
      </div>
      <span className="text-center font-inter">
        Уникальные крипто боксы приносят от 100% годовых.
        Купить так же просто как моргнуть. Никогда еще крипто сфера не была так доступна.
      </span>
    </div>
  </div>
);

export default BuyOpenEarn;
