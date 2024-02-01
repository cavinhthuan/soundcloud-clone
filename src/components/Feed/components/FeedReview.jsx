import { Play, Pause } from "@phosphor-icons/react";
import { useRef } from "react";
import useWavesurfer from "useWavesurfer";

export default function FeedReview(props) {
    const waveContainerRef = useRef(null);
    const { handlePlayPause, isPlaying, setAudioVolume, audioVolume } = useWavesurfer(waveContainerRef, props.data.preview, () => { });
    return <>
        {!props.data ?
            <div
                class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span
                >
            </div>
            : <div className="flex items-center pt-2">
                <div className="mr-2 cursor-pointer w-[36px] h-[36px] bg-primary rounded-full p-1 flex items-center justify-center" onClick={() => { handlePlayPause() }}>
                  {!isPlaying?  <Play size={16} color="white" weight="fill" />: <Pause size={16} color="white" weight="fill" />}
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-400 text-[12px]">{props.data.artist.name}</span>
                    <span className="text-[15px]">{props.data.title}</span>
                </div>
            </div>}
        <div className="w-full my-3">
            <div className="wave-container min-h-[60px] opacity-80 hover:opacity-100 transition-opacity" ref={waveContainerRef}></div>
        </div>
    </>
}