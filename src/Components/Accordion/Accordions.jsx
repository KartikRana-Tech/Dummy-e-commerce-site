import React, { useState } from "react";
import styles from "./Accordion.module.scss";
import { IoIosArrowDown } from "react-icons/io";
function Accordions() {
  const filters = [
    {
      type: "Availability",
      content: "In stock (26)",
      contenttwo: "Out of stock(22)",
    },
    {
      type: "Size",
      content: "S M L XL XXL",
      contenttwo: "Oversize fit",
    },
    {
      type: "Product type",
      content: "Backpack (3)",
      contenttwo: "Tracker (4)",
    },
    {
      type: "Brand",
      content: "Fitz",
      contenttwo: "Sennheiser",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {filters?.map((item, index) => (
        <div className={styles.accordion_container} key={index}>
          <div
            className={styles.summary_box}
            onClick={() => toggleAccordion(index)}
          >
            <span className={styles.span_content}>{item.type}</span>

            <div
              style={{
                transform:
                  openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            >
              <IoIosArrowDown className={styles.arrow_down} />
            </div>
          </div>
          {openIndex === index && (
            <div className={styles.accordion_content}>
              <p> {item?.content}</p>
              <p> {item?.contenttwo}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Accordions;
