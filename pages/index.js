import Head from "next/head";
import Nav from "../components/Nav";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

import {Lexend} from '@next/font/google';



// If loading a variable font, you don't need to specify the font weight
const lexend = Lexend({
   subsets: ['latin'],
  })






export default function Home() {
  return (
    <>
    <Head>
        <title>Quest</title>
        <meta name="description" content="Quest is the world's first enterprise tool for crowdsourcing and monetizing data with individuals through the power of Artifical intelligence and zero knoweldge proofs." />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.container}>
     <Nav/>

    <div>
      <h1 className={`${lexend.className} ${styles.header}`}>
      Quest is the world’s first ecosystem for community-driven crowdsourcing and monetization of data. 
      </h1>
      <p className={styles.subheader}>
      We believe that individuals should have control over their own data and have the opportunity to profit from it. Our mission is to empower individuals to profit from their own data by providing a platform for them to securely and safely share their data with companies who need it.  By empowering individuals to profit from their own data, we aim to create a more equitable and sustainable economy where individuals are fairly compensated for their contributions.
      </p>
    </div>  
    </div>
    </>
  );
}
