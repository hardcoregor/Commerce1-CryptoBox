import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { instagram, logo, telegram, twitter } from '../assets';

const Footer = () => (
  <footer className="w-full items-center flex border-t font-inter border-nft-gray-3 justify-between">
    <div className="ml-10 cursor-pointer z-10">
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

    <div className="mr-10">
      <ul className="flex">
        <a target="blank" href="https://twitter.com">
          <Image
            height={25}
            objectFit="contain"
            src={twitter}
          />
        </a>
        <a target="blank" href="https://twitter.com">
          <Image
            height={25}
            objectFit="contain"
            src={telegram}
          />
        </a>
        <a target="blank" href="https://twitter.com">
          <Image
            height={25}
            objectFit="contain"
            src={instagram}
          />
        </a>
      </ul>
    </div>
  </footer>
);

export default Footer;
