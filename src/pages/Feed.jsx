import RightInformation from "components/RightInformation";
import Layout from "../static/Layout";
import FeedComponent from "components/FeedComponent";
import thumbnail from "assets/thumbnails/thumb4.jpg";

// THUBNAILS SRC
import thumb2 from "assets/thumbnails/thumb2.jpg";
import thumb1 from "assets/thumbnails/thumb1.jpg";
import thumb3 from "assets/thumbnails/thumb3.jpg";
import thumb4 from "assets/thumbnails/thumb4.jpg";
import thumb5 from "assets/thumbnails/thumb5.jpg";
export default function Feed() {
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
  const feeds = [
    {
      poster: "Ronboogz",
      times: "4 days",
      thumbnail: thumb3,
      nameList: "Hai dua nhoc",
    },
    {
      poster: "Ronboogz",
      times: "4 months",
      thumbnail: thumb2,
      nameList: "Kho Fine",
    },
    {
      poster: "Tuyen Danh",
      times: "1 year",
      thumbnail: thumb5,
      nameList: "Playlist chu",
    },
  ];
  return (
    <Layout title="Feed">
      <div className="[font:12px/1.4_Inter,sans-serif] text-[#333] border-r border-[#f2f2f2] pt-[30px] pr-[30px] pl-[0] ml-[0] mr-[330px] my-[0] w-[70%]">
        {/* LEFT */}
        <span className="text-lg text-[#999]">
          Hear the latest posts from the people you’re following:
        </span>
        {feeds.map((feed) => (
          <FeedComponent
            poster={feed.poster}
            times={feed.times}
            thumbnail={feed.thumbnail}
            nameList={feed.nameList}
            playList={songs}
          />
        ))}
        {/* RIGHT */}
        <RightInformation />
      </div>
    </Layout>
  );
}
