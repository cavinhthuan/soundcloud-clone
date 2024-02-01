import React, { useEffect, useMemo, useRef, useState } from "react";
import { fetchAlbum, fetchArtistAlbums } from "utils/fetchers";
import FeedReview from "./components/FeedReview";
import FeedTrackList from "./components/FeedTrackList";

function FeedComponent({ artisData }) {
  const [review, setReview] = useState(null);
  const [topArtisAlbum, setTopArtisAlbum] = useState(null);
  const [trackData, setTrackData] = useState(null);
  const handleTrackSelect = (trackData)=>{
    setReview(trackData)
  }
  useEffect(() => {
    async function getTopArtisAlbum() {
      const topAlbum = await fetchArtistAlbums(artisData.id, { limit: 1 });
      if (topAlbum) {
        const album = await fetchAlbum(topAlbum[0].id)
        setTopArtisAlbum(album)
      }
    }
    if (!topArtisAlbum) {
      getTopArtisAlbum();
    }
  }, [])
  useEffect(() => {
    if (!topArtisAlbum) return;
    setTrackData(topArtisAlbum.tracks.data);
    setReview(topArtisAlbum.tracks.data[0])
  }, [topArtisAlbum])
  return (
    <div className="mt-8 w-full">
      <div className="flex items-center mb-4">
        <img
          alt="avatar"
          src={artisData.picture_medium}
          className="w-[30px] h-[30px] rounded-full mr-2"
        />
        <span className="text-[12px]">
          <span className="font-medium">{artisData.name}</span>{" "}
          <span className="text-[#999]">posted a playlist ?? ago</span>
        </span>
      </div>
      <div className="flex items-start">{
        !topArtisAlbum?.cover_medium ?
          <div role="status" class="flex items-center justify-center w-[160px] h-[160px] max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
            </svg>
            <span class="sr-only">Loading...</span>
          </div> : <img
            src={topArtisAlbum?.cover_medium}
            alt="Thumbnail"
            className="w-[160px] h-[160px] mr-4"
          />
      }
        <div className="flex flex-col w-full ">
          {review ? <FeedReview data={review}/> : null}
          <div className="max-h-[250px] overflow-y-scroll">
            <FeedTrackList tracks={trackData} setTrackSelected={handleTrackSelect}/>
          </div>
        </div>
      </div>
    </div>
  )
    ;
}

export default FeedComponent;
