import React from "react";
import { NavLink } from "react-router-dom";
import ListNavLink from "../ListNavLink";
import styled from "styled-components";
import SearchBar from "../SearchBar";
// import Dropdown from "../Dropdown";
import { User } from "@phosphor-icons/react";
import UserOptions from "./components/UserOptions";
import Notifications from "./components/Notifications";
import Messages from "./components/Messages";
import SettingAndMore from "./components/SettingAndMore";

const HeaderStyled = styled.header`
  & [role="navigation"] li > a:hover {
    color: white;
    opacity: 1;
  }
`;

export default function Header() {
  const listNavLink = [
    { to: "/", text: "Home" },
    { to: "/feed", text: "Feed" },
    { to: "/your/library", text: "Library" },
  ];

  return (
    <HeaderStyled
      role="banner"
      className="fixed z-50 text-[rgb(153,_153,_153)] select-none cursor-default outline-[rgb(153,_153,_153)_none_0px] block bg-[rgb(51,_51,_51)] font-[Inter,_sans-serif] font-thin text-[14px] leading-[21px] w-full h-[46px] [transform:matrix(1,_0,_0,_1,_0,_0)] [transition:height_0.2s_ease-in-out_0s]"
    >
      <div className="w-[1240px] p-0 mx-[auto] my-0 flex">
        <div className>
          <div className="[font:12px/1.4_Inter,sans-serif] select-none cursor-default text-[#999] font-[Inter,sans-serif] font-thin text-[14px] leading-normal float-left bg-[#000]">
            <NavLink
              to="/"
              title="SoundCloud wishes peace and safety for our community in Ukraine"
              className="text-[rgb(255,_255,_255)] border-[0px] border-[none] border-[rgb(255,255,255)] [font:0px_/_0px_a] [text-shadow:none] bg-[rgba(0,0,0, 0)] box-border outline-[rgb(255,_255,_255)_none_0px] bg-[url('https://a-v2.sndcdn.com/assets/images/peace-cloud-28ad0963.svg')] bg-[rgba(0, 0, 0, 0)_url('https://a-v2.sndcdn.com/assets/images/peace-cloud-28ad0963.svg')_no-repeat_scroll_12px_11px_/_48px_22px_padding-box_border-box] w-[69px] mr-0 h-[46px] block flex-col place-content-center bg-no-repeat bg-center [background-size: 52px 22px;]"
              style={{
                backgroundSize: "52px 22px",
              }}
            >
              SoundCloud
            </NavLink>
          </div>
          <nav className="float-left block visible" role="navigation">
            <ListNavLink
              activeClass="bg-[rgb(17,_17,_17)] text-[rgb(255,_255,_255)] outline-[rgb(255,_255,_255)_none_0px]  border-b-[0px_none_rgb(255,_255,_255)] block px-0 py-[12px] h-[46px] box-border text-center w-[104px] border-[0px] border-[solid] border-[#111] border-r-[1px]"
              defaultClass="text-[rgb(204,_204,_204)] block px-0 py-[12px] h-[46px] box-border text-center w-[104px] border-[0px] border-[solid] border-[#111] border-r-[1px]"
              data={listNavLink}
            />
          </nav>
        </div>
        <div className="flex-1">
          <div className="block visible" role="search">
            <SearchBar></SearchBar>
          </div>
        </div>
        <div className="block visible">
          <NavLink
            className="text-[rgb(255,_85,_0)] float-left px-[10px] py-[12px] hover:text-[#f70] notstyled"
            to="/trypro"
            target="_blank"
          >
            Try Next Pro
          </NavLink>{" "}
          <NavLink
            className="text-[rgb(204,_204,_204)] float-left px-[10px] py-[12px]"
            to="/overview"
            target="_blank"
          >
            For Artists
          </NavLink>
          <div className="float-left">
            <NavLink
              to="/upload"
              className="text-[rgb(204,_204,_204)] block float-left px-[10px] py-[12px]"
              tabIndex={0}
            >
              <span className="text-[rgb(204,_204,_204)]">Upload</span>
              <span className="text-[rgb(255,_85,_0)] ml-[4.2px] hidden" />
            </NavLink>
          </div>
          <div className="float-left">
            <UserOptions />
            <Notifications />
            <Messages />
          </div>
          <ul className="float-left [list-style:outside_none_none] m-0 p-0">
            <li className="float-left relative">
              <SettingAndMore />
            </li>
          </ul>
        </div>
      </div>
    </HeaderStyled>
  );
}
