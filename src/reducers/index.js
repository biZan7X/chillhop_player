import { combineReducers } from "redux";
import { data } from "./data";

const currentSongReducer = (state = null, action) => {
	if (action.type === "setCurrentSong") {
		return action.payload;
	}

	return state;
};

const songObject = {
	currentTime: 0.0,
	duration: 0.0,
	percentage: 0,
};

const songInfoReducer = (state = songObject, action) => {
	if (action.type === "setCurrentTime")
		return { ...state, currentTime: action.payload };
	else if (action.type === "setDuration")
		return { ...state, duration: action.payload };
	else if (action.type === "setPercentage")
		return { ...state, percentage: action.payload };

	return state;
};

export default combineReducers({
	songsList: data, //* static data
	currentSong: currentSongReducer,
	songInfo: songInfoReducer,
});
