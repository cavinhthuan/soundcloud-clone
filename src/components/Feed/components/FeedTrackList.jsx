import { Play } from "@phosphor-icons/react"
import Each from "components/Each"

export default function FeedTrackList(props) {
    return (
        props.tracks && <Each of={props.tracks} render={(item, index) => {
            return (
                < div className="p-[2px] text-[12px] flex justify-between items-center my-2 w-full cursor-pointer transition-[0.25s] hover:bg-gray-200" onClick={()=>props.setTrackSelected(item)}>
                    <div className="flex items-center">
                        <img
                            className="w-[20px] h-[20px]"
                            alt="thumbnail"
                            src={`https://e-cdns-images.dzcdn.net/images/cover/${item.md5_image}/120x120-000000-80-0-0.jpg`}
                        />
                        <span className=" mx-1  text-black transition-[.25s]">
                            {index + 1}
                        </span>
                        <div className="w-fit whitespace-normal inline">
                            <span className="w-full truncate ... text-[#999] hover:text-[#333] transition-[.25s]">
                                {item.artist.name}
                            </span>
                        </div>
                        <span className="text-[#999] ml-2">-</span>
                        <div className="w-[90%] truncate ... inline mr-4">
                            <span className="mx-2">{item.title}</span>
                        </div>
                    </div>
                    <div className="flex items-center text-[#999]">
                        <Play size={12} color="#999" weight="bold" />
                        <span className="ml-1 text-[12px] ">{item.duration}</span>
                    </div>
                </div>
            )
        }} />)
}