import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Sidebar from 'components/sidebar';
import createThemeProvider from 'components/ui/tokens/theme';
import { pxToRem } from 'helpers/styling';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    background: ${(props) => props.theme.colors.dark.xdark};
  }

  main {
    display: flex;
    height: 100%;
  }

  .page-container {
    margin-left: ${pxToRem(116)};
    width: 100%;
    height: 100%;
  }

  #__next {
    height: 100%;
  }
`;

const theme = createThemeProvider('brand');

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Devana</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <Sidebar />
        <div className="page-container">
          <Component {...pageProps} />
        </div>
      </main>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
