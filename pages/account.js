import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../components/Button';
import { box } from '../assets';
import PieChart from '../components/PieChart';

const account = () => {
  const connectionWallet = useSelector(state => state.provider.connection)

  return (
    <div className="flex flex-1 text-white">
      <div className="flex flex-col w-1/4 border-r border-nft-gray-3 pt-3 pb-1.5 px-3">
        <div className='flex-1'>
          <h3 className="text-center text-bold font-inter border rounded-3xl border-nft-gray-3 p-1">
            Ваш аккаут <span className='text-bold'>{connectionWallet && connectionWallet.toString().slice(0, 5)}...{connectionWallet && connectionWallet.toString().slice(-5)}</span>
          </h3>
        </div>

        <div className="flex justify-between text-center pt-3 pb-1.5 px-3">
          <p className="font-inter">Ваш баланс: </p>
          <span className="font-bold font-inter">395.95 $</span>
        </div>
        <Button name="Отключить кошелек" classStyle="my-4" />
      </div>

      <div className="flex flex-col items-center w-3/4">
        <h2 className="text-center pt-3 pb-1.5 px-3 font-inter font-semibold">Ваши покупки</h2>

        <div className='flex justify-between w-1/4 mt-2'>
          <div>
            <Button name="График портфеля" classStyle="bg-none border" />
          </div>

          <div>
            <Button name="История сделок" classStyle="bg-none border" />
          </div>
        </div>

        <div className='h-full w-full'>
          <PieChart />
        </div>

      </div>
    </div>
  )
};

export default account;
