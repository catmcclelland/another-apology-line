import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import "./PaginatedSwiper.css";
function PaginatedSwiper() {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination, Navigation]}
      className="mySwiper">
      <SwiperSlide className="slide">
        <div className="text">Do you have regrets or unsaid apologies?</div>
        <br />

        <div className="text">Need to get them off your chest?</div>
        <br />
        <div id="call" className="text">
          <a href="tel:+1-502-467-6779" id="phone">
            502-IM-SORRY
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        "You've wronged people, It is to people that you must apologize, not the
        state, not to god." -Allan Bridge
      </SwiperSlide>
    </Swiper>
  );
}

export default PaginatedSwiper;
