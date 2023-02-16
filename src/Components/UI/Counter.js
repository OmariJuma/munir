import styles from "./Counter.module.css";
const Counter = () => {
    return ( <>
    <div className="bg is-size-1">Scroll down</div>
<nav className="level">
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Tweets</p>
      <p className="title js-count-up" data-value="3456"></p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Following</p>
      <p className="title js-count-up" data-value="123"></p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Followers</p>
      <p className="title js-count-up" data-value="450000"></p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Likes</p>
      <p className="title js-count-up" data-value="789"></p>
    </div>
  </div>
</nav>
<div className="bg is-size-1">Scroll up</div></> );
}
 
export default Counter;