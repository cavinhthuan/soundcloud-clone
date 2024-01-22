import React from "react";
import avatar from "assets/artists/artist2.jpg";
import { Play } from "@phosphor-icons/react";

import SongInPlaylist from "components/SongInPlaylist";
function FeedComponent({ poster, times, thumbnail, nameList, playList }) {
  return (
    <>
      <div className="mt-8 w-full">
        <div className="flex items-center mb-4">
          <img
            alt="avatar"
            src={avatar}
            className="w-[30px] h-[30px] rounded-full mr-2"
          />
          <span className="text-[12px]">
            <span className="font-medium">{poster}</span>{" "}
            <span className="text-[#999]">posted a playlist {times} ago</span>
          </span>
        </div>
        <div className="flex items-start">
          <img
            src={thumbnail}
            alt="Thumbnail"
            className="w-[160px] h-[160px] mr-4"
          />
          <div className="flex flex-col w-full">
            <div className="flex items-center pt-2">
              <div className="mr-2 cursor-pointer w-[36px] h-[36px] bg-primary rounded-full p-1 flex items-center justify-center">
                <Play size={16} color="white" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-[12px]">{poster}</span>
                <span className="text-[15px]">{nameList}</span>
              </div>
            </div>
            <div className="w-full bg-primary my-3">
              <span className="text-white">WAVE</span>
            </div>
            {/* songs */}

            {playList.map((item, index) => (
              <div className="p-[2px] text-[12px] flex justify-between items-center my-2 w-full cursor-pointer transition-[0.25s] hover:bg-gray-200">
                <div className="flex items-center">
                  <img
                    className="w-[20px] h-[20px]"
                    alt="thumbnail"
                    src={item.thumbnail}
                  />
                  <span className=" mx-1  text-black transition-[.25s]">
                    {index + 1}
                  </span>
                  <div className="w-fit whitespace-normal inline">
                    <span className="w-full truncate ... text-[#999] hover:text-[#333] transition-[.25s]">
                      {item.poster}
                    </span>
                  </div>
                  <span className="text-[#999] ml-2">-</span>
                  <div className="w-[90%] truncate ... inline mr-4">
                    <span className="mx-2">{item.songName}</span>
                  </div>
                </div>
                <div className="flex items-center text-[#999]">
                  <Play size={12} color="#999" weight="bold" />
                  <span className="ml-1 text-[12px] ">{item.listens}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedComponent;
