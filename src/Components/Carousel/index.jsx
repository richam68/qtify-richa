import React from "react";
import { Navigation, Pagination, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.css";
import Card from "../Cards";
import { ReactComponent as LeftIcon } from "./Group 3741.svg";
import { ReactComponent as RightIcon } from "./right.svg";

const Carousel = ({ data }) => {
  return (
    <div className="mySwiper">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={7}
        virtual
        //   navigation={true}
        navigation={{ prevEl: ".arrow-left", nextEl: ".arrow-right" }}
      >
        {data.map((slideContent, index) => {
          // console.log("carousel", slideContent.songs);
          return (
            <SwiperSlide key={index}>
              <Card
                key={slideContent.id}
                imageSrc={slideContent.image}
                follows={slideContent.follows}
                title={slideContent.title}
                totalNoSongs={slideContent.songs && slideContent.songs.length}
              />
            </SwiperSlide>
          );
        })}
        <button className="arrow-left arrow">
          <LeftIcon />
        </button>
        <button className="arrow-right arrow">
          <RightIcon />
        </button>
      </Swiper>
    </div>
  );
};

export default Carousel;
