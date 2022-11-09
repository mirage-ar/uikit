/**----------------------------------------------------------------------------------
 * The one stop shop for button needs baby
 * Mirage UI Kit (( v1.0 ))
 * @author max <max@mirage.space> | November 3, 2022 | Updated: November 9, 2022
 * ----------------------------------------------------------------------------------*/

import React from "react";
import Image from 'next/image'
import styles from "./Button.module.css";

interface ButtonProps {
  primary?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: "large" | "small";
  children: string;
  image?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  primary = true,
  size = "large",
  loading = false,
  disabled = false,
  image,
  children,
  onClick,
}) => {
  // join all button classes based on props
  const buttonClass = [
    styles.button,
    styles[`--${size}`],
    primary ? styles["--primary"] : styles["--secondary"],
    loading ? styles["--loading"] : "",
    disabled ? styles["--disabled"] : "",
    size == "small" ? styles["--small__loader"] : "",
    size == "small" ? styles["--with__image__small"] : "",
    image ? styles["--with__image"] : "",
  ].join(" ");

  return (
    <button className={buttonClass} onClick={onClick}>
      {loading ? <Image src="/gifs/spinner.gif" alt="A loading gif" width={26} height={26} quality={100} /> : children}
      {image ? <Image src={`${image}`} alt="An image" width={26} height={26} quality={100}/> : ""}
    </button>
  );
};

export default Button;
