import styles from "./Success.module.css";
import b4 from "./../assets/images/fitting.jpeg";
import after from "./../assets/images/fitting2.jpeg";
const Success = () => {
  return (
    <div className='container'>
        <h2>Success Stories</h2>
      <div class="row">
        <div class={`${"col-sm"} ${styles.myContainer}`}>
          <img src={b4} alt="" />
          <img src={after} alt="" />
        </div>
        <div class={`${"col-sm"} ${styles.myContainer}`}>
          <img src={b4} alt="" />
          <img src={after} alt="" />
        </div>
        <div class={`${"col-sm"} ${styles.myContainer}`}>
          <img src={b4} alt="" />
          <img src={after} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Success;
