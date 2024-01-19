import React, { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Virtual } from "swiper/modules";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import Track from "./Track";

register();

function TrackList({ title, trackList }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperRender, setSwiperRender] = useState(<></>);
  useEffect(() => {
    setSwiperRender(
      <Swiper
        spaceBetween={20}
        loop
        slidesPerView={4.4}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Navigation, Virtual]}
        className="relative max-w-[820px] z-0"
      >
        {trackList.map((track, index) => (
          <SwiperSlide key={track} virtualIndex={index}>
            <Track
              name={track.name}
              thumbnail={track.thumb}
              artist={track.poster}
            />
          </SwiperSlide>
        ))}
      </Swiper>,
    );
  }, []);
  return (
    <div className="relative">
      <span className="text-2xl font-bold">{title}</span>
      <div className="flex w-full items-center justify-between z-10">
        <div
          className="transition-[0.25s] hover:text-primary hover:border-primary cursor-pointer absolute top-[50%] translate-y-[-50%] left-0 p-2 z-10 bg-white border border-gray-400 flex items-center justify-center rounded-sm"
          ref={prevRef}
        >
          <CaretLeft size={16} color="black" />
        </div>
        <div
          className="transition-[0.25s] hover:text-primary hover:border-primary cursor-pointer absolute top-[50%] translate-y-[-50%] right-0 p-2 z-10 bg-white border border-gray-400 flex items-center justify-center rounded-sm"
          ref={nextRef}
        >
          <CaretRight size={16} color="black" />
        </div>
      </div>
      {swiperRender}
    </div>
  );
}

export default TrackList;
