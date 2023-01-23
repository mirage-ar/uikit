/**----------------------------------------------------------------------------------
 * Radios for multiple choice selection options
 * Mirage UI Kit (( v1.0 ))
 * @author max <max@mirage.space> | November 29, 2022 | Updated: nevah
 * ----------------------------------------------------------------------------------*/
import React from "react";
import styles from "./Radio.module.css";
var Radio = function (_a) {
    var title = _a.title, values = _a.values;
    var radioClass = [].join(" ");
    return (<div>
      <fieldset className={styles["--fieldset"]}>
        <legend className={styles["--title"]}>{title === null || title === void 0 ? void 0 : title.toUpperCase()}</legend>
        {values.map(function (value, index) {
            return (<p className={styles["--selector"]} key={index}>
            <input className={styles["--input"]} type="radio" value={value} name={title !== null && title !== void 0 ? title : "default"} id={"".concat(index, "-").concat(value)}></input>
            <label className={styles["--label"]}>{value === null || value === void 0 ? void 0 : value.toUpperCase()}</label>
          </p>);
        })}
      </fieldset>
    </div>);
};
export default Radio;
//# sourceMappingURL=Radio.jsx.map