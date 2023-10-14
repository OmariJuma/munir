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
import { v4 } from "uuid";

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
    id: v4(),
    name: "Ms. Sarah",
    image: a1,
    message:"Muneer's shop is a true gem! Their wide selection of rims and tires, along with exceptional customer service, keeps me coming back. The quality of their products and the amazing discounts are unbeatable. I can't recommend them enough!"
  },
  {
    id: v4(),
    name: "Mr. David",
    image: a2,
    message:"I've been a loyal customer of Muneer for years now, and they never disappoint. From their stylish rims to top-notch tires, their products are top of the line. The personalized service I receive and the cost savings are simply unmatched."
  },
  {
    id: v4(),
    name: "Ms. Emily",
    image: a3,
    message:"Muneer's automotive shop is the place to go for all your tire and rim needs. Not only do they offer a fantastic range of products, but their staff is knowledgeable and always ready to help. Plus, their discounts make every purchase a great deal."
  },
  {
    id: v4(),
    name: "Mr. Michael",
    image: a4,
    message:"Muneer's shop has transformed my car's look with their incredible rims. The quality of their products is superb, and the discounts they offer are a pleasant surprise. I've recommended them to all my friends."
  },
]
  return (
    <>
      {" "}
      <header>Our Happy Clients Testimonials</header>
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
