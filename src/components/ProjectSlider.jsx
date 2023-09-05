import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./styles/projectSlider.css";

const ProjectSlider = ({ currentProject }) => {
  return (
    <Swiper
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
    >
      {currentProject.img.map((image, index) => (
        <SwiperSlide key={`slider-${index}`}>
          <img src={`.${image}`} alt={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSlider;
