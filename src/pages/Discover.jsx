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
import TrackList from "components/Track/TrackList";
import Layout from "static/Layout";

import thumb7 from "assets/thumbnails/thumb7.jpg";
import thumb8 from "assets/thumbnails/thumb8.jpg";
import thumb9 from "assets/thumbnails/thumb9.jpg";
import thumb10 from "assets/thumbnails/thumb10.jpg";
import thumb11 from "assets/thumbnails/thumb11.jpg";
import Artists from "components/Artists";

// ARTISTS
import artist1 from "assets/artists/artist1.jpg";
import artist2 from "assets/artists/artist2.jpg";
import artist3 from "assets/artists/artist3.jpg";
import Songs from "components/Songs";
import Slider from "components/Slider";
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
  const artistList = [
    {
      avatar: artist1,
      name: "spinzko",
      follower: 381,
      track: 11,
    },
    {
      avatar: artist2,
      name: "Zico Melody",
      follower: 310,
      track: 12,
    },
    {
      avatar: artist3,
      name: "_a.gurt",
      follower: "1,098",
      track: 13,
    },
  ];
  const likedList = [
    {
      avatar: thumb3,
      artist: "guardangel",
      name: "Fox Rain (Piano Version) - Lee Sun Hee",
      data: {
        stream: 511,
        liked: 319,
        replay: 37,
        comment: 3,
      },
    },
    {
      avatar: thumb8,
      artist: "dprkims",
      name: "Deja Vu | ORIGINAL SONG",
      data: {
        stream: "124k",
        liked: "1,593",
        replay: 42,
        comment: 55,
      },
    },
    {
      avatar: thumb1,
      artist: "Eric",
      name: "3107 Full - W/n",
      data: {
        stream: 211,
        liked: 122,
        replay: 237,
        comment: 210,
      },
    },
  ];
  const historyList = [
    {
      avatar: thumb4,
      artist: "Huong Phan",
      name: "Doan Ket Cuoi - Vu Thinh ft Fanny",
      data: {
        stream: 234,
        liked: 102,
        replay: 45,
        comment: 29,
      },
    },
    {
      avatar: thumb7,
      artist: "Micky",
      name: "Your Smile - VSTRA ft Obito",
      data: {
        stream: 149,
        liked: 14,
        replay: 24,
        comment: 4,
      },
    },
    {
      avatar: thumb11,
      artist: "Ashley",
      name: "Noi gio roi - Chau Tham",
      data: {
        stream: "1.3M",
        liked: "234k",
        replay: "190k",
        comment: 123,
      },
    },
  ];
  const footerItems = [
    "Legal",
    "Privacy",
    "Cookie Policy",
    "Consent Manager",
    "Imprint",
    "Charts",
  ];
  const languages = [
    "Deutsch",
    "Espanol",
    "Italiano",
    "Polski",
    "Skenska",
    "English (US)",
    "Francais",
    "Nederlands",
    "Portugues",
  ];
  const [showLang, setShowLang] = useState(false);
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
        <div className="[font:12px/1.4_Inter,sans-serif] text-[#333] border-r border-[#f2f2f2] pt-[30px] pr-[30px] pl-[0] ml-[0] mr-[330px] my-[0]">
          <div className="relative w-full divide-y divide-gray-100 pb-8">
            <TrackList title="Recently Played" trackList={recentList} />
            <TrackList title="More of what you like" trackList={relatedList} />
          </div>
        </div>
        {/* RIGHT */}
        <div className="[font:12px/1.4_Inter,sans-serif] text-[#333] absolute bottom-0 right-0 top-[30px] w-[300px]">
          <div className="w-[90%]">
            <div className="flex items-center justify-between text-gray-400">
              <div className="flex items-center">
                <Users size={20} />
                <span className="[font:12px/1.4_Inter,sans-serif] text-[14px] font-[Inter,sans-serif] font-thin text-[#999] tabular-nums leading-[24px]">
                  Artists you should follow
                </span>
              </div>
              <div className="cursor-pointer flex items-center hover:text-black transition-[0.25s]">
                <ArrowClockwise size={15} className="" />{" "}
                <span className="text-[14px] ml-1">Refresh list</span>
              </div>
            </div>
            <div>
              {artistList.map((ar, i) => (
                <Artists
                  key={i}
                  name={ar.name}
                  avatar={ar.avatar}
                  followers={ar.follower}
                  tracks={ar.track}
                />
              ))}
            </div>
          </div>
          <div className="text-gray-400 mt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Heart size={20} />
                <span className="text-[14px] ml-1">3 likes</span>
              </div>
              <span className="cursor-pointer text-[14px] transition-[0.25s] hover:text-black">
                View all
              </span>
            </div>
            <div className="flex flex-col">
              {likedList.map((lik, i) => (
                <Songs
                  key={i}
                  artist={lik.artist}
                  avatar={lik.avatar}
                  name={lik.name}
                  data={lik.data}
                />
              ))}
            </div>
          </div>
          <div className="text-gray-400 mt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CalendarBlank size={20} />
                <span className="text-[14px] ml-1">Listening history</span>
              </div>
              <span className="cursor-pointer text-[14px] transition-[0.25s] hover:text-black">
                View all
              </span>
            </div>
            <div className="flex flex-col">
              {historyList.map((lik, i) => (
                <Songs
                  key={i}
                  artist={lik.artist}
                  avatar={lik.avatar}
                  name={lik.name}
                  data={lik.data}
                />
              ))}
            </div>
          </div>
          <div className="text-gray-400 my-4">
            <span className="text-[14px] ml-1">Go mobile</span>
            <div className="flex my-4">
              <button className="flex items-center bg-black text-white rounded-md w-fit px-2 py-1 mr-2">
                <AppleLogo size={30} className="" />
                <div className="flex flex-col items-start pl-2 leading-[normal]">
                  <span className="text-[10px]">Download on the</span>
                  <span className="font-medium">App Store</span>
                </div>
              </button>
              <button className="flex items-center bg-black text-white rounded-md w-fit px-2 py-1">
                <GooglePlayLogo size={30} />
                <div className="flex flex-col items-start pl-2 leading-[normal]">
                  <span className="text-[10px]">Download on the</span>
                  <span className="font-medium">Goolg Play</span>
                </div>
              </button>
            </div>
            <div className="my-2">
              {footerItems
                .map((item) => (
                  <span className="text-[13px] text-gray-300 hover:text-gray-500 cursor-pointer">
                    {item}
                  </span>
                ))
                .reduce((prev, curr) => [prev, " - ", curr])}
            </div>
            <span
              onClick={() => {
                setShowLang(true);
              }}
              className="text-[#0984e3] cursor-pointer hover:text-black transition-[0.25s]"
            >
              Language: <span className="text-black my-2">English (US)</span>
            </span>
            {showLang && (
              <div
                onClick={() => {
                  setShowLang(false);
                }}
                className="animate-fromTop fixed top-0 left-0 bg-[rgba(255,255,255,0.8)] w-full h-full"
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="px-8 py-2 h-[60%] rounded-md bg-white absolute w-[40%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                >
                  <X
                    onClick={() => {
                      setShowLang(false);
                    }}
                    size={20}
                    className="cursor-pointer float-right"
                  />
                  <span className="text-2xl font-medium py-5">
                    Select your language
                  </span>
                  <div>
                    <ul className="list-none columns-2 my-5">
                      {languages.map((lan) => (
                        <li className="text-[#0984e3] cursor-pointer py-2 hover:text-black transition-[0.25s]">
                          {lan}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Discover;
