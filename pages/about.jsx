import Head from "next/head";
import Nav from "../components/Nav";
import styles from "../styles/About.module.css";


import {Lexend} from '@next/font/google';



// If loading a variable font, you don't need to specify the font weight
const lexend = Lexend({
   subsets: ['latin']
  })

export default function Home() {
  return (
    <>
    <Head>
        <title>Quest</title>
        <meta name="about us" content="Learn more about the Quest team, mission, and values." />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={styles.container}>
     <Nav/>
    <div className={styles.landingContainer}>
      <h1 className={`${lexend.className} ${styles.header}`}>
      About Us
      </h1>
      <p className={styles.subheader}>
      Quest is an ecosystem for community-driven crowdsourcing and monetization of data.
    </p>
    <br/>
    <p className={styles.subheader}> 
    We build technologies that solve collective action problems such as providing anonymity to contributors and organizers that are possible with the power of <b>zero knowledge proofs</b> and <b>AI</b>.  
    </p>
    <br />
    <p className={styles.subheader}> 
    We empower existing communities that need better ways of asking for information from each other in real time, with infrastructure for both rewarding contributors and supporting people who need access to information.
    </p>

    <h1 className={`${lexend.className} ${styles.header}`}>
      Our Values
      </h1>
      <p> we are inclusive. </p>
      <p>we believe in kindness.</p>
      <p>we believe in authenticity, transparency, and sharing your story. </p> 
      <p>we believe in building tools to help people succeed. </p>
     <p> we take care of ourselves, each other, and the earth. </p>
    <p> we believe in having fun 🤪 </p>


   

    </div>  
    <img src="/waves.svg" className={styles.waveImage}/>

    </div>
    </>
  );
}
