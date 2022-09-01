import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/components/MainLayout.module.scss'
import React from "react";

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sam Watts</title>
        <meta name="description" content="Personal website for Sam Watts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>

        <div className={styles['profile']}>
          <div className={styles['headshot-wrapper']}>
            <Image className={styles.headshot} src='/me.jpg' layout="intrinsic" alt="A photo of me on the beach in Greece!" height="320" width="320" />
          </div>
          <h2>Sam Watts</h2>
          <div className={styles['profile-contactinfo']}>
            <a href='https://linkedin.com/in/samwatts98' target="_blank" rel="noreferrer">✉️ LinkedIn</a>
          </div>
          <hr className={styles['profile-splitter']} />

          <ul className={styles['profile-summary-points']}>
            <li className={styles.location}>Brighton, UK</li>
            <li className={styles.job}>Software Developer & Tech Lead at Lendscape</li>
            <li className={styles.degree}>Computer Science & Artificial Intelligence BSc (1st Class)</li>
          </ul>

        </div>
        {children}
      </main>
      <footer className={styles.footer}>
        I am powered by coffee, lots of it ☕
      </footer>
    </div>
  )
}