'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

import Image from 'next/image';
import React, { useContext } from 'react';
import { frame, stellar } from '../assets';
import Button from './Button';
import { CryptoContext } from '../context/cryptoContext';

const BuyOpenEarn = () => {
  const { buyBox } = useContext(CryptoContext);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="flex w-full justify-between text-white mt-10 sm:p-4 sm:flex-col sm:items-center sm:my-2 md:flex-col md:items-center"
    >

      <div className="w-33 flex flex-col items-center sm:w-full md:w-full">
        <div className="mt-40 z-10 text-center sm:mt-0 md:mt-0">
          <h1 className="font-semibold text-3xl font-inter">Купил. Открыл. Заработал.</h1>
          <h2 className="text-xl uppercase font-extralight font-inter sm:mt-2">Никогда еще крипта не была настолько близко: достаточно купить бокс и начать зарабатывать!</h2>
          <h2 className="text-xl font-bold uppercase font-inter">Coin Sale</h2>
        </div>
        <Button
          name="Купить бокс"
          classStyle="px-6 py-2 mt-4 bg-none border hover:bg-white hover:text-black transition-all"
          handleClick={() => buyBox('')}
        />
        <div className="nongraText -z-10" />
      </div>

      <div className='sm:hidden md:mt-8'>
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

      <div className="flex flex-col w-33 sm:w-full items-center relative md:w-full">
        <div className="nongraCoin sm:-left-[10px] sm:top-[80px] sm:-z-10 sm:opacity-20 md:hidden" />
        <div className="-mt-10 sm:mt-4 sm:w-[250px] md:hidden">
          <Image
            src={stellar}
            alt="frame"
            width={300}
          />
        </div>
        <span className="text-center font-inter sm:mt-2 sm:font-bold mt-4 md:text-bold md:text-lg md:mt-8">
          Купить так же просто как моргнуть. Никогда еще крипто сфера не была так доступна.
        </span>
      </div>
    </motion.nav>
  )
};

export default BuyOpenEarn;
