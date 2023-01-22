import styles from "./Success.module.css";
import b4 from "./../assets/images/fitting.jpeg";
import after from "./../assets/images/fitting2.jpeg";
import { CardGroup, Card } from "react-bootstrap";
const Success = () => {
  return (
    <div className="container" style={{textAlign:"center"}}>
      <h2>Success Stories</h2>
      <strong>Below are some of the pictures of our clients' vehicles before and after coming to us </strong>
      <div class="row" style={{marginTop:'2rem'}}>
        <div class={`${"col-sm"} ${styles.myContainer}`}>
          <Card>
          <Card.Title>Before</Card.Title>
          <img src={b4} alt="" />
          </Card>
          <Card>

          <Card.Title>After</Card.Title>

          <img src={after} alt="" />
          </Card>

        </div>
        <div class={`${"col-sm"} ${styles.myContainer}`}>
          <Card>
          <Card.Title>Before</Card.Title>
          <img src={b4} alt="" />
          </Card>
          <Card>

          <Card.Title>After</Card.Title>

          <img src={after} alt="" />
          </Card>

        </div>
        <div class={`${"col-sm"} ${styles.myContainer}`}>
          <Card>
          <Card.Title>Before</Card.Title>
          <img src={b4} alt="" />
          </Card>
          <Card>

          <Card.Title>After</Card.Title>

          <img src={after} alt="" />
          </Card>

        </div>

      </div>
    </div>
    //   <CardGroup className='g-2'>
    //   <Card > <Card.Title>Card title</Card.Title>
    //     <Card.Img variant="top" src={b4} />
    //     <Card.Body>

    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in
    //         to additional content. This content is a little bit longer.
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    //   <Card>
    //     <Card.Img variant="top" src={after} />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This card has supporting text below as a natural lead-in to
    //         additional content.{' '}
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    //   <Card>
    //     <Card.Img variant="top" src={b4}  />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in
    //         to additional content. This card has even longer content than the
    //         first to show that equal height action.
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    // </CardGroup>
  );
};

export default Success;
