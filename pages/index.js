import Head from "next/head";
import Nav from "../components/Nav";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import QuestCard from "../components/QuestCard";
import cardStyles from "../styles/QuestCard.module.css";

import { useRouter } from 'next/router'


import {Lexend, Lato} from '@next/font/google';



// If loading a variable font, you don't need to specify the font weight
const lexend = Lexend({
   subsets: ['latin'],
  })

  const lato = Lato({
    subsets: ['latin'],
    weight: ["300", "400", "700", "900"],
  })


  const latoBold = Lato({
    subsets: ['latin'],
    weight: ["700", "900"],
  })

export default function Home() {
  const router = useRouter()

  return (
    <>
    <Head>
        <title>Quest</title>
        <meta name="description" content="Quest is the world's first enterprise tool for crowdsourcing and monetizing data with individuals through the power of Artifical intelligence and zero knoweldge proofs." />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={styles.container}>
     <Nav/>
    <div className={styles.landingContainer}>
      <h1 className={`${lexend.className} ${styles.header}`}>
      Identity is complex. 
      </h1>
      <h1 className={`${lexend.className} ${styles.header2}`}>
      but auth shouldn&apos;t be.
      </h1>
      {/* <p className={`${lato.className} ${styles.subheader}`}>
One account to unlock them all. </p> */}
  <p className={`${lato.className} ${styles.subheader}`}>Quest is the first social platfrom built with Zero Knowledge Proofs.</p>
  <p className={`${lato.className} ${styles.subheader}`}>So you can be yourself in all communities.</p>

      <br/>
      <div className={styles.smallFlexColumn}>
      <Link href="#firstQuest" className={styles.activeQuestTextBox}>You have (1) active quest!</Link>
      <br/>
      <Link href="#firstQuest" className={styles.activeQuestText}>Start Now</Link>
      <br/>
      <img src="/pinkArrow.svg" className={styles.arrowSvg}/>
      </div>


    <div className={styles.questBlock}> 
      <div className={styles.questContainer} id="firstQuest">
        <QuestCard cardName={cardStyles.teapot} logoImage={"/teapot-logo.svg"} description={"Teapot is an anonymous company review site."} buttonText={"Spill the Tea"}/>
        <QuestCard cardName={cardStyles.comingSoon} logoImage={"/coming-soon.svg"} description={"What will the next quest be? Propose one below."} buttonText={"Propose the next Quest"}/>
      </div>

      <div className={styles.proposalContainer}>
        <h1 className={styles.proposalText}> Submit a Proposal </h1> 
        <p> Intrigued? Inquire here to propose a quest for you and your community, business, or organization. </p>
        <button onClick={() => router.push('mailto:team@ourquest.xyz')} className={` ${styles.proposalButton}`}> Contact Us </button>
      </div>

    </div>

    </div>  
    <img src="/waves.svg" className={styles.waveImage}/>

    </div>
    </>
  );
}
