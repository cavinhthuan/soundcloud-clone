import React, { useContext, useEffect } from "react";
import Layout from "../static/Layout";
import { SoundcloudLogo } from "@phosphor-icons/react";
const Home = () => {
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
              <span className="text-white bg-black">For Artists</span>
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
    </>
    // </Layout>
  );
};
export default Home;
