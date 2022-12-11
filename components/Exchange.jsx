import Image from 'next/image';
import React from 'react';

import { telew } from '../assets';
import Button from './Button';

const Exchange = () => (
  <div className="flex mt-8 items-center justify-between">
    <div className="w-2/4">
      <Image
        src={telew}
        height={500}
        objectFit="contain"
      />
    </div>

    <div className="w-2/4">
      <h1 className="font-inter font-bold text-6xl my-10">24/7 access to full service customer support</h1>
      <p className="font-inter font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore corporis architecto natus accusantium quasi magnam aspernatur, est necessitatibus temporibus, numquam ipsum neque, harum enim quia nobis ratione commodi. Commodi, provident?</p>
      <Button
        name="Купить крипто боксы"
        classStyle="mt-10 uppercase text-xs py-3 px-6"
      />
    </div>
  </div>
);

export default Exchange;
