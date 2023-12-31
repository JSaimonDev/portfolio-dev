import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

// components
import Layout from '../components/Layout';
import Transition from "../components/Transition"

// router
import { useRouter } from 'next/router'

// framer motion
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return <Layout>
    <Head>
      <title>Juanjo Simon</title>
    </Head>
    <AnimatePresence mode='wait' onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div key={router.route} className='h-full'>
        <Transition />
        <Component {...pageProps} />
        <Analytics/>
      </motion.div>
    </AnimatePresence>
  </Layout>
}

export default MyApp;
