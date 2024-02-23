import PropTypes from "prop-types";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/pagination"; // Import pagination styles
import { useEffect, useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
const StudentReviewSlider = ({ reviews }) => {
  const [count, setCount] = useState(3);
  useEffect(() => {
    // resize slider
    const slideCountHandler = () => {
      if (window.innerWidth < 500) {
        setCount(1);
      } else if (window.innerWidth < 1024) {
        setCount(2);
      }
      if (window.innerWidth > 1024) {
        setCount(3);
      }
    };
    slideCountHandler();
    window.addEventListener("resize", slideCountHandler);
    return () => window.removeEventListener("resize", slideCountHandler);
  });
  return (
    <div
      className="slider max-w mx-auto shadow-3d-light padding-md radius-1 mt mb"
      style={{ "--mwValue": 100, "--mt": 3 }}
    >
      <h2 className="tac mb t-success">Student Reviews</h2>
      <Swiper
        className="mySwiper"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={count}
        navigation
        pagination={{ clickable: true }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="padding-sm">
            <div className="student-review shadow-3d-light padding-sm radius-1">
              <h3 className="t-primary mb">
                <FaUserGraduate className="mr" />
                {review.name}
              </h3>
              <span className="flex align-center">
                {review.stars > 0
                  ? Array(review.stars).fill("⭐").join("")
                  : ""}
                <b className="t-dark" style={{ fontSize: "2rem" }}>
                  {Array(5 - review.stars)
                    .fill("★")
                    .join("")}
                </b>
              </span>
              <p className="mt mb ml t-bold" style={{ "--mb": 3 }}>
                {review.comment}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StudentReviewSlider;
StudentReviewSlider.propTypes = {
  reviews: PropTypes.array.isRequired,
};
