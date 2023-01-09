/**----------------------------------------------------------------------------------
 * Description component for the piece displays
 * Mirage UI Kit (( v1.0 ))
 * @author max <max@mirage.space> | November 29, 2022 | Updated: nevah
 * ----------------------------------------------------------------------------------*/
import React from "react";
import Image from "next/image";

import styles from "./Description.module.css";

interface DescriptionProps {
  title?: string;
  content?: string;
  image?: boolean;
}

const Description: React.FC<DescriptionProps> = ({ title, content, image }) => {
  const descriptionClass = [
    styles.description,
    image && styles["--with__image"],
  ].join(" ");

  return (
    <>
      {image ? (
        <div className={descriptionClass}>
          <div className={styles["--title"]}>
            {title?.toUpperCase()}
            <Image
              src="/icons/live.svg"
              alt="A live symbol"
              className={styles["--image"]}
              width={8}
              height={8}
              quality={100}
            />
          </div>
          <div className={styles["--content"]}>{content?.toUpperCase()}</div>
        </div>
      ) : (
        <div className={descriptionClass}>
          <div className={styles["--title"]}>{title?.toUpperCase()}</div>
          <div className={styles["--content"]}>{content?.toUpperCase()}</div>
        </div>
      )}
    </>
  );
};

export default Description;
