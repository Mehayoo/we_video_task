import { PlaylistItem } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentVideo } from "../../actions/videoActions";

import "./style.scss";

const Playlist = ({ selectedItem }) => {
  const videoSourcesArray = useSelector((state) => state.videosReducer.videos);
  const dispatch = useDispatch();

  const onListItemClick = (selectedItem) => {
    dispatch(setCurrentVideo(selectedItem));
  };

  return (
    <ul className="collection playlist-container">
      {videoSourcesArray.length > 0 &&
        videoSourcesArray.map((item) => (
          <PlaylistItem
            item={item}
            key={item.id}
            onItemClick={onListItemClick}
            selectedItem={selectedItem}
          />
        ))}
    </ul>
  );
};

export default Playlist;
