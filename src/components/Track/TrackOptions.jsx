import { ListPlus, Queue } from "@phosphor-icons/react";
import React, { useEffect } from "react";
export default React.forwardRef(function TrackOptions(props, ref) {
  useEffect(() => {});
  return (
    <div style={{"--left":0, "--top":0}} >
      <div
        className="absolute [font:12px/1.4_Inter,sans-serif] text-[#333] outline-none min-h-[auto] left-[var(--left)] top-[var(--top)] z-40 mt-2 origin-top-right rounded-md"
        ref={ref}
      >
        <ul className="list-none bottom-0  w-[160px] [font:12px/1.4_Inter,sans-serif] text-[#333] box-border [list-style:none] m-0 border-[1px] border-[solid] border-[#e5e5e5] bg-[#fff] [box-shadow:0_2px_10px_rgba(0,0,0,.1)] rounded-[4px] overflow-hidden">
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
});
