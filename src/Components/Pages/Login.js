import Google from "../../assets/images/icons/google.png";
import styles from "./Login.module.css";
const Login = () => {
  const google = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };


  return (
    <div className={styles.login}>
      <h1 className={styles.loginTitle}>Choose a Login Method</h1>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.loginButton} onClick={google}>
            <img src={Google} alt="" className={styles.icon} />
            Google
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.line} />
          <div className={styles.or}>OR</div>
        </div>
        <div className={styles.right}>
          <input className={styles.input} type="text" placeholder="Username" />
          <input className={styles.input} type="text" placeholder="Password" />
          <button className={styles.submit}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
