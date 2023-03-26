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
      <img
        src={icon}
        alt=""
        onClick={onClickHandler}
        className={`${toggle ? styles.pop : styles.popout}`}
        id={styles.plus}
      />
      {toggle && (
        <div>
          <a
            href="https://www.facebook.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            {" "}
            <img
              src={icon1}
              alt="facebook icon link "
              className={styles.iconBody}
              id={styles.ic1}
            />
          </a>
          <a href="https://www.tiktok.com/" target={"_blank"} rel="noreferrer">
            <img
              src={icon2}
              alt="tiktok icon link"
              className={styles.iconBody}
              id={styles.ic2}
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            {" "}
            <img
              src={icon3}
              alt="instagram icon link "
              className={styles.iconBody}
              id={styles.ic3}
            />{" "}
          </a>
        </div>
      )}
      <a href="#top">
        <img src={ScrollTop} alt="Scroll to top" id={styles.scrollTop}/>
      </a>
    </div>
  );
};

export default SidebarIcons;
