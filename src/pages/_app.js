import './globals.css'

import { Footer, NavBar } from '@/component/componentsindex';

import { NFTMarketplaceProvider } from '../../Context/NFTMarketplaceContext';

const MyApp = ({ Component, pageProps }) => (
    <div>
      <NFTMarketplaceProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer/>
      </NFTMarketplaceProvider>
    </div>
  );
  
  export default MyApp;

