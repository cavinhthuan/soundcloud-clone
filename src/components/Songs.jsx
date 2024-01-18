import { Chat, Heart, Play, Swap } from "@phosphor-icons/react";
import React from "react";

function Songs({ avatar, artist, name, data }) {
  return (
    <div className="flex items-start my-2 w-full overflow-auto">
      <img alt="thumbnail" src={avatar} className="w-[50px] h-[50px] mr-2" />
      <div className="flex flex-col w-[95%] overflow-auto">
        <span className="text-gray-400 text-[14px]">{artist}</span>
        <span className="text-[14px] text-black truncate ...">{name}</span>
        <div className="flex justify-start">
          <div className="flex items-center mr-2">
            <Play size={12} /> <span className="ml-1">{data.stream}</span>
          </div>
          <div className="flex items-center mr-2">
            {" "}
            <Heart size={12} /> <span className="ml-1">{data.liked}</span>
          </div>
          <div className="flex items-center mr-2">
            <Swap size={12} /> <span className="ml-1">{data.replay}</span>
          </div>
          <div className="flex items-center">
            {" "}
            <Chat size={12} /> <span className="ml-1">{data.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Songs;
