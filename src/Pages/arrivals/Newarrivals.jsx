import React from "react";
import styles from "./Arrival.module.scss";

function Newarrivals() {
  const Items = [
    {
      photo: "./Images/first.jpg",
      description: "Best Seller → [7]",
    },
    {
      photo: "./Images/second.jpg",
      description: "Featured Products → [7]",
    },
    {
      photo: "./Images/third.jpg",
      description: "Home Page → [7]",
    },
    {
      photo: "./Images/fourth.jpg",
      description: "Latest Products → [7]",
    },
    {
      photo: "./Images/fifth.jpg",
      description: "New Arrival → [7]",
    },
    {
      photo: "./Images/bagdumbell.jpg",
      description: "New Offers → [7]",
    },
  ];

  return (
    <>
      <nav className={`${styles.arrival_nav} `}>
        <div className={` ${styles.width_div} container`}>
          <h1>All collections</h1>
        </div>
      </nav>

      <div className={`${styles.items_section} container`}>
        <div className={`${styles.item_container} common_margin`}>
          {Items?.map((item, index) => (
            <div className={styles.item_card} key={index}>
              <div className={styles.img_div}>
                <img src={item.photo} />
              </div>
              <h3>{item.description}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Newarrivals;
