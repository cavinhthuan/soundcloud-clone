import {
  DotsThree,
  Heart,
  LinkSimple,
  Play,
  Share,
  Swap,
} from "@phosphor-icons/react";
import React, { useState } from "react";
import PlaylistButton from "./PlaylistButton";
import SongOptionInPlaylist from "./SongOptionInPlaylist";

function SongInPlaylist({ thumbnail, no, poster, songName, listens }) {
  const [hover, setHover] = useState(false);

  const options = [
    {
      icon: <Heart size="16" weight="bold" color="#222" />,
      onclick: "",
    },
    {
      icon: <Swap size="16" weight="bold" color="#222" />,
      onclick: "",
    },
    {
      icon: <Share size="16" weight="bold" color="#222" />,
      onclick: "",
    },
    {
      icon: <LinkSimple size="16" weight="bold" color="#222" />,
      onclick: "",
    },
    {
      icon: <DotsThree size="16" weight="bold" color="#222" />,
      onclick: "",
    },
  ];
  return (
    <>
      <div
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className="p-2 text-[15px] flex justify-between items-center my-2 w-full cursor-pointer transition-[0.25s] hover:bg-gray-200"
      >
        <div className="flex items-center">
          <img className="w-[30px] h-[30px]" alt="thumbnail" src={thumbnail} />
          <span className="mx-4 text-[#999] hover:text-[#333] transition-[.25s]">
            {no}
          </span>
          <div className="w-fit whitespace-normal inline">
            <span className="w-full truncate ... text-[#999] hover:text-[#333] transition-[.25s]">
              {poster}
            </span>
          </div>
          <span className="text-[#999] ml-2">-</span>
          <div className="w-[90%] truncate ... inline mr-4">
            <span className="mx-2">{songName}</span>
          </div>
        </div>
        {hover ? (
          <div className="flex items-center">
            {options.map((option) => (
              <SongOptionInPlaylist icon={option.icon} />
            ))}
          </div>
        ) : (
          <div className="flex items-center text-[#999]">
            <Play size={12} color="#999" weight="bold" />
            <span className="ml-1 text-[12px] ">{listens}</span>
          </div>
        )}
      </div>
    </>
  );
}

export default SongInPlaylist;
