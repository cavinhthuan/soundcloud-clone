import {
  AppleLogo,
  GooglePlayLogo,
  LinkSimpleHorizontal,
  Lock,
  Pencil,
  Play,
  Queue,
  Share,
  SoundcloudLogo,
  TrashSimple,
  X,
} from "@phosphor-icons/react";
import React, { useState } from "react";
import thumb from "assets/thumbnails/thumb4.jpg";
import LayoutPlaylist from "static/LayoutPlaylist";
import ArtistAvatar from "assets/artists/artist1.jpg";
import PlaylistButton from "components/PlaylistButton";

// THUBNAILS SRC
import thumb2 from "assets/thumbnails/thumb2.jpg";
import thumb1 from "assets/thumbnails/thumb1.jpg";
import thumb3 from "assets/thumbnails/thumb3.jpg";
import thumb4 from "assets/thumbnails/thumb4.jpg";
import thumb5 from "assets/thumbnails/thumb5.jpg";
import thumb6 from "assets/thumbnails/thumb6.jpg";

import thumb7 from "assets/thumbnails/thumb7.jpg";
import thumb8 from "assets/thumbnails/thumb8.jpg";
import thumb9 from "assets/thumbnails/thumb9.jpg";
import thumb10 from "assets/thumbnails/thumb10.jpg";
import thumb11 from "assets/thumbnails/thumb11.jpg";
import SongInPlaylist from "components/SongInPlaylist";
function Playlist({ name, artist, thumbnail, tracks, artistAvatar }) {
  const footerItems = [
    "Legal",
    "Privacy",
    "Cookie Policy",
    "Consent Manager",
    "Imprint",
    "Charts",
  ];
  const languages = [
    "Deutsch",
    "Espanol",
    "Italiano",
    "Polski",
    "Skenska",
    "English (US)",
    "Francais",
    "Nederlands",
    "Portugues",
  ];
  const [showLang, setShowLang] = useState(false);
  const playlistFunc = [
    {
      icon: <Share size={16} weight="bold" />,
      title: "Share",
      func: () => {
        alert("SHARE FUNCTION");
      },
    },
    {
      icon: <LinkSimpleHorizontal size={16} weight="bold" />,
      title: "Copy Link",
      func: () => {
        alert("COPY FUNCTION");
      },
    },
    {
      icon: <Pencil size={16} weight="bold" />,
      title: "Edit",
      func: () => {
        alert("EDIT FUNCTION");
      },
    },
    {
      icon: <Queue size={16} weight="bold" />,
      title: "Add to Next up",
      func: () => {
        alert("ADD TO NEXT UP FUNCTION");
      },
    },
    {
      icon: <TrashSimple size={16} weight="bold" />,
      title: "Delete Playlist",
      func: () => {
        alert("DELETE PLAYLIST FUNCTION");
      },
    },
  ];
  const hashtag = ["Pop", "USUK", "Love"];

  const songs = [
    {
      thumbnail: thumb1,
      poster: "gnud_as",
      songName: "Six Feet Under - Billie Eilish",
      listens: "1.8M",
    },
    {
      thumbnail: thumb2,
      poster: "F4ST",
      songName: "Until I Found You - Stephen Sanchez (Piano Version)",
      listens: "37.2K",
    },
    {
      thumbnail: thumb3,
      poster: "Redza",
      songName: "glimpse of us",
      listens: "2.03M",
    },
    {
      thumbnail: thumb4,
      poster: "Cao Duyen",
      songName: "(slow) The nights - Avicii (cover by Angie N)",
      listens: "774K",
    },
    {
      thumbnail: thumb5,
      poster: "Dark Lab Records Ltd",
      songName: "Lana Del Rey - Say Yes To Heaven",
      listens: "1.43M",
    },
  ];
  return (
    <LayoutPlaylist title="Playlist">
      <div className="flex items-center justify-between bg-[#8a8787] text-white h-[340px] py-8 pl-6 pr-2 w-full">
        {/* left */}
        <div className="flex flex-col w-[70%] h-full ">
          <div className="flex items-start w-full justify-between h-full">
            <div className="flex itemes-center">
              <div className="w-[60px] h-[60px] bg-primary rounded-full cursor-pointer relative mr-2">
                <Play
                  size={28}
                  color="white"
                  className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
                />
              </div>
              <div className="flex flex-col">
                <span className="bg-[#1f1e1e] py-[2px] px-1 text-center text-2xl mb-1">
                  US - UK
                </span>
                <span className="bg-[#1f1e1e] px-2 text-[15px] py-[2px] text-[rgba(255,255,255,0.6)] hover:text-white transition-[0.25s] cursor-pointer">
                  Tuyen Danh
                </span>
              </div>
            </div>
            <span className="text-[17px]">6 months ago</span>
          </div>
          {/* <div>WAVE TRACK</div> */}
          {/* list info */}
          <div className="w-full">
            <div className="bg-[#1d1c1c] rounded-full flex items-center justify-center flex-col w-[100px] h-[100px] p-2 ml-4">
              <span className="text-3xl font-bold">{songs.length}</span>
              <div className="flex flex-col text-center mt-1">
                <span className="text-[12px]">TRACKS</span>
                {/* time */}
                <span className="text-[12px] text-[#999]">1:32:21</span>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="">
          <img
            src={thumb}
            alt="thumbnail"
            className="w-[340px] h-[340px] p-3"
          />
        </div>
      </div>
      {/* BODY */}
      <div className="flex my-8 mx-8">
        {/* LEFT */}
        <div className="w-[70%]">
          <div className="flex">
            {[
              playlistFunc.map((playlist) => (
                <PlaylistButton
                  icon={playlist.icon}
                  text={playlist.title}
                  onClick={() => {
                    playlist.func();
                  }}
                />
              )),
            ]}
          </div>
          <div className="flex my-6">
            {/* PERSONAL */}
            <div className="flex flex-col mx-2 w-[120px] h-[120px]">
              <img
                src={ArtistAvatar}
                alt="Artist Avatar"
                className="w-full h-full rounded-full"
              />
              <span className="text-[14px] mt-2">Tuyen Danh</span>
            </div>
            {/* TRACKLIST */}
            <div className="ml-8 w-full mr-5">
              <div className="flex text-[14px] mb-6">
                <div className="bg-primary rounded-md p-[2px] mr-2">
                  <Lock size={15} color="white" weight="bold" />
                </div>
                <span>This playlist is private</span>
              </div>
              {/* HASHTAG */}
              <div className="flex">
                {hashtag.map((hash) => (
                  <span className="bg-[#999] hover:bg-[#666] transition-[0.25s] cursor-pointer text-white rounded-full mr-2 py-[2px] px-2 text-[14px]">
                    # {hash}
                  </span>
                ))}
              </div>
              {/* SONGS */}
              <div className="">
                {songs.map((song, index) => (
                  <SongInPlaylist
                    listens={song.listens}
                    thumbnail={song.thumbnail}
                    songName={song.songName}
                    poster={song.poster}
                    no={index + 1}
                  />
                ))}
              </div>
              <SoundcloudLogo
                size={20}
                color="#999"
                className="flex justify-center w-full"
              />
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="text-gray-400 my-4 w-[30%]">
          <span className="text-[14px] ml-1">Go mobile</span>
          <div className="flex my-4">
            <button className="flex items-center bg-black text-white rounded-md w-fit px-2 py-1 mr-2">
              <AppleLogo size={30} className="" />
              <div className="flex flex-col items-start pl-2 leading-[normal]">
                <span className="text-[10px]">Download on the</span>
                <span className="font-medium">App Store</span>
              </div>
            </button>
            <button className="flex items-center bg-black text-white rounded-md w-fit px-2 py-1">
              <GooglePlayLogo size={30} />
              <div className="flex flex-col items-start pl-2 leading-[normal]">
                <span className="text-[10px]">Download on the</span>
                <span className="font-medium">Goolg Play</span>
              </div>
            </button>
          </div>
          <div className="my-2">
            {footerItems
              .map((item) => (
                <span className="text-[13px] text-gray-300 hover:text-gray-500 cursor-pointer">
                  {item}
                </span>
              ))
              .reduce((prev, curr) => [prev, " - ", curr])}
          </div>
          <span
            onClick={() => {
              setShowLang(true);
            }}
            className="text-[#0984e3] cursor-pointer hover:text-black transition-[0.25s]"
          >
            Language: <span className="text-black my-2">English (US)</span>
          </span>
          {showLang && (
            <div
              onClick={() => {
                setShowLang(false);
              }}
              className="animate-fromTop fixed top-0 left-0 bg-[rgba(255,255,255,0.8)] w-full h-full"
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="px-8 py-2 h-[60%] rounded-md bg-white absolute w-[40%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              >
                <X
                  onClick={() => {
                    setShowLang(false);
                  }}
                  size={20}
                  className="cursor-pointer float-right"
                />
                <span className="text-2xl font-medium py-5">
                  Select your language
                </span>
                <div>
                  <ul className="list-none columns-2 my-5">
                    {languages.map((lan) => (
                      <li className="text-[#0984e3] cursor-pointer py-2 hover:text-black transition-[0.25s]">
                        {lan}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </LayoutPlaylist>
  );
}

export default Playlist;
