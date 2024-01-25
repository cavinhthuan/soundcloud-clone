import Layout from "../static/Layout";
import Slider from "components/Slider";
import thumbs from "assets/thumbnails/thumbnails";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import thumb2 from "assets/thumbnails/thumb2.jpg";
import thumb1 from "assets/thumbnails/thumb1.jpg";
import thumb3 from "assets/thumbnails/thumb3.jpg";
import thumb4 from "assets/thumbnails/thumb4.jpg";
import thumb5 from "assets/thumbnails/thumb5.jpg";
import thumb6 from "assets/thumbnails/thumb6.jpg";
import TrackList from "components/Track/TrackList";

import thumb7 from "assets/thumbnails/thumb7.jpg";
import thumb8 from "assets/thumbnails/thumb8.jpg";
import thumb9 from "assets/thumbnails/thumb9.jpg";
import thumb10 from "assets/thumbnails/thumb10.jpg";
import thumb11 from "assets/thumbnails/thumb11.jpg";
import Artists from "components/Artists";

// ARTISTS
import artist1 from "assets/artists/artist1.jpg";
import artist2 from "assets/artists/artist2.jpg";
import artist3 from "assets/artists/artist3.jpg";
// Default theme
import "@splidejs/react-splide/css";
import Each from "components/Each";
const recentList = [
  {
    thumb: thumb1,
    name: "USUK",
    poster: "Tuyen Danh",
  },
  {
    thumb: thumb2,
    name: "Playlist chu",
    poster: "Ajn",
  },
  {
    thumb: thumb3,
    name: "Mosc",
    poster: "Aca",
  },
  {
    thumb: thumb4,
    name: "Peace",
    poster: "TD",
  },
  {
    thumb: thumb5,
    name: "Ronboongz",
    poster: "Leo",
  },
  {
    thumb: thumb6,
    name: "piano",
    poster: "Gund",
  },
];
export default function Feed(props) {
  return (
    <Layout title="Feed">
      <nav>Feed page</nav>
      <Slider
        data={recentList}
        colum={4}
        gap={20}
      >
      </Slider>
    </Layout>
  );
}
