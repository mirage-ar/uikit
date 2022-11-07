/**----------------------------------------------------------------------------------
 * The one stop shop for button needs baby
 * Mirage UI Kit (( v1.0 ))
 * @author max <max@mirage.space> | November 3, 2022 | Updated: nevah
 * ----------------------------------------------------------------------------------*/

import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  primary?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: "large" | "small";
  children: string;
  onClick: () => void;
}

const ConnectButton: React.FC<ButtonProps> = ({
  primary = true,
  size = "large",
  loading = false,
  disabled = false,
  children,
  onClick,
}) => {
  // join all button classes based on props
  const buttonClass = [
    styles.button,
    `button--${size}`,
    primary ? styles["button--primary"] : styles["button--secondary"],
    loading ? styles["--loading"] : "",
    disabled ? "--disabled" : "",
  ].join(" ");

  return (
    <button
      className={buttonClass}
      onClick={onClick}
    >
      {loading ? <img src={"/gifs/spinner.gif"} /> : children}
    </button>
  );
};

export default ConnectButton;
