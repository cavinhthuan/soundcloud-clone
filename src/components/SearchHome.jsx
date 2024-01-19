import { MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";

function SearchHome() {
  return (
    <div className="flex items-center my-8 justify-center">
      {/* SEARCH */}
      <div className="bg-[#f2f2f2] flex py-2 px-4 text-[16px] items-center justify-between">
        <input
          type="text"
          placeholder="Search for artists, tracks, bands, podcasts"
          className="bg-inherit rounded-sm w-[600px] border-none outline-none focus:ring-0"
        />
        <MagnifyingGlass size={24} className="cursor-pointer" color="gray" />
      </div>
      <span className="mx-4 text-[18px]">or</span>
      {/* BUTTON UPLOAD YOUR OWN */}
      <button className="bg-primary text-white w-[200px] p-2 rounded-sm text-lg">
        Upload your own
      </button>
    </div>
  );
}

export default SearchHome;
