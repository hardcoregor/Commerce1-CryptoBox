import Image from 'next/image';
import React from 'react';
import { chart } from '../assets';
import Button from './Button';

const Incomes = () => (
  <div className="flex flex-col items-center p-12">
    <h2 className="font-bold text-3xl text-center mb-4">Доходность крипто боксов</h2>
    <p className="w-2/4 text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut, beatae rerum ducimus est a, hic possimus qui deleniti rem maxime voluptates. Cupiditate itaque perspiciatis autem iure, sunt temporibus consectetur.
    </p>
    <Button
      name="Купить бокс"
      classStyle="px-6 py-2 mt-4 bg-none border hover:bg-white hover:text-black transition-all"
    />
    <div className="chartBg border border-nft-gray-3 w-full p-6 rounded-3xl mt-6">
      <ul className="">
        <li className="flex justify-between font-bold text-base border border-nft-gray-3 border-opacity-20 items-center rounded-3xl p-2">
          <span>Крипто бокс 1</span>
          <span>1 год</span>
          <span>130%</span>
          <Image
            width={150}
            height={30}
            src={chart}
          />
          <Button name="Купить сейчас" />
        </li>
        <li className="flex justify-between font-bold text-base border border-nft-gray-3 border-opacity-20 items-center rounded-3xl p-2 mt-3">
          <span>Крипто бокс 2</span>
          <span>1 год</span>
          <span>130%</span>
          <Image
            width={150}
            height={30}
            src={chart}
          />
          <Button name="Купить сейчас" />
        </li>
        <li className="flex justify-between font-bold text-base border border-nft-gray-3 border-opacity-20 items-center rounded-3xl p-2 mt-3">
          <span>Крипто бокс 3</span>
          <span>1 год</span>
          <span>130%</span>
          <Image
            width={150}
            height={30}
            src={chart}
          />
          <Button name="Купить сейчас" />
        </li>
      </ul>
    </div>
  </div>
);

export default Incomes;
