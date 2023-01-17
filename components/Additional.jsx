import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import { bigbox } from '../assets';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from './CustomTexts';

const Additional = () => (
  <div className="flex items-center text-white sm:w-full sm:flex-col">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="p-12 w-3/4 sm:flex sm:flex-col sm:p-0 sm:text-center sm:mt-10">
      <TypingText title="Маленькая комиссия – большие деньги!" textStyles="text-5xl font-bold sm:w-full sm:text-2xl" />
      <TypingText title="Комиссии при покупке с карты всего 3%, а продать ты его можешь сразу – достаточно нажать две кнопки. 
 Кроме того, ты можешь сберегать свои боксы у нас – мы позаботимся об их целостности и вернём, когда истечет термин холда!" textStyles="mt-4 sm:text-sm" />
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      variants={fadeIn('left', 'tween', 0.5, 0.5)}
      className="sm:mt-10"
    >
      <Image
        src={bigbox}
        width={970}
        height={850}
        alt="bigbox"
      />
    </motion.div>
  </div>
);

export default Additional;
