import { useContext, useState } from "react";
import PriceSlider from './PriceSlider';
import ChartForBuing from './ChartForBuing';
import Image from "next/image";
import { Box1, Box2, Box3 } from "../assets";
import Button from "./Button";
import { CryptoContext } from "../context/cryptoContext";
import { useSelector } from "react-redux";


const PaymentBodyCmp = () => {
  const { buyBox } = useContext(CryptoContext);
  const boxSelect = useSelector(state => state.utils.typeBox);
  const value = useSelector(state => state.utils.price);

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col'>
        <h5 className='text-center'>Настройки Бокса</h5>

        <div className='flex justify-between my-5'>
          <PriceSlider />
          <p className=''>{value}$</p>
        </div>

        <div className='flex justify-between my-5'>
          <Button name="Инвестиционный" handleClick={() => buyBox('invest')} classStyle={boxSelect === 'invest' ? 'nft-gradient' : 'bg-none border'} />
          <Button name="Игровой" handleClick={() => buyBox('play')} classStyle={boxSelect === 'play' ? 'nft-gradient' : 'bg-none border'} />
          <Button name="Сберегательный" handleClick={() => buyBox('save')} classStyle={boxSelect === 'save' ? 'nft-gradient' : 'bg-none border'} />
          <Button name="Сравнить все" handleClick={() => buyBox('')} classStyle={boxSelect === '' ? 'nft-gradient' : 'bg-none border'} />
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='flex h-[30vh] w-full justify-between '>
          <ChartForBuing />
        </div>
      </div>
      {boxSelect &&
        <div className="mt-10">
          <div className='flexBetween '>
            <p className='text-nft-gray-1 font-semibold text-base minlg:text-xl'>Предмет</p>
            <p className='text-nft-gray-1 font-semibold text-base minlg:text-xl'>Итог</p>
          </div>

          <div className='flex items-center'>
            <div className='flex-1 flexStartCenter'>
              <div className='relative w-28 h-28'>
                <Image
                  src={boxSelect === 'play' ? Box2 : boxSelect === 'invest' ? Box1 : Box3}
                  alt="logo"
                />
              </div>

              <p className="ml-4">
                {boxSelect === 'play' ? 'Игровой бокс' : boxSelect === 'invest' ? 'Инвестиционный бокс' : 'Сберегательный бокс'}
              </p>

            </div>

            <div>
              {value}$
            </div>

          </div>
        </div>
      }

    </div>
  )
}

export default PaymentBodyCmp;