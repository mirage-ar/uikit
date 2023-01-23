/**----------------------------------------------------------------------------------
 * Description component for the piece displays
 * Mirage UI Kit (( v1.0 ))
 * @author max <max@mirage.space> | November 29, 2022 | Updated: nevah
 * ----------------------------------------------------------------------------------*/
import React from "react";
import Image from "next/image";
import styles from "./Description.module.css";
var Description = function (_a) {
    var title = _a.title, content = _a.content, image = _a.image;
    var descriptionClass = [
        styles.description,
        image && styles["--with__image"],
    ].join(" ");
    return (<>
      {image ? (<div className={descriptionClass}>
          <div className={styles["--title"]}>
            {title === null || title === void 0 ? void 0 : title.toUpperCase()}
            <Image src="/icons/live.svg" alt="A live symbol" className={styles["--image"]} width={8} height={8} quality={100}/>
          </div>
          <div className={styles["--content"]}>{content === null || content === void 0 ? void 0 : content.toUpperCase()}</div>
        </div>) : (<div className={descriptionClass}>
          <div className={styles["--title"]}>{title === null || title === void 0 ? void 0 : title.toUpperCase()}</div>
          <div className={styles["--content"]}>{content === null || content === void 0 ? void 0 : content.toUpperCase()}</div>
        </div>)}
    </>);
};
export default Description;
//# sourceMappingURL=Description.jsx.map