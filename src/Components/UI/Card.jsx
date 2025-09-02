import React from "react";
import styles from "./Card.module.scss";
const Card = ({ item, index }) => {
  return (
    <div key={index}>
      <div className={styles.featured_card}>
        <div className={styles.feature_image}>
          <img src={item.photo} />
        </div>
        <div className={styles.feature_content}>
          <h3>{item.product}</h3>
          <p>{item.rating}</p>
          <h5>{item.price}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
