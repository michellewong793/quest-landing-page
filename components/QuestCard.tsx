import Link from "next/link";
import React from "react";
import styles from "../styles/QuestCard.module.css"

const QuestCard = ({ logoImage, description, descriptionClassName, buttonClassName, buttonText }) => {
  return (
    <div className={styles.cardContainer}>
        <img src={logoImage} className={styles.logoImage} />
        <p className={styles.descriptionClassName}>{description}</p>
        <a className={styles.buttonClassName}>{buttonText}</a>
    </div>
  );
};

export default QuestCard;