import { ThemeProvider } from 'next-themes';
import { useState } from 'react';
import { Footer, Navbar } from '../components';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="parallax h-full overflow-y-hidden flex-1 flex flex-col">
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
