import React, { useRef, useState } from "react";
import { DotsThree, Heart, ListPlus, Play, Queue } from "@phosphor-icons/react";
import ContextMenu from "./ContextMenu";

function Track({ name, thumbnail, artist }) {
  const [hover, setHover] = useState(false);
  const [option, setOption] = useState(false);
  const optionRef = useRef();
  return (
    <div
      className="relative w-[170px] flex flex-col my-4 flex-[1_0_170px]"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <img src={thumbnail} className="relative w-[170px] h-[170px]" alt="" />
      <div className="w-full truncate ... ">
        <span className={`text-ellipsis text-[14px]`}>{name}</span>
      </div>
      <span className="text-gray-400 text-[12px]">{artist}</span>
      {hover && (
        <div className="w-full h-full absolute">
          <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-100%] bg-primary p-5 rounded-full cursor-pointer">
            <Play size={28} color="white" />
          </div>
          <div className="absolute bottom-[18%] h-[20px] bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.3)] w-full">
            {" "}
          </div>
          <div className="flex w-full justify-end absolute right-0 bottom-[18%] py-1 mr-1 ">
            <abbr title="Like">
              {" "}
              <Heart size={20} color="white" className="cursor-pointer" />
            </abbr>
            <DotsThree
              ref={optionRef}
              size={20}
              color="white"
              className="cursor-pointer"
              onClick={() => {
                setOption(true);
              }}
            />
            {option && (
              <>
                <ul className="list-none bg-white absolute right-[-60%] top-[50%] z-[100] border border-[#ccc] bottom-0 w-[160px] h-fit shadow-md rounded-md">
                  <li className="bg-white z-10 flex items-center justify-start p-2 border-b border-[#ccc] cursor-pointer transition-[0.25s] hover:bg-[rgba(0,0,0,0.1)]">
                    <div className="font-bold">
                      <Queue size={20} />
                    </div>
                    <span className="text-sm ml-1">Add to Next up</span>
                  </li>
                  <li className="bg-white z-10 flex items-center justify-start p-2 border-b border-[#ccc] cursor-pointer transition-[0.25s] hover:bg-[rgba(0,0,0,0.1)]">
                    <div className="font-bold">
                      <ListPlus size={20} />
                    </div>
                    <span className="text-sm ml-1">Add to Playlist</span>
                  </li>
                </ul>
                <ContextMenu
                  contextMenuRef={optionRef}
                  callback={() => {
                    setOption(false);
                  }}
                ></ContextMenu>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Track;
