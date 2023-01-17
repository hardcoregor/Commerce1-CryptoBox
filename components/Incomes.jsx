import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useContext } from 'react';

import { chart } from '../assets';
import Button from './Button';
import { fadeIn } from '../utils/motion';
import ChartMainPage from './ChartMainPage';
import { CryptoContext } from '../context/cryptoContext';

const Incomes = () => {
  const { buyBox } = useContext(CryptoContext);

  return (
    <div className="flex flex-col items-center p-12 text-white sm:p-0 sm:mt-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        variants={fadeIn('left', 'tween', 0.2, 0.5)}
        className='flex flex-col items-center'
      >
        <h2 className="font-bold text-3xl text-center mb-4 sm:text-2xl">Доходность крипто боксов</h2>
        <p className="w-2/4 text-center sm:w-full sm:opacity-50 sm:text-[13px]">
          Какова доходность наших боксов?
          Наша идея заключается в простоте: можно приобрести бокс прямо с вашей карты и сразу продать его, если это не зберегательный бокс – так легко покупать крипту еще никогда не было!
        </p>
        <Button
          name="Купить бокс"
          classStyle="px-6 py-2 mt-4 bg-none border hover:bg-white hover:text-black transition-all sm:hidden"
          handleClick={() => buyBox('')}
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        variants={fadeIn('right', 'tween', 0.2, 0.5)}
        className="chartBg border border-nft-gray-3 w-full p-6 rounded-3xl mt-6">
        <ul className="">
                    <li className="flex sm:flex-col justify-between font-bold text-base border border-nft-gray-3 border-opacity-20 items-center rounded-3xl p-2 px-10">
            <span className='sm:hidden w-[180px]'>Сберегательный бокс</span>
            <span className='sm:hidden'>Прибыль за 1 год</span>
            <span className='sm:hidden'>60%</span>
            <div className='w-1/4 h-[100px]'>
              <ChartMainPage selectRisk={'low'} />
            </div>
            <Button name="Купить сейчас"
              handleClick={() => buyBox('save')}
            />
          </li>
          <li className="flex sm:flex-col justify-between font-bold text-base border border-nft-gray-3 border-opacity-20 items-center rounded-3xl p-2 mt-3 px-10">
            <span className='sm:hidden w-[180px]'>Инвестиционный бокс</span>
            <span className='sm:hidden'>Прибыль за 1 год</span>
            <span className='sm:hidden'>140%</span>
            <div className='w-1/4 h-[100px]'>
              <ChartMainPage selectRisk={'mid'} />
            </div>
            <Button name="Купить сейчас"
              handleClick={() => buyBox('invest')}
            />
          </li>
          <li className="flex sm:flex-col justify-between font-bold text-base border border-nft-gray-3 border-opacity-20 items-center rounded-3xl p-2 mt-3 px-10">
            <span className='sm:hidden w-[180px]'>Игровой бокс</span>
            <span className='sm:hidden'>Прибыль за 1 год</span>
            <span className='sm:hidden'>250%</span>
            <div className='w-1/4 h-[100px]'>
              <ChartMainPage selectRisk={'high'} />
            </div>
            <Button name="Купить сейчас"
              handleClick={() => buyBox('play')}
            />
          </li>
        </ul>
      </motion.div>
    </div>
  )
};

export default Incomes;
