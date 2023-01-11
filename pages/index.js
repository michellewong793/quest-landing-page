import Head from "next/head";
import Nav from "../components/Nav";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import QuestCard from "../components/QuestCard";
import cardStyles from "../styles/QuestCard.module.css";

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
    <div className={styles.landingContainer}>
      <h1 className={`${lexend.className} ${styles.header}`}>
      Community-driven crowdsourcing and monetization of data. 
      </h1>
      <p className={styles.subheader}>
    We build technology to empower communities to leverage and monetize their data together.     </p>

  <br/>
      <div className={styles.smallFlexColumn}>
      <Link href="#active-quests" className={styles.activeQuestTextBox}>You have (1) active quest!</Link>
      <br/>
      <Link href="#firstQuest" className={styles.activeQuestText}>Start Now</Link>
      <br/>
      <img src="/downArrow.svg" className={styles.arrowSvg}/>
      </div>


    <div className={styles.questBlock}> 
    <div className={styles.questContainer} id="firstQuest">
      <QuestCard cardName={cardStyles.teapot} logoImage={"/teapot-logo.svg"} description={"Teapot is an anonymous company review site."} buttonText={"Spill the Tea"}/>
      <QuestCard cardName={cardStyles.comingSoon} logoImage={"/coming-soon.svg"} description={"What will the next quest be? Propose one below."} buttonText={"Propose the next Quest"}/>
    </div>
    </div>
    </div>  
    </div>
    </>
  );
}
