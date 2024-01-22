import React from "react";

function PlaylistButton({ icon, text, onClick }) {
  return (
    <>
      <div
        className="mr-2 flex border-[1px] border-gray-300 w-fit h-fit py-1 px-1 items-center cursor-pointer hover:border-gray-400 transition-[0.25s]"
        onClick={onClick}
      >
        <div className="mr-1">{icon}</div>
        <span className="text-[14px]">{text}</span>
      </div>
    </>
  );
}

export default PlaylistButton;
