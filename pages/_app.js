import { ThemeProvider } from 'next-themes';
import { useMemo, useState } from 'react';
import { Footer, Navbar } from '../components';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const root = useMemo(() => document.querySelector(":root"));

  const [showModal, setShowModal] = useState(true);
  const parallaxHandler = (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 5;
    const y = (e.clientY - window.innerHeight / 2) / 5;

    root.style.setProperty('--posX', -x);
    root.style.setProperty('--posY', -y);

  }

  return (
    <div className="parallax h-full overflow-hidden flex-1 flex flex-col" onMouseMove={parallaxHandler}>
      <div className="bege" />
      <div className="parallaxBG" />
      <ThemeProvider>
        <Navbar />
        <Component {...pageProps} showModal={showModal} setShowModal={setShowModal} />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default MyApp;
