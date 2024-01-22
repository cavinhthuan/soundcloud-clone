import {
  AppleLogo,
  ArrowClockwise,
  CalendarBlank,
  GooglePlayLogo,
  Heart,
  Users,
  WarningCircle,
  X,
} from "@phosphor-icons/react";
import React, { useState } from "react";
// THUBNAILS SRC
import thumb2 from "assets/thumbnails/thumb2.jpg";
import thumb1 from "assets/thumbnails/thumb1.jpg";
import thumb3 from "assets/thumbnails/thumb3.jpg";
import thumb4 from "assets/thumbnails/thumb4.jpg";
import thumb5 from "assets/thumbnails/thumb5.jpg";
import thumb6 from "assets/thumbnails/thumb6.jpg";
import TrackList from "components/TrackList";
import Layout from "static/Layout";

import thumb7 from "assets/thumbnails/thumb7.jpg";
import thumb8 from "assets/thumbnails/thumb8.jpg";
import thumb9 from "assets/thumbnails/thumb9.jpg";
import thumb10 from "assets/thumbnails/thumb10.jpg";
import thumb11 from "assets/thumbnails/thumb11.jpg";
import Artists from "components/Artists";
import RightInformation from "components/RightInformation";

const recentList = [
  {
    thumb: thumb1,
    name: "USUK",
    poster: "Tuyen Danh",
  },
  {
    thumb: thumb2,
    name: "Playlist chu",
    poster: "Ajn",
  },
  {
    thumb: thumb3,
    name: "Mosc",
    poster: "Aca",
  },
  {
    thumb: thumb4,
    name: "Peace",
    poster: "TD",
  },
  {
    thumb: thumb5,
    name: "Ronboongz",
    poster: "Leo",
  },
  {
    thumb: thumb6,
    name: "piano",
    poster: "Gund",
  },
];
function Discover() {
  const [ad, setAd] = useState(true);
  const relatedList = [
    {
      thumb: thumb7,
      name: "Khong the say X Lost",
      poster: "Related tracks",
    },
    {
      thumb: thumb8,
      name: "nit, sing - om em lan cuoi",
      poster: "Related tracks",
    },
    {
      thumb: thumb9,
      name: "Kho fine - Ronboongz",
      poster: "Related tracks",
    },
    {
      thumb: thumb10,
      name: "Yeu em rat nhieu - Hoang Ton",
      poster: "Related tracks",
    },
    {
      thumb: thumb11,
      name: "VSTRA - Phong",
      poster: "Related tracks",
    },
  ];

  return (
    <Layout>
      {/* {ad && (
        <div className="bg-[#fbe2e2] relative flex justify-center items-center mx-2 h-[64px]">
          <WarningCircle size={26} color="#ED4C67" className="mr-2" />
          <span>
            <b>Now Available: First Fans.</b> Subscribe to Next Pro to get your
            next upload heard by up to 100+ listeners.{" "}
            <span className="text-lg  cursor-pointer text-[#3742fa] underline">
              Start Today
            </span>
          </span>
          <X
            size={28}
            color="gray"
            className="absolute top-[50%] translate-y-[-50%] right-10 cursor-pointer"
            onClick={() => {
              setAd(false);
            }}
          />
        </div>
      )} */}
      <div className="relative [font:12px/1.4_Inter,sans-serif] text-[#333] ">
        {/* LEFT */}
        <div className="[font:12px/1.4_Inter,sans-serif] text-[#333] border-r border-[#f2f2f2] pt-[30px] pr-[30px] pl-[0] ml-[0] mr-[330px] my-[0] w-fit">
          <div className="relative w-full divide-y divide-gray-100 pb-8">
            <TrackList title="Recently Played" trackList={recentList} />
            <TrackList title="More of what you like" trackList={relatedList} />
          </div>
        </div>
        {/* RIGHT */}
        <RightInformation />
      </div>
    </Layout>
  );
}

export default Discover;
