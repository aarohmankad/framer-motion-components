import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className='container'>
      <Head>
        <title>Introduction</title>
        <meta
          name='description'
          content='An Introduction to Framer Motion concepts'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main'>
        <h1 className='title'>Keyframes</h1>
        <p className='description'>
          Set a value as an array and Motion will animate through each of these
          values in turn. <Link href='/'>Back home</Link>
        </p>

        <h2>Animations</h2>
        <motion.div
          className='box'
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ['10%', '10%', '50%', '50%', '10%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </main>
    </div>
  );
};

export default Home;
