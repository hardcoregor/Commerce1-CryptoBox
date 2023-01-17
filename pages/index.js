import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { BuyOpenEarn, Modal, Boxes, Exchange, Incomes, Additional, Partners, Button } from '../components';
import ModalBuy from '../components/ModalBuy';

import { CryptoContext } from '../context/cryptoContext';
import ComingSoon from '../components/ComingSoon';
import PaymentBodyCmp from '../components/PaymentBodyCmp';
import ButtonDisable from '../components/ButtonDisable';

const index = () => {
  const showModal = useSelector(state => state.utils.vision);
  const priceBox = useSelector(state => state.utils.price);
  const typeBox = useSelector(state => state.utils.typeBox);
  const { paymentModal, setPaymentModal } = useContext(CryptoContext);

  return (
    <div className="flex-1">

      <div className="pink_gradient" />

      {!showModal ? (
        <Modal />
      ) :
        (
          <div className="flex justify-center sm:px-4 p-4">
            <div className="w-full minmd:w-4/5">
              <BuyOpenEarn />
              <Boxes />
              <Exchange />
              <Incomes />
              <Additional />
              <ComingSoon />
              <Partners />

              {paymentModal && (
                <ModalBuy
                  header="Покупка криптобокса"
                  body={<PaymentBodyCmp />}
                  footer={(
                    <div className='flex sm:flex-col'>
                      {priceBox && typeBox ?
                        <Button name="Оплатить покупку" handleClick={() => { }} classStyle="mr-5" />
                        :
                        <ButtonDisable />
                      }
                      <Button name="Отменить" handleClick={() => setPaymentModal(false)} classStyle="bg-none border" />
                    </div>
                  )}
                  handleClose={() => setPaymentModal(false)}
                />
              )}

            </div>
          </div>
        )
      }


      <div className="blue_gradient sm:hidden" />
    </div>
  )
};
export default index;
