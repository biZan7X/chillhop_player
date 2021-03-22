import { combineReducers } from "redux";
import { data } from "./data";

const currentsongPlaceHolder = {
	name: "Beaver Creek",
	cover:
		"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
	artist: "Aso, Middle School, Aviino",
	audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
	color: ["#205950", "#2ab3bf"],
	id: 1,
	active: true,
};

const currentSongReducer = (state = currentsongPlaceHolder, action) => {
	if (action.type === "setCurrentSong") {
		return action.payload;
	}

	return state;
};

const songObject = {
	currentTime: 0.0,
	duration: parseInt("0"),
	percentage: parseInt("0"),
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

const isPlayingReducer = (state = false, action) => {
	if (action.type === "setIsPlaying") return action.payload;

	return state;
};

const isLibraryReducer = (state = false, action) => {
	if (action.type === "setIsLibrary") return action.payload;

	return state;
};

export default combineReducers({
	songsList: data, //* static data
	currentSong: currentSongReducer,
	songInfo: songInfoReducer,
	isplaying: isPlayingReducer,
	isLibrary: isLibraryReducer,
});
