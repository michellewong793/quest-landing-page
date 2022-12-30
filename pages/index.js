import Head from "next/head";
import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

import {Lexend, Roboto_Flex} from '@next/font/google';



// If loading a variable font, you don't need to specify the font weight
const lexend = Lexend({
   subsets: ['latin'],
   display: "fallback",
  })


const title = {
  color: "#EF83F8",
  fontSize: "4rem",
  fontFamily: "puffin-arcade-chrome",
  marginLeft: '3rem',
  marginTop: "2.3rem",
  float: 'left',
  position: 'relative',
};



export default function Home() {
  return (
    <>
    <Head>
        <title>send love to the homies who need it</title>
        <meta name="description" content="quit now, bro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/uov6xbj.css"></link>
    </Head>
    <div className={styles.container}>
      
      <h1 style={title}>
          Quest
      </h1>
      <Layout/>
     
      <div>
        <h1>
          Hello This is my landing page
        </h1>
   
      </div>
    </div>
    </>
  );
}
