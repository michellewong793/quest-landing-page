import React from "react";
import styles from "../styles/QuestCard.module.css"
import {Lexend} from '@next/font/google'


/** joinedClassName explanation: The background image is determined by the classname we pass in. The classnames are conjoined 
 * with the CSS for the card container as a component.
 */

const lexend = Lexend({subsets: ["latin"],weight: "300"})

const QuestCard = ({ cardName, logoImage, description, buttonText}) => {


  return (
    <div className={cardName}>
        <img src={logoImage} className={styles.logoImage} />
        <p>{description}</p>
        <button>{buttonText}</button>
    </div>
  );
};

export default QuestCard;