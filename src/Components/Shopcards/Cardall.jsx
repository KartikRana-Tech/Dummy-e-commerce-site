import React, { useState } from "react";
import styles from "./Cardall.module.scss";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import useCartStore from "../Zustand/Zustand";

const Cardall = ({
  item,
  index,
  className,
  contentClass,
  iconsClassName,
  hoverContents,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const addToCart = useCartStore((s) => s.addToCart);
  return (
    <div className={`${styles.product_card} ${className}`} key={index}>
      <div className={`${styles.product_image} ${className}`}>
        <img src={item.photo} />
        <div className={`${styles.icon_contents}  ${iconsClassName}`}>
          <div className={`${styles.hover_contents} ${hoverContents}`}>
            <div className={styles.icon_s} onClick={() => addToCart(item)}>
              <MdOutlineAddShoppingCart />
            </div>
            <div className={styles.icon_s} onClick={() => setShowDetails(true)}>
              <FaEye />
            </div>
          </div>
        </div>
      </div>
      <div className={`${contentClass}`}>
        <h3>{item.product}</h3>
        <h2>{item.rating}</h2>
        <p>{item.price}</p>
      </div>
      {showDetails && (
        <div className={styles.product_modal}>
          <div className={styles.modal_content}>
            <div className={styles.modal_image}>
              <img src={item.photo} />
            </div>
            <div className={styles.written_content}>
              <h2>{item.product}</h2>
              <p className={styles.market_price}>
                <p>
                  Price <span className={styles.mrp_price}>{item.price}</span>
                </p>
              </p>
              <span className={styles.rating_stars}>{item.rating}</span>
              <p>
                Availability <span className={styles.in_stock}> In stock</span>
              </p>
              <p>
                Sub total
                <span className={styles.total_price}>{item.price}</span>
              </p>
              <div className={styles.btns_container}>
                <div className={styles.add_btns}>
                  <button onClick={()=>addToCart(item)}>Add To Cart</button>
                  <button>Add To Wishlist</button>
                </div>
                <div className={styles.buy_now}>
                  <button>Buy it now</button>
                </div>
              </div>
            </div>
            <div className={styles.modal_close}>
              <button onClick={() => setShowDetails(false)}>
                <IoClose />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cardall;
