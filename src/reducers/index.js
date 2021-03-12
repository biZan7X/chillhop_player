import { combineReducers } from "redux";
import { data } from "./data";

const currentSongReducer = (state = null, action) => {
	if (action.type === "setCurrentSong") {
		return action.payload;
	}

	return state;
};

export default combineReducers({
	songsList: data, //* static data
	currentSong: currentSongReducer,
});
