/**----------------------------------------------------------------------------------
 * A button component
 * Mirage UI Kit (( v1.0 ))
 * @author max <max@mirage.space> | November 3, 2022 | Updated: November 9, 2022
 * ----------------------------------------------------------------------------------*/
import React from "react";
import Image from "next/image";
import styles from "./Button.module.css";
var Button = function (_a) {
    var _b = _a.secondary, secondary = _b === void 0 ? false : _b, _c = _a.small, small = _c === void 0 ? false : _c, _d = _a.loading, loading = _d === void 0 ? false : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.color, color = _f === void 0 ? "white" : _f, icon = _a.icon, children = _a.children, onClick = _a.onClick;
    // join all button classes based on props
    var buttonClass = [
        styles.button,
        small ? styles["--small"] : styles["--large"],
        secondary ? styles["--secondary"] : styles["--primary"],
        loading && styles["--loading"],
        disabled && styles["--disabled"],
        loading && small && styles["--small__loader"],
        icon && small && styles["--with__icon__small"],
        icon && styles["--with__icon"],
        color === "black" && styles["--black"],
        color === "green" && styles["--green"],
        secondary && color === "green" && styles["--secondary_green"],
        secondary && color === "black" && styles["--secondary_black"]
    ].join(" ");
    return (<button className={buttonClass} onClick={onClick}>
      {loading ? (<Image src="/gifs/spinner.gif" alt="A loading gif" width={24} height={24} quality={100}/>) : (children)}
      {icon && (<Image src={"/icons/".concat(icon, ".svg")} alt={icon} width={24} height={24} quality={100}/>)}
    </button>);
};
export default Button;
//# sourceMappingURL=Button.jsx.map