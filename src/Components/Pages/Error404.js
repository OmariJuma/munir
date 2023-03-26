import { useRouteError } from "react-router";
import { Link } from "react-router-dom";
import styles from "./Error404.module.css";
import e404 from "./../../assets/images/logos/Error404.png";
const Error404 = () => {
// if (status === 404) {
//         throw new Response(<h2 ><br/>404Not Found<br/></h2>);
//       }
  
    return (<div id={styles.errorpage}>
<img style={{height:"100%"}} src={e404} alt="error 404"/>
<Link to="/" style={{textAlign:"center"}}>Click here to return to the homepage</Link>
    </div>  );
}
 
export default Error404;