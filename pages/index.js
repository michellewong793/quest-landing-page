import Head from "next/head";
import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Head>
        <title>send love to the homies who need it</title>
        <meta name="description" content="quit now, bro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={styles.container}>
      <Layout/>
      <div>
        <h1>
          Hello This is my landing page
        </h1>
         <h1>
          Hello This is my landing page
        </h1>
        <h1>
          Hello This is my landing page
        </h1>
      </div>
    </div>
    </>
  );
}
