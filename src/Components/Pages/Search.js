import { useLocation } from "react-router";
import Caard from "../Caard";

const Search = (props) => {
    const location = useLocation();
    const state = location.state;
    return (<>
    <p>Search Results</p>
<Caard id={state.id} price={state.price} title={state.title} description={state.description} offer={state.offer} image={state.image} brand={state.brand} material={state.material} units={state.units} product={true} />

    </>  );
}
 
export default Search;