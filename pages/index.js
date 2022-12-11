import { BuyOpenEarn, Modal, Boxes, Exchange, Incomes, Additional, Partners } from '../components';

const index = ({ showModal, setShowModal }) => (
  <div className="flex-1">

    <div className="pink_gradient" />

    {showModal
      ? <Modal setShowModal={setShowModal} />
      : (
        <div className="flex justify-center sm:px-4 p-4">
          <div className="w-full minmd:w-4/5">
            <BuyOpenEarn />
            <Boxes />
            <Exchange />
            <Incomes />
            <Additional />
            <Partners />
          </div>
        </div>
      )}

    <div className="blue_gradient" />
  </div>
);
export default index;
