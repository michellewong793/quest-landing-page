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
      <img className={styles.mobileLogo} src="/Quest_Pink_Logo.svg"/>

        <img
          onClick={() => setNavActive(!mobileNavActive)}
          className={styles.mobileNavBar}
          src={"/hamburger_pink.svg"}
        >
        </img>
        </div>

        { mobileNavActive ? 
        <div className={styles.mobileNavBarLinkContainer}>        
        <Link href="/about" className={styles.mobileNavBarLink}>About Us</Link>
        <Link href="https://quest-4.gitbook.io/quest-sdk/" className={styles.mobileNavBarLink}>Developers</Link>
        </div> :  
        <div className={styles.navBar}>
       <Link href="/"><img src="/Quest_Pink_Logo.svg" className={styles.desktopLogo}/></Link>
         <>
        <Link href="/about" className={navLinkClass}>About Us</Link>
        <Link href="https://quest-4.gitbook.io/quest-sdk/" className={navLinkClass}>Developers</Link>
        </>
      </div>}


     

      </>
    );
  }
   