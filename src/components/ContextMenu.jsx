import React, { useEffect, useRef } from "react";

export default function ContextMenu({ contextMenuRef, callback = () => {} }) {
  function handleClickOutside(event) {
    console.log("context menu: ", contextMenuRef.current);
    console.log("event target: ", event.target);
    if (
      contextMenuRef.current &&
      !contextMenuRef.current.contains(event.target)
    ) {
      console.log("click outside");
      callback();
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}
