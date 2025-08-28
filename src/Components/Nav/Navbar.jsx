import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { IoIosSearch } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { IoMdExit } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <div className={styles.nav_color}>
        <div className={`${styles.global_use} nav_container`}>
          <header className={`${styles.nav_container}  flex`}>
            <div className={`${styles.nav_bar} flex`}>
              <img src="./public/Images/logo_clean.png" />
              <h1>MeFit</h1>
            </div>

            <div className={`${styles.nav_content} flex  `}>
              <ul>
                <li>
                  <Link className={styles.link_paths} to="/">
                    Home
                  </Link>
                </li>

                <li className={styles.shop_arrival}>
                  <Link className={styles.link_paths} to="/new-arrivals">
                    New Arrivals
                  </Link>
                  <div className={`${styles.nav_dropdown}`}>
                    <div className={styles.items_list}>
                      <div className={styles.item_content}>
                        <img src="./Images/itemone.jpg" />
                        <p>Channel Multi Speaker $48.45</p>
                      </div>

                      <div className={styles.item_content}>
                        <img src="./Images/bagdumbell.jpg" />
                        <p>Gym accessories $38.15</p>
                      </div>

                      <div className={styles.item_content}>
                        <img src="./Images/itemthird.jpg" />
                        <p>Rock headphones $68.97</p>
                      </div>

                      <div className={styles.item_content}>
                        <img src="./Images/itemfourth.jpg" />
                        <p>Bluetooth earphone $28.25</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li className={styles.shop_dropdown}>
                  Shop
                  <div className={`${styles.shop_items} `}>
                    <div className={`${styles.item_section} `}>
                      <div className={styles.item_menu}>
                        <h2>stereo headphones</h2>
                        <ul>
                          <li>Bass stereo headphone</li>
                          <li>channel multi speaker</li>
                          <li>designer footbal bag</li>
                          <li>ear headphones mic</li>
                        </ul>
                      </div>

                      <div className={styles.item_menu}>
                        <h2>fitness tracker</h2>
                        <ul>
                          <li>fitness tracker large</li>
                          <li>gym bag backpack</li>
                          <li>gym bag with shoes</li>
                          <li>h151 headphones</li>
                        </ul>
                      </div>

                      <div className={styles.item_menu}>
                        <h2>bluetooth</h2>
                        <ul>
                          <li>headphone without mic</li>
                          <li>max wired headphones</li>
                          <li>health wrist watch</li>
                          <li>wireless bluetooth speaker</li>
                        </ul>
                      </div>

                      <div className={styles.item_menu}>
                        <h2>calories meter</h2>
                        <ul>
                          <li>wireless headphones</li>
                          <li>thumping bass headphone</li>
                          <li>sleep wristband</li>
                          <li>on-ear bluetooth headphones</li>
                        </ul>
                      </div>

                      <div className={styles.item_menu}>
                        <div>
                          <img src="./Images/4svnTn.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>Calorie Calculator</li>
                <li>Food Scale</li>
                <li>Pedometer</li>
                <li>Pages</li>
              </ul>
            </div>
            <div className={styles.icon_box}>
              <IoIosSearch />
              <BsCart />
            </div>
            <div class={styles.ham_burger} onClick={() => setOpenNav(true)}>
              &#9776;
            </div>
          </header>
          {openNav && (
            <div className={`${styles.mobile_navbar} `}>
              <div
                className={`${styles.navbar_slide} ${
                  openNav ? styles.open : ""
                }  `}
              >
                <div
                  className={styles.exit_btn}
                  onClick={() => setOpenNav(false)}
                >
                  <IoMdExit />
                </div>
                <a>Home</a>
                <a>New Arrivals</a>
                <a>Shop</a>
                <a>Calorie Calculator</a>
                <a>Food Scale</a>
                <a>Pedometer</a>
                <a>Pages</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
