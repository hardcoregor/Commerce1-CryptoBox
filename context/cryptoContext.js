import React, { useState, useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { useDispatch } from 'react-redux';

export const CryptoContext = React.createContext();

export const CryptoProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [paymentModal, setPaymentModal] = useState(false);

  // Web3 Functions
  const loadWalletConnection = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    dispatch({ type: 'PROVIDER_LOADED', connection: accounts });
    dispatch({ type: 'MODAL_STATE', vision: true });
  }

  // Additional Functions
  const closeModel = () => {
    dispatch({ type: 'MODAL_STATE', vision: true });
  }

  const buyBox = (choosen) => {
    setPaymentModal(true);
    dispatch({ type: 'CHOOSEN_BOX', typeBox: choosen })
  }

  const setPrice = (price) => {
    dispatch({ type: 'CHOOSEN_BOX_PRICE', price: price })
  }

  return (
    <CryptoContext.Provider value={{ loadWalletConnection, closeModel, paymentModal, setPaymentModal, buyBox, setPrice }}>
      {children}
    </CryptoContext.Provider>
  )
};