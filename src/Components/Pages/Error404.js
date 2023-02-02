import { useRouteError } from "react-router";
import { Link } from "react-router-dom";
import styles from "./Error404.module.css";
const Error404 = () => {
if (status === 404) {
        throw new Response(<h2 ><br/>404Not Found<br/></h2>);
      }
  
    return (<div id={styles.errorpage}>
<h1>Ooops!</h1>
<p>Sorry, an unexpected error has occured</p>
<Link to="/" >homepage</Link>
<Link to="products/rims" >rims</Link>
<Link to="/products/tyres" >tyres</Link>
    </div>  );
}
 
export default Error404;