import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles.css';
import Sidebar from 'components/sidebar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Devana</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Sidebar />
        <div className="page-container">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

export default MyApp;
