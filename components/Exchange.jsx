import Image from 'next/image';
import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { telew } from '../assets';
import Button from './Button';
import { rotationAppearance, staggerContainer } from '../utils/motion';
import { TypingText } from './CustomTexts';
import { CryptoContext } from '../context/cryptoContext';

const Exchange = () => {
  const { buyBox } = useContext(CryptoContext);

  return (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="flex mt-8 items-center justify-between text-white sm:flex-col"
  >
    <motion.div
    variants={rotationAppearance('left', 1, 0.2)}
    className="w-2/4 sm:w-full"
    >
      <Image
        src={telew}
        alt="telegram"
        height={500}
        objectFit="contain"
      />
    </motion.div>

    <div className="w-2/4 sm:w-full sm:flex sm:flex-col sm:items-center">
      <TypingText title="Мы на связи 24/7 с нашими клиентами и всегда поможем решить ваши вопросы!" textStyles="font-inter font-bold text-6xl my-10 sm:text-xl sm:text-center sm:my-4 md:text-3xl"/>
      <TypingText title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore corporis architecto natus accusantium quasi magnam aspernatur, est necessitatibus temporibus, numquam ipsum neque, harum enim quia nobis ratione commodi. Commodi, provident?" textStyles="font-inter font-light sm:text-center"/>
      <Button
        name="Купить крипто боксы"
        classStyle="mt-10 uppercase text-xs py-3 px-6 sm:px-4 sm:mt-8"
        handleClick={() => buyBox('')}
      />
    </div>
  </motion.div>
  )
};

export default Exchange;
