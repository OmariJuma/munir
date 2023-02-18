import styles from "./Testimonials.module.css";
import { Card } from "react-bootstrap";
//
import a8 from "./../../assets/images/before and after/a8.jpeg";
import a7 from "./../../assets/images/before and after/a7.jpeg";
import a6 from "./../../assets/images/before and after/a6.jpeg";
import a5 from "./../../assets/images/before and after/a5.jpeg";
import a4 from "./../../assets/images/before and after/a4.jpeg";
import a3 from "./../../assets/images/before and after/a3.jpeg";
import a2 from "./../../assets/images/before and after/a2.jpeg";
import a1 from "./../../assets/images/before and after/a1.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials = () => {
  return (
    <>
      {" "}
      <header>Our Happy Clients</header>
      <Swiper
        style={{ padding: "0 10px" }}
        slidesPerView={2}
        spaceBetween={10}
        slidesPerGroup={1}
        grabCursor={true}
        // autoplay={{
        //   delay: 20000,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className={styles.swiperSlide}>
          <Card style={{ width: "100%" }}>
            <img src={a1} alt="car  " />
            <Card.Body>
              <Card.Title>Ms. Beatrice</Card.Title>
              <p>Bf Goodrich 255/15/16</p>
              <Card.Text>
                I am happy to have shopped with Muneer he provides good services
                plus amazing discounts{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Card style={{ width: "100%" }}>
            <img src={a2} alt="car  " />
            <Card.Body>
              <Card.Title>Mr. Alex</Card.Title>
              <p>Bf Goodrich 255/15/16</p>

              <Card.Text>
                I am happy to have shopped with Muneer he provides good services
                plus amazing discounts{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Card style={{ width: "100%" }}>
            <img src={a3} alt="car  " />
            <Card.Body>
              <Card.Title>Mr John</Card.Title>
              <p>Bf Goodrich 255/15/16</p>

              <Card.Text>
                I am happy to have shopped with Muneer he provides good services
                plus amazing discounts{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Card style={{ width: "100%" }}>
            <img src={a4} alt="car  " />
            <Card.Body>
              <Card.Title>Mrs. Loice</Card.Title>
              <p>Bf Goodrich 255/15/16</p>
              <Card.Text>
                I am happy to have shopped with Muneer he provides good services
                plus amazing discounts{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Card style={{ width: "100%" }}>
            <img src={a5} alt="car  " />
            <Card.Body>
              <Card.Title>Mr. Mohammed</Card.Title>
              <p>Bf Goodrich 255/15/16</p>
              <Card.Text>
                I am happy to have shopped with Muneer he provides good services
                plus amazing discounts{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Card style={{ width: "100%" }}>
            <img src={a6} alt="car  " />
            <Card.Body>
              <Card.Title>Mrs. Holga</Card.Title>
              <p>Bf Goodrich 255/15/16</p>
              <Card.Text>
                I am happy to have shopped with Muneer he provides good services
                plus amazing discounts{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Card style={{ width: "100%" }}>
            <img src={a7} alt="car  " />
            <Card.Body>
              <Card.Title>Mr. Jibril</Card.Title>
              <p>Bf Goodrich 255/15/16</p>
              <Card.Text>
                I am happy to have shopped with Muneer he provides good services
                plus amazing discounts{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Card style={{ width: "100%" }}>
            <img src={a8} alt="car  " />
            <Card.Body>
              <Card.Title>Ms. Virginia</Card.Title>
              <p>Bf Goodrich 255/15/16</p>
              <Card.Text>
                I am happy to have shopped with Muneer he provides good services
                plus amazing discounts{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonials;
