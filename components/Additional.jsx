import Image from 'next/image';
import React from 'react';
import { bigbox } from '../assets';

const Additional = () => (
  <div className="flex items-center">
    <div className="p-12 w-3/4">
      <h1 className="text-5xl font-bold">Buy and sell with the lowest fees in the industry</h1>
      <p className="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nemo sequi repellendus reiciendis nihil, ex impedit corporis cum perferendis porro tenetur quas, veniam quibusdam minus ipsum itaque enim! Sunt, enim?</p>
    </div>

    <div>
      <Image
        src={bigbox}
        width={970}
        height={850}
      />
    </div>
  </div>
);

export default Additional;
