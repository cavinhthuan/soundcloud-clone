import RightInformation from "components/RightInformation";
import Layout from "../static/Layout";
import FeedComponent from "components/Feed/FeedComponent";

import { Suspense, useEffect, useState, useTransition } from "react";
import { fetchTopArtists } from "utils/fetchers";
import Each from "components/Each";
import Loading from "static/Loading";
export default function Feed() {
  const [feedData, setFeedData] = useState(null);
  const [isPending, startTransition] = useTransition()

  useEffect(() => {

    async function getFeedData() {
      const topArtis = await fetchTopArtists({ limit: 5 })
      if (topArtis) {
        startTransition(() => setFeedData(topArtis))
      }
    }

    if (!feedData) {
      getFeedData();
    }
  }, [])


  return (
    <Layout title="Feed">
      <div className="[font:12px/1.4_Inter,sans-serif] text-[#333] border-r border-[#f2f2f2] pt-[30px] pr-[30px] pl-[0] ml-[0] mr-[330px] my-[0] w-[70%]">
        {/* LEFT */}
        <span className="text-lg text-[#999]">
          Hear the latest posts from the people you’re following:
        </span>
        {feedData ?
          <Each of={feedData} render={(data) => (
            <FeedComponent
              artisData={data}
            />
          )} /> : <Loading/>}

        {/* RIGHT */}
        <RightInformation />
      </div>
    </Layout>
  );
}
