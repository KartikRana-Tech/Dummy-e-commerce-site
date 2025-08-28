import React from "react";
import { TbMapSearch } from "react-icons/tb";
import styles from "./Hero.module.scss";
import { TbMessage } from "react-icons/tb";
import { TbBattery3 } from "react-icons/tb";
import { PiHeartbeat } from "react-icons/pi";
import { GiLoveSong } from "react-icons/gi";
import { FaCapsules, FaPersonSwimming } from "react-icons/fa6";
import { IoMdBicycle } from "react-icons/io";
import { FaAppleAlt } from "react-icons/fa";
import { GrUserFemale } from "react-icons/gr";
import { GiWeight } from "react-icons/gi";
import { TbTreadmill } from "react-icons/tb";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaCirclePlay } from "react-icons/fa6";
import { LiaBicycleSolid } from "react-icons/lia";
import { FaPersonRunning } from "react-icons/fa6";
import { IoAlarm } from "react-icons/io5";
import { GrSwim } from "react-icons/gr";
import { ImSpoonKnife } from "react-icons/im";
import { IoIosSearch } from "react-icons/io";
import { TfiMore } from "react-icons/tfi";

function Hero() {
  return (
    <>
      <div className={`${styles.hero_container}  `}>
        <div className={` ${styles.common_margin}  common_margin `}>
          <div className={`${styles.para_content} container `}>
            <h2>The New Mefit</h2>
            <h1>Motivation on wrist</h1>
            <p>Amet est placerat in egestas erat imperdiet sed.</p>
            <div className={styles.btn_div}>
              <a>Show More</a>
            </div>
          </div>
        </div>
      </div>

      <section className={`${styles.sec_two}  `}>
        <div className={`${styles.dd_parent} common_margin  `}>
          <div className={` container ${styles.hero_two}   `}>
            <h1>Access The Experiences That Matter</h1>
            <div className={styles.icon_box}>
              <div>
                <TbBattery3 />
                <p>
                  4+ Battery
                  <br /> Life*
                </p>
              </div>
              <div>
                <TbMapSearch />
                <p>
                  Contactless <br /> Payments
                </p>
              </div>
              <div>
                <TbMessage />
                <p>
                  Apps,Clock Faces
                  <br />& Notifications
                </p>
              </div>
              <div>
                <PiHeartbeat />
                <p>
                  Heart Rate <br />
                  Tracking
                </p>
              </div>
              <div>
                <GiLoveSong />
                <p>
                  Store & Play More <br />
                  Than 300
                </p>
              </div>
              <div>
                <FaPersonSwimming />
                <p>
                  Swimproof <br />
                  Watch**
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={` ${styles.third_container}   `}>
        <div className={`container${styles.xtra_space} common_margin `}>
          <div className={` ${styles.sec_third}   `}>
            <img src="./public/Images/Redwatch.jpg" />
            <div className={styles.content_div}>
              <h3>Calorie's Tracker</h3>
              <h5>WHAT YOU CAN'T STOP EXPECTING</h5>
              <ul>
                <li>5-day battery life</li>
                <li>Digital tracking algorithm</li>
                <li>High splash resistant</li>
                <li>DRX Limites Edition</li>
              </ul>
              <button>Shop Now</button>
            </div>
          </div>
          <div className={styles.logo_parent}>
            <div className={styles.logo_box}>
              <img src="./Images/Call.png" />
              <img src="./Images/two.png" />
              <img src="./Images/text.png" />
              <img src="./Images/wifi.png" />
              <img src="./Images/yellow.png" />
              <img src="./Images/trans.png" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sec_fourth}>
        <div className="container">
          <div className={` ${styles.content_box}  common_margin`}>
            <h2>
              Keep health fit for <br />
              every moment
            </h2>
            <p>
              Designed to be your personal wellness and fitness companion. Versa
              does more than tell the time. It tells you how to make the most of
              it.
            </p>
          </div>
        </div>
      </section>

      <section className={`common_margin ${styles.section_fifth}`}>
        <div className={`${styles.global} common_margin`}>
          <div className={styles.flex_row}>
            <div>
              <img src="./Images/phone.jpg" />
            </div>
            <div className={styles.hea_ding}>
              <h2>Know yourself,Know your health</h2>
              <div className={styles.icon_content}>
                <div className={styles.cycle_box}>
                  <IoMdBicycle className={styles.cycle_icon} />
                  <div className={styles.feature_item}>
                    <h3>Personal Fitbit Dashboard</h3>
                    <p>
                      From water to workouts, see all your stats, set goals &
                      track progress in the Mefit app.
                    </p>
                  </div>
                </div>

                <div className={styles.cycle_box}>
                  <FaAppleAlt className={styles.apple_icon} />
                  <div className={styles.feature_item}>
                    <h3>Sleep Tracking & Stages</h3>
                    <p>
                      Track time in light, deep and REM sleep stages & get
                      insights about your night.
                    </p>
                  </div>
                </div>

                <div className={styles.cycle_box}>
                  <GrUserFemale className={styles.use_female} />
                  <div className={styles.feature_item}>
                    <h3>Female Health Tracking</h3>
                    <p>
                      Turn on female health tracking to log periods, track your
                      cycle & gauge ovulation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={` ${styles.section_sixth} `}>
        <div className={`container  ${styles.six_container} `}>
          <div className={`${styles.div_outer} common_margin`}>
            <div className={styles.img_div}>
              <img src="./Images/yoga.png" />
            </div>
            <div className={styles.head_start}>
              <h2>Sweat today & Smile tomorrow</h2>
              <div className={styles.icon_hold}>
                <div className={styles.weight_box}>
                  <GiWeight className={styles.wei_ght} />
                  <div className={styles.box_item}>
                    <h3>MeFit Today</h3>
                    <p>
                      See your daily stats and progress, plus personalised
                      insights & goal reminders right on your watch.
                    </p>
                  </div>
                </div>

                <div className={styles.mill_box}>
                  <TbTreadmill className={styles.tread_mill} />
                  <div className={styles.box_item}>
                    <h3>Sleep Tracking & Stages</h3>
                    <p>
                      Keep moving toward your goals with friendly reminders that
                      encourage you to stay active throughout the day.
                    </p>
                  </div>
                </div>
                <div className={styles.clip_box}>
                  <LiaClipboardListSolid className={styles.clip_board} />
                  <div className={styles.box_item}>
                    <h3>Female Health Tracking</h3>
                    <p>
                      Find moments of calm with guided breathing sessions that
                      are personalised based on your heart rate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.sec_seventh}  `}>
        <div className={`  ${styles.cont_ainer} container`}>
          <div className={`${styles.text_content} common_margin`}>
            <FaCirclePlay className={styles.icon_play} />
            <h2>Get Guidance To Reach Your Goals</h2>
            <p>
              Versa's not just for show, it shows you the way to a more active
              life with features to help you track workouts, optimise your
              effort & stay motivated
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.sec_eighth}  `}>
        <div className={`common_margin ${styles.parent_div} `}>
          <h2>Understand your activity and boost your workouts</h2>
          <div className={styles.content_section}>
            <div className={styles.left_side}>
              <div className={styles.card_section}>
                <div className={styles.card_one}>
                  <div className={styles.para_graph}>
                    <h5>Distance Covered</h5>
                    <p>
                      Quisque id diam vel quam elementum pulvinar etiam non.
                    </p>
                  </div>
                  <div className={styles.card_icon}>
                    <LiaBicycleSolid className={styles.icon_bicycle} />
                  </div>
                </div>
                <div className={styles.card_one}>
                  <div className={styles.para_graph}>
                    <h5>Multi-Sport Mode</h5>
                    <p>
                      At urna condimentum mattis pellentesque id nibh tortor.
                    </p>
                  </div>
                  <div className={styles.card_icon}>
                    <FaPersonRunning className={styles.icon_run} />
                  </div>
                </div>
                <div className={styles.card_one}>
                  <div className={styles.para_graph}>
                    <h5>Sleep Tracker</h5>
                    <p>
                      Justo laoreet sit amet cursus sit. Semper viverra nam
                      libero.
                    </p>
                  </div>
                  <div className={styles.card_icon}>
                    <IoAlarm className={styles.icon_watch} />
                  </div>
                </div>
              </div>
              <div className={styles.image_section}>
                <div className={styles.purple_watch}>
                  <img src="./Images/purpleWatch.jpg" />
                </div>
              </div>
              <div className={styles.section_third}>
                <div className={styles.card_section}>
                  <div className={styles.card_rone}>
                    <div className={styles.card_icon}>
                      <GrSwim className={styles.icon_bicycle} />
                    </div>
                    <div className={styles.para_graph}>
                      <h5>Waterproof</h5>
                      <p>
                        Enim tortor at auctor urna. Tortor pretium viverra
                        suspendisse.
                      </p>
                    </div>
                  </div>
                  <div className={styles.card_rone}>
                    <div className={styles.card_icon}>
                      <ImSpoonKnife className={styles.icon_run} />
                    </div>
                    <div className={styles.para_graph}>
                      <h5>Burning Calories</h5>
                      <p>
                        Magna ac placerat vestibulum lectus mauris ultrices eros
                        in.
                      </p>
                    </div>
                  </div>
                  <div className={styles.card_rone}>
                    <div className={styles.card_icon}>
                      <FaCapsules className={styles.icon_watch} />
                    </div>
                    <div className={styles.para_graph}>
                      <h5>Blood Pressure</h5>
                      <p>
                        Quam nulla porttitor massa id neque aliquam.Etiam non
                        quam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.sec_nine} common_margin`}>
        <div className={styles.heading_div}>
          <h1>Our Gallery</h1>
        </div>
        <div className={styles.image_gallery}>
          <div className={styles.img_div}>
            <img src="./Images/plank.jpg" />
            <div className={styles.content_sec}>
              <div className={styles.two_icons}>
                <a>
                  <IoIosSearch />
                </a>
                <a>
                  <TfiMore />
                </a>
              </div>
              <div className={styles.content_para}>
                <h2>Arm Exercise</h2>
                <p>Workout</p>
              </div>
            </div>
          </div>

          <div className={styles.img_div}>
            <img src="./Images/phonetwo.jpg" />
            <div className={styles.content_sec}>
              <div className={styles.two_icons}>
                <a>
                  <IoIosSearch />
                </a>
                <a>
                  <TfiMore />
                </a>
              </div>
              <div className={styles.content_para}>
                <h2>Weather Report</h2>
                <p>Notification</p>
              </div>
            </div>
          </div>

          <div className={styles.img_div}>
            <img src="./Images/laces.jpg" />
            <div className={styles.content_sec}>
              <div className={styles.two_icons}>
                <a>
                  <IoIosSearch />
                </a>
                <a>
                  <TfiMore />
                </a>
              </div>
              <div className={styles.content_para}>
                <h2>Steps Count</h2>
                <p>Running</p>
              </div>
            </div>
          </div>

          <div className={styles.img_div}>
            <img src="./Images/watching.jpg" />
            <div className={styles.content_sec}>
              <div className={styles.two_icons}>
                <a>
                  <IoIosSearch />
                </a>
                <a>
                  <TfiMore />
                </a>
              </div>
              <div className={styles.content_para}>
                <h2>Heart Rate</h2>
                <p>Tracker</p>
              </div>
            </div>
          </div>

          <div className={styles.img_div}>
            <img src="./Images/hands.jpg" />
            <div className={styles.content_sec}>
              <div className={styles.two_icons}>
                <a>
                  <IoIosSearch />
                </a>
                <a>
                  <TfiMore />
                </a>
              </div>
              <div className={styles.content_para}>
                <h2>Gym Workouts</h2>
                <p>Sport Activity</p>
              </div>
            </div>
          </div>

          <div className={styles.img_div}>
            <img src="./Images/sleeping.jpg" />
            <div className={styles.content_sec}>
              <div className={styles.two_icons}>
                <a>
                  <IoIosSearch />
                </a>
                <a>
                  <TfiMore />
                </a>
              </div>
              <div className={styles.content_para}>
                <h2>Sleeping Monitor</h2>
                <p>Notification</p>
              </div>
            </div>
          </div>

          <div className={styles.img_div}>
            <img src="./Images/sewatch.jpg" />
            <div className={styles.content_sec}>
              <div className={styles.two_icons}>
                <a>
                  <IoIosSearch />
                </a>
                <a>
                  <TfiMore />
                </a>
              </div>
              <div className={styles.content_para}>
                <h2>Blood Pressure Monitor</h2>
                <p>Health</p>
              </div>
            </div>
          </div>

          <div className={styles.img_div}>
            <img src="./Images/lastset.jpg" />
            <div className={styles.content_sec}>
              <div className={styles.two_icons}>
                <a>
                  <IoIosSearch />
                </a>
                <a>
                  <TfiMore />
                </a>
              </div>
              <div className={styles.content_para}>
                <h2>Pedometer</h2>
                <p>Task</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.sec_tenth}  common_margin `}>
        <h2>Best Sellers</h2>
        <div className={`${styles.parent_tenth} container`}>
          <div className={styles.parent_content}>
            <div className={styles.product_card}>
              <div className={styles.two_watches}>
                <img src="./Images/blackblue.jpg" />
              </div>
              <div className={styles.items_listing}>
                <h3>Fitness Tracker Large</h3>
                <span className={styles.stars}>★★★★★</span>
                <br />
                <span className={styles.bucks}>$59.22</span>
              </div>
            </div>
          </div>
          <div className={styles.parent_content}>
            <div className={styles.product_card}>
              <div className={styles.two_watches}>
                <img src="./Images/blueearphones.jpg" />
              </div>
              <div className={styles.items_listing}>
                <h3>Fitness Tracker Large</h3>
                <span className={styles.stars}> ★★★★☆</span>
                <br />
                <span className={styles.bucks}>$59.22</span>
              </div>
            </div>
          </div>
          <div className={styles.parent_content}>
            <div className={styles.product_card}>
              <div className={styles.two_watches}>
                <img src="./Images/bagdumbell.jpg" />
              </div>
              <div className={styles.items_listing}>
                <h3>Fitness Tracker Large</h3>
                <span className={styles.stars}>★★★☆☆</span>
                <br />
                <span className={styles.bucks}>$59.22 </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sec_eleventh}>
        <div className={styles.video_container}>
          <video autoPlay muted loop playsInline>
            <source
              src="https://cdn.shopify.com/s/files/1/0107/4973/9108/files/fitball-video.mp4?2208"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <section className={`${styles.sec_twelve} common_margin`}>
        <div className={`${styles.customer_box}   `}>
          <h2>What Our Customers Say</h2>
          <div className={`${styles.customer_content} container `}>
            <span className={styles.stars}>★★★☆☆</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
              arcu nec nulla tincidunt volutpat. Suspendisse potenti.
            </p>
            <span className={styles.customer_name}>Monaco Diems</span>
            <br />
            <span className={styles.team_role}>DEVELOPER</span>
            <div className={styles.person_image}>
              <img src="./Images/developer.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.sec_thirteen} `}>
        <div className={`${styles.sec_slast} `}>
          <div className={`${styles.sec_contactus} `}>
            <h2>Newsletter</h2>
            <input type="text" placeholder="Email Address" />
          </div>
        </div>
      </section>

      <section className={`${styles.sec_fourteen}  `}>
        <div className="common_margin">
          <div className={`${styles.background_img} container  `}>
            <div className={styles.logo_foot}>
              <img src="./Images/logofoot.jpg" />
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
    </>
  );
}

export default Hero;
