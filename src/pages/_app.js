import './globals.css'

import { Footer, NavBar } from '@/component/componentsindex';

const MyApp = ({ Component, pageProps }) => (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
  
  export default MyApp;

