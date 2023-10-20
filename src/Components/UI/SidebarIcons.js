import styles from "./SidebarIcons.module.css";
import icon1 from "./../../assets/images/icons/facebook.svg";
import icon from "./../../assets/images/icons/icons8-add-100.png";
import icon2 from "./../../assets/images/icons/tiktok.svg";
import icon3 from "./../../assets/images/icons/icons8-instagram-100.svg";
import { useState } from "react";
import ScrollTop from "./../../assets/images/logos/scrollup.gif";
const SidebarIcons = () => {
  const [toggle, setToggle] = useState(false);
  const onClickHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div className={styles.iconContainer}>
          <a href="#top">
        <img src={ScrollTop} alt="Scroll to top" id={styles.scrollTop}/>
      </a>
    </div>
  );
};

export default SidebarIcons;
