import React from "react";
import { NavLink } from "react-router-dom";
import ListNavLink from "./ListNavLink";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const HeaderStyled = styled.header`
  & a:hover:not(.notstyled){
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
      className="fixed text-[rgb(153,_153,_153)] select-none cursor-default outline-[rgb(153,_153,_153)_none_0px] block bg-[rgb(51,_51,_51)] font-[Inter,_sans-serif] font-thin text-[14px] leading-[21px] w-full h-[46px] [transform:matrix(1,_0,_0,_1,_0,_0)] [transition:height_0.2s_ease-in-out_0s]"
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
            <NavLink
              to="/user"
              className="text-[rgb(204,_204,_204)] box-border float-left pl-[10px] pr-[28px] py-[12px] relative h-[46px] after:content-[''] after:absolute after:bg-[url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjhweCIgaGVpZ2h0PSI1cHgiIHZpZXdCb3g9IjAgMCA4IDUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjIuMiAoOTk4MykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+RHJvcGRvd248L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0iVG9wLUJhciIgc2tldGNoOnR5cGU9Ik1TQXJ0Ym9hcmRHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwNjYuMDAwMDAwLCAtNTQ1LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNMjA2Nyw1NDUuMDIyNzQ2IEwyMDY2LDU0Ni4wMjI3NDYgTDIwNjkuOTU0NzYsNTQ5Ljk3NzUxMSBMMjA3My45Nzc1MSw1NDUuOTU0NzY1IEwyMDcyLjk3NzUxLDU0NC45NTQ3NjUgTDIwNjkuOTU0NzYsNTQ3Ljk3NzUxMSBMMjA2Nyw1NDUuMDIyNzQ2IFoiIGlkPSJEcm9wZG93biIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+)] after:top-[21px] after:right-[10px] after:h-[5px] after:bg-no-repeat after:w-[8px] after:h-[8px] after:opacity-[.75] hover:text-white hover:after:opacity-100"
              data-test-id="user-nav-btn"
              tabIndex={0}
              aria-haspopup="true"
              role="button"
              aria-owns="dropdown-button-293"
            >
              <div className="h-[26px] w-[26px] block bg-none bg-auto bg-[0%_0%] rounded-[50%] text-center relative bg-repeat -mt-[2px] mr-0 float-left">
                <span
                  className="bg-[url('https://i1.sndcdn.com/avatars-000554205804-ndw6rv-t120x120.jpg');] w-[26px] h-[26px] opacity-100 [transition:opacity_0.2s_linear_0s] block bg-cover bg-[50%_50%] rounded-[50%] [box-shadow:rgba(0,_0,_0,_0.1)_0px_0px_0px_1px_inset] text-center relative bg-no-repeat"
                  aria-label="Thuận Gờm’s avatar"
                  aria-role="img"
                />
              </div>
            </NavLink>{" "}
            <NavLink
              to="/notifications"
              className="text-[rgb(204,_204,_204)] w-[46px] p-0 h-[46px] box-border float-left "
              tabIndex={0}
              aria-haspopup="true"
              role="button"
              aria-owns="dropdown-button-291"
            >
              <div className="w-full h-[46px] relative before:content-[''] before:bg-[url(https://a-v2.sndcdn.com/assets/images/activities-66caaa5e.svg)] before:bg-no-repeat before:bg-center before:absolute before:w-full before:h-full before:left-[0] before:top-[0] before:opacity-[.75] hover:before:opacity-100">
                {" "}
                <span className="border-[0px] border-[none] border-[rgba(0,0,0,0)] [font:0px_/_0px_a] [text-shadow:none] text-[rgba(0,_0,_0,_0)] bg-[rgba(0,_0,_0,_0)]">
                  Notifications
                </span>{" "}
                <span className="right-[15px] w-[7px] h-[7px] top-[12px] absolute">
                  <span className="block w-full h-[7px] rounded-[50%]" />{" "}
                </span>{" "}
              </div>
            </NavLink>{" "}
            <NavLink
              to="/messages"
              className="text-[rgb(204,_204,_204)] border-r-[0px_none_rgb(204,_204,_204)] rounded-tl-none rounded-br-[2px] rounded-tr-[2px] rounded-bl-none w-[46px] p-0 h-[46px] box-border float-left"
              tabIndex={0}
              aria-haspopup="true"
              role="button"
              aria-owns="dropdown-button-289"
            >
              <div className="w-full h-[46px] relative before:content-[''] before:bg-[url(https://a-v2.sndcdn.com/assets/images/messages-f517d0eb.svg)] before:bg-no-repeat before:bg-center before:absolute before:w-full before:h-full before:left-[0] before:top-[0] before:opacity-[.75] hover:before:opacity-100">
                {" "}
                <span className="border-[0px] border-[none] border-[rgba(0,0,0,0)] [font:0px_/_0px_a] [text-shadow:none] text-[rgba(0,_0,_0,_0)] bg-[rgba(0,_0,_0,_0)]">
                  Messages
                </span>{" "}
                <span className="w-[7px] h-[7px] top-[12px] right-[11px] absolute">
                  <span className="block w-full h-[7px] rounded-[50%]" />{" "}
                </span>{" "}
              </div>
            </NavLink>
          </div>
          <ul className="float-left [list-style:outside_none_none] m-0 p-0">
            <li className="float-left relative">
              <NavLink
                to="/setting"
                className="select-none visible [list-style:none] [font:0/0_a] [text-shadow:none] no-underline text-[#ccc] block box-border text-center h-[46px] w-[46px] border-[0] ml-0 p-0 bg-[url(https://a-v2.sndcdn.com/assets/images/more-0e9e752c.svg)] opacity-[.75] bg-no-repeat bg-center hover:opacity-100"
                tabIndex={0}
                aria-haspopup="true"
                role="button"
                aria-owns="dropdown-button-295"
              >
                Settings and more
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </HeaderStyled>
  );
}
