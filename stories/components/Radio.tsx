/**----------------------------------------------------------------------------------
 * Radios for multiple choice selection options
 * Mirage UI Kit (( v1.0 ))
 * @author max <max@mirage.space> | November 29, 2022 | Updated: nevah
 * ----------------------------------------------------------------------------------*/
import React from "react";
import Image from "next/image";

import styles from "./Radio.module.css";

interface RadioProps {
  title?: string;
  values: Array<string>;
}

const Radio: React.FC<RadioProps> = ({ title, values }) => {
  const radioClass = [].join(" ");

  return (
    <div>
      <fieldset className={styles["--fieldset"]}>
        <legend className={styles["--title"]}>{title?.toUpperCase()}</legend>
        {values.map((value, index) => {
          return (
            <p className={styles["--selector"]} key={index}>
            <input
              className={styles["--input"]}
              type="radio"
              value={value}
              name={title ?? "default"}
              id={`${index}-${value}`}
            ></input>
            <label className={styles["--label"]}>{value?.toUpperCase()}</label>
          </p>
          )
        })}
      </fieldset>
    </div>
  );
};

export default Radio;
