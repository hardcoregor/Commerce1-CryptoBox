import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { instagram, logo, telegram, twitter } from '../assets';

const Footer = () => (
  <footer className="w-full items-center flex border-t font-inter border-nft-gray-3 justify-between">
    <div className="ml-10 sm:ml-2 cursor-pointer z-10">
      <Link href="/">
        <Image
          src={logo}
          objectFit="contain"
          width={108}
          height={63}
          alt="logo"
        />
      </Link>
    </div>

    <div className="mr-10 sm:mr-2">
      <ul className="flex">
        <a className='mr-5' target="blank" href="https://twitter.com">
          <Image
            height={25}
            objectFit="contain"
            src={twitter}
            alt="twitter"
          />
        </a>
        <a className='mr-5' target="blank" href="https://twitter.com">
          <Image
            height={25}
            objectFit="contain"
            src={telegram}
            alt="telegram"
          />
        </a>
        <a target="blank" href="https://twitter.com">
          <Image
            height={25}
            objectFit="contain"
            src={instagram}
            alt="instagram"
          />
        </a>
      </ul>
    </div>
  </footer>
);

export default Footer;
