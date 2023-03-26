import { useRouteError } from "react-router";
import { Link } from "react-router-dom";
import styles from "./Error404.module.css";
import e404 from "./../../assets/images/logos/Error404.png";
const Error404 = () => {
// if (status === 404) {
//         throw new Response(<h2 ><br/>404Not Found<br/></h2>);
//       }
  
    return (<div id={styles.errorpage}>
<img style={{height:"90%"}} src={e404} alt="error 404"/>
<p>The page you are looking for does not exist</p>
<Link to="/" >homepage</Link>
<Link to="products/rims" >rims</Link>
<Link to="/products/tyres" >tyres</Link>
    </div>  );
}
 
export default Error404;