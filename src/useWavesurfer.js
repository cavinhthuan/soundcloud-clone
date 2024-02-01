import { AppContext } from 'App';
import { useContext, useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d')
var gradient = context.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, "rgb(255, 94, 0)");
gradient.addColorStop(0.060483870967741944, "rgb(255, 94, 0)");
gradient.addColorStop(0.26209677419354843, "rgb(255, 53, 0)");
gradient.addColorStop(1, "rgb(255, 53, 0)");

const options = {
    progressColor: gradient,
    waveColor: '#666',
    fillParent: true,
    responsive: true,
    autoplay: false,
    cursorWidth: 0,
    barHeight: .8,
    barWidth: 2,
    barGap: 1.2,

};
const useWavesurfer = (waveContainerRef, audioSrc, onFinish) => {
    const appctx = useContext(AppContext);
    const waveSurferRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioVolume, setAudioVolume] = useState({ isMuted: false, value: 1, });

    useEffect(() => {
        waveSurferRef.current = WaveSurfer.create({
            ...options,
            url: audioSrc,
            container: waveContainerRef.current,
            height: waveContainerRef.current.clientHeight,
        });

        waveSurferRef.current.on('play', () => setIsPlaying(true));
        waveSurferRef.current.on('pause', () => setIsPlaying(false));
        waveSurferRef.current.on('finish', () => onFinish());
        waveSurferRef.current.on('interaction', () => waveSurferRef.current.play());

        waveSurferRef.current.setVolume(audioVolume.isMuted ? 0 : audioVolume.value);

        return () => {
            waveSurferRef.current.destroy();
        };
    }, [audioSrc]);

    waveSurferRef?.current?.setVolume(audioVolume.isMuted ? 0 : audioVolume.value);

    return {
        handlePlayPause: () => waveSurferRef?.current?.playPause(),
        audioVolume,
        setAudioVolume,
        isPlaying,
    }
};

export default useWavesurfer;
