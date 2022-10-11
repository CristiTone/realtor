import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>Test</Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
