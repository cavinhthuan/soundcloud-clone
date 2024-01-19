import React, { useRef, useState } from "react";
import {
  Broadcast,
  CopySimple,
  DotsThree,
  Heart,
  ListPlus,
  Play,
  Queue,
  Share,
  Swap,
  UserPlus,
  WarningCircle,
} from "@phosphor-icons/react";

function Track({ name, thumbnail, artist, isHome }) {
  const [hover, setHover] = useState(false);
  const [option, setOption] = useState(false);
  const optionRef = useRef();
  const optionItems = [
    {
      icon: <Swap size={20} />,
      text: "Repost",
    },
    {
      icon: <Share size={20} />,
      text: "Share",
    },
    {
      icon: <CopySimple size={20} />,
      text: "Copy Link",
    },
    {
      icon: <Queue size={20} />,
      text: "Add to Next up",
    },
    {
      icon: <ListPlus size={20} />,
      text: "Add to Playlist",
    },
    {
      icon: <Broadcast size={20} />,
      text: "Station",
    },
    {
      icon: <WarningCircle size={20} />,
      text: "Report",
    },
  ];
  return (
    <div
      className="relative w-[170px] flex flex-col my-4 mx-2 flex-[1_0_170px]"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <img src={thumbnail} className="relative w-full h-[170px]" alt="" />
      <div className="w-full truncate ...">
        <span className={`text-ellipsis`}>{name}</span>
      </div>
      <span className="text-gray-400 text-[14px]">{artist}</span>
      {hover && (
        <div className="w-full h-full absolute">
          <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-100%] bg-primary p-5 rounded-full cursor-pointer">
            <Play size={28} color="white" />
          </div>
          <div className="flex w-full justify-end absolute right-0 bottom-[20%] py-1 mr-1 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.3)]">
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
              <ul className="list-none bg-white absolute right-[-70%] top-[80%] z-10 border border-[#ccc] bottom-0 w-[160px] h-fit shadow-md rounded-md">
                {isHome ? (
                  optionItems.map((item) => (
                    <li className="flex items-center justify-start p-2 border-b border-[#ccc] cursor-pointer transition-[0.25s] hover:bg-[rgba(0,0,0,0.1)]">
                      <div className="font-bold">{item.icon}</div>
                      <span className="text-sm ml-1">{item.text}</span>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="flex items-center justify-start p-2 border-b border-[#ccc] cursor-pointer transition-[0.25s] hover:bg-[rgba(0,0,0,0.1)]">
                      <div className="font-bold">
                        <Queue size={20} />
                      </div>
                      <span className="text-sm ml-1">Add to Next up</span>
                    </li>
                    <li className="flex items-center justify-start p-2 border-b border-[#ccc] cursor-pointer transition-[0.25s] hover:bg-[rgba(0,0,0,0.1)]">
                      <div className="font-bold">
                        <ListPlus size={20} />
                      </div>
                      <span className="text-sm ml-1">Add to Playlist</span>
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Track;
