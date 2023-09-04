import React from "react";
import "../find/findStyle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import Cards from "../find/Card";
import "swiper/css";
import "swiper/css/navigation";

function Find() {
  return (
    <div className="find">
      <div className="heading">
        <h1>Find your drive</h1>
        <div className="text_bg">
          <p>
            <span>Explore the world's largest car sharing marketplace</span>
          </p>
        </div>
      </div>
      <div className="slider">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            // when window width is >= 340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            // when window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Cards
              image="https://images.unsplash.com/photo-1617195920950-1145bf9a9c72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXVkaSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              make="Audi"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              image="https://cdn.pixabay.com/photo/2015/09/04/23/09/bmw-923028_1280.jpg"
              make="BMW"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              image="https://cdn.pixabay.com/photo/2018/04/15/09/29/car-3321213_1280.jpg"
              make="nissan"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              image="https://cdn.pixabay.com/photo/2016/02/07/13/14/toyota-1184618_1280.jpg"
              make="Toyota"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Find;
