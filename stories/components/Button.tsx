/**----------------------------------------------------------------------------------
 * The one stop shop for button needs baby
 * Mirage UI Kit (( v1.0 ))
 * @author max <max@mirage.space> | November 3, 2022 | Updated: November 9, 2022
 * ----------------------------------------------------------------------------------*/

import React from "react";
import Image from "next/image";

import styles from "./Button.module.css";

interface ButtonProps {
  secondary?: boolean;
  disabled?: boolean;
  loading?: boolean;
  small? : boolean;
  children: string;
  icon?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  secondary = false,
  small = false,
  loading = false,
  disabled = false,
  icon,
  children,
  onClick,
}) => {
  // join all button classes based on props
  const buttonClass = [
    styles.button,
    small ? styles["--small"] : styles ["--large"],
    secondary ? styles["--secondary"] : styles["--primary"],
    loading && styles["--loading"],
    disabled && styles["--disabled"],
    loading && small && styles["--small__loader"],
    icon && small && styles["--with__icon__small"],
    icon && styles["--with__icon"],
  ].join(" ");

  return (
    <button className={buttonClass} onClick={onClick}>
      {loading ? (
        <Image
          src="/gifs/spinner.gif"
          alt="A loading gif"
          width={24}
          height={24}
          quality={100}
        />
      ) : (
        children
      )}
      {icon && (
        <Image
          src={`/icons/${icon}.svg`}
          alt={icon}
          width={24}
          height={24}
          quality={100}
        />
      )}
    </button>
  );
};

export default Button;
