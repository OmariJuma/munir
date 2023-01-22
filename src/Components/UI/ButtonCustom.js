import styles from'./ButtonCustom.module.css';
import { FaArrowRight } from 'react-icons/fa';

const ButtonCustom = (props) => {
    return (<button id={styles.btn}>{props.text}</button>  );
}
 
export default ButtonCustom;