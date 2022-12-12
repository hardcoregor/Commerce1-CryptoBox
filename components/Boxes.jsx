import Image from 'next/image';
import React from 'react';

import { box } from '../assets';
import Button from './Button';

const Boxes = () => (
  <div className="flex flex-col w-full items-center text-white">
    <h1 className="font-bold text-2xl mt-10 uppercase font-inter mb-1">Наши продукты</h1>
    <div className="flex w-full justify-between text-center mt-24">

      <div className="flex flex-col w-1/3 items-center relative font-inter font-thin">
        <div className="z-10 absolute -top-28">
          <Image
            src={box}
            width={308}
            height={176}
          />
        </div>
        <div className="flex flex-col w-3/4 p-4 rounded-3xl bg-gradient-to-t from-gradient-1 via-gradient-2 to-gradient-3 items-center">
          <h1 className="mt-10 uppercase font-bold font-inter text-xl">Crypto Box 1</h1>
          <p className="mt-4">Уникальные крипто боксы приносят от 100% годовых.
            Купить так же просто как моргнуть. Никогда еще крипто сфера не была так доступна.
          </p>

          <Button name="Купить за 50$" classStyle="uppercase mt-4 w-3/5" />

        </div>
      </div>

      <div className="flex flex-col w-1/3 items-center relative font-inter font-thin">
        <div className="z-10 absolute -top-28">
          <Image
            src={box}
            width={308}
            height={176}
          />
        </div>
        <div className="flex flex-col w-3/4 p-4 rounded-3xl bg-gradient-to-t from-gradient-1 via-gradient-2 to-gradient-3 items-center">
          <h1 className="mt-10 uppercase font-bold font-inter text-xl">Crypto Box 2</h1>
          <p className="mt-4">Уникальные крипто боксы приносят от 100% годовых.
            Купить так же просто как моргнуть. Никогда еще крипто сфера не была так доступна.
          </p>

          <Button name="Купить за 500$" classStyle="uppercase mt-4 w-3/5" />

        </div>
      </div>

      <div className="flex flex-col w-1/3 items-center relative font-inter font-thin">
        <div className="z-10 absolute -top-28">
          <Image
            src={box}
            width={308}
            height={176}
          />
        </div>
        <div className="flex flex-col w-3/4 p-4 rounded-3xl bg-gradient-to-t from-gradient-1 via-gradient-2 to-gradient-3 items-center">
          <h1 className="mt-10 uppercase font-bold font-inter text-xl">Crypto Box 3</h1>
          <p className="mt-4">Уникальные крипто боксы приносят от 100% годовых.
            Купить так же просто как моргнуть. Никогда еще крипто сфера не была так доступна.
          </p>

          <Button name="Купить за 1000$" classStyle="uppercase mt-4 w-3/5" />

        </div>
      </div>
    </div>
  </div>
);

export default Boxes;
