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
import { v4 as uuidv4 } from "uuid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials = () => {
  const breakpoints = {
    200: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3, 
    },
  };
  const testimonials = [
  
    {
      id: uuidv4(),
      name: "Mr. John",
      image: a1,
      message:
        "Muneer's rims and tires gave my car a stylish makeover. I get compliments wherever I go!"
    },
    {
      id: uuidv4(),
      name: "Ms. Emily",
      image: a2,
      message:
        "Muneer's high-quality tires provided me with exceptional traction during a snowy winter. I felt safe on the road."
    },
    {
      id: uuidv4(),
      name: "Mr Adbul",
      image: a3,
      message:
        "I've never experienced such a smooth ride until I upgraded my rims with Muneer's products. It's a game-changer!"
    },
    {
      id: uuidv4(),
      name: "Ms. Faith",
      image: a4,
      message:
        "The prices at Muneer are unbeatable, and the service is exceptional. I got the best deal on my new tires."
    },
    {
      id: uuidv4(),
      name: "Mr Michael",
      image: a5,
      message:
        "Muneer's staff helped me choose the perfect rims for my car. The transformation is jaw-dropping."
    },
    {
      id: uuidv4(),
      name: "Ms. Eva",
      image: a6,
      message:
        "Muneer's team goes above and beyond to ensure every customer is satisfied. I couldn't be happier with their service."
    },
    {
      id: uuidv4(),
      name: "Mr. Lee",
      image: a7,
      message:
        "I trust Muneer for all my tire needs. Their expertise and quality products make them my first choice."
    },
    {
      id: uuidv4(),
      name: "Ms. Jane",
      image: a8,
      message:
        "Muneer's rims and tires have given my vehicle a unique and stylish look. I'm thrilled with the results!"
    },
]
  return (
    <>
      {" "}
      <header>Our Happy Clients' Testimonials</header>
      <hr className={styles.hr} />
      <Swiper
        style={{ padding: "0 10px", height: "auto" }}
        slidesPerView={3}
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
        breakpoints={breakpoints}
        className="mySwiper"
      >
        {testimonials.map((testimonial)=>(
          <SwiperSlide className={styles.swiperSlide} key={testimonial.id}>
          <div className={styles.swiperSlideSubContainer}>
            <Card>
              <Card.Body>
                <Card.Img
                  src={testimonial.image}
                  alt="car"
                  style={{ padding: "0" }}
                  className={styles.cardImg}
                />
                <Card.Title className={styles.cardTitle}>
                  {testimonial.name}
                </Card.Title>
                <Card.Text clasName={styles.cardText}>
                 {testimonial.message}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </SwiperSlide>

        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;
