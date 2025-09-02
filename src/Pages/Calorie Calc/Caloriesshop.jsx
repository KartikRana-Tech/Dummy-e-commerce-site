import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Calorie.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import headphone from "../../assets/Whiteheadphones.jpg";
import bluetooth from "../../assets/blueearphones.jpg";
import bagdumbell from "../../assets/bagdumbell.jpg";
import fifth from "../../assets/fifth.jpg";
import first from "../../assets/first.jpg";
import fourth from "../../assets/fourth.jpg";
import speakerred from "../../assets/speakerred.jpg";
import two from "../../assets/third.jpg";
import redbag from "../../assets/redbag.jpg";
import outdoorred from "../../assets/outdoorred.jpg";
import orangewatch from "../../assets/orangewatch.jpg";
import multimedia from "../../assets/multimediayellowhp.jpg";
import pinkhp from "../../assets/pinkhp.jpg";
import leatherhp from "../../assets/leatherHeadphones.jpg";
import alexa from "../../assets/alexa.jpg";
import Card from "../../Components/UI/Card";
import Cardall from "../../Components/Shopcards/Cardall";
import Accordions from "../../Components/Accordion/Accordions";

function Caloriesshop() {
  const [listingFilter, setListingFilter] = useState("columnsData");
  const products = [
    {
      id: 1,
      photo: headphone,
      product: "Bass Stereo Headphone",
      price: "$15.96",
      rating: "★ ★ ★ ★ ★",
    },
    {
      id: 2,
      photo: bluetooth,
      product: "Stereo Earphones",
      price: "$10.56",
      rating: "★ ★ ★ ★",
    },
    {
      id: 3,
      photo: fifth,
      product: "Wireless Bluetooth  Speaker",
      price: "$35.26",
      rating: "★ ★ ★ ★ ★",
    },
    {
      id: 4,
      photo: bagdumbell,
      product: "Gym Equipments",
      price: "$20.30",
      rating: "★ ★ ★ ★",
    },
    {
      id: 5,
      photo: first,
      product: " Digital Watches",
      price: "$10.06",
      rating: "★ ★ ★ ★",
    },
    {
      id: 6,
      photo: fifth,
      product: "JBL Lightning Speaker",
      price: "$65.76",
      rating: "★ ★ ★ ★",
    },
    {
      id: 7,
      photo: fourth,
      product: "Boat Rockhead",
      price: "$60.16",
      rating: "★ ★ ★ ★",
    },
    {
      photo: speakerred,
      product: "Drum Bluetooth Speaker",
      price: "$19.36",
      rating: "★ ★   ★",
    },
    {
      photo: two,
      product: "Bluetooth mic",
      price: "$5.10",
      rating: "★  ★",
    },
    {
      photo: redbag,
      product: "Sports Equipment Set",
      price: "$105.15",
      rating: "★ ★ ★  ★",
    },
    {
      photo: outdoorred,
      product: "Outdoor Premium Speaker",
      price: "$55.36",
      rating: "★ ★ ★  ★",
    },
    {
      photo: orangewatch,
      product: "Satellite Watch",
      price: "$65.86",
      rating: "★ ★  ★",
    },
    {
      photo: alexa,
      product: "Echo Dot",
      price: "$95.6",
      rating: "★  ★ ★ ★",
    },
    {
      photo: multimedia,
      product: "Premium Metal  Headphones",
      price: "$40.50",
      rating: "★ ★ ★ ★ ★",
    },
    {
      photo: leatherhp,
      product: "Leather  wireless Headset",
      price: "$160",
      rating: "★ ★ ★ ★ ★",
    },
    {
      photo: pinkhp,
      product: "Bass Stereo Headphone",
      price: "$34.06",
      rating: "★  ★ ★",
    },
  ];

  const trending = [
    {
      photo: bluetooth,
      product: "CAT Earphones",
      price: "$15.96",
      rating: "  ★☆☆☆☆",
    },
    {
      photo: bagdumbell,
      product: "Gym daily Set",
      price: "$65.26",
      rating: "★★★★☆",
    },
    {
      photo: first,
      product: "Digital watch",
      price: "$25.06",
      rating: "★★★☆☆",
    },
    {
      photo: fourth,
      product: "Boat Stir D52",
      price: "$300.15",
      rating: "  ★★★☆☆ ",
    },
  ];

  return (
    <>
      <nav className={`${styles.shop_top} `}>
        <div className={` ${styles.width_div} `}>
          <h1>Collection</h1>
          <div className={styles.home_link}>
            <NavLink to="/">Home</NavLink> / Products
          </div>
        </div>
      </nav>

      <div className={` ${styles.parent_container} flex nav_container`}>
        {/* Section - Left */}
        <section className={`${styles.sec_left}`}>
          <div className={styles.parent_left}>
            <Accordions />

            <div className={styles.category_section}>
              <ul>
                <li>Powermax</li>
                <li>
                  <span>Fitness Machine </span>
                  <span className={styles.span_more}>+</span>
                </li>
                <li>
                  <span>Watch</span>
                  <span className={styles.span_more}>+</span>
                </li>
                <li>Machine</li>
                <li>
                  <span>Weight Machine</span>
                  <span className={styles.span_more}>+</span>
                </li>
                <li>
                  <span>Calorie Calculator</span>
                  <span className={styles.span_more}>+</span>
                </li>
                <li>Pedometer Watch</li>
              </ul>
            </div>

            <div className={styles.best_seller}>
              <span className={styles.span_content}>
                <b>Best Seller</b>
              </span>
            </div>

            <div className={styles.seller_card}>
              <div className={styles.product_img}>
                <img src={two} />
              </div>
              <h2>Legend Bluetooth Headset</h2>
              <h3>★ ★ ★ ★ ★</h3>
              <span className={styles.prices}>$44.69</span>
            </div>

            <div className={styles.summary_box}>
              <span className={styles.span_content}>
                <strong>Featured</strong>
              </span>
              {/**<IoIosArrowDown className={styles.arrow_down} />  */}
            </div>

            <div className={styles.feature_collection}>
              {trending?.map((item, index) => (
                // <div key={index}>
                //   <div className={styles.featured_card}>
                //     <div className={styles.feature_image}>
                //       <img src={item.photo} />
                //     </div>
                //     <div className={styles.feature_content}>
                //       <h3>{item.product}</h3>
                //       <p>{item.rating}</p>
                //       <h5>{item.price}</h5>
                //     </div>
                //   </div>
                // </div>
                <Card item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Section - Right */}

        <section className={`${styles.sec_right} `}>
          <div className={styles.menu_bar}>
            <div className={styles.bar_container}>
              <div className={styles.icon_types}>
                <button
                  className={
                    listingFilter === "columnsData" ? styles.active : ""
                  }
                  onClick={() => setListingFilter("columnsData")}
                >
                  <BsFillGrid3X3GapFill className={styles.grid_icon} />
                </button>
                <button
                  onClick={() => setListingFilter("ListingData")}
                  className={`${
                    listingFilter === "ListingData" ? styles.active : ""
                  } `}
                >
                  <FaList className={styles.list_icon} />
                </button>
              </div>
              <div className={styles.product_options}>
                <div className={styles.sort_btn}>
                  Sort By: <IoIosArrowDown className={styles.drop_down} />
                </div>
                <span className={styles.content_span}>27 products</span>
              </div>
            </div>
          </div>

          {listingFilter === "columnsData" && (
            <div className={`${styles.shop_container}`}>
              <div className={styles.shop_items}>
                {products?.map((item, index) => (
                  <Cardall index={index} item={item} />
                ))}
              </div>
            </div>
          )}
          {listingFilter === "ListingData" && (
            <>
              <div className={`${styles.shop_containerrow} `}>
                <div className={`${styles.shop_itemsrow}  `}>
                  {products?.map((item, index) => (
                    <Cardall
                      index={index}
                      item={item}
                      className="row_card  img_rowcard"
                      contentClass="content_div"
                      iconsClassName="icons_hover_effect"
                      hoverContents="hover_contents"
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
}

export default Caloriesshop;
