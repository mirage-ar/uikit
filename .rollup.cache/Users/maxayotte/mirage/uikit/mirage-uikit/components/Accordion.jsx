/**----------------------------------------------------------------------------------
 * Accordion fold component
 * Mirage UI Kit (( v1.0 ))
 * @author max <max@mirage.space> | November 29, 2022 | Updated: nevah
 * ----------------------------------------------------------------------------------*/
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Accordion.module.css";
var Accordion = function (_a) {
    var title = _a.title, content = _a.content;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var handleToggle = function () {
        setIsOpen(function (prev) { return !prev; });
    };
    var buttonImage = function (isOpen) {
        if (!isOpen) {
            return (<Image src={"/icons/plus.svg"} alt="A plus sign" width={16} height={16} quality={100}/>);
        }
        else {
            return (<Image src={"/icons/x.svg"} alt="An X" width={16} height={16} quality={100}/>);
        }
    };
    var accordionClass = [styles.accordion].join(" ");
    return (<div className={accordionClass} style={isOpen ? { height: "100%" } : { height: "48px" }}>
      <div className={styles["--title"]}>
        <div>{title}</div>
        <button className={styles["--button"]} onClick={handleToggle}>
          {buttonImage(isOpen)}
        </button>
      </div>
      <div className={styles["--content"]}>
        {content}
      </div>
    </div>);
};
export default Accordion;
//# sourceMappingURL=Accordion.jsx.map