import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner1 from "./../../../assets/skill-banner-1.jpg";
import banner2 from "./../../../assets/skill-banner-2.jpg";
import banner3 from "./../../../assets/skill-banner-3.jpg";

const Banner = () => {
  return (
    <Swiper
      className="w-full shadow-lg shadow-gray-400"
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <img
          className="mx-auto w-full lg:max-h-[420px] sm:max-h-[300px] max-h-[300px]"
          src={banner1}
          alt="banner-image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto w-full lg:max-h-[420px] sm:max-h-[300px] max-h-[300px]"
          src={banner2}
          alt="banner-image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="mx-auto w-full lg:max-h-[420px] sm:max-h-[300px] max-h-[300px]"
          src={banner3}
          alt="banner-image"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
