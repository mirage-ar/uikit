/**----------------------------------------------------------------------------------
 * textfield for giving us info we can sell to big business
 * Mirage UI Kit (( v1.0 ))
 * @author max <max@mirage.space> | November 3, 2022 | Updated: November 9, 2022
 * ----------------------------------------------------------------------------------*/

import React from "react";
import Image from "next/image";

import styles from "./TextField.module.css";

interface TextFieldProps {
  error?: boolean;
  placeholder?: string;
  errorMessage?: string;
}

const TextField: React.FC<TextFieldProps> = ({ error = false, placeholder, errorMessage }) => {
  const textFieldClass = [
    styles.text__field,
    error ? styles["--error"] : "",
  ].join(" ");

  return (
    <div>
      {error ? (
        <div>
          <div className={textFieldClass}>
          <input className={styles["--input"]} placeholder={placeholder}></input>
            {/* <div>ENTER YOUR TWITTER USERNAME</div> */}
            <Image
              src="/icons/navigate.svg"
              alt="A navigate icon"
              width={24}
              height={24}
              quality={100}
            />
          </div>
          <div className={styles["--error__text"]}>
            {errorMessage}
          </div>
        </div>
      ) : (
        <div className={textFieldClass}>
          <input className={styles["--input"]} placeholder={placeholder}></input>
          <Image
            src="/icons/navigate.svg"
            alt="A navigate icon"
            width={24}
            height={24}
            quality={100}
          />
        </div>
      )}
    </div>
  );
};

export default TextField;
