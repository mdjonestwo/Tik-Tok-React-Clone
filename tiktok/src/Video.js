import React, { useRef, useState } from 'react'
import "./Video.css";
import VideoFooter from './VideoFooter';


function Video() {
const [playing, setPlaying] = useState(false);
const videoRef = useRef(null);

const handleVideoPress = ()=> {
    if (playing){
        videoRef.current.pause();
        setPlaying(false);
    } else {
        videoRef.current.play()
        setPlaying(true)
    }
}
    return (
        <div className="video">
            <video 
            onClick={handleVideoPress}
            className="video_player" 
            loop 
            ref={videoRef}
            src="https://v39-us.tiktokcdn.com/20cdad77de38b8460335c61fcdca9c18/617349b5/video/tos/useast2a/tos-useast2a-ve-0068c001/b8217620d64c411fa2374c3b82dbc665/?a=1233&amp;br=1486&amp;bt=743&amp;cd=0%7C0%7C1&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=98Cx~eta4kag3&amp;l=202110221730510101890741012B007830&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=M2d4ZTY6ZjQ1ODMzNzczM0ApZjtnZmZnODw3N2k6ZDlmZmdrMTVhcjRnbG1gLS1kMTZzcy4wNmI1MjZiNTZgYTM1NDA6Yw%3D%3D&amp;vl=&amp;vr=">
            </video>

            <VideoFooter/>
        </div>

    
    )
}

export default Video
  