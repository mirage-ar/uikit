/**----------------------------------------------------------------------------------
 * Accordion fold component
 * Mirage UI Kit (( v1.0 ))
 * @author max <max@mirage.space> | November 29, 2022 | Updated: nevah
 * ----------------------------------------------------------------------------------*/

import React, { ReactElement, useState } from "react";
import Image from "next/image";

import styles from "./Accordion.module.css";

interface AccordionProps {
  title?: string;
  content?: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const buttonImage = (isOpen: boolean): ReactElement => {
    if (!isOpen) {
      return (
        <Image
          src={"/icons/plus.svg"}
          alt="A plus sign"
          width={16}
          height={16}
          quality={100}
        />
      );
    } else {
      return (
        <Image
          src={"/icons/x.svg"}
          alt="An X"
          width={16}
          height={16}
          quality={100}
        />
      );
    }
  };

  const accordionClass = [styles.accordion].join(" ");

  return (
    <div
      className={accordionClass}
      style={isOpen ? { height: "100%" } : { height: "48px" }}
      data-testid="accordion-1"
    >
      <div className={styles["--title"]}>
        <div>{title}</div>
        <button className={styles["--button"]} onClick={handleToggle}>
          {buttonImage(isOpen)}
        </button>
      </div>
      <div className={styles["--content"]}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;
