import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import Track from "./Track";
function TrackList({ title, trackList }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="flex flex-col mx-8 my-4 w-full">
      <span className="text-2xl font-medium">{title}</span>
      <ul className="relative list-none flex items-center max-w-[90%] overflow-auto no-scrollbar ">
        <Swiper
          spaceBetween={100}
          loop
          slidesPerView={4.5}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation, Pagination, A11y]}
          // scrollbar={{ draggable: true }}
        >
          {trackList.map((track, index) => (
            <SwiperSlide>
              <Track
                name={track.name}
                thumbnail={track.thumb}
                artist={track.poster}
              />
            </SwiperSlide>
          ))}
          <div className="flex w-full items-center justify-between">
            <div
              className="transition-[0.25s] hover:text-primary hover:border-primary cursor-pointer absolute top-[50%] translate-y-[-50%] left-0 p-2 z-10 bg-white border border-gray-400 flex items-center justify-center rounded-sm"
              ref={prevRef}
            >
              <CaretLeft size={16} />
            </div>
            <div
              className="transition-[0.25s] hover:text-primary hover:border-primary cursor-pointer absolute top-[50%] translate-y-[-50%] right-0 p-2 z-10 bg-white border border-gray-400 flex items-center justify-center rounded-sm"
              ref={nextRef}
            >
              <CaretRight size={16} />
            </div>
          </div>
        </Swiper>
      </ul>
    </div>
  );
}

export default TrackList;
