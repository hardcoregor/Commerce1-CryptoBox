import { useRef } from 'react';
import Image from 'next/image';

import { cross } from '../assets';


const ModalBuy = ({ header, body, footer, handleClose }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (e) => {
    if(modalRef.current && !modalRef.current.contains(e.target)){
      handleClose();
    }
  }

  return (
    <div className='flexCenter fixed inset-0 z-10 bg-overlay-black animated fadeIn' onClick={handleClickOutside}>
      <div ref={modalRef} className="w-2/5 md:w-11/12 minlg:w-2/4 bg-nft-black-3 bg-opacity-90 flex flex-col rounded-lg">
        <div className='flex justify-end mt-4 mr-4 minlg:mt-6 minkg:mr-6'>
          <div className='relative w-3 h-3 minlg:w-6 minlg:h-6 cursor-pointer' onClick={() => handleClose()}>
            <Image
              src={cross}
              width={30}
              height={30}
              alt="close"
            />
          </div>
        </div>

        <div className='flexCenter w-full text-center p-4'>
          <h2 className='font-normal text-2xl'>{header}</h2>
        </div>

        <div className='p-10 sm:px-4 border-t border-b border-nft-gray-3'>
          {body}
        </div>

        <div className='flexCenter p-4'>
          {footer}
        </div>
      </div>
    </div>
  )
}

export default ModalBuy