import Link from "next/link";
import React from "react";
import styles from "../styles/QuestCard.module.css"

/** joinedClassName explanation: The background image is determined by the classname we pass in. The classnames are conjoined 
 * with the CSS for the card container as a component.
 */

const QuestCard = ({ backgroundClassName, logoImage, description, descriptionClassName, buttonClassName, buttonText }) => {
  const joinedClassName = [styles.cardContainer, backgroundClassName].join(' ')

  return (
    <div className={joinedClassName}>
        <img src={logoImage} className={styles.logoImage} />
        <p className={styles.descriptionClassName}>{description}</p>
        <a className={styles.buttonClassName}>{buttonText}</a>
    </div>
  );
};

export default QuestCard;