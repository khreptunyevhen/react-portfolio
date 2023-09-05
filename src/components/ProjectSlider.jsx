import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./styles/projectSlider.css";

const ProjectSlider = ({ currentProject, themeMode }) => {
  const images =
    themeMode === "dark" ? currentProject.img.light : currentProject.img.dark;

  return (
    <Swiper
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={`slider-${index}`}>
          <img src={`.${image}`} alt={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSlider;
