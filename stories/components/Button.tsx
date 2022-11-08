/**----------------------------------------------------------------------------------
 * The one stop shop for button needs baby
 * Mirage UI Kit (( v1.0 ))
 * @author max <max@mirage.space> | November 3, 2022 | Updated: November 7, 2022
 * ----------------------------------------------------------------------------------*/

import React from "react";
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
      {loading ? <img src={"/gifs/spinner.gif"} /> : children}
      {image ? <img src={`${image}`} /> : ""}
    </button>
  );
};

export default Button;
