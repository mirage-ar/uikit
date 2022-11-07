/**----------------------------------------------------------------------------------
 * The one stop shop for button needs baby
 * Mirage UI Kit (( v1.0 ))
 * @author max <max@mirage.space> | November 3, 2022 | Updated: nevah
 * ----------------------------------------------------------------------------------*/

import React from "react";
import "./connectButton.css";

interface ConnectButtonProps {
  primary?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: "large" | "small";
  label: string;
}

export const ConnectButton = ({
  label,
  primary = true,
  size = "large",
  loading = false,
  disabled = true,
}: ConnectButtonProps) => {
  const mode = primary ? "--primary" : "--secondary";
  const isLoading = loading ? "--loading" : "";
  const isDisabled = disabled ? "--disabled" : "";
  const smallLoader = loading && size === "small" ? "--small__loader" : "";
  
  return (
    <button 
      disabled={disabled}
      //TODO: Why do we need the " " at the end of the join, want to remove the white space in the css
      //inspector names so they read button--primar--large instead of button --primary --large
      className={["button", mode, `--${size}`, isLoading, smallLoader, isDisabled].join(
        " "
      )}
    >
      {isLoading ? <img src="/gifs/spinner.gif"/> : label}
    </button>
  );
};
