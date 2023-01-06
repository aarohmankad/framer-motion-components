import { motion, useMotionValue, useTransform } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const Home: NextPage = () => {
  return (
    <div className='container'>
      <Head>
        <title>Playground</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='main'>
        <h1 className='title'>Framer Motion Playground</h1>
        <p className='description'>
          Using this as a learning playground for Framer Motion.
        </p>

        <ul>
          <li>
            <Link href='/introduction'>Introduction</Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
