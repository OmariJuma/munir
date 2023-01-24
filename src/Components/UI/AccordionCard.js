import searchAnime from "./../../assets/images/vid.mp4";
import styles from "./AccordionCard.module.css";
import test from "./../../assets/images/notes.jpg";
import { useState } from "react";

const AccordionCard = () => {
  const [isActive, setIsActive] = useState(false);
  const accordionData = {
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
  };

  return (
    <>
      {/* <video id={styles.searchVideo} src={searchAnime} autoplay="true" muted loop="true" /> */}
      <div className={styles.accordion}>
        <div
          className={styles.accordionTitle}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <div className={styles.accordionTitle}>{accordionData.title}          <div className={styles.accordionIcon}>{isActive ? "-" : "+"}</div>
</div>
        </div>
        {isActive && (
          <div className={styles.accordionContent}>{accordionData.content}</div>
        )}
      </div>
    </>
  );
};

export default AccordionCard;
