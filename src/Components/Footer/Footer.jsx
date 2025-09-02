import React from "react";
import styles from "./Footer.module.scss";
import { FaSquareXTwitter, FaTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logofoot from "../../assets/logofoot.jpg";
function Footer() {
  return (
    <>
      <section className={`${styles.sec_fourteen}  `}>
        <div className="nav_margin">
          <div className={`${styles.background_img}   `}>
            <div className={styles.logo_foot}>
              <img src={logofoot} />
            </div>
            <div className={styles.list_items}>
              <ul>
                <li>Search</li>
                <li>Help</li>
                <li>Privacy Policy</li>
                <li>Shipping Details</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.sec_footer} `}>
        <div className={`${styles.footer_end} container `}>
          <div className={`${styles.foot_parent} `}>
            <div className={styles.footer_contents}>
              <p>All Right Reserved @ 2025, Design Themes</p>
            </div>
            <div className={styles.social_content}>
              <a>
                <FaTwitter />
              </a>
              <a>
                <FaFacebookSquare />
              </a>
              <a>
                <FaPinterest />
              </a>
              <a>
                <FaInstagram />
              </a>
            </div>

            <div className={styles.payment_icons}>
              <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
              <img
                src="https://img.icons8.com/color/48/mastercard.png"
                alt="Mastercard"
              />
              <img
                src="https://img.icons8.com/color/48/amex.png"
                alt="American Express"
              />
              <img
                src="https://img.icons8.com/color/48/paypal.png"
                alt="PayPal"
              />
              <img
                src="https://img.icons8.com/color/48/discover.png"
                alt="Discover"
              />
              <img
                src="https://img.icons8.com/color/48/diners-club.png"
                alt="Diners Club"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
