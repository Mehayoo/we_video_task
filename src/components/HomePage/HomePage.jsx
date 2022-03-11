import { useRef } from "react";
import { Player, Playlist } from "../index";
import { useSelector } from "react-redux";
import { clearCurrentVideo } from "../../actions/videoActions";
import { useOutsideOfAreaClick } from "../../utils/useOutsideOfAreaClick";

import "./style.scss";

const HomePage = () => {
  const wrapperRef = useRef(null);
  useOutsideOfAreaClick(wrapperRef, clearCurrentVideo);

  const { videos, currentVideo } = useSelector((state) => state.videosReducer);

  return (
    <div className="container home-page-container" ref={wrapperRef}>
      <Playlist selectedItem={currentVideo} />
      <Player currentVideo={currentVideo} videoSources={videos} />
    </div>
  );
};

export default HomePage;
