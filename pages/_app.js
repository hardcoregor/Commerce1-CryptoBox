import { ThemeProvider } from 'next-themes';
import { useMemo, useState } from 'react';
import { Footer, Navbar } from '../components';

import { CryptoProvider } from '../context/cryptoContext';
import { Provider } from 'react-redux';
import store from '../store/store';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  let root;

  if (typeof window !== "undefined") {
    root = useMemo(() => document.querySelector(":root"));
  } // THIS FIXED document is not defined

  const parallaxHandler = (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 5;
    const y = (e.clientY - window.innerHeight / 2) / 5;

    root.style.setProperty('--posX', -x);
    root.style.setProperty('--posY', -y);
  }

  return (
    <div className="parallax h-full overflow-hidden flex-1 flex flex-col" onMouseMove={parallaxHandler}>
      {/* <div className="bege" /> */}
      <div className="red bg-cover bg-no-repeat" />
      {/* <div className="parallaxBG" /> */}
      <Provider store={store}>
        <CryptoProvider>
          <ThemeProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </ThemeProvider>
        </CryptoProvider>
      </Provider>
    </div>
  );
};

export default MyApp;
