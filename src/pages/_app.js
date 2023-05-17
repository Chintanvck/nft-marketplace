import './globals.css'

import { NavBar } from '@/component/componentsindex';

const MyApp = ({ Component, pageProps }) => (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
  
  export default MyApp;

