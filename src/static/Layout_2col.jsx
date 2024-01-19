import Header from "components/Header/Header";
import Player from "components/Player";
import React from "react";
import { Helmet } from "react-helmet";
export const Left = (props)=>{
    return <div className="[font:12px/1.4_Inter,sans-serif] text-[#333] border-r-[1px_solid_#f2f2f2] pt-[30px] pr-[30px] pb-[0] pl-[0] ml-[0] mr-[330px] my-[0] pr-[20px] mr-[320px]">{props.children}</div>
}

export const Right = (props)=>{
    return <div className="[font:12px/1.4_Inter,sans-serif] text-[#333] absolute bottom-[0] right-[0] top-[46px] w-[300px]">{props.children}</div>
    
}

export default function Layout2Col(props) {
    const CustomContainer = props.container;
    return (
      <div>
        <Helmet>
          <title>{props.title}</title>
        </Helmet>
        <Header></Header>
        <Player></Player>
      </div>
    );
  }