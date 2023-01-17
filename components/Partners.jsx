import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import { bnb, MM } from '../assets';
import { fadeIn, staggerContainer } from '../utils/motion';

const Partners = () => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="p-12 text-white sm:p-0 sm:mt-10"
  >
    <motion.div
      variants={fadeIn('up', 'tween', 0.1, 0.5)}
    >
      <div className="uppercase text-center font-bold text-2xl">
        Наши партнеры
      </div>

      <div className="flex mt-10 w-full items-center border rounded-3xl border-white border-opacity-20 p-6 sm:p-4 sm:justify-center sm:items-center">
        <div className="w-1/3 sm:w-full">
          <Image
            src={MM}
            height={140}
            alt="mm"
          />
        </div>
        <div className="w-1/3 sm:w-full">
          <Image
            src={bnb}
            height={70}
            objectFit="contain"
            alt="bnb"
          />
        </div>
        <div className="w-1/3 sm:hidden">
          <Image
            src={MM}
            height={140}
            objectFit="contain"
            alt="mm"
          />
        </div>
      </div>

      <p className="text-center pt-10 font-inter font-bold text-xl uppercase cursor-default">Стать нашим партнером</p>
      <form action="submit" className="flex justify-center pt-2">
        <input type="email" placeholder="Оставьте ваш e-mail." className=" w-1/2 text-center rounded-3xl p-1 text-lg font-inter text-white outline-none bg-none border border-nft-gray-3 sm:w-full" />
      </form>
    </motion.div>
  </motion.div>
);

export default Partners;
