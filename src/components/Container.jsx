import React from "react";

export default function Container({ children }) {
  return (
    <div
      style={{
        paddingTop: "46px",
      }}
      className="h-full"
      >
      {children}
    </div>
  );
}
