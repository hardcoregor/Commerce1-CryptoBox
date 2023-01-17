import Image from 'next/image';
import { motion } from 'framer-motion';
import { textVariant, slideIn } from '../utils/motion';
import React, { useContext } from 'react';

import { Box1, Box2, Box3 } from '../assets';
import Button from './Button';
import { CryptoContext } from '../context/cryptoContext';

const Boxes = () => {
  const { buyBox } = useContext(CryptoContext);

  return (
    <motion.div
      variants={textVariant(0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="flex flex-col w-full items-center text-white">
        <h1 className="font-bold text-2xl mt-10 uppercase font-inter">Наши продукты</h1>
        <div className="flex flex-col items-center w-full justify-between text-center">

          <motion.div
            variants={slideIn('left', 'tween', 0.1, 1)}
            className="flex flex-col w-3/4 items-center relative font-inter font-thin mt-6"
          >
            <div className="flex w-3/4 p-2 rounded-3xl bg-gradient-to-t from-gradient-1 via-gradient-2 to-gradient-3 items-center">
              <div className="z-10 w-4/5">
                <Image
                  src={Box1}
                  alt="box"
                  width={300}
                  height={176}
                />
              </div>

              <div className='text-left w-full'>
                <h1 className="uppercase font-bold font-inter text-xl">Инвестиционный бокс</h1>
                <p className="my-10">
                  У тебя сомнения, что действительно заработаешь?  Тогда возьми для начала этот бокс.  Ты получишь разную крипту на всю цену бокса.  Кстати, выбираешь сумму ты сам!
                </p>
                <Button name="Купить бокс" classStyle="uppercase w-3/5"
                  handleClick={() => buyBox('invest')}
                />
              </div>

            </div>
          </motion.div>

          <motion.div
            className="flex flex-col w-3/4 items-center relative font-inter font-thin my-6"
          >
            <div className="flex w-3/4 p-2 rounded-3xl bg-gradient-to-t from-gradient-1 via-gradient-2 to-gradient-3 items-center">
              <div className="z-10 w-4/5">
                <Image
                  src={Box2}
                  alt="box"
                  width={300}
                  height={176}
                />
              </div>

              <div className='text-left w-full'>
                <h1 className="uppercase font-bold font-inter text-xl">Игровой бокс</h1>
                <p className="my-10">
                  Игровой бокс, благодаря которому ты первый получишь игровую валюту, которую тщательно выбирает наша компания!
                </p>
                <Button name="Купить бокс" classStyle="uppercase w-3/5"
                  handleClick={() => buyBox('play')}
                />
              </div>

            </div>
          </motion.div>

          <motion.div
            variants={slideIn('right', 'tween', 0.1, 1)}
            className="flex flex-col w-3/4 items-center relative font-inter font-thin"
          >
            <div className="flex w-3/4 p-2 rounded-3xl bg-gradient-to-t from-gradient-1 via-gradient-2 to-gradient-3 items-center">
              <div className="z-10 w-4/5">
                <Image
                  src={Box3}
                  alt="box"
                  width={300}
                  height={176}
                />
              </div>

              <div className='text-left w-full'>
                <h1 className="uppercase font-bold font-inter text-xl">Сберегательный бокс</h1>
                <p className="my-10">
                  Подходит для тех, кто ценит стабильность – в нем собрана самая стабильная крипта.  Вы избежите инфляции и сможете инвестировать на долгое время, храните крипту от 6 месяцев до одного года!
                </p>
                <Button name="Купить бокс" classStyle="uppercase w-3/5"
                  handleClick={() => buyBox('save')}
                />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
};

export default Boxes;
