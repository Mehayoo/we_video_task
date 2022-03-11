import { useEffect, useRef, useState } from "react";
import { Button, Icon } from "react-materialize";
import { useDispatch } from "react-redux";
import { setCurrentVideo } from "../../actions/videoActions";

import "./style.scss";

const Player = ({ currentVideo, videoSources }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [repeatMode, setRepeatMode] = useState(false);
  const videoRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    videoRef.current && videoRef.current.load();
    setIsPlaying(false);
  }, [currentVideo]);

  const onEnded = () => {
    onNextClick();
    onPlayClick();
  };

  const onNextClick = () => {
    const indexOfCurrentVideo = videoSources.indexOf(currentVideo);
    let indexOfNextVideo = indexOfCurrentVideo + 1;
    if (indexOfCurrentVideo === videoSources.length - 1) {
      indexOfNextVideo = 0;
    }
    dispatch(setCurrentVideo(videoSources[indexOfNextVideo]));
  };

  const onPreviousClick = () => {
    const indexOfCurrentVideo = videoSources.indexOf(currentVideo);
    let indexOfPreviousVideo = indexOfCurrentVideo - 1;
    if (indexOfPreviousVideo < 0) {
      indexOfPreviousVideo = videoSources.length - 1;
    }
    dispatch(setCurrentVideo(videoSources[indexOfPreviousVideo]));
  };

  const onPlayClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const onRepeatClick = () => {
    setRepeatMode(!repeatMode);
  };

  const onStopClick = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div className={`player-container ${currentVideo && "visible"}`}>
      <div className="player">
        <video
          controls
          height="450"
          onEnded={onEnded}
          ref={videoRef}
          width="640"
        >
          <source
            src={currentVideo && currentVideo.source}
            type={`video/${currentVideo && currentVideo.type}`}
          />
        </video>
        <div className="controls">
          <Button
            className="green"
            floating
            icon={<Icon>{isPlaying ? "pause" : "play_arrow"}</Icon>}
            node="button"
            onClick={onPlayClick}
            small
            style={{ marginRight: "15px" }}
            tooltip={isPlaying ? "Pause" : "Play"}
            waves="light"
          />

          <Button
            className="red"
            floating
            icon={<Icon>stop</Icon>}
            node="button"
            onClick={onStopClick}
            small
            style={{ marginRight: "15px" }}
            tooltip="Stop"
            waves="light"
          />

          <Button
            floating
            icon={<Icon>fast_rewind</Icon>}
            node="button"
            onClick={onPreviousClick}
            small
            style={{ marginRight: "15px" }}
            tooltip="Previous"
            waves="light"
          />

          <Button
            floating
            icon={<Icon>fast_forward</Icon>}
            node="button"
            onClick={onNextClick}
            small
            style={{ marginRight: "15px" }}
            tooltip="Next"
            waves="light"
          />

          <Button
            className={repeatMode ? "green" : "grey"}
            floating
            icon={<Icon>replay</Icon>}
            node="button"
            onClick={onRepeatClick}
            small
            style={{ marginRight: "15px" }}
            tooltip="Repeat"
            waves="light"
          />

          <Button
            className="orange"
            floating
            icon={<Icon>shuffle</Icon>}
            node="button"
            onClick={() => {}}
            small
            style={{ marginRight: "15px" }}
            tooltip="Shuffle"
            waves="light"
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
