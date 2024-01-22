import React, { useState } from "react";

function SongOptionInPlaylist({ icon, onClick }) {
  const [click, setClick] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          //   onClick();
          //   setClick(!click);
        }}
        className={`bg-white ${click ? "border-primary" : "border-gray-300"} border h-fit w-fit p-[2px] mx-[2px] rounded-sm`}
      >
        <div>{icon}</div>
      </div>
    </>
  );
}

export default SongOptionInPlaylist;
