import Link from "next/link";
import React, { useState } from "react";
import {Press_Start_2P } from '@next/font/google'
import styles from "../styles/Home.module.css"

const pressPlayFont = Press_Start_2P({ subsets: ['latin'], weight: '400' })

export default function Nav() {
    const [mobileNavActive, setNavActive] = useState(false);
    const navLinkClass = [pressPlayFont.className,styles.navLink].join(' ')
    return (

      <>
      <div className={styles.mobileNavBarLayout}>
      <img className={styles.mobileLogo} src="/quest-logo.svg"/>

        <img
          onClick={() => setNavActive(!mobileNavActive)}
          className={styles.mobileNavBar}
          src={"/hamburger_pink.svg"}
        >
        </img>
        </div>

        { mobileNavActive ? 
        <div className={styles.mobileNavBarLinkContainer}>        
        <Link href="https://docs.google.com/forms/d/1hliBQubckDDBYNfb8zVxJWWqkiDaOwSUantCBI9LrAQ/" className={styles.mobileNavBarLink}>About Us</Link>
        <Link href="https://docs.google.com/forms/d/1hliBQubckDDBYNfb8zVxJWWqkiDaOwSUantCBI9LrAQ/" className={styles.mobileNavBarLink}>Developers</Link>
        <Link href="https://docs.google.com/forms/d/1hliBQubckDDBYNfb8zVxJWWqkiDaOwSUantCBI9LrAQ/" className={styles.mobileNavBarLink}>Get Updates</Link>
        </div> :  
        <div className={styles.navBar}>
       <img src="/quest-logo.svg"/>
         <>
        <Link href="https://docs.google.com/forms/d/1hliBQubckDDBYNfb8zVxJWWqkiDaOwSUantCBI9LrAQ/" className={navLinkClass}>About Us</Link>
        <Link href="https://docs.google.com/forms/d/1hliBQubckDDBYNfb8zVxJWWqkiDaOwSUantCBI9LrAQ/" className={navLinkClass}>Developers</Link>
        <Link href="https://docs.google.com/forms/d/1hliBQubckDDBYNfb8zVxJWWqkiDaOwSUantCBI9LrAQ/" className={navLinkClass}>Get updates!</Link>

        </>
      </div>}


     

      </>
    );
  }
   