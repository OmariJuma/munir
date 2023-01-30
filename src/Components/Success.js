import styles from "./Success.module.css";
import { v4 as uuidv4 } from "uuid";
import a1 from "./../assets/images/before and after/a1.jpeg";
import b1 from "./../assets/images/before and after/b1.jpeg";
import a2 from "./../assets/images/before and after/a2.jpeg";
import b2 from "./../assets/images/before and after/b2.jpeg";
import a3 from "./../assets/images/before and after/a3.jpeg";
import b3 from "./../assets/images/before and after/b3.jpeg";
import a4 from "./../assets/images/before and after/a4.jpeg";
import b4 from "./../assets/images/before and after/b4.jpeg";
import a5 from "./../assets/images/before and after/a5.jpeg";
import b5 from "./../assets/images/before and after/b5.jpeg";
import a6 from "./../assets/images/before and after/a6.jpeg";
import b6 from "./../assets/images/before and after/b6.jpeg";
import a7 from "./../assets/images/before and after/a7.jpeg";
import b7 from "./../assets/images/before and after/b7.jpeg";
import a8 from "./../assets/images/before and after/a8.jpeg";
import b8 from "./../assets/images/before and after/b8.jpeg";
import { CardGroup, Card } from "react-bootstrap";
const Success = () => {
  const b4Naft = [
    { id: uuidv4(), a: a1, b: b1 },
    { id: uuidv4(), a: a2, b: b2 },
    { id: uuidv4(), a: a3, b: b3 },
    { id: uuidv4(), a: a4, b: b4 },
    { id: uuidv4(), a: a5, b: b5 },
    { id: uuidv4(), a: a6, b: b6 },
    { id: uuidv4(), a: a7, b: b7 },
    { id: uuidv4(), a: a8, b: b8 },
  ];

  return (
    <div id={styles.cont}>
      <h2>Success Stories</h2>
      <strong>
        Below are some of the pictures of our clients' vehicles before and after
        coming to us{" "}
      </strong>
      <div className="container">
        <div className="row" style={{ marginTop: "2rem", gap: "10px" }}>
          {b4Naft.map((vals) => (
            <div
              className={`${"col-sm"} ${styles.myContainer}`}
              key={vals.id}
            >
              <Card style={{ backgroundColor: "#f9f9f9" }}>
                <Card.Title>Before</Card.Title>
                <img src={vals.b} loading="lazy" alt="before the car got new rims and tyres" />
              </Card>
              <Card style={{ backgroundColor: "#f9f9f9" }}>
                <Card.Title>After</Card.Title>

                <img src={vals.a} loading="lazy" alt="after the car was fitted with the rims and tyres" />
              </Card>
            </div>
          ))}
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
