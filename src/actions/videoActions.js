import * as actionTypes from "./types";

export const setCurrentVideo = (video) => ({
  type: actionTypes.SET_CURRENT_VIDEO,
  payload: video,
});

export const clearCurrentVideo = () => ({
  type: actionTypes.CLEAR_CURRENT_VIDEO,
});
