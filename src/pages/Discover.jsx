import { WarningCircle, X } from "@phosphor-icons/react";
import React, { useState } from "react";
// THUBNAILS SRC
import thumb2 from "../assets/thumbnails/thumb2.jpg";
import thumb1 from "../assets/thumbnails/thumb1.jpg";
import thumb3 from "../assets/thumbnails/thumb3.jpg";
import thumb4 from "../assets/thumbnails/thumb4.jpg";
import thumb5 from "../assets/thumbnails/thumb5.jpg";
import thumb6 from "../assets/thumbnails/thumb6.jpg";
import TrackList from "../components/TrackList";
import Layout from "../static/Layout";
function Discover() {
  const [ad, setAd] = useState(true);
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
  return (
    <Layout>
      {ad && (
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
      )}
      <div className="flex items-start">
        {/* RIGHT */}
        <div className="w-[70%]">
          <TrackList title="Recently Played" trackList={recentList} />
        </div>
        {/* LEFT */}
        <div className="w-[30%]">right container</div>
      </div>
    </Layout>
  );
}

export default Discover;
