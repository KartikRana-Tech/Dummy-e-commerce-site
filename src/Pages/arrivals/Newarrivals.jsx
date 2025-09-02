import React from "react";
import styles from "./Arrival.module.scss";
import first from "../../assets/first.jpg";
import second from "../../assets/second.jpg";
import third from "../../assets/third.jpg";
import fourth from "../../assets/fourth.jpg";
import fifth from "../../assets/fifth.jpg";
import dumbell from "../../assets/bagdumbell.jpg";

function Newarrivals() {
  const Items = [
    {
      photo: first,
      description: "Best Seller → [7]",
    },
    {
      photo: second,
      description: "Featured Products → [7]",
    },
    {
      photo: third,
      description: "Home Page → [7]",
    },
    {
      photo: fourth,
      description: "Latest Products → [7]",
    },
    {
      photo: fifth,
      description: "New Arrival → [7]",
    },
    {
      photo: dumbell,
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
