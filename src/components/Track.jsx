import React, { useMemo, useRef, useState } from "react";
import {
  DotsThree,
  Heart,
  ListPlus,
  Play,
  Queue,
  UserPlus,
} from "@phosphor-icons/react";
import ContextMenu from "./ContextMenu";
import Dropdown from "./Dropdown";

function Track({ name, thumbnail, artist, isHome }) {
  const [hover, setHover] = useState(false);
  const [option, setOption] = useState(false);
  const optionRef = useRef();
  const refTrackOptions = useRef();
  const optionClassName = useMemo(() => {
    if (!hover) return "w-full h-full absolute z-10 hidden";
    return "w-full h-full absolute top-0 z-10";
  }, [hover]);
  const handleOnMouseEnter = (e) => {
    setHover(true);
  };
  const handleOnMouseLeave = (e) => {
    setHover(false);
  };
  return (
    <div className="relative z-0">
      <div
        className="relative flex flex-col w-[173px] my-4 flex-[1_0_173px] min-h-[251px] z-0"
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <div className="relative">
          <img src={thumbnail} className="h-[173px]" alt="" />
          <div className={optionClassName}>
            <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-primary p-5 rounded-full cursor-pointer">
              <Play size={28} color="white" />
            </div>
            <div className="flex w-full justify-end absolute right-0 bottom-0 py-1 mr-1 ">
              <abbr title="Like">
                {" "}
                <Heart size={20} color="white" className="cursor-pointer" />
              </abbr>
              {isHome && (
                <abbr title={`Follow ${artist}`}>
                  {" "}
                  <UserPlus
                    size={20}
                    color="white"
                    className="cursor-pointer mx-1"
                  />
                </abbr>
              )}
              <Dropdown
                trigger={{
                  target: (
                    <DotsThree
                      ref={optionRef}
                      size={20}
                      color="white"
                      className="cursor-pointer"
                    />
                  ),
                }}
                Items={{ ref: refTrackOptions }}
              ></Dropdown>
            </div>
          </div>
          <div className="absolute bottom-0 h-[20px] bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.3)] w-full z-0">
            {" "}
          </div>
        </div>
        <div className="w-full truncate ... ">
          <span className={`text-ellipsis text-[14px]`}>{name}</span>
        </div>
        <span className="text-gray-400 text-[12px]">{artist}</span>
      </div>
      <div className="[font:12px/1.4_Inter,sans-serif] text-[#333] outline-none min-h-[auto] left-[20px] top-[168px] absolute z-10 mt-2 origin-top-right rounded-md">
        <ul
          ref={refTrackOptions}
          className="list-none bottom-0  w-[160px] [font:12px/1.4_Inter,sans-serif] text-[#333] box-border [list-style:none] m-0 border-[1px] border-[solid] border-[#e5e5e5] bg-[#fff] [box-shadow:0_2px_10px_rgba(0,0,0,.1)] rounded-[4px] overflow-hidden"
        >
          <li className="bg-white flex items-center justify-start p-2 border-b border-[#ccc] cursor-pointer transition-[0.25s] hover:bg-[rgba(0,0,0,0.1)]">
            <div className="font-bold">
              <Queue size={20} />
            </div>
            <span className="text-sm ml-1">Add to Next up</span>
          </li>
          <li className="bg-white flex items-center justify-start p-2 border-b border-[#ccc] cursor-pointer transition-[0.25s] hover:bg-[rgba(0,0,0,0.1)]">
            <div className="font-bold">
              <ListPlus size={20} />
            </div>
            <span className="text-sm ml-1">Add to Playlist</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Track;
