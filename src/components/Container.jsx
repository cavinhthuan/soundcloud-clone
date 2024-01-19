import React from "react";

export default function Container({ children }) {
  return (
    <div
      style={{
        position:"relative",
        paddingTop: "46px",
      }}
      className="[font:12px/1.4_Inter,sans-serif] text-[#333] mx-[auto] my-[0] px-[30px] py-[0] w-[1180px] pt-[46px] box-content"
      >
      {children}
    </div>
  );
}
