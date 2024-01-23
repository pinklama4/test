import {useContext, useState, useEffect} from "react";
import {AudioContext} from "../../context/AudioContext";
import style from './Playbar.module.scss'
import {Slider, IconButton} from '@mui/material'
import {Pause, PlayArrow} from "@mui/icons-material";
import secondsToMMSS from "../../units/secondsToMMSS";


const Playbar = () => {
    const [currentTime, setCurrentTime] = useState(0)
    const {audio, currentTrack, handleToggleAudio, isPlaying} =
        useContext(AudioContext)
    const {title, artist, preview, duration} = currentTrack
    const formattedDuration = secondsToMMSS(duration)
    const formattedCurrentTime = secondsToMMSS(currentTime)
    const handlChangeCurrentTime = (_, value) => {
        const time = Math.round(value / 100 * duration)
        setCurrentTime(time)
        audio.currentTime = time
    }
    const sliderCurrentTime = Math.round(currentTime / duration * 100)
    useEffect(() => {
        const timeInterval = setInterval(() => {
            setCurrentTime(audio.currentTime)
        }, 1000)
    }, [])
    return <div className={style.playbar}>
        <img className={style.preview} src={preview} alt=""/>
        <IconButton onClick={() => handleToggleAudio(currentTrack)}>
            {isPlaying ? <Pause/> : <PlayArrow/>}
        </IconButton>
        <div className={style.credits}>
            <h4>{title}</h4>
            <p>{artist}</p>
        </div>
        <div className={style.slider}>
            <p>{formattedCurrentTime}</p>
            <Slider step={1} min={0} max={100} value={sliderCurrentTime} onChange={handlChangeCurrentTime}/>
            <p>{formattedDuration}</p>
        </div>
    </div>;
}

export default Playbar