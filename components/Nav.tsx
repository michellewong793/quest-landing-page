import Link from "next/link";
import React, { useState } from "react";
import {Press_Start_2P } from '@next/font/google'
import styles from "../styles/Home.module.css"

const pressPlayFont = Press_Start_2P({ subsets: ['latin'], weight: '400' })


const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];

export default function Nav() {
    const [mobileNavActive, setNavActive] = useState(null);

    return (

      <>
      <div className={styles.mobileNavBarLayout}>
        <img src="/Quest-Logo.png"/>
        <img
          onClick={() => setNavActive(!mobileNavActive)}
          className={styles.mobileNavBar}
          src={"/menu_icon.png"}
        >
        </img>
        </div>

        { mobileNavActive ? 
        <div className={styles.mobileNavBarLinkContainer}> 
        <Link href="https://docs.google.com/forms/d/1hliBQubckDDBYNfb8zVxJWWqkiDaOwSUantCBI9LrAQ/" className={styles.mobileNavBarLink}>About</Link>
        <Link href="https://docs.google.com/forms/d/1hliBQubckDDBYNfb8zVxJWWqkiDaOwSUantCBI9LrAQ/" className={styles.mobileNavBarLink}>Join</Link>
        </div> :  
        <div className={styles.navBar}>
         <>
         <Link href="https://docs.google.com/forms/d/1hliBQubckDDBYNfb8zVxJWWqkiDaOwSUantCBI9LrAQ/" className={pressPlayFont.className}>About</Link>
        <Link href="https://docs.google.com/forms/d/1hliBQubckDDBYNfb8zVxJWWqkiDaOwSUantCBI9LrAQ/" className={pressPlayFont.className}>Join</Link>
        </>
      </div>}


     

      </>
    );
  }
   