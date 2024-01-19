import { GooglePodcastsLogo, UserPlus, Users } from "@phosphor-icons/react";
import React from "react";

// ARTISTS
function Artists({ avatar, name, followers, tracks }) {
  return (
    <div className="flex items-center justify-between my-4">
      <div className="flex items-center">
        <img
          alt="avatar"
          src={`${avatar}`}
          className="w-[50px] h-[50px] rounded-full mr-3"
        />
        <div className="flex flex-col">
          <span className="text-[14px] text-gray-600 pb-1">{name}</span>
          <div className="flex items-center">
            <div className="flex items-start mr-2">
              <Users size={15} />
              <span className="text-gray-400 text-[12px] ml-1">
                {followers}
              </span>
            </div>
            <div className="flex items-start">
              <div>
                {" "}
                <GooglePodcastsLogo size={15} />
              </div>
              <span className="text-gray-400 text-[12px] ml-1">{tracks}</span>
            </div>
          </div>
        </div>
      </div>
      <button className="flex items-center border-gray-300 border bg-white rounded-sm py-[2px] px-2">
        <UserPlus size={13} />
        <span className="text-[11px] ml-1">Follow</span>
      </button>
    </div>
  );
}

export default Artists;
