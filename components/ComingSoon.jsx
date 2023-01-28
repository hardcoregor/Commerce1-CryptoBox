'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from './CustomTexts';
import { map, people1, people2, people3 } from '../assets';

const ComingSoon = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TitleText
        title={(
          <>
            Одна монета – один кирпичек в дома Украины!
          </>
        )}
        textStyles="text-center sm:text-[24px]"
      />
      <TypingText title="Мы – создаем первую украинскую декс-биржу и держим тыл страны.  Ты можешь легко стать нашим солдатом – просто покупая и продавая крипту!
 Ты знал, что при покупке или продаже на нашей декс бирже, 50% от комиссии идет в украинские фонды?  Мы работаем с самыми активными фондами Украины." textStyles="text-center mt-14" />


      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="mt-[68px] flex w-full h-[550px] sm:h-1/2 md:relative"
      >
        <Image
          src={map}
          alt="map"
          className="w-full h-full object-cover sm:object-contain sm:h-1/4 md:object-contain"
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] sm:absolute sm:top-16 sm:right-4 sm:w-[40px] sm:h-[40px] sm:p-1 md:bottom-36 md:right-10">
          <Image
            src={people1}
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-72 left-36 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] sm:absolute sm:top-4 sm:left-10 sm:w-[40px] sm:h-[40px] sm:p-1 md:top-40">
          <Image
            src={people2}
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] sm:absolute sm:top-6 sm:w-[40px] sm:h-[40px] sm:p-1">
          <Image
            src={people3}
            alt="people"
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default ComingSoon;
