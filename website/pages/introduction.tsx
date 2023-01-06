import { motion, useMotionValue, useTransform } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

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
        <h1 className='title'>Introduction</h1>
        <p className='description'>
          An Introduction to Framer Motion concepts.{' '}
          <Link href='/'>Back home</Link>
        </p>

        <h2>Animations</h2>
        <motion.div className='box' animate={{ x: 100 }} />

        <h2>Gestures</h2>
        <motion.div
          animate={{ x: 100 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          drag='x'
          dragConstraints={{ left: -100, right: 100 }}
          className='box'
        ></motion.div>

        <h2>Variants</h2>
        {(() => {
          const list = { hidden: { opacity: 0 } };
          const item = { hidden: { x: -10, opacity: 0 } };
          return (
            <motion.ul animate='hidden' variants={list}>
              <motion.li variants={item} />
              <motion.li variants={item} />
              <motion.li variants={item} />
            </motion.ul>
          );
        })()}

        <h2>Motion Values</h2>
        {(() => {
          const x = useMotionValue(0);
          // motion value, input range, output range
          const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

          return (
            <motion.div
              className='box'
              drag='x'
              style={{ x, opacity }}
              dragConstraints={{ left: -100, right: 100 }}
            />
          );
        })()}

        <h2>Layout Animations</h2>
        {(() => {
          const [width, setWidth] = useState(100);
          return (
            <>
              <button onClick={() => setWidth(width === 100 ? 200 : 100)}>
                Toggle Width
              </button>
              <div className='grid'>
                <motion.div className='box' layout style={{ width }} />
                <motion.div
                  className='box'
                  layout
                  style={{ background: 'blue' }}
                />
              </div>
            </>
          );
        })()}

        <h2>Scroll-triggered Animations</h2>
        <motion.div
          className='box'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        />
      </main>
    </div>
  );
};

export default Home;
