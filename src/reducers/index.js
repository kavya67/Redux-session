import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "something", duration: "2:05" },
    { title: "another song", duration: "3:05" },
    { title: "song-three", duration: "5:10" },
  ];
};

const songsDetailReducer = (songReducer = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload; //song value with title and dration
  }

  return songReducer;
};

export default combineReducers({
  songReducer,
  songDetail: songsDetailReducer, //{title: "", duration: ""}
});
