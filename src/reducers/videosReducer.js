import * as actionTypes from "../actions/types";

const initialState = {
  videos: [
    {
      id: "1",
      name: "1_avc_360p.mp4",
      source: "/Videos/1_avc_360p.mp4",
      type: "mp4",
    },
    {
      id: "2",
      name: "1_avc_1080p.mp4",
      source: "/Videos/1_avc_1080p.mp4",
      type: "mp4",
    },
    {
      id: "3",
      name: "1_avc_uhd.mp4",
      source: "/Videos/1_avc_uhd.mp4",
      type: "mp4",
    },
    {
      id: "4",
      name: "1_vp9_360p.webm",
      source: "/Videos/1_vp9_360p.webm",
      type: "webm",
    },
    {
      id: "5",
      name: "1_vp9_1080p.mp4",
      source: "/Videos/1_vp9_1080p.webm",
      type: "webm",
    },
    {
      id: "6",
      name: "2_avc_360p.mp4",
      source: "/Videos/2_avc_360p.mp4",
      type: "mp4",
    },
    {
      id: "7",
      name: "2_avc_1080p.mp4",
      source: "/Videos/2_avc_1080p.mp4",
      type: "mp4",
    },
    {
      id: "8",
      name: "2_avc_uhd.mp4",
      source: "/Videos/2_avc_uhd.mp4",
      type: "mp4",
    },
    {
      id: "9",
      name: "2_vp9_360p.webm",
      source: "/Videos/2_vp9_360p.webm",
      type: "webm",
    },
    {
      id: "10",
      name: "2_vp9_1080p.webm",
      source: "/Videos/2_vp9_1080p.webm",
      type: "webm",
    },
    {
      id: "11",
      name: "2_vp9_uhd.webm",
      source: "/Videos/2_vp9_uhd.webm",
      type: "webm",
    },
  ],
  currentVideo: null,
};

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_VIDEO:
      return {
        ...state,
        currentVideo: action.payload,
      };
    case actionTypes.CLEAR_CURRENT_VIDEO:
      return {
        ...state,
        currentVideo: null,
      };
    default:
      return state;
  }
};

export default videosReducer;
