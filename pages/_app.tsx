import '../styles/globals.css';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </>
  );
}

export default MyApp;
