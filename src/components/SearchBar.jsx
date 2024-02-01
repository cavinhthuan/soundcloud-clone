import React, { useContext, useEffect, useRef, useState } from "react";
import { useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../App";
import ResultSearch from "../pages/ResultSearch";
import { fetchSearchData } from "utils/fetchers";

export default function SearchBar(props) {
  const { searchKey } = useParams();
  const refForm = useRef();
  const [sequence, setSequence] = useState(searchKey ?? "");
  const [searchResult, setSearchResult] = useState([]);
  const [IsFocused, setIsFocused] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState();
  const context = useContext(AppContext);
  // const socket = context.socket;
  const showResult = useMemo(
    () => sequence.trim() && IsFocused,
    [sequence, IsFocused],
  );

  // useEffect(() => {
  //   socket.connect();
  //   socket.on("connect", () => (showResult ? fetchData() : null));
  //   socket.on("disconnect", () => console.log("disconnect"));
  //   return () => {
  //     socket.off("connect");
  //     socket.off("disconnect");
  //   };
  // }, []);

  const fetchData = async (searchKey) => {
    var [trasks, albums, artists] = await fetchSearchData(searchKey);
    const result = trasks.data.map((data) => data.title).concat(albums.data.map((data) => data.title).concat(artists.data.map((data) => data.name))).map((data) => ({ name: data }));
    console.log(result);
    setSearchResult(result);
  };

  useEffect(() => {
    const trimSequence = sequence.trim();
    if (trimSequence) {
      fetchData(trimSequence);
    }
  }, [sequence]);

  useEffect(() => {
    if (!refForm) return;
    function handleResize() {
      // Set window width/height to state
      setDropdownPosition({
        left: refForm.current.getBoundingClientRect().left,
        top: refForm.current.getBoundingClientRect().height,
        width: refForm.current.getBoundingClientRect().width,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [refForm]);
  const handleSearch = (e) => {
    setSequence(e.target.value.trim());
  };

  useEffect(() => {
    window.addEventListener("click", handleCheckFocusing);
    return () => {
      window.removeEventListener("click", handleCheckFocusing);
    };
  });

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleCheckFocusing = (e) => {
    setIsFocused(refForm && refForm.current?.contains(e.target));
  };

  return (
    <div ref={refForm}>
      <form
        className="pt-[9px] px-[10px] pb-[8px] relative appearance-none"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="select-none visible m-0 w-full inline-block text-[14px] leading-[20px] rounded-[4px] font-[Inter,sans-serif] [transition:all_.3s_ease-in-out] box-border font-thin h-[28px] text-[#666] outline-[0] border-[0] px-[7px] py-[5px] bg-[#e5e5e5] focus:bg-[#fff]"
          placeholder="Search for artists, bands, tracks, podcasts"
          name="sequence"
          autoComplete="off"
          aria-label="Search"
          aria-autocomplete="list"
          aria-owns="searchMenuList"
          onChange={handleSearch}
          onFocus={handleOnFocus}
          value={sequence}
          height={250}
        />{" "}
        <button
          className="select-none visible m-0 cursor-pointer [font:0/0_a] [text-shadow:none] text-transparent border-[0] p-0 absolute bg-[url(https://a-v2.sndcdn.com/assets/images/search-dbfe5cbb.svg)] bg-no-repeat w-[15px] h-[15px] right-[20px] top-[15px]"
          type="submit"
        >
          Search
        </button>{" "}
      </form>

      {showResult && (
        <div
          className="dropdownMenu [font:12px/1.4_Inter,sans-serif] text-[#333] outline-[none] min-h-[auto] fixed top-[45px] left-[520.6px]"
          tabIndex={-1}
          id="overlay_3260"
          style={dropdownPosition}
        >
          <div
            id="searchMenuList "
            role="listbox"
            className="combox-box-content g-dark [font:12px/1.4_Inter,sans-serif] text-[#999] relative"
          >
            {" "}
            <div
              className=" sticky top-0 z-50 [font:12px/1.4_Inter,sans-serif] text-[14px] font-[Inter,sans-serif] font-thin block outline-[0] text-[#fff] p-0 border-solid border-[var(--background-highlight-color)] text-left bg-[#333] rounded-[unset] border-t-[unset] border-b-[1px] border-b-[rgba(0,0,0,.22)] border-l-[1px_solid_#404040] border-r-[1px_solid_#404040] [box-shadow:0_1px_0_hsla(0,0%,100%,.05)] bg-[#262626]"
              role="option"
            >
              <a
                href="/search?q=m"
                className="sc-truncate sc-link-primary  searchMenu__searchForText [font:14px/1.4_Inter,sans-serif] text-[14px] font-[Inter,sans-serif] font-thin text-left overflow-hidden whitespace-nowrap overflow-ellipsis [word-break:normal] no-underline block rounded-tr-[var(--spacing-0_75x)] rounded-tl-[var(--spacing-0_75x)] pl-[14px] pr-[10px] py-[10px] text-[#ccc]"
              >
                Search for <q>{sequence}</q>
              </a>
            </div>
            <div className="searchAutocomplete g-dark-list lazyLoadingList [font:12px/1.4_Inter,sans-serif] text-[#999] bg-[#111]">
              <ul className="lazyLoadingList__list sc-list-nostyle sc-clearfix [font:12px/1.4_Inter,sans-serif] text-[#999] p-0 [list-style:none] m-0">
                {searchResult?.map((result, key) => (
                  <li
                    className="[font:12px/1.4_Inter,sans-serif] text-[#999] [list-style:none]"
                    key={key}
                  >
                    <div
                      role="option"
                      className="autocompleteItem [font:12px/1.4_Inter,sans-serif] [list-style:none] block relative outline-[0] text-[#fff] p-0 bg-[#333]"
                    >
                      <NavLink
                        to={`/search/${sequence}`}
                        className="sc-media sc-media-type-query sc-link-primary [font:12px/1.4_Inter,sans-serif] [list-style:none] no-underline overflow-hidden text-[#ccc] flex items-center relative pl-[14px] pr-[40px] py-[10px]"
                      >
                        <div className="sc-media-image autocompleteItem__queryIcon [font:12px/1.4_Inter,sans-serif] [list-style:none] text-[#ccc] float-left mr-[10px] h-[20px] w-[20px] bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+c2VhcmNoIGljb248L3RpdGxlPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMikiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBzdHJva2U9IiM5Nzk3OTciIHN0cm9rZS13aWR0aD0iMiIgY3g9IjUiIGN5PSI1IiByPSI1Ii8+PHBhdGggZmlsbD0iIzk5OSIgZD0iTTkuNTg2IDguMTcybDQuMjQyIDQuMjQyLTEuNDE0IDEuNDE0LTQuMjQyLTQuMjQyeiIvPjwvZz48L3N2Zz4=)] [background-size:17px_17px] bg-no-repeat bg-[50%]" />
                        <div className="sc-media-content">
                          <h2 className="autocompleteItem__title sc-truncate sc-type-h3 sc-text-h4 sc-type-light sc-text-secondary">
                            {result.name}
                          </h2>
                        </div>
                      </NavLink>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
