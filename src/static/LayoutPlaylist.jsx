import Header from "components/Header/Header";
import Player from "components/Player";
import React from "react";
import { Helmet } from "react-helmet";

function LayoutPlaylist({ children: pageContent, ...props }) {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <Header></Header>
      <div className="pt-[46px] mx-3">{pageContent}</div>
      <Player></Player>
    </>
  );
}

export default LayoutPlaylist;
