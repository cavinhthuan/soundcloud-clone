import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  DotsThree,
  Heart,
  ListPlus,
  Play,
  Queue,
  UserPlus,
} from "@phosphor-icons/react";
import Dropdown from "../Dropdown";

function Track({ name, thumbnail, artist, isHome = false, optionsRef }) {
  const [hover, setHover] = useState(false);
  const ref = useRef(null);
  const triggerRef = useRef(null);
  const handleOnMouseEnter = (e) => {
    setHover(true);
  };

  const handleOnMouseLeave = (e) => {
    setHover(false);
  };
  const handleOpen = ()=>{
    console.log("open")
    const left = ref.current.getBoundingClientRect().left; 
    const triggerRef_top = triggerRef.current.getBoundingClientRect().top; 
    const padding = 8;
    const optionsHeight = optionsRef.current.getBoundingClientRect().height;
    optionsRef.current.style.setProperty("--left", `${left}px`);
    optionsRef.current.style.setProperty("--top", `${208}px`);
  }

  const optionClassName = useMemo(() => {
    if (!hover) return "w-full h-full absolute z-10 hidden";
    return "w-full h-full absolute top-0 z-10";
  }, [hover]);

  const triggerOptions = useMemo(() => {
    return (
      <Dropdown
        trigger={{
          target: (
            <DotsThree size={20} color="white" className="cursor-pointer" ref={triggerRef} />
          ),
        }}
        Items={{ ref: optionsRef }}
        handleOpen = {handleOpen}
     />
    );
  }, [optionsRef]);
  return (
    <div
      className="flex flex-col max-w-[173px] my-4 flex-[1_0_173px] min-h-[251px]"
      ref={ref}
    >
      <div
        className="relative"
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        <img src={thumbnail} className="h-[173px]" alt="" />
        <div className={optionClassName}>
          <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-primary p-5 rounded-full cursor-pointer">
            <Play size={28} color="white" />
          </div>
          <div className="flex w-full justify-end absolute right-0 bottom-0 py-1 mr-1">
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
            {triggerOptions}
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
  );
}

export default Track;
