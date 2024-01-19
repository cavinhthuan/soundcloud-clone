import React, { useContext, useEffect, useState } from "react";
import Layout from "../static/Layout";
import {
  AppleLogo,
  GooglePlayLogo,
  SoundcloudLogo,
  X,
} from "@phosphor-icons/react";
import SearchHome from "components/SearchHome";
import imgIntroduce from "assets/bg-introduce.jpg";

// THUBNAILS SRC
import thumb1 from "assets/thumbnails/thumb1.jpg";
import thumb2 from "assets/thumbnails/thumb2.jpg";
import thumb3 from "assets/thumbnails/thumb3.jpg";
import thumb4 from "assets/thumbnails/thumb4.jpg";
import thumb5 from "assets/thumbnails/thumb5.jpg";
import thumb6 from "assets/thumbnails/thumb6.jpg";
import Track from "components/Track";
const Home = () => {
  const songs = [
    {
      thumb: thumb1,
      name: "Tung Quen - Wren Evans",
      poster: "Ginga",
    },
    {
      thumb: thumb2,
      name: "Roi em se gap 1 chang trai khac - Hippo Happy",
      poster: "Trieu",
    },
    {
      thumb: thumb3,
      name: "NOLOVENOLIFE - HIEUTHUHAI",
      poster: "Xwn",
    },
    {
      thumb: thumb4,
      name: "Karik x GDucky - Ban Doi",
      poster: "Mocs",
    },
    {
      thumb: thumb5,
      name: "Sau con mua - CoolKid",
      poster: "lee_gnuh",
    },
    {
      thumb: thumb6,
      name: "Phuong Ly - Anh la ngoai le cua em",
      poster: "Dokc",
    },
  ];
  const items = [
    "Directory",
    "About us",
    "Artist Resources",
    "Blog",
    "Jobs",
    "Developers",
    "Help",
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
  const [show, setShow] = useState(false);
  return (
    // <Layout title="Home">
    <>
      <div className="w-full h-[500px] relative">
        <div className="w-full h-full bg-[url(../src/assets/bg-header.jpg)] bg-no-repeat bg-cover text-primary">
          {/* HEADER */}
          <div className="flex items-center justify-between pt-2 px-4">
            <div className="flex items-center">
              <SoundcloudLogo color="white" size={40} />
              <span className="text-white font-bold ml-1">SOUNDCLOUD</span>
            </div>
            <div className="flex items-center">
              <button className="h-fit border border-white text-white bg-black rounded-sm p-1 w-[80px] text-sm">
                Sign in
              </button>
              <button className="bg-primary text-white w-[150px] p-1 mx-2 text-sm rounded-sm">
                Create account
              </button>
              <span className="text-white bg-[rgba(0,0,0,0.2)]">
                For Artists
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-4xl text-white">Connect to SoundCloud</h3>
            <span className="text-white text-center text-lg w-[80%] my-4">
              Discover, stream, and share a constantly expanding mix of music
              from emerging and major artists around the world.
            </span>
            <button className="bg-primary text-white w-[200px] p-2 rounded-sm text-lg">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
      <SearchHome />
      {/* TRENDING */}
      <h2 className="text-2xl text-center mb-8">
        Hear what’s trending for free in the SoundCloud community
      </h2>
      <ul className="flex flex-wrap mx-8 justify-evenly list-none">
        {songs.map((song) => (
          <Track
            artist={song.poster}
            name={song.name}
            thumbnail={song.thumb}
            isHome={true}
          />
        ))}
      </ul>
      {/* DOWNLOAD */}
      <div className="flex items-center justify-center px-10 py-12 bg-[#f2f2f2] w-full">
        <img src={imgIntroduce} alt="" className="w-[70%]" />
        <div className="flex flex-col mx-12">
          <span className="text-5xl w-[55%] text-[#333] leading-[3.5rem] ">
            Never stop listening
          </span>
          <div className="w-[15%] h-[5px] my-8 bg-gradient-to-r from-[#940a84] via-[#eb2b18] to-[#ff5500]">
            {" "}
          </div>
          <span className="text-4xl font-light w-[80%]">
            SoundCloud is available on Web, iOS, Android, Sonos, Chromecast, and
            Xbox One.
          </span>
          <div className="flex mt-8">
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
        </div>
      </div>
      {/*  */}
      <div className="w-full bg-[url(../src/assets/bg-introduce2.jpg)] h-[400px] text-white">
        <div className="flex flex-col w-[40%] items-start h-full justify-center ml-16">
          <span className="text-5xl">Calling all creators</span>
          <span className="text-3xl font-light my-4">
            Get on SoundCloud to connect with fans, share your sounds, and grow
            your audience. What are you waiting for?
          </span>
          <button className="bg-black border-white border text-xl px-4 py-2">
            Find out more
          </button>
        </div>
      </div>
      {/* FOOTER */}
      <div className=" flex flex-col items-center justify-center py-10">
        <span className="text-5xl">Thanks for listening. Now join in.</span>
        <span className="text-3xl my-4">
          Save tracks, follow artists and build playlists. All for free
        </span>
        <button className="bg-primary text-white text-center px-4 py-2 w-[200px] font-medium rounded-sm text-lg">
          Create account
        </button>
        <div className="flex items-center">
          <span className="text-sm mr-2 my-6">Already have an account?</span>
          <button className="bg-transparent border-gray-300 border-[1px] hover:border-gray-400 transition-[0.25s] px-4 py-1">
            Sign in
          </button>
        </div>
      </div>
      <div className="ml-5 flex flex-col h-[300px]">
        <div className="my-2">
          {items
            .map((item) => (
              <span className="text-[#b2bec3] hover:text-[#636e72] cursor-pointer">
                {item}
              </span>
            ))
            .reduce((prev, curr) => [prev, " - ", curr])}
        </div>
        <span
          onClick={() => {
            setShow(true);
          }}
          className="text-[#0984e3] cursor-pointer hover:text-black transition-[0.25s]"
        >
          Language: <span className="text-black my-2">English (US)</span>
        </span>
      </div>
      {/* POPUP LANGUAGES */}
      {show && (
        <div
          onClick={() => {
            setShow(false);
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
                setShow(false);
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
    </>
    // </Layout>
  );
};
export default Home;
